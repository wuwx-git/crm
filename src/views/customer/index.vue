<template>
  <div>

    <div>

      <app-header></app-header>
      <aside-one></aside-one>
      <div id="mine" style="  top: 57px;
      right: 15px;
      box-shadow: 0 8px 11px 1px rgba(0,0,0,.1);
      left: 212px;
      background-color: #fff;
      border-bottom-left-radius:4px ;
      border-bottom-right-radius: 4px;
      position: absolute;
      padding: 20px 15px 40px;
    ">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"> </el-menu-item>
          <el-menu-item index="2"></el-menu-item>
        </el-menu>


      </div>

    </div>


  </div>


</template>

<script>
import appHeader from "../../components/Header";
import asideOne from "../../components/asideOne";

export default {
  components: {asideOne, appHeader},
  name: "index",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
