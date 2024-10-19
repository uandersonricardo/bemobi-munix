<script setup lang="ts">
import { getShortTime } from '@/lib/date'
import { ask } from '@/services/ai'
import {
  ArrowRightIcon,
  BotIcon,
  CameraIcon,
  CheckCheckIcon,
  ChevronLeftIcon,
  MicIcon,
  SendHorizonalIcon
} from 'lucide-vue-next'
import { nextTick, onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

type Message = {
  mine: boolean
  content: string
  image?: string | ArrayBuffer | null
  createdAt: string
  action?: string
}

const loading = ref(false)
const prompt = ref('')
const messages = ref<Message[]>([])
const scroll = ref<HTMLDivElement>()

const handleEnter = async () => {
  if (!prompt.value) {
    toast.warning('Digite algo antes de pesquisar')
    return
  }

  const search = prompt.value
  messages.value.push({ mine: true, content: search, image: null, createdAt: getShortTime() })
  prompt.value = ''

  loading.value = true

  await nextTick()
  scroll.value?.scrollTo(0, scroll.value.scrollHeight)

  try {
    const { response, action } = await ask(search)
    messages.value.push({
      mine: false,
      content: response,
      image: null,
      createdAt: getShortTime(),
      action: action ?? undefined
    })

    await nextTick()
    scroll.value?.scrollTo(0, scroll.value.scrollHeight)
  } catch (err) {
    toast.error('Erro no processamento da pergunta. Tente novamente.')
  } finally {
    loading.value = false
  }
}

const inputCamera = ref<HTMLInputElement>()

onMounted(() => {
  inputCamera.value?.addEventListener('input', (e) => {
    if (!inputCamera.value?.files?.[0]) {
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(inputCamera.value?.files[0])

    reader.addEventListener('loadend', async () => {
      messages.value.push({
        mine: true,
        content: '',
        image: reader.result,
        createdAt: getShortTime()
      })

      loading.value = true

      await nextTick()
      scroll.value?.scrollTo(0, scroll.value.scrollHeight)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      messages.value.push({
        mine: false,
        content:
          'O boleto informado encontra-se expirado. Para prosseguir com o pagamento, escolha uma alternativa.',
        image: null,
        createdAt: getShortTime(),
        action: 'Alterar forma de pagamento'
      })

      loading.value = false

      await nextTick()
      scroll.value?.scrollTo(0, scroll.value.scrollHeight)
    })
  })
})

const handleCamera = () => {
  inputCamera.value?.click()
}

let recognition = null

if ('webkitSpeechRecognition' in window) {
  recognition = new (window.webkitSpeechRecognition as any)()
}

const listening = ref(false)

recognition.onresult = (event: any) => {
  const transcript = event.results[0][0].transcript
  prompt.value = transcript
  handleEnter()

  listening.value = false
}

const handleAudio = () => {
  recognition.start()
  listening.value = true
}

const speak = (text: string) => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel()
  }

  let utterance = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(utterance)
}

const isVisible = ref(false)

const startTime = getShortTime()
</script>

<template>
  <div class="bg-white overflow-hidden border border-gray-300 shadow-lg rounded-t-xl flex flex-col">
    <input ref="inputCamera" type="file" accept="image/*" capture="environment" class="hidden" />
    <section
      class="w-full bg-[#002198] p-4 flex flex-col gap-2 relative cursor-pointer"
      @click="isVisible = !isVisible"
    >
      <div class="flex justify-between items-center gap-8">
        <span class="text-white font-semibold text-lg">Olá, Adriana Silva</span>
        <img
          src="https://companieslogo.com/img/orig/TIMB_BIG.D-c971ee58.png?t=1720244494"
          class="h-4"
        />
      </div>
    </section>

    <section
      v-if="isVisible"
      ref="scroll"
      class="overflow-auto scroll-smooth max-h-[60vh] h-[60vh] text-sm"
    >
      <div class="flex flex-col px-4 py-6">
        <div class="mb-2 max-w-[80%] flex flex-col">
          <div
            class="p-3 flex items-start gap-2 rounded-xl mb-1 bg-[#BDD6FF] rounded-bl-none"
            @click="speak('Bom dia, como posso te ajudar hoje?')"
          >
            <BotIcon class="text-red-500 flex-shrink-0" :size="18" />
            <div class="flex flex-col font-semibold">
              <p class="text-[#002198]">Bom dia, como posso te ajudar hoje?</p>
              <span
                >Clique no botão <MicIcon :size="16" class="inline text-red-500" /> para me fazer
                uma pergunta por voz ou escreva sua dúvida.</span
              >
              <hr class="my-2 border-[#002198] opacity-25" />
              <p class="text-[#002198]">Problema na fatura?</p>
              <span
                >Faça upload do seu boleto ou tire uma foto no botão
                <CameraIcon :size="16" class="inline text-red-500" /> que eu te ajudo!</span
              >
            </div>
          </div>
          <div class="font-semibold text-sm text-[#C4C6CF] items-center flex gap-1">
            <span>{{ startTime }}</span>
          </div>
        </div>
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="mb-2 max-w-[80%] flex flex-col"
          :class="{
            'ml-auto': message.mine
          }"
          @click="speak(message.content || 'Imagem')"
        >
          <div
            class="p-4 flex items-start gap-3 rounded-xl mb-1"
            :class="{
              'bg-[#BDD6FF] rounded-bl-none': !message.mine,
              'bg-[#ECF3FF] rounded-br-none': message.mine
            }"
          >
            <BotIcon v-if="!message.mine" class="text-red-500 flex-shrink-0" />
            <div class="flex flex-col items-start justify-center font-semibold">
              {{ message.content }}
              <button
                v-if="message.action"
                class="text-white bg-[#244A88] hover:bg-blue-950 transition px-3 py-2 rounded-lg mt-2"
              >
                {{ message.action }}
              </button>
            </div>
            <img
              v-if="message.image"
              :src="message.image?.toString() ?? ''"
              class="max-w-full max-h-40"
            />
          </div>
          <div
            class="font-semibold text-sm text-[#C4C6CF] items-center flex gap-1"
            :class="{ 'ml-auto': message.mine }"
          >
            <span>{{ message.createdAt }}</span
            ><CheckCheckIcon v-if="message.mine" :size="16" />
          </div>
        </div>
        <div v-if="loading" class="max-w-[80%] flex flex-col">
          <div class="py-2 flex items-start gap-2 rounded-xl mb-1">
            <BotIcon class="text-gray-400 flex-shrink-0" />
            <div class="flex items-center justify-center font-semibold text-gray-400">
              Pensando...
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="isVisible" class="border-t border-gray-200 text-sm">
      <div class="w-full flex items-center px-4 py-3 overflow-visible whitespace-nowrap gap-2">
        <span class="text-[#002198] font-semibold py-1 px-2 rounded-full border-2 border-[#002198]"
          >Problemas mais comuns</span
        >
        <span class="text-[#002198] font-semibold py-1 px-2 rounded-full border-2 border-[#002198]"
          >Troca de plano</span
        >
        <span class="text-[#002198] font-semibold py-1 px-2 rounded-full border-2 border-[#002198]"
          >Pagamentos em aberto</span
        >
      </div>
      <div
        v-if="listening"
        class="w-full flex items-center justify-center px-2 py-2 bg-white border-t border-gray-200 gap-1"
      >
        <div
          class="font-semibold rounded-full h-10 w-10 flex justify-center items-center text-red-500 animate-pulse"
        >
          <MicIcon :size="20" />
        </div>
        <span class="text-lg font-semibold text-gray-400 animate-pulse">Gravando...</span>
      </div>
      <div
        v-else
        class="w-full flex items-center px-2 py-2 bg-white border-t border-gray-200 gap-1"
      >
        <button
          class="hover:bg-gray-100 text-red-500 font-semibold rounded-full h-10 w-10 flex justify-center items-center"
          @click="handleCamera"
        >
          <CameraIcon :size="20" />
        </button>
        <input
          type="text"
          placeholder="Fale ou digite a sua dúvida..."
          class="flex-grow border-none focus:outline-none text-gray-800 bg-transparent font-semibold"
          v-model="prompt"
          @keypress.enter="handleEnter"
        />
        <button
          class="hover:bg-gray-100 font-semibold rounded-full h-10 w-10 flex justify-center items-center"
          :class="{ 'text-gray-400': listening, 'text-red-500': !listening }"
          @click="handleAudio"
        >
          <MicIcon :size="20" />
        </button>
        <button
          class="hover:bg-gray-100 text-[#002198] font-semibold rounded-full h-10 w-10 flex justify-center items-center"
          @click="handleEnter"
        >
          <SendHorizonalIcon :size="20" />
        </button>
      </div>
    </section>
  </div>
</template>
