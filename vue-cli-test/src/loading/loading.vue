<template>
  <div class="loadEffect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {{title}}
</div>
</template>
<script>
  export default {
    data(){
      return {
        title:'loading...'
      }
    }
  }
</script>
<style>
  @import "./loading.css";
</style>
