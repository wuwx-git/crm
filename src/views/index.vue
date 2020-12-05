<template>
  <div>

    <app-header></app-header>
    <aside-one></aside-one>


  </div>


</template>

<script>
import appHeader from "../components/Header";
import asideOne from "../components/asideOne";
const echarts=require('echarts')
export default {

  components: {appHeader, asideOne},
  name: "index",
}
</script>

<style scoped>

</style>
