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
        v-if="!this.$store.state.apiToken"
      >
        Login
      </NuxtLink>
      <button
        class="py-3 px-6 space-x-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
        @click="logout()"
        v-else
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$axios
        .$post("/api/logout", null, {
          headers: {
            Authorization: `Bearer ${this.$store.state.apiToken}`,
          },
        })
        .then((res) => {
          this.$store.commit("setApiToken", null);
          this.$router.push({ path: "/login" });
        });
    },
  },
};
</script>
