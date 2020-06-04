<template>
  <div class="footer-item">
    <h6 class="mb-3" v-if="title">{{ title }}</h6>
    <span v-if="content" v-html="content"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  props: {
    title: String,
    content: String
  }
};
</script>
