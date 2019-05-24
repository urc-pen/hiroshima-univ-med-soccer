<template>
  <div>
    <common-header />
    <div class="container-fluid text-center text-dev">
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template slot="header">
          活動内容
        </template>
        <template slot="lead">
          私たち広島大学医学部サッカー部は、中国大会（２月）・中国四国大会（６月）・西医体（８月）での３冠をチームの第一目標として活動しています。
          部員は広大の医学部・薬学部の学生で、多くはサッカー経験者ですが、中には大学に入ってからサッカーを始めた人もおり、
          経験で差別することなくチーム全員で切磋琢磨し合い、３冠を達成するために練習に励んでいます。
          練習は、毎週月曜日と水曜日が霞キャンパス周辺の中学校で、土曜日は海田や揚倉山のグラウンドで行います。
          土日には練習試合が入ることもあり医学部戦だけでなく、広島工業大学や修道大学などの格上の大学とも試合をしています。
        </template>
      </b-jumbotron>
      <b-jumbotron
        bg-variant="success"
        text-variant="white"
        border-variant="dark"
      >
        <template slot="header">
          イベント
        </template>
        <template slot="lead">
          春休みや夏休みなどの長期休みの間は、他校との交流も兼ねた遠征があります。その時には現地の名産品などをみんなで食べに行きます。
          夏には毎年近くの海に行って寄せては返す波を追いかけてみたり、ビアガーデンで夏の匂いを感じながら飲んだり、冬には鍋パをしたりしています。
          先輩後輩関わらず集まって飲み会をしたり、ゲームをしたり、楽しい部活です。
        </template>
      </b-jumbotron>
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template slot="header">
          年間予定
        </template>
        <template slot="lead">
          <div class="text-center">
            <table border="2" style="margin-left: auto; margin-right: auto;">
              <tbody>
                <tr>
                  <td width="100" style="text-align: center;">4月</td>
                  <td width="300" style="text-align: center;">
                    入学式 緑風会
                  </td>
                </tr>
                <tr>
                  <td width="100" style="text-align: center;">5月</td>
                  <td width="300" style="text-align: center;">
                    OB会 新入生歓迎会
                  </td>
                </tr>
                <tr>
                  <td width="100" style="text-align: center;">6月</td>
                  <td width="300" style="text-align: center;">
                    中国四国医科学生サッカー大会
                  </td>
                </tr>
              </tbody>
              <tr>
                <td width="100" style="text-align: center;">7月</td>
                <td width="300" style="text-align: center;">練習合宿</td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">8月</td>
                <td width="300" style="text-align: center;">
                  西日本医科学生総合体育大会
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">9月</td>
                <td width="300" style="text-align: center;">
                  OFF
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">10月</td>
                <td width="300" style="text-align: center;">
                  練習再開 練習合宿 OB会
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">11月</td>
                <td width="300" style="text-align: center;">
                  霞サッカー大会 霞祭
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">12月</td>
                <td width="300" style="text-align: center;">
                  OB会 忘年会
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">1月</td>
                <td width="300" style="text-align: center;">追いコン<br /></td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">2月</td>
                <td width="300" style="text-align: center;">
                  中国医科学生サッカー大会
                </td>
              </tr>
              <tr>
                <td width="100" style="text-align: center;">3月</td>
                <td width="300" style="text-align: center;">
                  遠征（東京・九州など）
                </td>
              </tr>
            </table>
          </div>
        </template>
      </b-jumbotron>
      <div class="container-fluid img-position">
        <img src="~/assets/shimiken.png" alt="" />
      </div>
      <footer class="text-center">
        <font color="#cfd2d6">created by S.Urushidani</font>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    'common-header': Header
  }
}
</script>
<style>
.text-dev {
  margin-top: 100px;
  max-width: 1000px;
}
.img-position {
  margin-top: 50px;
  padding: 0;
}
.mgr {
  margin-right: 20px;
}
.columns {
  justify-content: center;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
