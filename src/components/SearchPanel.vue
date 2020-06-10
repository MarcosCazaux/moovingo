<template>
  <div>
    <h1 class="text-4xl text-center leading-none">Property Search</h1>
    <form class="w-full">
      <div class="flex flex-wrap bg-neutral rounded py-5 px-8 my-8 lg:my-16">
        <div class="w-full lg:w-1/4 px-3 mb-6 lg:mb-0">
          <input
            class="appearance-none block w-full bg-transparent border-b-2 border-primary py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="All countries"
          />
        </div>
        <div class="w-full lg:w-1/4 px-3 mb-6 lg:mb-0">
          <input
            class="appearance-none block w-full bg-transparent border-b-2 border-primary py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Select a country first"
          />
        </div>
        <div class="w-full lg:w-1/4 px-3 mb-6 lg:mb-0">
          <input
            class="appearance-none block w-full bg-transparent border-b-2 border-primary py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="No max price"
          />
        </div>
        <div class="w-full lg:w-1/4 px-3 mb-6 lg:mb-0">
          <button
            class="flex-shrink-0 bg-primary hover:bg-primary border-primary hover:border-primary text-sm border-4 text-white py-1 px-2 rounded w-full"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchPanel"
};
</script>
