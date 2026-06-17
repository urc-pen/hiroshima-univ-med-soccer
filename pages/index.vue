<template>
  <div>
    <common-header />
    <div class="container-fluid img-wrap aramaki">
      <img src="~/assets/aramakijump.png" alt="" />
    </div>
    <div class="container-fluid text-center under-aramaki">
      <div class="text-yusho">
        <h4>
          広島大学医学部サッカー部
        </h4>
        <h3>
          <span>
            Hiroshima University
          </span>
          <span>
            Medical Soccer Club
          </span>
        </h3>
      </div>
      <h5 class="text-members">
        <span class="mgr">主将：{{ representsFields.captain }}</span
        ><span>主務：{{ representsFields.manager }}</span>
      </h5>
      <h5 class="text-members">
        ご連絡は主務まで
      </h5>
    </div>
    <div class="instagram-section">
      <div class="instagram-copy text-center">
        <p class="instagram-label">
          Instagram
        </p>
        <h4>
          <b>日々の活動はこちらで更新中</b>
        </h4>
        <p class="instagram-description">
          練習風景や試合、新歓情報などは Instagram で発信しています。
        </p>
        <a
          class="btn btn-outline-success instagram-button"
          :href="instagramUrl"
          target="_blank"
          rel="noopener"
        >
          @{{ instagramHandle }} を見る
        </a>
      </div>
      <div class="instagram-widget">
        <iframe
          v-if="instagramWidgetUrl"
          title="Instagram feed"
          :src="instagramWidgetUrl"
          scrolling="no"
          allowtransparency="true"
        />
        <a
          v-else
          class="instagram-fallback"
          :href="instagramUrl"
          target="_blank"
          rel="noopener"
        >
          <span
            v-for="tile in instagramTiles"
            :key="tile"
            class="instagram-tile"
          />
          <span class="instagram-fallback-text">
            Instagram feed<br />
            @{{ instagramHandle }}
          </span>
        </a>
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
  data() {
    return {
      instagramHandle: 'hiromedsoccer',
      instagramTiles: [1, 2, 3, 4, 5, 6]
    }
  },
  computed: {
    representsFields() {
      return (this.represents && this.represents.fields) || {}
    },
    instagramUrl() {
      return `https://www.instagram.com/${this.instagramHandle}/`
    }
  },
  async asyncData({ env }) {
    const represets = await client.getEntries({
      content_type: 'represets'
    })
    return {
      represents: represets.items[0],
      instagramWidgetUrl: env.INSTAGRAM_WIDGET_URL
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
.instagram-section {
  display: grid;
  grid-template-columns: minmax(240px, 0.75fr) minmax(280px, 1.25fr);
  gap: 24px;
  max-width: 1000px;
  margin: 36px auto;
  padding: 0 20px;
  align-items: center;
}
.instagram-copy {
  padding: 20px 8px;
}
.instagram-label {
  margin-bottom: 8px;
  color: #185352;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.instagram-description {
  margin: 14px 0 20px;
  color: #4d5b66;
}
.instagram-button {
  white-space: nowrap;
}
.instagram-widget {
  min-height: 320px;
}
.instagram-widget iframe {
  width: 100%;
  min-height: 360px;
  border: 0;
  overflow: hidden;
}
.instagram-fallback {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  min-height: 320px;
  padding: 8px;
  overflow: hidden;
  background-image: linear-gradient(-90deg, #185352, #331849);
  text-decoration: none;
}
.instagram-tile {
  min-height: 148px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)),
    url('~/assets/aramakijump.png') center / cover;
  filter: saturate(0.9);
}
.instagram-fallback-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
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
@media (max-width: 767px) {
  .instagram-section {
    grid-template-columns: 1fr;
    margin: 28px auto;
  }
  .instagram-widget,
  .instagram-widget iframe,
  .instagram-fallback {
    min-height: 280px;
  }
  .instagram-tile {
    min-height: 128px;
  }
}
</style>
