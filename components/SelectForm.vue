<template>
  <div class="form-size">
    <b-form
      inline
      class="flex-nowrap justify-content-center"
      @reset.prevent="resetMembers"
    >
      <b-form-select v-model="selected" :options="options" @change="setMembers">
        <template slot="first">
          <option :value="null" disabled>
            --学年を選択--
          </option>
        </template>
      </b-form-select>
      <b-button type="reset" variant="success" class="button-text">
        一覧に戻る
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: 6, text: '6年生' },
        { value: 5, text: '5年生' },
        { value: 4, text: '4年生' },
        { value: 3, text: '3年生' },
        { value: 2, text: '2年生' },
        { value: 1, text: '1年生' }
      ]
    }
  },
  methods: {
    setMembers() {
      this.$emit('request-set', this.selected)
    },
    resetMembers() {
      this.selected = null
      this.$emit('request-set', 0)
    }
  }
}
</script>
<style scoped>
.form-size {
  margin: 50px;
}
.button-text {
  white-space: nowrap;
}
</style>
