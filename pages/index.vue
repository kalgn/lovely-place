<template>
  <form
    @submit.prevent="handleLogin"
    class="w-screen h-screen flex items-center justify-center"
  >
    <div class="space-y-3">
      <div class="flex flex-col space-y-1 font-mono">
        <label for="password" class="ml-[18px]">Nhap pass minh dua cau:</label>
        <input
          type="password"
          id="password"
          @input="errorMessage = ''"
          placeholder="****"
          v-model="password"
          class="appearance-none outline-none border-2 border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:ring-opacity-40 focus:border-pink-400 transition-all duration-150"
        />
      </div>
      <p
        v-if="errorMessage"
        class="ml-[18px] font-mono text-sm text-red-600 font-medium"
      >
        {{ errorMessage }}
      </p>
      <button
        type="submit"
        class="w-full flex font-mono items-center justify-center space-x-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-150 focus:ring-2 focus:ring-offset-1 focus:ring-gray-600 focus:ring-opacity-70"
      >
        <span>Vao thui</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#ff7878"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    handleLogin() {
      if (!this.password) {
        this.errorMessage = 'Nhap di dung de trong +_+'
        return
      }
      if (this.password === 'iugn') {
        this.$store.dispatch('login').then(() => {
          this.$router.push('/gallery')
        })
      } else {
        this.errorMessage = 'Sai uii nhap lai nha!!'
      }
    },
  },
}
</script>
