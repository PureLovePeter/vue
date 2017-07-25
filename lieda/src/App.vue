<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainA from './components/MainA'

export default {
  name: 'app',
  components: {
    MainA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

}
</style>
