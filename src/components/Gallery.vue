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
    box-shadow: 
      0rem 0rem 0.2rem 0.01rem rgb(209, 209, 209),
      inset 0rem 0rem 0.5rem 0.01rem rgba(0, 0, 0, 0.486);
    border-radius: 0.1rem;
    min-height: 70rem;
    height: 100%;
    width: 94%;
    padding: 1rem;
    margin: 0 auto;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    list-style-position: outside;
    padding: 0;
    position: relative;
    margin: 0;
    margin: 2em auto;
    max-width: 62rem;
    width: 96%;
    column-gap: 1.5em;
  }
  .painting {
    cursor:zoom-in;
    background: rgba(226, 226, 226, 0.795);
    border-radius: 0.2rem;
    box-shadow: 
      0rem 0.2rem 0.7rem 0.01rem rgb(194, 194, 194),
      0rem 0.1rem 0.2rem 0.01rem rgb(190, 190, 190);
    min-height: 10rem;
    max-width: 14rem;
    margin: 0;
    transition: all 0.2s linear;
  }
  .info {
    background: rgba(255, 255, 255, 0.808);
    border-radius: 0.1rem;
    padding: 1rem;
    font-size: 90%;
    max-width: 12rem;
    min-width: 100%;
  }
  .info p {
    margin: 0.2rem 0;
  }
  li {
    display: inline-block;
    position: relative;
    height: fit-content;
    min-width: 10rem;
    margin: 1rem 0.5rem 0 0.5rem;
    transition: all 0.2s linear;
  }
  li:hover > .painting{
    box-shadow: 0rem 0.5rem 0.7rem 0.01rem rgb(194, 194, 194);
    max-width: 15rem;
  }
  li:active > .painting {
    box-shadow: none;
    max-width: 26rem;
    width: 22rem;
    height: auto;
    position: absolute;
    z-index: 100;
  }

  @media only screen and (min-width: 1024px) {
    .cards {
      column-count: 4;
    }
  }

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .cards {
      column-count: 3;
    }
  }

  @media only screen and (max-width: 767px) and (min-width: 540px) {
    .cards {
      column-count: 2;
    }
  }
  @media only screen and (max-width: 400px) {
    .canvas {
      min-width: 100%;
      margin: 0;
    }
    .painting {
      max-width: 20rem;
    }
  }
</style>
