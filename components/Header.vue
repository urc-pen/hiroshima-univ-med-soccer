<template>
  <div class="header fixed-top">
    <b-navbar
      class="header-color"
      toggleable="md"
      type="dark"
      variant="info"
      fixed="top"
    >
      <b-navbar-brand to="/">
        広島大学医学部サッカー部
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :class="{ active: homeIsActive }">
            Home
          </b-nav-item>
          <b-nav-item to="/about" :class="{ active: aboutIsActive }">
            About
          </b-nav-item>
          <b-nav-item to="/members" :class="{ active: membersIsActive }">
            Members
          </b-nav-item>
          <b-nav-item to="/results" :class="{ active: resultsIsActive }">
            Results
          </b-nav-item>
          <b-nav-item to="/Link" :class="{ active: linkIsActive }">
            Link
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$router.currentRoute.name
    },
    homeIsActive() {
      return this.currentRoute === 'index'
    },
    aboutIsActive() {
      return this.currentRoute === 'about'
    },
    membersIsActive() {
      return this.currentRoute === 'members'
    },
    resultsIsActive() {
      return this.currentRoute === 'results'
    },
    linkIsActive() {
      return this.currentRoute === 'link'
    }
  }
}
</script>

<style scoped>
.header-color {
  background-image: linear-gradient(-90deg, #185352, #331849);
}
</style>
