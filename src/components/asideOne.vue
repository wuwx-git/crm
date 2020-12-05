<template>

  <div id="aside" style="width: auto;">
    <el-menu background-color="#001529"
             text-color="#fff"
             :default-active="activeIndex"
             active-text-color="#ffd04b" class="el-menu-vertical-demo" @open="handleOpen"
             collapse-transition="false"
             @close="handleClose"
             router="true"
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
      <el-menu-item index="2" class="mb10px" route="/crm/workbench">

        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="3" class="mb10px">

        <span slot="title">待办事项</span>
      </el-menu-item>
      <el-menu-item index="4" class="mb10px">
        <span slot="title">线索</span>
      </el-menu-item>
      <el-menu-item index="5" class="mb10px" route="/crm/customer">
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
      isCollapse: false,
      activeIndex: '',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      alert(key + keyPath)
      if (key == "5") {
        location.href = "/#/crm/customer"
      }

    },
    handleClose(key, keyPath) {
      if (key == "5") {
        location.href = "/#/crm/customer"
      }
    },
    test() {
      var apps = document.getElementById("apps")
      var mine = document.getElementById("mine")
      var mine2 = document.getElementById("mine2")
      var mine3 = document.getElementById("mine3")

      test = this.isCollapse

      if (test) {
        this.timer = setTimeout(() => {
          if (apps != null)
            apps.style.left = "85px"
          if (mine != null)
            mine.style.left = "83px"
          if (mine2 != null)
            mine2.style.left = "86px"
          if (mine3 != null)
            mine3.style.left = "86px"
        }, 200)
      } else {
        if (apps != null)
          apps.style.left = "215px"
        if (mine != null)
          mine.style.left = "213px"
        if (mine2 != null)
          mine2.style.left = "216px"
        if (mine3 != null)
          mine3.style.left = "216px"
      }
    }

  },
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
