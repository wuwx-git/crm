<template>
  <div>
    <div style="position: relative ;   margin: -49px 0px 18px  91%;;">
      <el-button size="small" @click="dialogVisible = true" style="margin-left: 16px;">
        查重
      </el-button>
    </div>
    <el-dialog
      title="客户查重"
      :visible.sync="dialogVisible"
      width="800px"
      :before-close="handleClose">

      <div>
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" style="width: 150px" placeholder="请选择">
            <el-option label="按客户名称" value="1"></el-option>
            <el-option label="按手机号/电话" value="2"></el-option>
          </el-select>
          <el-button style=" color: #fff; background-color: #2362fb;"
                     slot="append" icon="el-icon-search">查重
          </el-button>
        </el-input>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "DifferentialWeight",

  data() {
    return {
      dialogVisible: false,
      select: "1",
      input3: ""
    };
  }
}
</script>

<style scoped>


.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
