<script setup lang="ts">
import {
  CheckCheckIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  ReceiptTextIcon,
  TriangleAlertIcon
} from 'lucide-vue-next'
import person from '../assets/person.png'
</script>

<template>
  <div class="max-w-5xl">
    <div class="bg-[#FCDBE1] px-6 py-6 rounded-xl mb-4 flex cursor-pointer">
      <ReceiptTextIcon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de outubro disponível</div>
        <div>
          Sua fatura referente ao mês de outubro, com vencimento em 24/10/2024 encontra-se
          disponível para pagamento na aba de “Histórico de pagamentos”.
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-6 py-6 rounded-xl mb-4 flex cursor-pointer items-center">
      <CheckCircle2Icon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de setembro paga</div>
      </div>
      <span class="font-semibold flex items-center gap-2">
        <img
          class="inline-block h-5 w-5 rounded-full mt-0.5"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        Jonas Silva</span
      >
    </div>

    <div class="bg-[#F2F4FF] px-6 py-6 rounded-xl mb-4 flex cursor-pointer items-center">
      <TriangleAlertIcon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de setembro vence em dois dias</div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-6 py-6 rounded-xl mb-4 flex cursor-pointer items-center">
      <TriangleAlertIcon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de setembro vence em cinco dias</div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-6 py-6 rounded-xl mb-4 flex cursor-pointer">
      <ReceiptTextIcon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de setembro disponível</div>
        <div>
          Sua fatura referente ao mês de setembro, com vencimento em 24/09/2024 encontra-se
          disponível para pagamento na aba de “Histórico de pagamentos”.
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-6 py-6 rounded-xl mb-4 flex cursor-pointer items-center">
      <CheckCircle2Icon :size="36" class="mr-4" />
      <div class="flex flex-col flex-1">
        <div class="font-semibold text-lg">Fatura de agosto paga</div>
      </div>
      <span class="font-semibold flex items-center gap-2">
        <img class="inline-block h-5 w-5 rounded-full mt-0.5" :src="person" alt="" />
        Adriana Silva</span
      >
    </div>
  </div>
</template>
