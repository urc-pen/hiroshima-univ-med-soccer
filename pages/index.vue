<template>
  <div>
    <common-header />
    <div class="container-fluid img-wrap aramaki">
      <img src="~/assets/aramakijump.png" alt="" />
    </div>
    <div class="container-fluid text-center under-aramaki">
      <h3 class="text-yusho">
        <span>
          Hiroshima University
        </span>
        <span>
          Medical Soccer Club
        </span>
      </h3>
      <h5 class="text-members">
        <span class="mgr">主将：{{ represents.fields.captain }}</span
        ><span>主務：{{ represents.fields.manager }}</span>
      </h5>
      <h5 class="text-members">
        ご連絡は主務まで
      </h5>
    </div>
    <div class="schedule">
      <h4 class="text-center">
        <b>今後の日程（{{ schedule.fields.month }}）</b>
      </h4>
      <div class="calender text-center">
        <b-img :src="schedule.fields.calender.fields.file.url" />
      </div>
    </div>
    <footer class="text-center">
      <font color="#cfd2d6">created by S.Urushidani</font>
    </footer>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Header from '~/components/Header'

const client = createClient()

export default {
  components: {
    'common-header': Header
  },
  async asyncData({ env }) {
    const schedule = await client.getEntries({
      content_type: 'schedule'
    })
    const represets = await client.getEntries({
      content_type: 'represets'
    })
    return {
      schedule: schedule.items[0],
      represents: represets.items[0]
    }
  }
}
</script>
<style>
.aramaki {
  padding: 0px;
}
.under-aramaki {
  margin-top: -50px;
  background-image: linear-gradient(-90deg, #185352, #331849);
}
.calender {
  max-width: 1000px;
  margin: auto;
}
.schedule {
  margin: 30px;
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
.text-yusho {
  margin-top: 50px;
  padding: 20px;
  color: #fff;
}
.text-members {
  padding: 15px;
  color: #fff;
}
.janitor {
  margin: 5rem;
}
span {
  display: inline-block;
}
.img-wrap {
  overflow: hidden;
  position: relative;
}

.img-wrap:before,
.img-wrap:after {
  animation: 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  background: #fff;
  bottom: 0;
  content: '';
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 1;
}

.img-wrap:before {
  animation-name: img-wrap-before;
  left: 0;
  right: 50%;
}

.img-wrap:after {
  animation-name: img-wrap-after;
  left: 50%;
  right: 0;
}

@keyframes img-wrap-before {
  100% {
    transform: translateY(100%);
  }
}

@keyframes img-wrap-after {
  100% {
    transform: translateY(-100%);
  }
}
</style>
