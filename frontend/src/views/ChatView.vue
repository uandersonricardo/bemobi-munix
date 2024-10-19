<script setup lang="ts">
import { getShortTime } from '@/lib/date'
import { ask } from '@/services/ai'
import {
  BotIcon,
  BotMessageSquareIcon,
  CameraIcon,
  CheckCheckIcon,
  ChevronLeftIcon,
  ContrastIcon,
  EllipsisVerticalIcon,
  MicIcon,
  SendHorizonalIcon,
  Volume2Icon
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
const dropdownOpen = ref(false)
const highContrast = ref(false)
const reading = ref(false)
const prompt = ref('')
const lastPrompt = ref('')
const messages = ref<Message[]>([])
const scroll = ref<HTMLDivElement>()

const handleEnter = async () => {
  if (!prompt.value) {
    toast.warning('Digite algo antes de pesquisar')
    return
  }

  const search = prompt.value
  messages.value.push({
    mine: true,
    content: search.replace('Botão clicado: ', ''),
    image: null,
    createdAt: getShortTime()
  })
  prompt.value = ''

  loading.value = true

  await nextTick()
  scroll.value?.scrollTo(0, scroll.value.scrollHeight)

  try {
    const { response, action } = await ask(
      lastPrompt.value
        ? `MENSAGEM ANTERIOR: ${lastPrompt.value} | MENSAGEM ATUAL: ${search}`
        : search
    )
    messages.value.push({
      mine: false,
      content: response,
      image: null,
      createdAt: getShortTime(),
      action: action ?? undefined
    })

    await nextTick()
    scroll.value?.scrollTo(0, scroll.value.scrollHeight)
    lastPrompt.value = search.replace('Botão clicado: ', '')
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

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const toggleHighContrast = () => {
  highContrast.value = !highContrast.value
}

const readMessages = () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel()
  }

  if (reading.value) {
    reading.value = false
    return
  }

  let text = 'Bom dia, como posso te ajudar hoje?'

  for (const message of messages.value) {
    text += message.content ?? 'Imagem'
    text += ' . '
  }

  let utterance = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(utterance)
  reading.value = true
}

const startTime = getShortTime()

const handleSuggestion = (suggestion: string) => {
  prompt.value = suggestion
  handleEnter()
}

const handleAction = (action: string) => {
  if (['baixar', 'download', 'fazer download'].includes(action.toLowerCase().split(' ')[0])) {
    let link = document.createElement('a')
    link.download = 'boleto.pdf'
    link.href =
      'https://raw.githubusercontent.com/uandersonricardo/bemobi-munix/refs/heads/main/frontend/public/boleto-exemplo.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  prompt.value = 'Botão clicado: ' + action
  handleEnter()
}
</script>

<template>
  <input ref="inputCamera" type="file" accept="image/*" capture="environment" class="hidden" />
  <header
    class="w-full bg-[#002198] p-4 flex flex-col gap-2 relative"
    :class="{ 'bg-black border-b border-white': highContrast }"
  >
    <div class="flex justify-end mb-1">
      <img
        src="https://companieslogo.com/img/orig/TIMB_BIG.D-c971ee58.png?t=1720244494"
        class="h-5"
      />
    </div>
    <div class="flex justify-start items-center gap-2">
      <RouterLink to="/"><ChevronLeftIcon class="text-white" :size="28" /></RouterLink>
      <span class="text-white font-semibold text-xl">Olá, Adriana Silva</span>
      <div class="relative ml-auto">
        <button
          class="text-white bg-transparent hover:bg-white/20 focus:outline-none font-medium text-sm p-2 text-center inline-flex items-center -mr-1 rounded-full"
          type="button"
          @click="toggleDropdown"
        >
          <EllipsisVerticalIcon />
        </button>

        <div v-if="dropdownOpen" class="z-10 w-72 bg-white rounded-lg shadow absolute right-0">
          <ul class="py-2 text-sm text-gray-700">
            <li>
              <a
                href="#"
                class="px-4 py-2 hover:bg-gray-100 text-lg font-semibold flex items-center"
                @click="toggleHighContrast"
                ><ContrastIcon class="mr-3" /> {{ highContrast ? 'Desativar' : 'Ativar' }} alto
                contraste</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-2 hover:bg-gray-100 text-lg font-semibold flex items-center"
                @click="readMessages"
                ><Volume2Icon class="mr-3" /> {{ reading ? 'Parar de ler' : 'Ler' }} mensagens</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <section
    ref="scroll"
    class="flex-1 overflow-auto scroll-smooth"
    :class="{ 'bg-black border-b border-white': highContrast }"
  >
    <div class="flex flex-col px-4 py-6">
      <div class="mb-2 max-w-[80%] flex flex-col">
        <div
          class="p-4 flex items-start gap-3 rounded-xl mb-1 bg-[#BDD6FF] rounded-bl-none relative"
          :class="{ 'bg-black border border-white': highContrast }"
        >
          <BotMessageSquareIcon
            class="text-red-500 flex-shrink-0"
            :class="{ 'text-white': highContrast }"
          />
          <div class="flex flex-col font-semibold">
            <p class="text-[#002198]" :class="{ 'text-white': highContrast }">
              Bom dia, como posso te ajudar hoje?
            </p>
            <span :class="{ 'text-white': highContrast }"
              >Clique no botão
              <MicIcon
                :size="18"
                class="inline text-red-500"
                :class="{ 'text-white': highContrast }"
              />
              para me fazer uma pergunta por voz ou escreva sua dúvida.</span
            >
            <hr
              class="my-2 border-[#002198] opacity-25"
              :class="{ 'border-white opacity-100': highContrast }"
            />
            <p class="text-[#002198]" :class="{ 'text-white': highContrast }">
              Problema na fatura?
            </p>
            <span :class="{ 'text-white': highContrast }"
              >Faça upload do seu boleto ou tire uma foto no botão
              <CameraIcon
                :size="18"
                class="inline text-red-500"
                :class="{ 'text-white': highContrast }"
              />
              que eu te ajudo!</span
            >
          </div>
          <Volume2Icon
            class="absolute -right-2 bottom-2 translate-x-full cursor-pointer"
            :class="{
              'text-white': highContrast,
              'text-[#244A88] hover:text-blue-950': !highContrast
            }"
            :size="22"
            @click="speak('Bom dia, como posso te ajudar hoje?')"
          />
        </div>
        <div class="font-semibold text-sm text-[#C4C6CF] items-center flex gap-1">
          <span :class="{ 'text-white': highContrast }">{{ startTime }}</span>
        </div>
      </div>
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="mb-2 max-w-[80%] flex flex-col"
        :class="{
          'ml-auto': message.mine
        }"
      >
        <div
          class="p-4 flex items-start gap-3 rounded-xl mb-1 relative"
          :class="{
            'bg-[#BDD6FF] rounded-bl-none': !message.mine,
            'bg-[#ECF3FF] rounded-br-none': message.mine,
            'bg-black border border-white': highContrast
          }"
        >
          <Volume2Icon
            v-if="!message.mine"
            class="absolute -right-2 bottom-2 translate-x-full cursor-pointer"
            :class="{
              'text-white': highContrast,
              'text-[#244A88] hover:text-blue-950': !highContrast
            }"
            :size="22"
            @click="speak(message.content || 'Imagem')"
          />
          <BotMessageSquareIcon
            v-if="!message.mine"
            class="text-red-500 flex-shrink-0"
            :class="{ 'text-white': highContrast }"
          />
          <div
            class="flex flex-col items-start justify-center font-semibold"
            :class="{ 'text-white': highContrast }"
          >
            {{ message.content }}
            <button
              v-if="message.action"
              class="text-white bg-[#244A88] hover:bg-blue-950 transition px-3 py-2 rounded-lg mt-2"
              :class="{ 'bg-black border border-white': highContrast }"
              @click="handleAction(message.action)"
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
          :class="{ 'ml-auto': message.mine, 'text-white': highContrast }"
        >
          <span>{{ message.createdAt }}</span
          ><CheckCheckIcon v-if="message.mine" :size="16" />
        </div>
      </div>
      <div v-if="loading" class="mb-2 max-w-[80%] flex flex-col">
        <div class="py-4 flex items-start gap-2 rounded-xl mb-1">
          <BotIcon class="text-gray-400 flex-shrink-0" :class="{ 'text-white': highContrast }" />
          <div
            class="flex items-center justify-center font-semibold text-gray-400"
            :class="{ 'text-white': highContrast }"
          >
            Pensando...
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="border-t border-gray-200" :class="{ 'bg-black border-white': highContrast }">
    <div class="w-full flex items-center px-4 py-4 overflow-visible whitespace-nowrap gap-2">
      <span
        class="text-[#002198] font-semibold py-1.5 px-3 rounded-full border-2 border-[#002198] hover:bg-gray-100 cursor-pointer"
        :class="{ 'text-white border-white hover:bg-black': highContrast }"
        @click="handleSuggestion('2ª via do boleto')"
        >2ª via do boleto</span
      >
      <span
        class="text-[#002198] font-semibold py-1.5 px-3 rounded-full border-2 border-[#002198] hover:bg-gray-100 cursor-pointer"
        :class="{ 'text-white border-white hover:bg-black': highContrast }"
        @click="handleSuggestion('Troca de plano')"
        >Troca de plano</span
      >
      <span
        class="text-[#002198] font-semibold py-1.5 px-3 rounded-full border-2 border-[#002198] hover:bg-gray-100 cursor-pointer"
        :class="{ 'text-white border-white hover:bg-black': highContrast }"
        @click="handleSuggestion('Pagamentos em aberto')"
        >Pagamentos em aberto</span
      >
    </div>
    <div
      v-if="listening"
      class="w-full flex items-center justify-center px-2 py-2 bg-white border-t border-gray-200 gap-1"
      :class="{ 'bg-black border-white': highContrast }"
    >
      <div
        class="font-semibold rounded-full h-10 w-10 flex justify-center items-center text-red-500 animate-pulse"
        :class="{ 'text-white': highContrast }"
      >
        <MicIcon :size="24" />
      </div>
      <span
        class="text-lg font-semibold text-gray-400 animate-pulse"
        :class="{ 'text-white': highContrast }"
        >Gravando...</span
      >
    </div>
    <div
      v-else
      class="w-full flex items-center px-2 py-2 border-t gap-1"
      :class="{ 'bg-black border-white': highContrast, 'bg-white border-gray-200': !highContrast }"
    >
      <button
        class="hover:bg-gray-100 text-red-500 font-semibold rounded-full h-10 w-10 flex justify-center items-center"
        :class="{ 'text-white': highContrast }"
        @click="handleCamera"
      >
        <CameraIcon :size="24" />
      </button>
      <input
        type="text"
        placeholder="Fale ou digite a sua dúvida..."
        class="flex-grow border-none focus:outline-none text-gray-800 bg-transparent font-semibold"
        :class="{ 'text-white placeholder:text-white': highContrast }"
        v-model="prompt"
        @keypress.enter="handleEnter"
      />
      <button
        class="hover:bg-gray-100 font-semibold rounded-full h-10 w-10 flex justify-center items-center"
        :class="{
          'text-gray-400': listening,
          'text-red-500': !listening,
          'text-white': highContrast
        }"
        @click="handleAudio"
      >
        <MicIcon :size="24" />
      </button>
      <button
        class="hover:bg-gray-100 text-[#002198] font-semibold rounded-full h-10 w-10 flex justify-center items-center"
        :class="{ 'text-white hover:bg-gray-950': highContrast }"
        @click="handleEnter"
      >
        <SendHorizonalIcon :size="24" />
      </button>
    </div>
  </section>
</template>
