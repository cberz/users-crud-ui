<template>
  <div class="mt-10 px-24 flex flex-col">
    <Message :message="message" />
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
    <div class="mt-6 flex-1">
      <table class="w-full h-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Personal ID
            </th>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Age
            </th>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Is Admin
            </th>
            <th
              class="py-4 px-6 text-left text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="" v-for="user in users" :key="user.id">
            <td class="py-4 px-6">{{ user.personal_id }}</td>
            <td class="py-4 px-6 space-x-4 flex items-center">
              <img
                class="h-12 w-12 rounded-full border-2 border-green-400"
                :src="user.avatar"
                alt="User Picture"
              />
              <span>{{ user.name }} {{ user.lastname }}</span>
            </td>
            <td class="py-4 px-6">{{ user.email }}</td>
            <td class="py-4 px-6">{{ user.age }}</td>
            <td class="py-4 px-6">
              <svg
                class="h-8 w-8 stroke-current text-green-400"
                v-if="user.is_admin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </td>
            <td class="py-4 px-6">
              <div class="space-x-6 flex items-center">
                <NuxtLink :to="{ name: 'users-id', params: { id: user.id } }">
                  <svg
                    class="h-4 w-4 stroke-current text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </NuxtLink>
                <button class="focus:outline-none" @click="deleteUser(user.id)">
                  <svg
                    class="h-4 w-4 stroke-current text-red-600"
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
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      message: "",
    };
  },
  created() {
    this.getUsers();
  },
  watch: {
    message(message) {
      if (message) {
        setTimeout(() => (this.message = ""), 3000);
      }
    },
  },
  methods: {
    getUsers() {
      this.$axios.$get("/api/users").then((res) => {
        this.users = res.data;
      });
    },
    deleteUser(id) {
      this.$axios.$delete(`/api/users/${id}`).then((res) => {
        this.message = res.message;
        this.getUsers();
      });
    },
  },
};
</script>
