<template>
  <div
    class="py-6 px-8 self-center bg-red-500 text-white rounded-lg relative"
    v-show="message"
  >
    <button
      class="absolute top-4 right-4 focus:outline-none"
      @click="message = ''"
    >
      <svg
        class="h-4 w-4 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <span class="my-6 mx-8">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>
