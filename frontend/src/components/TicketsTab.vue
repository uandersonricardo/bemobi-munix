<script setup lang="ts">
import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import PixIcon from './PixIcon.vue'

const accordion = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  if (accordion.value === index) {
    accordion.value = null
    return
  }

  accordion.value = index
}
</script>

<template>
  <div class="max-w-4xl flex gap-8">
    <div>
      <h2 class="font-semibold text-xl mb-4">Em andamento</h2>
      <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
        <button
          @click="toggleAccordion(1)"
          class="w-full flex justify-between items-center py-6 text-slate-800"
        >
          <div class="flex flex-col justify-center items-start h-10">
            <span class="font-semibold text-xl">Dívida</span>
            <span class="font-semibold text-sm flex items-center gap-2 text-[#F96718]">
              EM ANDAMENTO</span
            >
          </div>
          <span class="text-slate-800 transition-transform duration-300">
            <ChevronDownIcon v-if="accordion !== 1" />
            <ChevronUpIcon v-else />
          </span>
        </button>
        <div
          class="overflow-hidden transition-all"
          :class="{ 'max-h-0': accordion !== 1, 'max-h-[1000px]': accordion === 1 }"
        >
          <div
            class="border border-gray-200 rounded-lg w-full font-semibold flex flex-col relative bg-white overflow-hidden mb-6"
          >
            <div class="bg-[#002198] text-white p-2 flex items-center justify-center">
              Oferta especial
            </div>
            <div class="flex flex-col p-4">
              <span class="text-sm font-semibold line-through">De R$ 413,52</span>
              <span class="text-4xl font-semibold -ml-0.5 mb-2">R$ 111,65</span>
              <span class="text-sm font-semibold text-gray-400">Dívida negativada</span>
              <div class="flex items-center gap-2 mt-4">
                <span
                  class="text-white bg-[#F96718] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  ><ArrowDownIcon :size="14" /> 73%</span
                >
                <span
                  class="text-[#697DC4] border border-[#697DC4] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  ><PixIcon class="w-3 h-3" /> Pague com Pix</span
                >
                <span
                  class="text-[#697DC4] border border-[#697DC4] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  >Em até 10x</span
                >
              </div>
              <div class="flex items-center gap-2 mt-4">
                <button
                  class="bg-[#E0E4F2] text-[#020E5B] px-6 py-2 flex items-center justify-center gap-1.5 rounded-lg flex-1"
                >
                  VER DETALHES
                </button>
                <button
                  class="bg-[#EB0028] text-white px-6 py-2 flex items-center gap-1.5 rounded-lg"
                >
                  NEGOCIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-xl mb-4">Finalizados</h2>
      <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
        <button
          @click="toggleAccordion(2)"
          class="w-full flex justify-between items-center py-6 text-slate-800"
        >
          <div class="flex flex-col justify-center items-start h-10">
            <span class="font-semibold text-xl">Pagamento duplicado</span>
            <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
              RESOLVIDO - 06/04/2024</span
            >
          </div>
          <span class="text-slate-800 transition-transform duration-300">
            <ChevronDownIcon v-if="accordion !== 2" />
            <ChevronUpIcon v-else />
          </span>
        </button>
        <div
          class="overflow-hidden transition-all"
          :class="{ 'max-h-0': accordion !== 2, 'max-h-[1000px]': accordion === 2 }"
        >
          <div
            class="border border-gray-200 rounded-lg w-full font-semibold flex flex-col relative bg-white overflow-hidden mb-6"
          >
            <div class="bg-[#002198] text-white p-2 flex items-center justify-center">
              Oferta especial
            </div>
            <div class="flex flex-col p-4">
              <span class="text-sm font-semibold line-through">De R$ 413,52</span>
              <span class="text-4xl font-semibold -ml-0.5 mb-2">R$ 111,65</span>
              <span class="text-sm font-semibold text-gray-400">Dívida negativada</span>
              <div class="flex items-center gap-2 mt-4">
                <span
                  class="text-white bg-[#F96718] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  ><ArrowDownIcon :size="14" /> 73%</span
                >
                <span
                  class="text-[#697DC4] border border-[#697DC4] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  ><PixIcon class="w-3 h-3" /> Pague com Pix</span
                >
                <span
                  class="text-[#697DC4] border border-[#697DC4] text-sm px-2 py-1.5 flex items-center gap-1.5 rounded"
                  >Em até 10x</span
                >
              </div>
              <div class="flex items-center gap-2 mt-4">
                <button
                  class="bg-[#E0E4F2] text-[#020E5B] px-6 py-2 flex items-center justify-center gap-1.5 rounded-lg flex-1"
                >
                  VER DETALHES
                </button>
                <button
                  class="bg-[#EB0028] text-white px-6 py-2 flex items-center gap-1.5 rounded-lg"
                >
                  NEGOCIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
