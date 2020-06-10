<template>
  <section>
    <div class="container mx-auto px-5 lg:px-16 mb-8 lg:mb-16">
      <h1 class="font-bold text-xl text-left">{{ property.name }}</h1>
      <p class="text-gray-700 text-base text-left">
        {{ property.description }}
      </p>
    </div>
    <div class="slider">
      <img :src="property.photo" :alt="property.name" />
      <img :src="property.photo" :alt="property.name" />
      <img :src="property.photo" :alt="property.name" />
    </div>
    <div class="py-10">
      <div class="container mx-auto px-5 lg:px-16 mb-8 lg:mb-16">
        <p class="font-bold text-xl text-left">{{ property.price }}</p>
        <p class="text-gray-700 text-base text-left">{{ property.resume }}</p>
      </div>
    </div>
    <div class="py-10 bg-neutral">
      <div class="container mx-auto px-5 lg:px-16 mb-8 lg:mb-16">
        <p class="text-base text-left leading-none">{{ property.id }}</p>
      </div>
    </div>
    <div class="py-10">
      <div class="container mx-auto px-5 lg:px-16 mb-8 lg:mb-16">
        <p class="text-base text-left leading-none">
          {{ property.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Properties from "@/data/Properties.js";
export default {
  name: "DetailView",
  data() {
    return {
      properties: Properties
    };
  },
  computed: {
    property() {
      return Properties.filter(item => item.id == this.$route.params.id)[0];
    }
  }
};
</script>
