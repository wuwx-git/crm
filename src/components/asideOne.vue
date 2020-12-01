<template>

  <div>
    <el-menu background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <el-menu-item index="1">
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
      <el-menu-item index="2">

        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="3">

        <span slot="title">待办事项</span>
      </el-menu-item>
      <el-menu-item index="4">

        <span slot="title">线索</span>
      </el-menu-item>
      <el-menu-item index="5">

        <span slot="title">客户</span>
      </el-menu-item>
      <el-menu-item index="6">

        <span slot="title">联系人</span>
      </el-menu-item>
      <el-menu-item index="7">

        <span slot="title">商机</span>
      </el-menu-item>
      <el-menu-item index="8">

        <span slot="title">合同</span>
      </el-menu-item>
      <el-menu-item index="9">

        <span slot="title">回款</span>
      </el-menu-item>
      <el-menu-item index="10">

        <span slot="title">发票</span>
      </el-menu-item>
      <el-menu-item index="11">

        <span slot="title">回访</span></el-menu-item>
      <el-menu-item index="12">

        <span slot="title">产品</span>
      </el-menu-item>

      <el-menu-item>

      </el-menu-item>
      <div>
        <el-switch style="position: absolute;bottom: 0;padding: 18px 20px;cursor: pointer;right: 0;"
                   v-model="isCollapse">
        </el-switch>
      </div>

    </el-menu>


  </div>
</template>

<script>
export default {
  name: "asideOne",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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

</style>
