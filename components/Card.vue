<template>
  <div class="w-full overflow-hidden cursor-pointer" @click="handleCardClick">
    <nuxt-img class="rounded-xl" v-if="card.isPhoto" :src="imgUrl" />
    <video
      v-else
      :src="videoUrl"
      class="rounded-xl"
      autoplay
      playsinline
      defaultMuted
      loop
      muted
    ></video>
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
    handleCardClick() {
      this.$emit('card-click', this.card)
    },
  },
}
</script>
