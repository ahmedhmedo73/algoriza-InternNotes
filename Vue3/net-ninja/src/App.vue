<template>
  <img alt="Vue logo" src="./assets/logo.png" >
  <p ref="p">Ahmed kamel</p>
  <HelloWorld msg="Welcome to Your Vue.js App" @change-color="changeColor">
    <p>i am a default slot</p>
    <template v-slot:special>
        <p>i am a special slot</p>
    </template>
  </HelloWorld> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },methods:{
    changeColor(color){
       this.$refs.p.style.color = color ;
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
