<template>
  <div id="app">
    <img src="./public/img/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <p>v-for</p>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item.tag }}
      </li>
    </ul>
    <p>component</p>
    <test addr="there"></test>
  </div>
</template>

<script>
import app from "./public/js/App.js";
export default {
  ...app
};
</script>

<style scoped>
@import "./public/css/App.css";
</style>

