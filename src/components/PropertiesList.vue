<template>
  <ul class="flex flex-col lg:flex-row flex-wrap justify-between">
    <li
      class="cards overflow-hidden bg-neutral mb-10"
      v-for="(property, x) in properties"
      :key="x"
    >
      <Card :property="property" />
    </li>
  </ul>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "PropertiesList",
  components: {
    Card
  },
  props: {
    properties: {
      type: Array
    }
  }
};
</script>
