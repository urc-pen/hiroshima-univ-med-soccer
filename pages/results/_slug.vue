<template>
  <div>
    <common-header />
    <div class="container-fluid container-slug table-size">
      <table
        width="100%"
        border="2"
        cellspacing="0"
        style="margin-left: auto; margin-right: auto;"
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
            <td colspan="5">
              得点者<br />
              <br />
              {{ goaler }}
            </td>
            <td colspan="2">
              警告・退場<br />
              <br />
              {{ fauls }}
            </td>
          </tr>
          <tr align="left" valign="top">
            <td colspan="7">
              メンバー<br />
              GK）{{ GK }}<br />
              DF）{{ DF }}<br />
              MF）{{ MF }}<br />
              FW）{{ FW }}<br />
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
          fauls: result.fields.fauls,
          goaler: result.fields.goaler,
          weather: result.fields.weather
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
