<template>
  <div>
    <common-header />
    <div class="container-fluid container-slug table-size">
      <table
        width="100%"
        border="2"
        cellspacing="0"
        style="margin-left: auto; margin-right: auto; table-layout: fixed;"
      >
        <tbody>
          <tr align="center" valign="center">
            <td colspan="2">{{ date }}</td>
            <td colspan="3">{{ place }}</td>
            <td colspan="2">{{ weather }}</td>
          </tr>
          <tr align="center" valign="center">
            <td colspan="7">{{ univ }}</td>
          </tr>
          <tr align="center" valign="center">
            <td colspan="2" rowspan="2">{{ thscore }}</td>
            <td>{{ fhscore }}</td>
            <td rowspan="2">-</td>
            <td>{{ foscore }}</td>
            <td colspan="2" rowspan="2">{{ toscore }}</td>
          </tr>
          <tr align="center" valign="center">
            <td>{{ shscore }}</td>
            <td>{{ soscore }}</td>
          </tr>
          <tr align="left" valign="top">
            <td colspan="4">
              <p>[得点者]</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span style="line-height: 0.5;" v-html="goaler" />
            </td>
            <td colspan="3">
              <p>[警告・退場]</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span style="line-height: 0.5;" v-html="fauls" />
            </td>
          </tr>
          <tr align="left" valign="top">
            <td colspan="7">
              [メンバー]<br />
              GK）{{ GK }}<br />
              DF）{{ DF }}<br />
              MF）{{ MF }}<br />
              FW）{{ FW }}<br />
            </td>
          </tr>
          <tr align="left" valign="top">
            <td colspan="7">
              <p>[その他]</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span style="line-height: 0.5;" v-html="etc" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slug-result-button text-center">
      <nuxt-link class="btn btn-outline-success" role="button" to="/results">
        一覧に戻る
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import contentful from '~/plugins/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const client = contentful.createClient()

export default {
  components: {
    'common-header': Header
  },
  computed: {
    thscore: function() {
      return this.fhscore + this.shscore
    },
    toscore: function() {
      return this.foscore + this.soscore
    }
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        'sys.id': params.slug
      })
      .then(entry => {
        return {
          result: entry.items[0]
        }
      })
      .then(({ result }) => {
        if (result.fields.fauls === undefined) {
          return {
            result: result,
            date: result.fields.date,
            place: result.fields.place,
            univ: result.fields.univ,
            fhscore: result.fields.fhscore,
            shscore: result.fields.shscore,
            foscore: result.fields.foscore,
            soscore: result.fields.soscore,
            GK: result.fields.gk,
            DF: result.fields.df,
            MF: result.fields.mf,
            FW: result.fields.fw,
            fauls: 'なし',
            goaler: documentToHtmlString(result.fields.goaler),
            weather: result.fields.weather,
            etc: documentToHtmlString(result.fields.etc)
          }
        } else {
          return {
            result: result,
            date: result.fields.date,
            place: result.fields.place,
            univ: result.fields.univ,
            fhscore: result.fields.fhscore,
            shscore: result.fields.shscore,
            foscore: result.fields.foscore,
            soscore: result.fields.soscore,
            GK: result.fields.gk,
            DF: result.fields.df,
            MF: result.fields.mf,
            FW: result.fields.fw,
            fauls: documentToHtmlString(result.fields.fauls),
            goaler: documentToHtmlString(result.fields.goaler),
            weather: result.fields.weather,
            etc: documentToHtmlString(result.fields.etc)
          }
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
.slug-result-button {
  margin-bottom: 20px;
  white-space: nowrap;
}
</style>
