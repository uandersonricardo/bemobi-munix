<script setup lang="ts">
import { CheckSquare2Icon, CircleAlertIcon } from 'lucide-vue-next'
import { MenuIcon, SparklesIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const overdue = [
  {
    id: 1,
    date: '05/02/2024',
    expired: 56,
    month: 'FEB 2024',
    amount: 289.78
  },
  {
    id: 2,
    date: '05/03/2024',
    expired: 42,
    month: 'MAR 2024',
    amount: 316.45
  },
  {
    id: 3,
    date: '05/04/2024',
    expired: 26,
    month: 'APR 2024',
    amount: 304.58
  }
]

const invoices = [
  {
    id: 1,
    date: '05/11/2024',
    expired: 24,
    month: 'NOV 2024',
    amount: 273.11
  },
  {
    id: 2,
    date: '05/12/2024',
    expired: 54,
    month: 'DEZ 2024',
    amount: 273.11
  },
  {
    id: 3,
    date: '05/01/2025',
    expired: 85,
    month: 'JAN 2025',
    amount: 273.11
  },
  {
    id: 4,
    date: '05/02/2025',
    expired: 98,
    month: 'FEV 2025',
    amount: 273.11
  }
]
</script>

<template>
  <header class="w-full bg-[#002198] p-4 flex items-center gap-2 justify-center relative">
    <img
      src="https://companieslogo.com/img/orig/TIMB_BIG.D-c971ee58.png?t=1720244494"
      class="h-5 my-1"
    />
    <nav class="flex gap-2 absolute top-4 right-4">
      <RouterLink to="/connect"><MenuIcon class="text-white" :size="28" /></RouterLink>
    </nav>
  </header>

  <div class="group fixed bottom-4 right-4 flex items-end justify-end">
    <RouterLink
      to="/chat"
      class="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-[#002198] hover:bg-blue-950 transition z-50 absolute"
    >
      <SparklesIcon class="text-white" :size="28" />
    </RouterLink>
  </div>

  <main class="flex-1 overflow-auto">
    <section class="bg-gray-200 px-4 py-8">
      <h2 class="text-2xl font-bold text-gray-600 mb-2">
        Selecione as faturas que você deseja pagar
      </h2>
      <span class="text-md text-gray-600"
        >Para a sua comodidade, as faturas vencidas já vem previamente selecionadas</span
      >
    </section>
    <div class="flex flex-col px-4 py-6">
      <p class="text-lg font-bold text-[#002198] mb-6">Vencidas (3)</p>
      <div
        v-for="invoice in overdue"
        :key="invoice.id"
        class="mb-2 bg-gray-100 p-4 flex items-center gap-4"
      >
        <div class="flex items-center justify-center">
          <CheckSquare2Icon class="text-[#002198]" :size="28" />
        </div>
        <div class="flex flex-col flex-1">
          <span class="text-gray-600 uppercase text-xs font-bold">Vencimento</span>
          <span class="text-[#002198] uppercase text-xl font-bold mb-1">{{ invoice.date }}</span>
          <span class="text-red-500 text-sm font-bold flex items-center">
            <CircleAlertIcon class="text-red-500 mr-1" :size="18" />Vencida há
            {{ invoice.expired }} dias</span
          >
        </div>
        <div class="flex flex-col items-end justify-center h-full">
          <span
            class="text-red-500 bg-white rounded-sm uppercase text-xs font-bold w-auto py-1 px-2 mb-1"
            >{{ invoice.month }}</span
          >
          <span class="text-gray-600 uppercase text-lg font-bold"
            >R$ {{ invoice.amount.toFixed(2) }}</span
          >
        </div>
      </div>
      <p class="text-lg font-bold text-[#002198] mt-5 mb-6">Em dia (4)</p>
      <div
        v-for="invoice in invoices"
        :key="invoice.id"
        class="mb-2 bg-gray-100 p-4 flex items-center gap-4"
      >
        <div class="flex items-center justify-center">
          <CheckSquare2Icon class="text-[#002198]" :size="28" />
        </div>
        <div class="flex flex-col flex-1">
          <span class="text-gray-600 uppercase text-xs font-bold">Vencimento</span>
          <span class="text-[#002198] uppercase text-xl font-bold mb-1">{{ invoice.date }}</span>
          <span class="text-red-500 text-sm font-bold flex items-center">
            <CircleAlertIcon class="text-red-500 mr-1" :size="18" />Vencida há
            {{ invoice.expired }} dias</span
          >
        </div>
        <div class="flex flex-col items-end justify-center h-full">
          <span
            class="text-red-500 bg-white rounded-sm uppercase text-xs font-bold w-auto py-1 px-2 mb-1"
            >{{ invoice.month }}</span
          >
          <span class="text-gray-600 uppercase text-lg font-bold"
            >R$ {{ invoice.amount.toFixed(2) }}</span
          >
        </div>
      </div>
    </div>
  </main>
</template>
