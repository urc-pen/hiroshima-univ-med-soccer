<template>
  <div>
    <common-header />
    <div id="banner" class="container-fluid text-center">
      <h1>Results</h1>
    </div>
    <div class="container-fluid">
      <result-column
        v-for="result in results"
        :id="result.sys.id"
        :key="result.sys.id"
        :place="result.fields.place"
        :univ="result.fields.univ"
        :date="result.fields.date"
      />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ResultColumn from '~/components/ResultColumn'
import Header from '~/components/Header'

const client = createClient()

export default {
  components: {
    'result-column': ResultColumn,
    'common-header': Header
  },
  async asyncData({ env }) {
    const results = await client.getEntries({
      content_type: 'result',
      order: '-fields.date'
    })
    return {
      results: results.items
    }
  }
}
</script>
<style>
#banner {
  margin-top: 70px;
  margin-bottom: 20px;
}
.card-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 0.7rem;
  justify-content: center;
}
</style>
