<template>
  <div class="backdrop">
    <div class="canvas">
      <ul class="cards">
        <li v-for="card in cards" :key="card.id"  v-on:mouseover="seen = card.id" v-on:mouseleave="seen = false">
          <img :src="card.primaryimageurl" width="400" class="painting"/>
          <div class="info" v-show="seen === card.id">
            <p>{{ card.title }}</p>
            <p>{{ card.dated }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      seen: false
    }
  },
  props: {
    cards: Array
  }
}
</script>

<style scoped>
  .canvas {
    background: rgb(250, 250, 250);
    box-shadow: 0rem 0rem 0.5rem rgb(160, 160, 160);
    min-height: 100vh;
    height: 100%;
    width: 96%;
    padding: 0.5rem;
    margin: 0 auto;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    list-style-position: outside;
    padding: 0;
  }
  .painting {
    cursor:zoom-in;
    background: lightgrey;
    border-radius: 0.2rem;
    box-shadow: 0rem 0.2rem 0.7rem 0.01rem rgb(194, 194, 194);
    max-width: 13rem;
    margin: 0;
    transition: all 0.2s linear;
  }
  .info {
    font-size: 90%;
    max-width: 13rem;
    min-width: 10rem;
  }
  li {
    min-width: 10rem;
    height: fit-content;
    margin: 1rem 0.5rem 0 0.5rem;
    transition: all 0.15s linear;
  }
  li:hover > .painting{
    box-shadow: 0rem 0.5rem 0.7rem 0.01rem rgb(194, 194, 194);
  }
  li:active > .painting{
    /* max-width: 20rem;
    width: 20rem; */
  }
</style>
