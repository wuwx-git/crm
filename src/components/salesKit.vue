<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      before-close="function(done)"
      width="70%">
      <div>
        <search class="search" style="margin: -69px 0px 12px 327px;"></search>
      </div>
      <el-table
        :data="list"
        style="width: 100%"
        stripe
        size="mini"
        border
        height="275">
        <el-table-column
          v-for="(item, index) in fieldList"
          :key="index"
          :prop="item.field"
          :label="item.name"
          align="center"
          :sortable="index==(fieldList.length-1)?false:true"
          :min-width="index==0?180:130 "
          header-align="center"
          show-overflow-tooltip
          :fixed="index==0?true: false"
        >

        </el-table-column>


      </el-table>

      <span v-show="title!='销售简报-新增跟进记录'" slot="footer" class="dialog-footer">
            <current-page :total="total"></current-page>
        </span>
    </el-dialog>

  </div>
</template>

<script>

import CurrentPage from "./currentPage";
export default {
  name: "salesKit",
  components: {CurrentPage},
  props: ["title", "dialogVisible", "list", "fieldList", "total"],
  data() {
    return {
      total: 0
    }
  },
  methods: {



  }


}
</script>

<style scoped>

</style>
