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
            <!-- <NuxtLink to="https://ticketfy.mx/events/festival-del-terror" class="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold shadow hover:bg-red-500 sm:w-auto">Preventa</NuxtLink> -->
            <NuxtLink to="https://www.google.com/maps/place/Granja+La+Rosita/@31.6575427,-106.3760189,17z/data=!3m1!4b1!4m6!3m5!1s0x86e75d08b38a6897:0xe3daed17f10ec163!8m2!3d31.6575382!4d-106.373444!16s%2Fg%2F11m7kvx2sr?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" class="inline-flex w-full items-center justify-center rounded-md border border-white/15 px-6 py-3 text-base font-semibold hover:bg-white/5 sm:w-auto" target="_blank">Cómo llegar</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  <!-- Patrocinadores -->
  <section id="patrocinadores" class="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h2 class="text-center text-2xl sm:text-3xl font-metal font-bold text-red-600">Patrocinadores</h2>
    <p class="mx-auto mt-2 max-w-xl text-center font-body text-zinc-400 text-sm sm:text-base">Gracias a quienes hacen posible el Festival del Terror.</p>

    <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      <a href="https://www.facebook.com/profile.php?id=61554863888466" target="_blank" class="group flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 p-3 sm:p-4 hover:border-red-600 transition">
        <div class="h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
          <img src="/assets/images/rocket_paintball.webp" alt="Rocket Paintball" loading="lazy" class="max-h-full w-auto object-contain" />
        </div>
      </a>

      <!-- <a href="https://ticketfy.mx" target="_blank" class="group flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 p-3 sm:p-4 hover:border-red-600 transition">
        <div class="h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
          <img src="/assets/images/ticketfy.webp" alt="Ticketfy" loading="lazy" class="max-h-full w-auto object-contain" />
        </div>
      </a> -->

      <a href="https://canacojuarez.com" target="_blank" class="group flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 p-3 sm:p-4 hover:border-red-600 transition">
        <div class="h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
          <img src="/assets/images/canaco.webp" alt="CANACO" loading="lazy" class="max-h-full w-auto object-contain" />
        </div>
      </a>
      <a href="https://juarez.gob.mx/dependencia/13/" target="_blank" class="group flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/40 p-3 sm:p-4 hover:border-red-600 transition">
        <div class="h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
          <img src="/assets/images/desarrollo_economico.webp" alt="Desarrollo económico" loading="lazy" class="max-h-full w-auto object-contain" />
        </div>
      </a>
    </div>
  </section>

    <!-- ATRACCIONES PREVIEW -->
    <section id="atracciones" class="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-metal font-bold sm:text-4xl text-red-600">Atracciones</h2>
      <p class="mx-auto mt-2 max-w-2xl text-center font-body text-zinc-400">Conoce el mapa del festival y explora las casas del terror, espectáculos y zonas gastronómicas.</p>

      <!-- Mapa placeholder -->
      <div class="mt-6 rounded-2xl border border-white/10 bg-zinc-800/40 p-3">
        <div class="aspect-[1/1] w-full rounded-lg bg-zinc-700/60">
          <div class="flex h-full items-center justify-center text-zinc-300"><img src="/assets/images/mapa_festival.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
        </div>
      </div>

      <!-- Cards preview -->
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/feriadelterror.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Feria del terror</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Carcajadas retorcidas, luces de feria y payasos que no solo buscan hacer reír… sino hacerte gritar.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/dracula.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Dracula Escape Room</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">La oscura leyenda del conde regresa con sed de sangre en un recorrido donde nada ni nadie es lo que parece.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/zombiepaintball.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Zombie paintball</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un hospital devastado por un virus mortal, donde los sobrevivientes deben enfrentarse a hordas de infectados con armas de paintball.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/camino.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Csmino hacia el terror</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un oscuro sendero donde psicópatas asesinos esperan para cazar a sus víctimas.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/catalepsia.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Catalepsia</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Entra al ataúd… y descubre el terror de un entierro en vida.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/calabazas.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Jardín de las Calabazas</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un pasillo iluminado por cientos de calabazas, entre luces naranjas y oscuros secretos que acechan en cada rincón.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/elmuseo.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">El museo</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Exhibe objetos malditos cargados de historias aterradoras que parecen cobrar vida frente a tus ojos.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/espectros.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Espectros</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un laberinto embrujado donde los fantasmas te persiguen sin descanso.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/jeepers.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Jeepers</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un laberinto de maíz donde un solo error puede costarte la vida.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/silencio.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Silencio 51</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Un recorrido en nave espacial donde tendrás que luchar contra alienígenas con pistolas de hidrogel.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/masacre.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Masacre Farm</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Granjeros sedientos de sangre te cazan sin piedad… si no te escondes, te mutilarán.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/reactorx.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Reactor X</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Lucha contra hordas de zombies con tu pistola de hidrogel en un reactor contaminado.</p>
          </div>
        </div>
        <div class="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
          <div class="aspect-[4/4] w-full bg-zinc-700/60"><img src="/assets/images/leyendas.webp" alt="Festival del Terror portada" class="h-full w-full" /></div>
          <div class="p-5">
            <h3 class="text-lg font-metal font-semibold">Leyendas Mexicanas</h3>
            <p class="mt-1 text-sm font-body text-zinc-400">Vive los mitos que aterrorizaron a nuestros ancestros: la Llorona, el Charro Negro y más espíritus que regresan a reclamar lo suyo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-metal font-bold sm:text-4xl text-red-600">Preguntas frecuentes</h2>
      <div class="mx-auto mt-8 grid max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
        <details class="group open:bg-white/5">
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Se puede ir disfrazado?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">No se puede ir disfrazado por seguridad de las personas, solo el personal autorizado puede ir disfrazado.</div>
        </details>
        <!-- <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Dónde compro mis accesos?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Los accesos de admisión general estarán próximamente a la venta en don boleton, sin embargo durante la preventa puedes comprar pulseras VIP en Ticketfy estos ya incluyen tu admisión general y acceso a todas las atracciones, a excepción de juegos mecánicos.</div>
        </details> -->
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Cuál es la ubicación?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Puedes buscar en Google “Rocket Paintball Juarez” o tambien puedes llegar con la direccion, Camino a la rosita #1085, las Arcadas</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Desde qué edad pueden entrar los niños?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Es un evento familiar para todas las edades sin embargo algunas atracciones tienen restricciones de edad.</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Aceptan tarjeta o solo efectivo?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Si tambien aceptamos tarjeta de credito o debito.</div>
        </details>
        <details>
          <summary class="cursor-pointer list-none px-5 py-4 font-medium hover:bg-white/5">¿Qué incluye la pusera VIP?</summary>
          <div class="px-5 pb-5 font-body text-zinc-400">Tu admisión general y acceso a todas las atracciones de terror de cobro a excepción de juegos mecánicos</div>
        </details>
      </div>

      <!-- <div class="mt-10 text-center">
        <NuxtLink to="https://ticketfy.mx/events/festival-del-terror" class="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold shadow hover:bg-red-500">Preventa</NuxtLink>
      </div> -->
    </section>
  </div>
</template>
