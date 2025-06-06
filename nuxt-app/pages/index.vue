<script setup>
import { useHead } from "#imports";
import "../assets/css/main.css";

// Head configuration
useHead({
  title: "Ray Hackshaw",
  script: [
    {
      src: "https://sibyl.tom.so/script.js",
      "data-website-id": "a9f957ff-3d8a-4175-b581-f6308e171a19",
    },
  ],
});
</script>
<template>
  <main>
    <div
      class="flex flex-col relative gap-2 justify-center bg-[radial-gradient(ellipse_at_75%_25%,rgba(35,35,35,1)_0%,rgba(19,19,19,1)_70%,rgba(19,19,19,1)_100%)] items-center w-full min-h-screen"
    >
      <div
        class="max-w-7xl w-full flex items-center rounded-md z-[10] text-white"
      >
        <div
          class="max-w-5xl w-full mx-auto min-h-[30vh] p-4 rounded-md relative"
        >
          <div class="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div class="relative font-bold uppercase text-4xl md:text-6xl">
              <h1 class="tracking-tight text-white">Ray Hackshaw</h1>
              <p
                class="tracking-tight absolute top-0 text-gray-400/80 first-half"
              >
                Ray Hackshaw
              </p>
            </div>
            <div class="indent-2 leading-tight md:pb-0 pb-4">
              <h2 class="text-base md:text-xl uppercase">
                Full-stack Developer
              </h2>
              <p class="text-xs md:text-sm uppercase">Auckland, NZ</p>
              <!-- <div class="text-white w-full py-1">
                <VerticalTextCarousel />
              </div> -->
              <p>ray@rayhackshaw.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex gap-4 lg:flex-col items-center lg:items-start justify-center p-4 w-full lg:w-fit"
      >
        <div>
          <NuxtLink to="https://github.com/Ray-Hackshaw" target="_blank">
            <div class="flex gap-2 items-center">
              <NuxtImg
                src="/github.svg"
                width="20"
                height="20"
                class="text-white fill-white stroke-white"
              />
              <p class="text-white hidden lg:flex">Github</p>
            </div>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="https://www.linkedin.com/in/rayhackshaw/"
            target="_blank"
          >
            <div class="flex gap-2 items-center">
              <NuxtImg
                src="/linkedin.svg"
                width="20"
                height="20"
                class="text-white fill-white stroke-white"
                alt="linkedin logo"
              />
              <p class="text-white hidden lg:flex">LinkedIn</p>
            </div>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="https://portfolio.rayhackshaw.com" target="_blank">
            <div class="flex gap-2 items-center">
              <NuxtImg
                src="/readingsupply.svg"
                width="20"
                height="20"
                class="text-white fill-white stroke-white"
                alt="Portfolio logo"
              />
              <p class="text-white hidden lg:flex">Portfolio</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
