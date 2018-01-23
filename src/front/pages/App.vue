<template>
  <div id="app">
    <publicheader v-bind="menu"></publicheader>
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
import app from "../public/js/App.js";
export default {
  ...app
};
</script>

<style scoped>
@import "../public/css/App.css";
</style>

