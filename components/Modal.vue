<template>
  <div
    class="bg-[#000000] flex justify-center items-center py-12 bg-opacity-[96%] fixed top-0 bottom-0 left-0 right-0 overflow-hidden"
  >
    <div class="max-h-full max-w-full relative">
      <button
        @click="handleCloseModal"
        class="z-10 absolute -top-8 right-4 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <nuxt-img class="rounded-xl" v-if="card.isPhoto" :src="imgUrl" />
      <video v-else ref="videoRef" src=""></video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
  computed: {
    videoUrl() {
      return require(`@/static/videos/${this.card.name}`)
    },
    imgUrl() {
      return `/photos/${this.card.name}`
    },
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal')
    },
  },
  mounted() {
    if (!this.card.isPhoto) {
      this.$refs.videoRef.src = this.videoUrl
      this.$refs.videoRef.play()
    }
  },
}
</script>
