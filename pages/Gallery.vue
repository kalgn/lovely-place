<template>
  <div class="p-4">
    <Modal
      v-if="modalStatus"
      @close-modal="handleCloseModal"
      :card="modalCard"
    />
    <div class="w-full flex justify-center">
      <nuxt-img class="w-10" src="/heart-beat.png" />
    </div>
    <Card class="mt-3" :card="bannerCard" @card-click="handleModal" />
    <div class="mt-3 flex gap-3">
      <div class="flex-1 space-y-3">
        <Card v-for="card in c1" :card="card" @card-click="handleModal" />
      </div>
      <div class="flex-1 space-y-3">
        <Card v-for="card in c2" :card="card" @card-click="handleModal" />
      </div>
    </div>
    <div
      class="pt-3 text-center text-xs font-mono font-medium flex w-full justify-center space-x-1 items-center"
    >
      <span class="">cam on cau da luot den day, iu cau!! </span
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#f22828"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: { Card, Modal },
  data() {
    return {
      modalStatus: false,
      modalCard: null,
      bannerCard: { name: 'gn3.mp4', isPhoto: false },
      c1: [
        { name: 'gn10.mp4', isPhoto: false },
        { name: 'gn7_1.jpg', isPhoto: true },
        { name: 'gn6_1.jpg', isPhoto: true },
        { name: 'gn15.mp4', isPhoto: false },
        { name: 'gn10_1.jpg', isPhoto: true },
        { name: 'gn8_1.jpg', isPhoto: true },
        { name: 'gn6_3.jpg', isPhoto: true },
        { name: 'gn8.mp4', isPhoto: false },
        { name: 'gn8_3.jpg', isPhoto: true },
        { name: 'gn5.mp4', isPhoto: false },
        { name: 'gn3_2.jpg', isPhoto: true },
        { name: 'gn1_3.jpg', isPhoto: true },
        { name: 'gn2_3.jpg', isPhoto: true },
        { name: 'gn9_2.jpg', isPhoto: true },
        { name: 'gn1_1.jpg', isPhoto: true },
        { name: 'gn1.mp4', isPhoto: false },
        { name: 'gn7_3.jpg', isPhoto: true },
        { name: 'gn6.mp4', isPhoto: false },
        { name: 'gn5_1.jpg', isPhoto: true },
        { name: 'gn18.mp4', isPhoto: false },
        { name: 'gn4_1.jpg', isPhoto: true },
      ],
      c2: [
        { name: 'gn17.mp4', isPhoto: false },
        { name: 'gn2.mp4', isPhoto: false },
        { name: 'gn7_2.jpg', isPhoto: true },
        { name: 'gn4.mp4', isPhoto: false },
        { name: 'gn10_2.jpg', isPhoto: true },
        { name: 'gn8_2.jpg', isPhoto: true },
        { name: 'gn6_2.jpg', isPhoto: true },
        { name: 'gn7.mp4', isPhoto: false },
        { name: 'gn8_4.jpg', isPhoto: true },
        { name: 'gn1_5.jpg', isPhoto: true },
        { name: 'gn14.mp4', isPhoto: false },
        { name: 'gn2_2.jpg', isPhoto: true },
        { name: 'gn3_1.jpg', isPhoto: true },
        { name: 'gn9.mp4', isPhoto: false },
        { name: 'gn6_4.jpg', isPhoto: true },
        { name: 'gn1_4.jpg', isPhoto: true },
        { name: 'gn7_4.jpg', isPhoto: true },
        { name: 'gn13.mp4', isPhoto: false },
        { name: 'gn9_1.jpg', isPhoto: true },
        { name: 'gn9_3.jpg', isPhoto: true },
        { name: 'gn12.mp4', isPhoto: false },
        { name: 'gn11.mp4', isPhoto: false },
      ],
    }
  },
  async beforeCreate() {
    const isLoggedIn = this.$store.state.isLoggedIn
    if (!isLoggedIn) {
      this.$router.push('/')
      return
    }
  },
  methods: {
    handleModal(card) {
      this.modalCard = { ...card }
      this.modalStatus = true
    },
    handleCloseModal() {
      this.modalStatus = false
    },
  },
}
</script>
