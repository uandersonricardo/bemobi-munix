<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { preprocessMarkdownImages } from '@/lib/file'

const markdown = new MarkdownIt()

defineProps({
  source: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="markdown" v-html="markdown.render(preprocessMarkdownImages(source))"></div>
</template>

<style scoped>
.markdown {
  @apply text-neutral-20;
}

.markdown :deep(h1) {
  @apply text-3xl font-bold mb-4;
}

.markdown :deep(h2) {
  @apply text-2xl font-semibold mb-3;
}

.markdown :deep(h3) {
  @apply text-xl font-semibold mb-2;
}

.markdown :deep(h4) {
  @apply text-lg font-semibold mb-2;
}

.markdown :deep(h5) {
  @apply text-base font-semibold mb-2;
}

.markdown :deep(p) {
  @apply text-base leading-7 mb-4;
}

.markdown :deep(li > p) {
  @apply text-base leading-7 mb-4 inline;
}

.markdown :deep(ul) {
  @apply list-disc list-inside mb-4;
}

.markdown :deep(ol) {
  @apply list-decimal list-inside mb-4;
}

.markdown :deep(li) {
  @apply text-base leading-7;
}

.markdown :deep(a) {
  @apply text-blue-600 hover:underline;
}

.markdown :deep(blockquote) {
  @apply border-l-4 border-gray-300 pl-4 italic my-4;
}

.markdown :deep(code) {
  @apply bg-gray-100 text-red-600 font-mono text-sm px-2 py-1 rounded;
}

.markdown :deep(pre) {
  @apply bg-gray-100 text-gray-100 font-mono text-sm p-4 rounded overflow-x-auto mb-4;
}

.markdown :deep(hr) {
  @apply border-t border-gray-300 my-6;
}

.markdown :deep(img) {
  @apply max-w-full h-auto rounded my-2 max-h-[400px];
}

.markdown :deep(table) {
  @apply min-w-full bg-white border-collapse border border-gray-200 mb-4;
}

.markdown :deep(th) {
  @apply bg-gray-100 border border-gray-300 text-left px-4 py-2;
}

.markdown :deep(td) {
  @apply border border-gray-300 px-4 py-2;
}
</style>
