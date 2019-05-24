<template>
  <div>
    <common-header />
    <div class="links text-center">
      <b-button
        class="buho-button"
        pill
        variant="outline-danger"
        target="_blank"
        :href="buhou.fields.buhoupdf.fields.file.url"
      >
        最新の部報はこちら
      </b-button>
      <b-button
        class="facebook-button"
        pill
        variant="primary"
        href="https://www.facebook.com/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6%E5%8C%BB%E5%AD%A6%E9%83%A8%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC%E9%83%A8-729560370396847/timeline/"
        target="_blank"
        >facebook</b-button
      >
      <div class="follow-button">
        <a
          href="https://twitter.com/HIROmedsoccer?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
          >Follow @HIROmedsoccer</a
        ><script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
      <div class="timeline">
        <a
          class="twitter-timeline"
          data-width="500"
          data-height="400"
          href="https://twitter.com/HIROmedsoccer?ref_src=twsrc%5Etfw"
          >Tweets by HIROmedsoccer</a
        >
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
    <footer class="text-center">
      <font color="#cfd2d6">created by S.Urushidani</font>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    'common-header': Header
  },
  async asyncData({ env }) {
    const buhou = await client.getEntries({
      content_type: 'buhou'
    })
    return {
      buhou: buhou.items[0]
    }
  }
}
</script>
<style>
.buho-button {
  white-space: nowrap;
}
.facebook-button {
  margin: 20px;
}
.links {
  margin: 100px;
}
</style>
