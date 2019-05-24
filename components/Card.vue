<template>
  <div>
    <b-card
      class="card-dayo"
      :img-src="photo.fields.file.url"
      img-alt="Card Image"
      img-height="200"
      img-top
      style="max-width: 300px;"
    >
      <div class="text">
        <b-card-text class="flex-nowrap text-center">
          {{ nameja }} {{ enteryear }}年
        </b-card-text>
      </div>
      <div class="text-center">
        <nuxt-link
          class="btn btn-outline-info"
          role="button"
          :to="{ name: 'members-slug', params: { slug: id } }"
        >
          More
        </nuxt-link>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    photo: {
      type: Object,
      default: undefined
    },
    nameja: {
      type: String,
      default: ''
    },
    enteryear: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>
.text {
  white-space: nowrap;
  margin-bottom: 0.7rem;
}
</style>
