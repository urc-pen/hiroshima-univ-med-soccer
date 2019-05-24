<template>
  <div>
    <common-header />
    <div id="banner" class="container-fluid text-center container-members">
      <h1 class="text-members2">Members</h1>
    </div>
    <select-form @request-set="setKey" />
    <div class="container-fluid">
      <b-card-group columns class="card-columns">
        <member-card
          v-for="member in shownMembers"
          :id="member.sys.id"
          :key="member.sys.id"
          :nameja="member.fields.nameja"
          :photo="member.fields.photo"
          :enteryear="member.fields.enteryear"
        />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Card from '~/components/Card'
import Header from '~/components/Header'
import SelectForm from '~/components/SelectForm'

const client = createClient()

export default {
  components: {
    'member-card': Card,
    'common-header': Header,
    'select-form': SelectForm
  },
  data() {
    return {
      filteringKey: 0
    }
  },
  computed: {
    shownMembers: function() {
      if (this.filteringKey === 6) {
        return this.members6
      } else if (this.filteringKey === 5) {
        return this.members5
      } else if (this.filteringKey === 4) {
        return this.members4
      } else if (this.filteringKey === 3) {
        return this.members3
      } else if (this.filteringKey === 2) {
        return this.members2
      } else if (this.filteringKey === 1) {
        return this.members1
      } else {
        return this.members
      }
    }
  },
  async asyncData({ env }) {
    const members = await client.getEntries({
      content_type: 'image',
      order: '-fields.enteryear'
    })
    const members6 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 6
    })
    const members5 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 5
    })
    const members4 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 4
    })
    const members3 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 3
    })
    const members2 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 2
    })
    const members1 = await client.getEntries({
      content_type: 'image',
      'fields.enteryear': 1
    })
    return {
      members: members.items,
      members6: members6.items,
      members5: members5.items,
      members4: members4.items,
      members3: members3.items,
      members2: members2.items,
      members1: members1.items
    }
  },
  methods: {
    setKey(fKey) {
      this.filteringKey = fKey
    }
  }
}
</script>
<style>
.card-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 0.7rem;
  justify-content: center;
}
.text-members2 {
  margin-top: 70px;
}
</style>
