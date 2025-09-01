<script setup lang="ts">
const navOpen = ref(false)

const schedule = [
  { time: '5:00pm', title: 'Feria del terror' },
  { time: '7:30pm', title: 'Desfile del infierno' },
  { time: '8:00pm', title: 'Apertura al inframundo' },
  { time: '1:00am', title: 'Cierre del parque' }
]
useHead({
  title: 'Festival del Terror 3',
  meta: [
    { name: 'description', content: 'Las peores pesadillas no se sueñan, se viven. 🎃 Ven a Granja La Rosita en Ciudad Juárez.' },

    // Open Graph (Facebook / WhatsApp / LinkedIn)
    { property: 'og:title', content: 'Festival del Terror 3' },
    { property: 'og:description', content: 'Las peores pesadillas no se sueñan, se viven. 🎃' },
    { property: 'og:image', content: 'https://festivaldelterror.mx/images/portada.webp' },
    { property: 'og:url', content: 'https://festivaldelterror.mx' },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Festival del Terror 3' },
    { name: 'twitter:description', content: 'Las peores pesadillas no se sueñan, se viven. 🎃' },
    { name: 'twitter:image', content: 'https://festivaldelterror.mx/images/portada.webp' }
  ]
})
</script>
<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <!-- HERO -->
    <section id="inicio" class="relative overflow-hidden">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div class="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-800">
            <img src="/assets/images/portada.webp" alt="Festival del Terror portada" class="h-full w-full object-cover" />
          </div>
        </div>
        <div class="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 class="font-metal text-5xl sm:text-7xl text-red-600">FESTIVAL DEL TERROR 3</h1>
          <p class="mt-3 text-sm font-body font-medium uppercase tracking-wide text-zinc-400 sm:mt-4">Las peores pesadillas no se sueñan, se viven</p>

          <div id="boletos" class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <!-- <NuxtLink to="#" class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold shadow hover:bg-red-500 sm:w-auto">Comprar boletos</NuxtLink> -->
            <NuxtLink to="https://www.google.com/maps/place/Granja+La+Rosita/@31.6575427,-106.3760189,17z/data=!3m1!4b1!4m6!3m5!1s0x86e75d08b38a6897:0xe3daed17f10ec163!8m2!3d31.6575382!4d-106.373444!16s%2Fg%2F11m7kvx2sr?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" class="inline-flex w-full items-center justify-center rounded-md border border-white/15 px-6 py-3 text-base font-semibold hover:bg-white/5 sm:w-auto" target="_blank">Cómo llegar</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ADRESS & DATES -->
    <!-- <section id="direccion" class="scroll-mt-24 md:scroll-mt-28 border-y border-white/10 bg-zinc-900/30">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div class="rounded-2xl border border-white/10 bg-zinc-800/40 p-6">
          <h2 class="text-2xl font-bold">Dirección del festival</h2>
          <p class="mt-2 text-zinc-300">Camino a La Rosita #1085 · Ciudad Juárez</p>
          <div class="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-zinc-700/60">
            <div class="flex h-full items-center justify-center text-xs text-zinc-300">Mapa (embed próximamente)</div>
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-zinc-800/40 p-6 md:col-span-2">
          <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 class="text-xl font-semibold">Fechas</h3>
              <p class="mt-1 text-zinc-300">26 de Septiembre – X de Octubre</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Itinerario</h3>
              <ul class="mt-3 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">
                <li v-for="item in schedule" :key="item.time" class="flex items-center justify-between bg-zinc-900/30 px-4 py-3">
                  <span class="font-mono text-zinc-300">{{ item.time }}</span>
                  <span class="font-light px-3">{{ item.title }}</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-4 text-xs text-zinc-400">Horarios y actividades sujetos a cambios sin previo aviso.</p>
        </div>
      </div>
    </section> -->
    <!-- ATRACCIONES PREVIEW -->
    <section id="atracciones" class="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-metal font-bold sm:text-4xl text-red-600">Atracciones</h2>
      <p class="mx-auto mt-2 max-w-2xl text-center font-body text-zinc-400">Conoce el mapa del festival y explora las casas del terror, espectáculos y zonas gastronómicas.</p>

      <!-- Mapa placeholder -->
      <div class="mt-6 rounded-2xl border border-white/10 bg-zinc-800/40 p-3">
        <div class="aspect-[16/9] w-full rounded-lg bg-zinc-700/60">
          <div class="flex h-full items-center justify-center text-zinc-300"><img src="/assets/images/mapa_festival.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
        </div>
      </div>

      <!-- Cards preview -->
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/feriadelterror.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Festival del terror</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/dracula.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Dracula Escape</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/zombiepaintball.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Zombie paintball</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/camino.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Csmino</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/catalepsia.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Catalepsia</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/calabazas.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Calabazas</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/elmuseo.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">El museo</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/espectros.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Espectros</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/jeepers.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Jeepers</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/silencio.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Silencio</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/masacre.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Masacre</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/reactorx.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Reactorx</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/leyendas.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Leyendas</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Descripción breve de la atracción para dar contexto.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRABAJO CTA -->
    <!-- <section id="trabajo" class="scroll-mt-24 md:scroll-mt-28 border-y border-white/10 bg-zinc-900/30">
      <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-metal font-bold sm:text-4xl text-red-600">¿Quieres trabajar con nosotros?</h2>
          <p class="mt-2 font-body text-zinc-400">Buscamos actores, maquillistas, staff de operaciones y más. Entrenamiento pagado y horarios flexibles.</p>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="#" class="inline-flex items-center justify-center rounded-md bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 hover:bg-white">Aplicar ahora</NuxtLink>
            <NuxtLink to="#faq" class="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">Preguntas frecuentes</NuxtLink>
          </div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-zinc-800/40 p-3">
          <div class="aspect-video w-full rounded-lg bg-zinc-700/60">
            <div class="flex h-full items-center justify-center text-zinc-300">Formulario (preview)</div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- FAQ -->
    <section id="faq" class="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-metal font-bold sm:text-4xl text-red-600">Preguntas frecuentes</h2>
      <div class="mx-auto mt-8 grid max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
        <details class="group open:bg-white/5">
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Se puede ir disfrazado?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Sí, pero evita objetos punzocortantes y mascarillas que cubran completamente el rostro.</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">Detalles del boleto VIP</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Accesos rápidos, zona preferencial y souvenir exclusivo.</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">Horarios</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Apertura 8:00pm, cierre 1:00am. Sujeto a cambios.</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">Estacionamiento</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Contamos con estacionamiento en sitio sujeto a disponibilidad.</div>
        </details>
      </div>

      <!-- <div class="mt-10 text-center">
        <NuxtLink to="#" class="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold shadow hover:bg-red-500">Comprar boletos</NuxtLink>
      </div> -->
    </section>
  </div>
</template>
