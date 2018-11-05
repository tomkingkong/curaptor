<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ info }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      info: null
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    let path = "https://api.harvardartmuseums.org/object/";
    let query = { params: {
        apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
        title: "dog",
        hasimage: 1,
        color: 'any',
        fields: "objectid,title,dated",
    }}
    axios.get(path, query).then(res => { 
      res.data.records.forEach(r => {
        let nextPath = path+r.objectid;
        let options = {
          params: {
            apikey: "f8411350-e114-11e8-9234-6f5a1db33697",
          }
        }
        axios.get(nextPath, options).then(res => {
          console.log(res)
          this.info = res
        })
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
