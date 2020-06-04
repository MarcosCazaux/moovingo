<template>
  <section>
    <div class="container pr-5 pl-5 sm:pr-16 sm:pl-16 mb-10">
      <h1 class="text-4xl text-center leading-none">Property Search</h1>
      <div class="flex flex-wrap">
        <div class="w-full bg-orange searchPanel">searchPanel</div>
      </div>
      <div class="flex flex-wrap">
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
        <SearchItem itemData="Casa 1" />
      </div>
    </div>
  </section>
</template>

<script>
import SearchItem from "@/components/SearchItem.vue";

export default {
  name: "Search",
  components: {
    SearchItem
  }
};
</script>
