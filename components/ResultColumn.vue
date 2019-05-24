<template>
  <dev>
    <b-card bg-variant="light" text-variant="black">
      <b-card-text class="text-center text">
        {{ date }} | {{ univ }} | {{ place }}
      </b-card-text>
      <div class="detail-btn text-center">
        <nuxt-link
          class="btn btn-info"
          role="button"
          :to="{ name: 'results-slug', params: { slug: id } }"
        >
          More
        </nuxt-link>
      </div>
    </b-card>
  </dev>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    date: {
      type: Object,
      default: undefined
    },
    univ: {
      type: String,
      default: ''
    },
    place: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
</style>
