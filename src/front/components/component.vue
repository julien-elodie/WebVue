<template>
  <div id="test">
      <h1>hello world</h1>
      <a href="/page">jump to {{ addr }}</a>
      <p>or <a href="/page">click here</a></p>
  </div>
</template>

<script>
export default {
  name: "test",
  props: ['addr']
};
</script>

<style>

</style>
