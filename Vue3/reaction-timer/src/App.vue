<template>
  <h1>Reaction test</h1>
  <button   @click="play"         :disabled="isPlaying" >play</button>
  <block      v-if="isPlaying"       :delay="delay"   @end="end"/>
  <results    v-if="showResults"     :score="score" />
</template>

<script>
import block from './components/block'
import results from './components/results.vue'

export default {
  name: 'App',
  data(){
      return{
        isPlaying:false,
        delay:null,
        score:null,
        showResults:false,
      }
  },
  components: {
    block,
    results,
  },methods:{
    play(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
    end(reaction){
      this.score = reaction;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
