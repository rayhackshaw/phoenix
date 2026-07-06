<script setup>
import { useHead } from "#imports";
import "../assets/css/main.css";

// Head configuration
useHead({
  title: "Ray Hackshaw",
  script: [
    {
      src: "https://app.denki.co.nz/script.js",
      "data-website-id": "a9f957ff-3d8a-4175-b581-f6308e171a19",
    },
  ],
});
</script>
<template>
  <main>
    <div
      class="flex px-12 flex-col gap-2 justify-center bg-white items-center w-full min-h-screen"
    >
      <div class="relative flex w-full h-[90vh]">
        <h1
          class="font-bold text-4xl md:text-6xl tracking-tight absolute top-0 left-0 text-black"
        >
          Ray Hackshaw
        </h1>

        <div class="flex gap-4 absolute left-0 md:left-auto md:right-0 top-8 md:top-0 justify-center py-4 md:p-4 w-fit">
          <div>
            <NuxtLink to="https://github.com/rayhackshaw" target="_blank">
              <div class="text-black">
                <p>Github</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://reading.supply/@rhackshaw" target="_blank">
              <div class="text-black">
                <p>Blog</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://portfolio.rayhackshaw.com" target="_blank">
              <div class="text-black">
                <p>Portfolio</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="absolute bottom-0 left-0">
          <h2>Developer from Auckland, New Zealand.</h2>
          <p>I make a lot of Nextjs/Typescript things.</p>
          <p></p>
          <br></br>
          <p>
            If you are interested in what I&apos;m working on, or just want to
            chat, reach out via email: ray@rayhackshaw.com
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
