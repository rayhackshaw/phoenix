export default defineNuxtConfig({
  ssr: false,
  nitro: { preset: "static" },
  devtools: { enabled: false },
  typescript: { typeCheck: false },
  modules: ["@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  googleFonts: { families: { "Stack+Sans+Text": true } },
});
