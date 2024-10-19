<script setup lang="ts">
import { CheckSquare2Icon, CircleAlertIcon, LogOutIcon, PlusIcon } from 'lucide-vue-next'
import { MenuIcon, SparklesIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import person from '../assets/person.png'
import sidebar from '../assets/sidebar.svg'
import ChatTab from '@/components/ChatTab.vue'
import ServiceTab from '@/components/ServiceTab.vue'
import { ref } from 'vue'
import InfoTab from '@/components/InfoTab.vue'
import HistoryTab from '@/components/HistoryTab.vue'
import TicketsTab from '@/components/TicketsTab.vue'

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
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcs-N7wGVVrgALHpRYhStHfuSyUCGxewY0NQ&s',
    name: 'TIM'
  }
]

const tab = ref('service')
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

  <div class="flex-1 w-full flex overflow-hidden">
    <aside class="h-full bg-[#C1D9FF] w-64" :style="{ backgroundImage: `url(${sidebar}` }">
      <div
        class="bg-[#69A3FE] cursor-pointer p-2 mx-4 mt-4 mb-2 flex items-center gap-3 rounded-lg"
      >
        <img :src="person" class="w-10 h-10 rounded" />
        <span class="text-white font-semibold">Adriana Silva</span>
      </div>
      <div
        v-for="(company, index) in companies"
        :key="index"
        class="border-b border-[#1463FD33] px-4 py-2 flex items-center gap-3 last:bg-white/35 hover:bg-white/15 cursor-pointer"
      >
        <img :src="company.logo" class="w-8 h-8 rounded" />
        <span class="font-semibold text-[#212A5F]">{{ company.name }}</span>
      </div>
    </aside>

    <main class="flex-1 overflow-auto flex flex-col">
      <section
        class="w-full bg-[#002198] px-4 py-3 flex items-center gap-2 justify-between relative"
      >
        <img
          src="https://companieslogo.com/img/orig/TIMB_BIG.D-c971ee58.png?t=1720244494"
          class="h-4"
        />
        <div class="flex -space-x-1 overflow-visible">
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-[#002198]"
            :src="person"
            alt=""
          />
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-[#002198]"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span
            class="inline-flex h-6 w-6 rounded-full ring-2 ring-[#002198] bg-gray-200 items-center justify-center"
          >
            <PlusIcon :size="14" class="text-[#002198]" />
          </span>
        </div>
      </section>
      <nav class="flex text-black font-semibold">
        <div
          class="flex-1 flex items-center justify-center p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 select-none"
          :class="{ 'bg-gray-300': tab === 'service' }"
          @click="tab = 'service'"
        >
          Serviço contratado
        </div>
        <div
          class="flex-1 flex items-center justify-center p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 select-none"
          :class="{ 'bg-gray-300': tab === 'info' }"
          @click="tab = 'info'"
        >
          <span>Informações e avisos</span
          ><span
            class="w-5 h-5 bg-red-500 flex items-center justify-center rounded-full text-white text-[10px] ml-1"
            >+1</span
          >
        </div>
        <div
          class="flex-1 flex items-center justify-center p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 select-none"
          :class="{ 'bg-gray-300': tab === 'history' }"
          @click="tab = 'history'"
        >
          Histórico de cobranças
        </div>
        <div
          class="flex-1 flex items-center justify-center p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 select-none"
          :class="{ 'bg-gray-300': tab === 'tickets' }"
          @click="tab = 'tickets'"
        >
          Chamados
        </div>
      </nav>
      <div class="flex flex-col items-center px-4 py-6 overflow-auto flex-1">
        <ServiceTab v-if="tab === 'service'" />
        <InfoTab v-else-if="tab === 'info'" />
        <HistoryTab v-else-if="tab === 'history'" />
        <TicketsTab v-else />
      </div>
    </main>
  </div>

  <div class="absolute bottom-0 right-8 max-w-96">
    <ChatTab />
  </div>
</template>
