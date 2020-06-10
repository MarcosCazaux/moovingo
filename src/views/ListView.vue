<template>
  <section>
    <div class="container pr-5 pl-5 sm:pr-16 sm:pl-16 mb-10">
      <SearchPanel />
      <PropertiesList v-bind:properties2="properties" />
    </div>
  </section>
</template>

<script>
import SearchPanel from "@/components/SearchPanel.vue";
import PropertiesList from "@/components/PropertiesList.vue";
import Properties from "@/data/Properties.js";

export default {
  name: "ListView",
  components: {
    SearchPanel,
    PropertiesList
  },
  data() {
    return {
      properties: Properties
    };
  }
};
</script>
