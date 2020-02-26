<template>
    <div class="search">
      page is search
      <ul>
        <li v-for="(item,index) in $store.state.navbar.app" :key="index">{{item}}</li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'search',
    layout: 'search',
    data() {
      return {
        list: []
      }
    },
    async mounted() {
      let self = this
      let {status, data: {list}} = await axios.get('/city/list')
      if (status === 200) {
        self.list = list
      }
    }
  }
</script>

<style scoped>

</style>
