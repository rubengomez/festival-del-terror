<script setup lang="ts">
const navOpen = ref(false)
</script>
<template>
  <!-- NAVBAR (root is the sticky header so it isn't constrained by parent wrappers) -->
  <header class="sticky top-0 z-50 border-b border-zinc-300/10 bg-zinc/80 backdrop-blur text-[#F9EACB]">
    <Container>
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-2 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/assets/images/logo.webp" alt="Festival del Terror logo" class="h-20 md:h-30 md:h-14 w-auto" />
          <span class="sr-only">Festival del Terror</span>
        </NuxtLink>
        <!-- Desktop menu -->
        <div class="hidden items-center gap-10 md:flex text-3xl">
          <NuxtLink to="/" class="text-[#F9EACB] hover:text-red-600 font-metal">Inicio</NuxtLink>
          <NuxtLink to="#atracciones" class="text-[#F9EACB] hover:text-red-600 font-metal">Atracciones</NuxtLink>
          <!-- <NuxtLink to="#trabajo" class="text-[#F9EACB] hover:text-red-600 font-metal">Trabajo</NuxtLink> -->
          <NuxtLink to="#faq" class="text-[#F9EACB] hover:text-red-600 font-metal">FAQ</NuxtLink>
        </div>
        <!-- <div class="hidden md:block">
          <NuxtLink to="https://ticketfy.mx/events/festival-del-terror" class="rounded-md border border-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-red-600 hover:bg-red-50">Preventa</NuxtLink>
        </div> -->

        <!-- Mobile hamburger -->
        <button @click="navOpen = !navOpen" class="inline-flex items-center rounded-md p-2 text-[#F9EACB] md:hidden" aria-label="Abrir menú">
          <span class="i-[heroicons-bars-3] w-6 h-6 text-3xl">☰</span>
        </button>
      </nav>
    </Container>

    <!-- Mobile menu panel -->
    <div v-show="navOpen" class="border-t border-zinc-300/10 md:hidden">
      <Container>
        <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 ">
          <NuxtLink @click="navOpen=false" to="#atracciones" class="py-1 text-[#F9EACB] font-metal text-3xl">Atracciones</NuxtLink>
          <!-- <NuxtLink @click="navOpen=false" to="#trabajo" class="py-1 text-[#F9EACB] font-metal text-3xl">Trabajo</NuxtLink> -->
          <NuxtLink @click="navOpen=false" to="#faq" class="py-1 text-[#F9EACB] font-metal text-3xl">FAQ</NuxtLink>
          <!-- <NuxtLink @click="navOpen=false" to="#boletos" class="mt-2 w-full rounded-md border border-red-600 px-4 py-2 text-center text-sm font-semibold text-red-600 uppercase tracking-wide hover:bg-red-50">Preventa</NuxtLink> -->
        </div>
      </Container>
    </div>
  </header>
</template>