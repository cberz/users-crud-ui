<template>
  <div class="mt-8 flex flex-col">
    <Message :message="message" />

    <span class="mt-1 text-red-500" v-if="errors && errors.lastname">
      {{ errors.lastname[0] }}
    </span>
    <div class="my-8 mx-32 space-x-8 flex">
      <div class="w-1/4">
        <h3 class="text-right text-3xl font-medium leading-6">Update</h3>
        <p class="mt-2 text-right text-lg font-light">Personal Information</p>
      </div>
      <div class="w-3/4">
        <form @submit.prevent="submit">
          <div class="shadow sm:rounded-md">
            <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
              <div
                class="space-y-8 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-12"
              >
                <div class="flex-1">
                  <label for="name" class="block font-medium">First name</label>
                  <input
                    type="text"
                    name="name"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.name"
                  />

                  <span class="mt-1 text-red-500" v-if="errors && errors.name">
                    {{ errors.name[0] }}
                  </span>
                </div>

                <div class="flex-1">
                  <label for="lastname" class="block font-medium"
                    >Last name</label
                  >
                  <input
                    type="text"
                    name="lastname"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.lastname"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.lastname"
                  >
                    {{ errors.lastname[0] }}
                  </span>
                </div>
              </div>

              <div
                class="space-y-8 flex flex-col items-center lg:flex-row lg:space-y-0 lg:space-x-12"
              >
                <div class="w-2/3">
                  <label for="email" class="block font-medium"
                    >Email address</label
                  >
                  <input
                    type="text"
                    name="email"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.email"
                  />

                  <span class="mt-1 text-red-500" v-if="errors && errors.email">
                    {{ errors.email[0] }}
                  </span>
                </div>
                <div class="flex space-x-4">
                  <label for="is_admin" class="font-medium"
                    >Is an Admin user</label
                  >
                  <input
                    type="checkbox"
                    name="is_admin"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block shadow-sm border-gray-300 rounded-md"
                    v-model="user.is_admin"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.is_admin"
                  >
                    {{ errors.is_admin[0] }}
                  </span>
                </div>
              </div>

              <div
                class="space-y-8 flex flex-col items-center lg:flex-row lg:space-y-0 lg:space-x-12"
              >
                <div class="flex-1">
                  <label for="personal_id" class="block font-medium"
                    >Personal ID</label
                  >
                  <input
                    type="number"
                    name="personal_id"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.personal_id"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.personal_id"
                  >
                    {{ errors.personal_id[0] }}
                  </span>
                </div>

                <div class="flex-1">
                  <label for="date_of_birth" class="block font-medium"
                    >Date of birth</label
                  >
                  <input
                    type="date"
                    name="date_of_birth"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.date_of_birth"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.date_of_birth"
                  >
                    {{ errors.date_of_birth[0] }}
                  </span>
                </div>
              </div>
              <div
                class="space-y-8 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-12"
                v-if="user.is_admin"
              >
                <div class="flex-1">
                  <label for="password" class="block font-medium"
                    >Password</label
                  >
                  <input
                    type="password"
                    name="password"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.password"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.password"
                  >
                    {{ errors.password[0] }}
                  </span>
                </div>

                <div class="flex-1">
                  <label for="password_confirmation" class="block font-medium"
                    >Password confirmation</label
                  >
                  <input
                    type="password"
                    name="password_confirmation"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md"
                    v-model="user.password_confirmation"
                  />

                  <span
                    class="mt-1 text-red-500"
                    v-if="errors && errors.password_confirmation"
                  >
                    {{ errors.password_confirmation[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                @click.prevent="updateUser()"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      message: "",
      errors: {},
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      this.$axios
        .$get(`/api/users/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.apiToken}`,
          },
        })
        .then((res) => {
          this.user = res.data;
          this.user.date_of_birth = res.data.date_of_birth.substring(0, 10);
        });
    },
    updateUser() {
      this.$axios
        .$put(`/api/users/${this.$route.params.id}`, this.user, {
          headers: {
            Authorization: `Bearer ${this.$store.state.apiToken}`,
          },
        })
        .then((res) => {
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.message = error.response.data.message;
            this.errors = error.response.data.errors;
          }
          if (error.response.status == 401) {
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>
