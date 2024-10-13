<script setup lang="ts">
import { CheckSquare2Icon, CircleAlertIcon, LogOutIcon } from 'lucide-vue-next'
import { MenuIcon, SparklesIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import person from '../assets/person.png'
import ChatTab from '@/components/ChatTab.vue'

const companies = [
  {
    logo: 'https://yt3.googleusercontent.com/BX4A8DQyZTmmRSeGf_jKdv8XS-KWZQflaec4Kx9VvCNagE93XuvTb-QJLkBUMB27AawzonRPpw=s900-c-k-c0x00ffffff-no-rj',
    name: 'Neoenergia'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-dT9pyeTrk30OPa-g9FYrD5wLShxvfozgQ&s',
    name: 'Inter'
  },
  {
    logo: 'https://www.mobills.com.br/blog/wp-content/uploads/2022/08/banco-digital-Mercado-Pago.jpg',
    name: 'Mercado pago'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrwX_DcPOTxx5PaXPnzF-U7oCZsZgkMcjyw&s',
    name: 'Rappi'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXGHq367g7E-SIR32tiY9jL59KO6nKEZR7Q&s',
    name: 'Sky'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwnvi2Fvb1Vdz6iJ0YhfpUHXtHvxO22DnIjjWO5_RYuFbvysl2O4ss0Pt0RNlHpy-l34&usqp=CAU',
    name: 'Smart'
  },
  {
    logo: 'https://abre.bio/uploads/avatars/3a298d80884153cbae76e77be6ee77ee.png',
    name: 'Tim'
  }
]
</script>

<template>
  <header class="w-full bg-[#D9E5FF] py-2 px-3 flex items-center gap-2 justify-between relative">
    <img
      src="https://bemobi.com/wp-content/uploads/2023/07/Primary_horizontal_Logo.png"
      class="h-8"
    />
    <nav class="flex gap-6 font-semibold">
      <RouterLink to="/connect">Contato</RouterLink>
      <RouterLink to="/" class="flex items-center gap-2"
        >Sair<LogOutIcon :size="16" class=""
      /></RouterLink>
    </nav>
  </header>

  <div class="flex-1 w-full flex">
    <aside class="h-full bg-[#C1D9FF] w-64">
      <div class="bg-[#69A3FE] p-4 flex items-center gap-3">
        <img :src="person" class="w-10 h-10 rounded" />
        <span class="text-white font-semibold">Adriana Silva</span>
      </div>
      <div
        v-for="(company, index) in companies"
        :key="index"
        class="border-b border-[#69A3FE] px-4 py-2 flex items-center gap-3"
      >
        <img :src="company.logo" class="w-8 h-8 rounded" />
        <span class="font-semibold text-[#46508A]">{{ company.name }}</span>
      </div>
    </aside>

    <main class="flex-1 overflow-auto">
      <section class="w-full bg-[#002198] px-4 py-3 flex items-center gap-2 justify-start relative">
        <img
          src="https://companieslogo.com/img/orig/TIMB_BIG.D-c971ee58.png?t=1720244494"
          class="h-5"
        />
      </section>
      <nav class="flex text-black">
        <div class="flex-1 flex items-center justify-center p-2 bg-gray-300">
          Serviço contratado
        </div>
        <div class="flex-1 flex items-center justify-center p-2 bg-gray-100">
          Informações e avisos
        </div>
        <div class="flex-1 flex items-center justify-center p-2 bg-gray-100">
          Resumo de cobranças
        </div>
        <div class="flex-1 flex items-center justify-center p-2 bg-gray-100">Chamados</div>
      </nav>
      <div class="flex flex-col items-center px-4 py-6">
        <div class="max-w-4xl">
          <p class="py-2 px-3 rounded-lg font-semibold text-white bg-orange-500 mb-6">
            Vimos que o seu pacote atual vem acabando antes do final do mês, que tal tentar esse
            novo pacote?
          </p>
          <div class="flex w-full gap-8">
            <div class="flex flex-col flex-1">
              <h2 class="font-semibold text-2xl mb-4">Plano atual</h2>
              <div class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col">
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
              <h2 class="font-semibold text-2xl mb-4">Sugestão</h2>
              <div
                class="border border-gray-200 p-4 rounded-lg w-full font-semibold flex flex-col relative"
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
    </main>
  </div>

  <div class="absolute bottom-0 right-8 max-w-96">
    <ChatTab />
  </div>
</template>
