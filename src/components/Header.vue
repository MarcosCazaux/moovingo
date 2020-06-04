<template>
  <header class="sticky top-0 bg-white">
    <nav class="container flex justify-between items-center text-sm p-5 sm:pr-16 sm:pl-16">
      <div class="text-gray-700 text-center">
        <div class="flex justify-end">
          <div class="text-gray-700 text-center">
            <Logo />
          </div>
        </div>
      </div>
      <div class="text-gray-700 text-center flex-grow">
        <div class="flex justify-end items-center">
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button
                class="bg-primary hover:bg-blue text-white py-2 px-4 rounded"
              >Book Free Valuation</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-gray-700 text-center">
        <div class="flex justify-end items-center hidden xl:flex">
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/search">
              <button class="bg-white hover:text-blue py-2 px-4 rounded">Browse Listings</button>
            </router-link>
          </div>
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button class="bg-white hover:text-blue py-2 px-4 rounded">Our Fees</button>
            </router-link>
          </div>
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button class="bg-white hover:text-blue py-2 px-4 rounded">Selling</button>
            </router-link>
          </div>
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button class="bg-white hover:text-blue py-2 px-4 rounded">More</button>
            </router-link>
          </div>
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button class="bg-white hover:text-blue py-2 px-4 rounded">01 5169999</button>
            </router-link>
          </div>
          <div class="text-gray-700 text-center ml-2">
            <router-link to="/soon">
              <button class="bg-primary hover:bg-blue text-white py-2 px-4 rounded">Login</button>
            </router-link>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="text-gray-700 text-center xl:hidden ml-2">
            <button
              class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
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
        </div>
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
  }
};
</script>
