<template>
  <div style="text-align: right">
    <el-table-footer>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[15, 30, 60,100]"
          :page-size="15"

          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-table-footer>
  </div>
</template>

<script>
export default {
  name: "currentPage",
  props:["total"],
  data() {
    return {
      currentPage: 5
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<style scoped>

</style>
