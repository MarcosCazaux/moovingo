<template>
  <header :class="'sticky top-0 ' + view">
    <nav
      class="container flex justify-between items-center text-gray-700 text-center text-sm p-5 lg:pr-16 lg:pl-16"
    >
      <Logo />
      <div class="flex flex-grow justify-end items-center">
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="bg-primary text-white py-2 px-4 rounded">
              Book Free Valuation
            </button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/list">
            <button class="py-2 px-4 rounded">Browse Listings</button>
          </router-link>
        </div>
        <div class="ml-2 lg:hidden">
          <router-link to="/list">
            <button class="bg-primary text-white py-2 px-4 rounded">
              Browse Listings
            </button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="py-2 px-4 rounded">Our Fees</button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="py-2 px-4 rounded">Selling</button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="py-2 px-4 rounded">More</button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="py-2 px-4 rounded">01 5169999</button>
          </router-link>
        </div>
        <div class="ml-2 hidden lg:block">
          <router-link to="/soon">
            <button class="bg-primary text-white py-2 px-4 rounded">
              Login
            </button>
          </router-link>
        </div>
      </div>
      <div class="ml-2 lg:hidden">
        <button class="flex items-center px-3 py-2 rounded">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "Header",
  components: {
    Logo
  },
  computed: {
    view() {
      return this.$route.name;
    }
  }
};
</script>
