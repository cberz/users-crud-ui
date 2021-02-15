<template>
  <div class="px-12 flex justify-between items-center border-b">
    <NuxtLink to="/">
      <img
        class="h-24 w-auto"
        src="~/assets/img/logo.png"
        alt="Personal logo"
      />
    </NuxtLink>
    <div class="space-x-6 flex">
      <NuxtLink
        class="py-3 px-6 space-x-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
        to="/login"
      >
        Login
      </NuxtLink>
    </div>
  </div>
</template>
