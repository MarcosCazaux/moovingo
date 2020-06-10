<template>
  <section>
    <div class="container mx-auto px-5 lg:px-16 mb-8 lg:mb-16">
      <SearchPanel />
      <PropertiesList :properties="properties" />
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
