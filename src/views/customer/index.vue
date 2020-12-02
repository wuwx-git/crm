<template>
  <div>

    <div>

      <app-header></app-header>
      <aside-one></aside-one>
      <div id="mine" style="  top: 57px;
      right: 15px;
      box-shadow: 0 8px 11px 1px rgba(0,0,0,.1);
      left: 213px;
      background-color: #fff;
      border-bottom-left-radius:4px ;
      border-bottom-right-radius: 4px;
      position: absolute;
      padding: 0px 0px 40px;
    ">
        <div style="top: 0;background: #f5f6f9; border-bottom: solid 1px #e6e6e6;">
          <div style=" width: 25% ;background: #f5f6f9;">
            <el-menu
              background-color="#f5f6f9"
              :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">
                <img src="static/img/客户.png" style="width: 30px;">
                <span>客户</span>
              </el-menu-item>
              <el-menu-item index="2">
                <img src="static/img/公海.png" style="width: 30px;">
                <span>公海</span>
              </el-menu-item>
            </el-menu>
          </div>
          <search></search>
          <differential-weight></differential-weight>
        </div>
        <div>
          <scene></scene>


        </div>


      </div>

    </div>


  </div>


</template>

<script>
import appHeader from "../../components/Header";
import asideOne from "../../components/asideOne";
import search from "../../components/search";
import DifferentialWeight from "../../components/DifferentialWeight";
import Scene from "../../components/scene";

export default {
  components: {Scene, asideOne, appHeader, search, DifferentialWeight},
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
