<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="(card, index) in cards" :key="index">
          <img :src="card.primaryimageurl" width="500"/>
        </li>
      </ul>
    </div>
    <input type="text" v-model="input_val">
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="counter++">
        You've clicked this button {{counter}} times!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  h3 {
    margin: 40px 0 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    list-style-position: outside;
    padding: 0;
  }
  li {
    width: fit-content;
    height: fit-content;
  }
  li:hover {
    box-shadow: 0.1rem 0.1rem 0.5rem 0.01rem rgb(194, 194, 194);
  }
  a {
    color: #42b983;
  }
</style>
