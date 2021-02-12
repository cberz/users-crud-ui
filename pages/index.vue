<template>
  <div class="mt-12 px-24 flex flex-col">
    <div class="self-end">
      <NuxtLink
        class="py-3 px-6 space-x-2 inline-flex items-center bg-green-500 text-white rounded-lg hover:bg-green-600"
        to="/user"
      >
        <svg
          class="h-6 w-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
        <span>Create new User</span>
      </NuxtLink>
    </div>
    <div class="mt-12 flex-1">
      <table class="w-full h-full table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile pic</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>
