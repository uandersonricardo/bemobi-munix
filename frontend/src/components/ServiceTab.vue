<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'
import { ref } from 'vue'

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
  <div class="max-w-4xl">
    <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
      <button
        @click="toggleAccordion(1)"
        class="w-full flex justify-between items-center py-6 text-slate-800"
      >
        <span class="font-semibold text-xl h-10 flex items-center">Meu celular</span>
        <span class="text-slate-800 transition-transform duration-300">
          <ChevronDownIcon v-if="accordion !== 1" />
          <ChevronUpIcon v-else />
        </span>
      </button>
      <div
        class="overflow-hidden transition-all"
        :class="{ 'max-h-0': accordion !== 1, 'max-h-[1000px]': accordion === 1 }"
      >
        <p class="py-3 px-3 rounded-lg font-semibold text-white bg-orange-500 mb-4">
          Vimos que o seu pacote atual vem acabando antes do final do mês, que tal tentar esse novo
          pacote?
        </p>
        <div class="flex w-full gap-8 mb-8">
          <div class="flex flex-col flex-1">
            <h2 class="font-semibold text-xl mb-4">Plano atual</h2>
            <div
              class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col bg-white"
            >
              <span class="text-md">TIM Controle</span>
              <a href="#" class="text-xs text-blue-600 mb-4">Ver mais detalhes</a>
              <span class="text-sm -mb-1">Até</span>
              <span class="text-4xl">25 GB</span>
              <span class="text-sm text-green-600">R$ 57,99/mês</span>
              <span class="text-xs mt-4">15 GB do plano</span>
              <span class="text-xs">+ 10 GB promocionais</span>
              <span class="text-xs">&nbsp;</span>
              <span class="text-sm mt-2">Depois de ativar o plano, escolha no app Meu TIM:</span>
              <div class="flex items-center gap-2 mt-2">
                <img
                  src="https://yt3.googleusercontent.com/9YbVRdlQhUyY_EyD5OmuILuutqiWop4P_2zH2ALtmR1L73E-b8IZoEUhiW73CvMHsrRAbmFWROM=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://store-images.s-microsoft.com/image/apps.49860.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.9f1b702c-2a8b-4fdc-b65b-8a6c4e49b55f?h=210"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj2BSB0Vi2vh7BXiVHAqvMm0uHGouy_OVQw&s"
                  class="rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <h2 class="font-semibold text-xl mb-4">Sugestão</h2>
            <div
              class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col relative bg-white"
            >
              <button
                class="text-white bg-red-500 hover:bg-red-600 transition px-3 py-2 rounded-lg absolute top-4 right-4"
              >
                Quero!
              </button>
              <span class="text-md">TIM Controle+</span>
              <a href="#" class="text-xs text-blue-600 mb-4">Ver mais detalhes</a>
              <span class="text-sm -mb-1">Até</span>
              <span class="text-4xl">45 GB</span>
              <span class="text-sm text-green-600">R$ 84,99/mês</span>
              <span class="text-xs mt-4">30 GB do plano</span>
              <span class="text-xs">+ 10 GB promocionais</span>
              <span class="text-xs">+ 5 GB exclusivos para redes sociais</span>
              <span class="text-sm mt-2">Depois de ativar o plano, escolha no app Meu TIM:</span>
              <div class="flex items-center gap-2 mt-2">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_mO56fqbdXClEhesKEWoY4TpH3uei7wSv50LGzPaX5DuTs=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                />
                <img
                  src="https://yt3.googleusercontent.com/9YbVRdlQhUyY_EyD5OmuILuutqiWop4P_2zH2ALtmR1L73E-b8IZoEUhiW73CvMHsrRAbmFWROM=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                />
                <img
                  src="https://m.media-amazon.com/images/I/71bch7gUsqL.png"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://store-images.s-microsoft.com/image/apps.49860.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.9f1b702c-2a8b-4fdc-b65b-8a6c4e49b55f?h=210"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://yt3.googleusercontent.com/JOUwCREjISEGGs0pbW0E6K2ZTa2ZFEulyDJyqBCdlvtP8Pp0AWMNZ6wrytbZrih6QTuDzp9X6w=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://yt3.googleusercontent.com/r4m9_f2nH87wTf1yoBFvwRe5pjE_lJIaKCZUkdgOq8MokC5dnpM6WbcJ4i5RQlBuBcsoRJB0cA=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj2BSB0Vi2vh7BXiVHAqvMm0uHGouy_OVQw&s"
                  class="rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
      <button
        @click="toggleAccordion(2)"
        class="w-full flex justify-between items-center py-6 text-slate-800"
      >
        <div class="flex flex-col justify-center items-start h-10">
          <span class="font-semibold text-xl">Celular da Juli</span>
          <span class="font-semibold text-sm flex items-center gap-2">
            <img
              class="inline-block h-5 w-5 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            Jonas Silva</span
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
        <p class="py-3 px-3 rounded-lg font-semibold text-white bg-orange-500 mb-4">
          Vimos que o seu pacote atual vem acabando antes do final do mês, que tal tentar esse novo
          pacote?
        </p>
        <div class="flex w-full gap-8 mb-8">
          <div class="flex flex-col flex-1">
            <h2 class="font-semibold text-xl mb-4">Plano atual</h2>
            <div
              class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col bg-white"
            >
              <span class="text-md">TIM Controle</span>
              <a href="#" class="text-xs text-blue-600 mb-4">Ver mais detalhes</a>
              <span class="text-sm -mb-1">Até</span>
              <span class="text-4xl">25 GB</span>
              <span class="text-sm text-green-600">R$ 57,99/mês</span>
              <span class="text-xs mt-4">15 GB do plano</span>
              <span class="text-xs">+ 10 GB promocionais</span>
              <span class="text-xs">&nbsp;</span>
              <span class="text-sm mt-2">Depois de ativar o plano, escolha no app Meu TIM:</span>
              <div class="flex items-center gap-2 mt-2">
                <img
                  src="https://yt3.googleusercontent.com/9YbVRdlQhUyY_EyD5OmuILuutqiWop4P_2zH2ALtmR1L73E-b8IZoEUhiW73CvMHsrRAbmFWROM=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://store-images.s-microsoft.com/image/apps.49860.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.9f1b702c-2a8b-4fdc-b65b-8a6c4e49b55f?h=210"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj2BSB0Vi2vh7BXiVHAqvMm0uHGouy_OVQw&s"
                  class="rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <h2 class="font-semibold text-xl mb-4">Sugestão</h2>
            <div
              class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col relative bg-white"
            >
              <button
                class="text-white bg-red-500 hover:bg-red-600 transition px-3 py-2 rounded-lg absolute top-4 right-4"
              >
                Quero!
              </button>
              <span class="text-md">TIM Controle+</span>
              <a href="#" class="text-xs text-blue-600 mb-4">Ver mais detalhes</a>
              <span class="text-sm -mb-1">Até</span>
              <span class="text-4xl">45 GB</span>
              <span class="text-sm text-green-600">R$ 84,99/mês</span>
              <span class="text-xs mt-4">30 GB do plano</span>
              <span class="text-xs">+ 10 GB promocionais</span>
              <span class="text-xs">+ 5 GB exclusivos para redes sociais</span>
              <span class="text-sm mt-2">Depois de ativar o plano, escolha no app Meu TIM:</span>
              <div class="flex items-center gap-2 mt-2">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_mO56fqbdXClEhesKEWoY4TpH3uei7wSv50LGzPaX5DuTs=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                />
                <img
                  src="https://yt3.googleusercontent.com/9YbVRdlQhUyY_EyD5OmuILuutqiWop4P_2zH2ALtmR1L73E-b8IZoEUhiW73CvMHsrRAbmFWROM=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                />
                <img
                  src="https://m.media-amazon.com/images/I/71bch7gUsqL.png"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://store-images.s-microsoft.com/image/apps.49860.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.9f1b702c-2a8b-4fdc-b65b-8a6c4e49b55f?h=210"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://yt3.googleusercontent.com/JOUwCREjISEGGs0pbW0E6K2ZTa2ZFEulyDJyqBCdlvtP8Pp0AWMNZ6wrytbZrih6QTuDzp9X6w=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://yt3.googleusercontent.com/r4m9_f2nH87wTf1yoBFvwRe5pjE_lJIaKCZUkdgOq8MokC5dnpM6WbcJ4i5RQlBuBcsoRJB0cA=s900-c-k-c0x00ffffff-no-rj"
                  class="rounded-full w-8 h-8"
                /><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj2BSB0Vi2vh7BXiVHAqvMm0uHGouy_OVQw&s"
                  class="rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
