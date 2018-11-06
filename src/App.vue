<template>
  <div id="app">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else>
        <Gallery v-bind:cards="info"/>
      </div>
    </section>

  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      info: [],
      loading: true,
      errored: false
    }
  },
  components: {
    Gallery
  },
  mounted () {
    let path = "https://api.harvardartmuseums.org/object/";
    axios.get(path, {params: {
        apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
        title: "dog",
        hasimage: 1,
        color: 'any',
        fields: "objectid,title,dated",
    }})
    .then(res => { 
      res.data.records.forEach(r => {
        let nextPath = path+r.objectid;
        axios.get(nextPath, {params: {
            apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
          }
        })
          .then(res => {
            if(res.data.primaryimageurl) {
              this.info = [...this.info, res.data]
            }
          })
        })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style>
 body {
    background: rgb(32, 39, 53);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5a7794;
}
</style>
