<script setup lang="ts">
import {
  BarcodeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MailIcon,
  MessageCircleIcon,
  MessageSquareTextIcon,
  PrinterIcon
} from 'lucide-vue-next'
import { ref } from 'vue'
import person from '../assets/person.png'
import PixIcon from './PixIcon.vue'

const accordion = ref<number | null>(1)

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
        <div class="flex flex-col justify-center items-start h-10 flex-1">
          <span class="font-semibold text-xl">Outubro - 2024</span>
          <span class="font-semibold text-sm flex items-center gap-2 text-[#F96718]">
            R$119,80</span
          >
        </div>
        <span class="font-semibold text-sm flex items-center gap-2 text-[#F96718] mx-6">
          EM ABERTO - Vencimento em 24/10/2024</span
        >
        <span class="text-slate-800 transition-transform duration-300">
          <ChevronDownIcon v-if="accordion !== 1" />
          <ChevronUpIcon v-else />
        </span>
      </button>
      <div
        class="overflow-hidden transition-all"
        :class="{ 'max-h-0': accordion !== 1, 'max-h-[1000px]': accordion === 1 }"
      >
        <div class="flex items-center gap-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar PIX total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar PIX total para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Celular da Juli</span>
          <span class="font-semibold text-sm flex items-center text-[#F96718]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Meu celular</span>
          <span class="font-semibold text-sm flex items-center text-[#F96718]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2 mb-6">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
      <button
        @click="toggleAccordion(2)"
        class="w-full flex justify-between items-center py-6 text-slate-800"
      >
        <div class="flex flex-col justify-center items-start h-10 flex-1">
          <span class="font-semibold text-xl">Setembro - 2024</span>
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            R$119,80</span
          >
        </div>
        <div class="flex flex-col justify-center items-end mx-6">
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            PAGO - 20/09/2024</span
          >
          <span class="font-semibold flex items-center gap-2 text-sm">
            <img
              class="inline-block h-4 w-4 rounded-full mt-0.5"
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
        <div class="flex items-center gap-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar PIX total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar PIX total para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Celular da Juli</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Meu celular</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2 mb-6">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
      <button
        @click="toggleAccordion(2)"
        class="w-full flex justify-between items-center py-6 text-slate-800"
      >
        <div class="flex flex-col justify-center items-start h-10 flex-1">
          <span class="font-semibold text-xl">Agosto - 2024</span>
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            R$119,80</span
          >
        </div>
        <div class="flex flex-col justify-center items-end mx-6">
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            PAGO - 19/08/2024</span
          >
          <span class="font-semibold flex items-center gap-2 text-sm">
            <img class="inline-block h-4 w-4 rounded-full mt-0.5" :src="person" alt="" />
            Adriana Silva</span
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
        <div class="flex items-center gap-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar PIX total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar PIX total para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Celular da Juli</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Meu celular</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2 mb-6">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>
      </div>
    </div>

    <div class="bg-[#F2F4FF] px-8 rounded-xl mb-4">
      <button
        @click="toggleAccordion(2)"
        class="w-full flex justify-between items-center py-6 text-slate-800"
      >
        <div class="flex flex-col justify-center items-start h-10 flex-1">
          <span class="font-semibold text-xl">Julho - 2024</span>
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            R$119,80</span
          >
        </div>
        <div class="flex flex-col justify-center items-end mx-6">
          <span class="font-semibold text-sm flex items-center gap-2 text-[#1463FD]">
            PAGO - 20/07/2024</span
          >
          <span class="font-semibold flex items-center gap-2 text-sm">
            <img class="inline-block h-4 w-4 rounded-full mt-0.5" :src="person" alt="" />
            Adriana Silva</span
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
        <div class="flex items-center gap-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar PIX total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras total
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar PIX total para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Celular da Juli</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>

        <div class="mt-4">
          <span class="font-semibold flex items-center">Meu celular</span>
          <span class="font-semibold text-sm flex items-center text-[#1463FD]"> R$59,90</span>
        </div>
        <div class="flex items-center gap-2 mt-4">
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PrinterIcon :size="16" />
            Imprimir
          </button>
          <button
            disabled
            class="opacity-50 bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MailIcon :size="16" />
            Enviar para o e-mail
          </button>
        </div>
        <div class="flex items-center gap-2 mt-2 mb-6">
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <PixIcon class="w-4" />
            Copiar código PIX
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <BarcodeIcon :size="16" />
            Copiar código de barras
          </button>
          <button
            class="bg-[#1463FD] hover:bg-[#2b43cb] py-1 px-2 rounded-lg text-white font-semibold flex items-center gap-2"
          >
            <MessageSquareTextIcon :size="16" />
            Enviar código PIX para o WhatsApp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
