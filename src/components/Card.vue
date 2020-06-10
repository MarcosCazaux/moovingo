<template>
  <router-link
    :to="{ name: 'DetailView', params: { id: property.id, data: property } }"
  >
    <figure class="w-full">
      <picture>
        <img :src="property.photo" :alt="property.name" />
      </picture>
      <figcaption class="px-6 py-4">
        <div class="flex mb-4">
          <div class="w-1/2 font-bold text-2xl">{{ property.price }}</div>
          <div class="w-1/2 text-gray-700 text-base text-right">
            {{ property.resume }}
          </div>
        </div>
        <div class="flex">
          <div class="w-full font-bold text-xl">{{ property.name }}</div>
        </div>
        <div class="flex">
          <div class="w-full text-gray-700 text-base">
            {{ property.description }}
          </div>
        </div>
      </figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    property: {
      type: Object
    }
  },
  data() {
    return {
      datos: "{{property.description}}"
    };
  }
};
</script>
