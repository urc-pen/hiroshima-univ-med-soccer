<template>
  <div>
    <common-header />
    <div class="container-fluid container-slug">
      <table border style="margin-left: auto; margin-right: auto;">
        <tbody>
          <tr>
            <th colspan="5" width="580" height="50" style="text-align: center;">
              {{ nameen }}（{{ nameja }}）
            </th>
          </tr>
          <tr>
            <td width="100" height="50" style="text-align: center;">
              {{ number }}
            </td>
            <td width="100" style="text-align: center;">{{ position }}</td>
            <td colspan="2" width="230" style="text-align: center;">
              {{ faculty }}
            </td>
            <td width="150" style="text-align: center;">{{ highschool }}</td>
          </tr>
          <tr>
            <td colspan="3" height="300">
              <img
                :src="photo.fields.file.url"
                width="330"
                height="300"
                style="display: block; margin-left: auto; margin-right: auto; margin-top: auto; margin-bottom: auto;"
              />
            </td>
            <td colspan="2">
              <img
                :src="chart.fields.file.url"
                width="280"
                height="175"
                style="display: block; margin-left: auto; margin-right: auto;"
              />
            </td>
          </tr>
          <tr>
            <td colspan="5" width="580" height="150" class="text-center">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="introduction" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import contentful from '~/plugins/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const client = contentful.createClient()

export default {
  transition: 'slide-right',
  components: {
    'common-header': Header
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        'sys.id': params.slug
      })
      .then(entry => {
        return {
          member: entry.items[0]
        }
      })
      .then(({ member }) => {
        return {
          member: member,
          enteryear: member.fields.enteryear,
          nameja: member.fields.nameja,
          nameen: member.fields.nameen,
          photo: member.fields.photo,
          chart: member.fields.chart,
          introduction: documentToHtmlString(member.fields.introduction),
          highschool: member.fields.highschool,
          faculty: member.fields.faculty,
          position: member.fields.position,
          number: member.fields.number
        }
      })
      .catch()
  }
}
</script>

<style scoped>
.container-slug {
  margin-top: 50px;
  padding: 20px;
  max-width: 1000px;
}
.slug-title {
  font-size: 24px;
  padding: 10px 10px 0px 10px;
}

.slug-subtitle {
  font-size: 16px;
  padding: 10px 10px 0px 10px;
}

.tag-style {
  margin: 5px;
}

.slug-date {
  margin: 10px;
}

.top-info {
  background-color: gainsboro;
}

.member-link {
  display: inline-block;
  margin: 10px;
}

.dataset-table {
  max-width: 800px;
}
</style>
