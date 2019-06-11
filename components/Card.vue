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
        <nuxt-link
          class="btn-card"
          role="button"
          :to="{ name: 'members-slug', params: { slug: id } }"
        />
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
.card-dayo {
  position: relative;
  z-index: 1;
}
.btn {
  position: relative;
  z-index: 3;
}
.btn-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-indent: -999px;
  z-index: 2;
}
.card-dayo:hover {
  filter: alpha(opacity=70); /* IE 6,7*/
  -ms-filter: 'alpha(opacity=70)'; /* IE 8,9 */
  -moz-opacity: 0.7; /* FF , Netscape */
  -khtml-opacity: 0.7; /* Safari 1.x */
  opacity: 0.7;
  zoom: 1; /*IE*/
}
</style>
