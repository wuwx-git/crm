<template>

  <div id="aside" style="width: auto;">
    <el-menu background-color="#001529"
             text-color="#fff"
             active-text-color="#ffd04b" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             style="    font-size: 14px; padding: 0;  ">
      <el-menu-item index="1" class="mb10px">
        <i class="el-icon-plus " slot="reference"></i>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <el-table>
          </el-table>
          <div href="#" slot="reference">
            <span slot="title">快速创建</span>
            <i class="el-icon-plus " slot="reference"></i>
          </div>
        </el-popover>
      </el-menu-item>
      <el-menu-item index="2" class="mb10px">

        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="3" class="mb10px">

        <span slot="title">待办事项</span>
      </el-menu-item>
      <el-menu-item index="4" class="mb10px">

        <span slot="title">线索</span>
      </el-menu-item>
      <el-menu-item index="5" class="mb10px">

        <span slot="title">客户</span>
      </el-menu-item>
      <el-menu-item index="6" class="mb10px">

        <span slot="title">联系人</span>
      </el-menu-item>
      <el-menu-item index="7" class="mb10px">

        <span slot="title">商机</span>
      </el-menu-item>
      <el-menu-item index="8" class="mb10px">

        <span slot="title">合同</span>
      </el-menu-item>
      <el-menu-item index="9" class="mb10px">

        <span slot="title">回款</span>
      </el-menu-item>
      <el-menu-item index="10" class="mb10px">

        <span slot="title">发票</span>
      </el-menu-item>
      <el-menu-item index="11" class="mb10px">

        <span slot="title">回访</span>
      </el-menu-item>
      <el-menu-item index="12" class="mb10px">

        <span slot="title">产品</span>
      </el-menu-item>
      <el-menu-item></el-menu-item>
      <div>
        <el-switch id="switch" style="position: absolute;bottom: 0;padding: 10px 20px;cursor: pointer;right: 0;"
                   v-model="isCollapse" :change="test()">
        </el-switch>
      </div>

    </el-menu>


  </div>
</template>

<script>
let test;
export default {
  name: "asideOne",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    test() {
      test = this.isCollapse
      var apps = document.getElementById("apps")
      var mine = document.getElementById("mine")
      if (test) {
        apps.style.left = "85px"
        mine.style.left = "83px"
      } else {
        apps.style.left = "215px"
        mine.style.left = "213px"
      }
    },
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item {
  position: relative;
}

.mb10px {
  margin-bottom: -5px;

}

</style>
