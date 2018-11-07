<template>
  <div id="app">
    <section v-if="errored">
      <p class="error-text">We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
       <div>
        <h1 class="header">Curaptor</h1>
        <input 
          class="search" 
          placeholder="Search art"
          type="search" 
          v-model="search_term"
          v-on:keyup="searchGalleries()">
      </div>

      <div v-if="loading">
        <img src="./assets/pencil_draws_itself.gif" width="600">
      </div>

      <div v-else>
        <Gallery v-bind:cards="art"/>
      </div>
    </section>

  </div>
</template>

<script>

import GalleryData from './services/api/GalleryData.js'
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  data () {
    return {
      art: [],
      loading: true,
      errored: false,
      search_term: '',
    }
  },
  methods: {
    searchGalleries () {
      GalleryData.getArt(this.search_term)
        .then(art => {
          this.art = art.filter(a => a !== undefined)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  },
  components: {
    Gallery
  },
  mounted () {
    this.searchGalleries()
  }
}

</script>

<style>
  body {
    background: rgb(32, 39, 53);
  }
  .header {
    display: inline-block;
    color: #8cb7e2;
    text-align: left;
    font-size: 200%;
    width: fit-content;
    margin: 0.5rem;
  }
  .search {
    align-self: center;
    border-radius: 0.2rem;
    font-size: 100%;
    padding: 0.2rem;
    width: 10rem;
    height: 1.9rem;
    margin: 0.5rem;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .error-text {
    color: white;
  }
</style>
