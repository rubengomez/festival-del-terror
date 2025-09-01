<template>
  <Navbar></Navbar>
  <slot></slot>
  <Footer></Footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

if (process.client && config.public.gaId) {
  // Load the gtag script only on client & only if GA ID is configured
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true
      }
    ]
  });

  // Initialize gtag once mounted (client only)
  onMounted(() => {
    // @ts-expect-error - dataLayer is attached to window
    window.dataLayer = window.dataLayer || [];
    // @ts-expect-error - gtag is attached to window
    function gtag(){window.dataLayer.push(arguments as any);}
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', config.public.gaId);
  });
}
</script>