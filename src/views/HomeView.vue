<template>
  <section>
    <div class="container pr-5 pl-5 sm:pr-16 sm:pl-16 mb-10">
      <Home msg="Welcome to Your Vue.js moovingo_app" />
    </div>
    <div class="picture"></div>
  </section>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home
  }
};
</script>
