<template>
  <ul class="flex flex-col sm:flex-row flex-wrap justify-between">
    <li
      class="cards overflow-hidden bg-neutral mb-10"
      v-for="(property, x) in properties2"
      :key="x"
    >
      <router-link :to="{ params: { id: property.id } }">
        <img
          class="w-full"
          src="https://images.adsttc.com/media/images/5014/01bd/28ba/0d3b/4500/0b8c/slideshow/stringio.jpg"
          alt="Sunset in the mountains"
        />
        {{ property.id }}{{ x }}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ property.price }}</div>
          <div class="text-gray-700 text-base">{{ property.resume }}</div>
          <div class="font-bold text-xl mb-2">{{ property.name }}</div>
          <p class="text-gray-700 text-base">{{ property.description }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PropertiesList",
  props: {
    properties2: {
      type: Array
    }
  }
};
</script>
