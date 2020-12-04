<template>
  <div style="position: relative; margin: -52px 0px 15px 417px;">
    <form style="padding: 0">
      <el-input class="search" size="medium" style="width: 352px;margin: 0" placeholder="请输入客户名称/手机/电话">
        <el-button slot="append">搜索</el-button>
      </el-input>
    </form>
  </div>
</template>

<script>
export default {
  name: "search"
}
</script>

<style scoped>
.search >>> .el-button {
  color: #fff;
  background-color: #2362fb;
  border-color: transparent;
  border-top: 0;
  border-bottom: 0;
  padding: 11px 20px;
}

</style>
