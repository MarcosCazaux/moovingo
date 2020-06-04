<template>
  <div class="w-full sm:w-1/2 bg-gray-500">{{itemData}}</div>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    itemData: String
  }
};
</script>