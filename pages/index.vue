<template>
  <main class="home-page">
    <common-header />
    <section class="home-hero">
      <div class="container-fluid img-wrap aramaki">
        <img src="~/assets/aramakijump.png" alt="" />
      </div>
      <div class="container-fluid text-center under-aramaki">
        <div class="hero-content">
          <p class="hero-kicker">
            Hiroshima University Medical Soccer Club
          </p>
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
          <div class="hero-meta">
            <span>主将：{{ representsFields.captain }}</span>
            <span>主務：{{ representsFields.manager }}</span>
          </div>
          <p class="hero-contact">
            ご連絡は主務まで
          </p>
        </div>
      </div>
    </section>
    <section class="instagram-section">
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
        <div class="instagram-frame">
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
            <span class="instagram-fallback-text">
              <small>Latest on Instagram</small>
              @{{ instagramHandle }}
            </span>
          </a>
        </div>
      </div>
    </section>
    <footer class="text-center">
      <font color="#cfd2d6">created by S.Urushidani</font>
    </footer>
  </main>
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
      instagramHandle: 'hiromedsoccer'
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
.home-page {
  min-height: 100vh;
  overflow-x: hidden;
  background: #fbfcfb;
  color: #172421;
}
.home-hero {
  position: relative;
  overflow: hidden;
  background: #061c1b;
}
.aramaki {
  padding: 0px;
}
.aramaki img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}
.under-aramaki {
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding: clamp(40px, 7vw, 80px) 20px clamp(46px, 7vw, 88px);
  background:
    linear-gradient(90deg, rgba(51, 24, 73, 0.92), rgba(24, 83, 82, 0.88)),
    url('~/assets/home-stadium-atmosphere.jpg') center 58% / cover;
}
.under-aramaki:before {
  position: absolute;
  inset: 0;
  content: '';
  background:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.25;
}
.under-aramaki:after {
  position: absolute;
  right: -12%;
  bottom: -55%;
  width: 62%;
  height: 120%;
  content: '';
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent 60%);
  transform: rotate(-7deg);
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 980px;
  margin: 0 auto;
  color: #fff;
}
.hero-kicker {
  margin-bottom: 12px;
  color: #b7d5cc;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
}
.mgr {
  margin-right: 20px;
}
.columns {
  justify-content: center;
}
.text-yusho {
  margin-top: 0;
  padding: 0;
  color: #fff;
}
.text-yusho h4 {
  margin-bottom: 10px;
  font-size: clamp(28px, 4.8vw, 54px);
  font-weight: 700;
  line-height: 1.22;
  text-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
}
.text-yusho h3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 12px;
  margin-bottom: 0;
  color: #eef8f4;
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.32;
}
.text-yusho span {
  display: inline-block;
}
.text-members {
  padding: 15px;
  color: #fff;
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}
.hero-meta span {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 8px;
  background: rgba(8, 26, 25, 0.38);
  color: #fff;
  font-size: clamp(16px, 2vw, 22px);
  backdrop-filter: blur(8px);
}
.hero-contact {
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(15px, 1.9vw, 20px);
}
.janitor {
  margin: 5rem;
}
.instagram-section {
  position: relative;
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(320px, 1.18fr);
  gap: clamp(24px, 5vw, 54px);
  max-width: 1120px;
  margin: clamp(42px, 7vw, 76px) auto;
  padding: 0 20px;
  align-items: center;
}
.instagram-copy {
  position: relative;
  padding: 20px 8px;
}
.instagram-label {
  margin-bottom: 8px;
  color: #185352;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}
.instagram-copy h4 {
  margin-bottom: 0;
  color: #172421;
  font-size: clamp(28px, 3.4vw, 44px);
  line-height: 1.35;
}
.instagram-description {
  margin: 14px 0 20px;
  color: #4d5b66;
  line-height: 1.8;
}
.instagram-button {
  min-height: 46px;
  padding: 10px 20px;
  border-color: #2e8a64;
  border-radius: 8px;
  color: #2e8a64;
  font-weight: 700;
  white-space: nowrap;
}
.instagram-button:hover {
  border-color: #185352;
  background: #185352;
  color: #fff;
}
.instagram-widget {
  position: relative;
  min-height: 390px;
}
.instagram-frame {
  position: relative;
  overflow: hidden;
  min-height: 390px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06)),
    linear-gradient(135deg, #331849, #185352 64%, #0a1c1b);
  box-shadow: 0 22px 50px rgba(15, 40, 37, 0.2);
}
.instagram-frame:before {
  position: absolute;
  inset: 10px;
  content: '';
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  pointer-events: none;
  z-index: 2;
}
.instagram-widget iframe {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  min-height: 410px;
  border: 0;
  border-radius: 6px;
  overflow: hidden;
}
.instagram-fallback {
  position: relative;
  display: block;
  min-height: 390px;
  overflow: hidden;
  border-radius: 6px;
  background:
    linear-gradient(rgba(9, 27, 26, 0.03), rgba(9, 27, 26, 0.18)),
    url('~/assets/home-instagram-collage.jpg') center / cover;
  text-decoration: none;
}
.instagram-fallback:before {
  position: absolute;
  inset: 0;
  content: '';
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.16), transparent 36%),
    linear-gradient(180deg, transparent 52%, rgba(10, 25, 23, 0.2));
  transition: opacity 180ms ease;
}
.instagram-fallback:hover:before {
  opacity: 0.72;
}
.instagram-fallback-text {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: min(420px, calc(100% - 44px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 104px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 8px;
  background: rgba(12, 31, 30, 0.58);
  color: #fff;
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  backdrop-filter: blur(8px);
  transform: translate(-50%, -50%);
}
.instagram-fallback-text small {
  display: block;
  margin-bottom: 8px;
  color: #cfe6df;
  font-size: 13px;
  font-weight: 700;
}
footer {
  padding: 20px 0 26px;
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
  .under-aramaki {
    padding: 34px 18px 40px;
  }
  .hero-kicker {
    font-size: 12px;
  }
  .hero-meta {
    gap: 8px;
    margin-top: 22px;
  }
  .hero-meta span {
    min-height: 38px;
    padding: 7px 12px;
  }
  .instagram-section {
    grid-template-columns: 1fr;
    margin: 36px auto 30px;
  }
  .instagram-widget,
  .instagram-widget iframe,
  .instagram-frame,
  .instagram-fallback {
    min-height: 340px;
  }
}
@media (max-width: 420px) {
  .text-yusho h3 {
    display: block;
  }
  .instagram-frame {
    padding: 7px;
  }
  .instagram-fallback {
    min-height: 318px;
  }
  .instagram-fallback-text {
    width: calc(100% - 28px);
    min-height: 104px;
  }
}
</style>
