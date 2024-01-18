export default defineNuxtConfig({
  modules: ["components-layout", "@element-plus/nuxt"],
  app: {
    head: {
      title: "Extending Configs is Fun!",
      meta: [{ name: "description", content: "I am using the extends feature in nuxt 3!" }],
    },
  },
});
