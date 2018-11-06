<template>
  <div class="backdrop">
    <h1>{{ msg }}</h1>
    <div class="canvas">
      <ul class="cards">
        <li v-for="(card, index) in cards" :key="index">
          <img :src="card.primaryimageurl" width="400" class="painting"/>
        </li>
      </ul>
    </div>
    <!-- <input type="text" v-model="input_val">
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="counter++">
        You've clicked this button {{counter}} times!
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      msg: 'CurAptor',
      input_val: '',
      counter: 0
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
    background: lightgrey;
    border-radius: 0.2rem;
    max-width: 13rem;
    transition: all 0.15s linear;
  }
  li {
    min-width: 10rem;
    width: fit-content;
    height: fit-content;
    margin: 1rem 0.5rem 0 0.5rem;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    transition: all 0.15s linear;
  }
  li:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem 0.01rem rgb(194, 194, 194);
  }
  li:hover > .painting{
    max-width: 20rem;
    width: 20rem;
  }
</style>
