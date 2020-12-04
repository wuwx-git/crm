<template>
  <div>
    <div style="background:#f5f6f9;">
      <app-header></app-header>
      <aside-one></aside-one>
      <div id="mine2" style="
      position: absolute;
      padding: 0px 0px 10px;
         left: 216px;
          top: 57px;
        right: 15px;">
        <div class="box" style="width: 120px;">
          <div>
            <el-button circle type="primary" size="mini" style="position: absolute;z-index: 1;"><i
              class="el-icon-user-solid"></i></el-button>
            <el-select v-model="value" placeholder="请选择" size="mini" style="width: 125px;z-index: 2">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>

        </div>
        <div class="box" style="width: 190px;margin-left: 140px;">
          <div class="yuer">
            <el-select v-model="value2" placeholder="请选择" size="mini" style="width:190px">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label2"
                :value="item.value2">
              </el-option>
            </el-select>
          </div>

        </div>
        <div class="box" style="width: 98%;margin-top: 50px;padding-left:  30px">
          <span>
            <h4><i class="icon el-icon-data-line"
                   style="color:  rgb(80, 207, 158);font-size: 18px;margin-right: 1px"></i>
             销售简报</h4>
          </span>
          <div class="boxson " style="margin-left:-15px" @click="getSalesKit('新增客户')">


          </div>

          <div class="boxson" style="margin-top: -98px;margin-left: calc(25% - 5px)" @click="getSalesKit('新增联系人')">

          </div>

          <div class="boxson" style="margin-top: -98px;margin-left: calc(50% - 5px)" @click="getSalesKit('新增商机')">

          </div>

          <div class="boxson" style="margin-top: -98px;margin-left: calc(75% - 5px)" @click="getSalesKit('新增合同')">

          </div>
          <div class="boxson" style="margin-left: -15px" @click="getSalesKit('合同金额')"></div>
          <div class="boxson" style="margin-top: -98px;margin-left: calc(25% - 5px)" @click="getSalesKit('商机金额')">

          </div>

          <div class="boxson" style="margin-top: -98px;margin-left:calc(50% - 5px)  " @click="getSalesKit('回款金额')">

          </div>

          <div class="boxson" style="margin-top: -98px;margin-left: calc(75% - 5px)  " @click="getSalesKit('新增跟进记录')">

          </div>
        </div>
        <sales-kit :title="title"
                   :dialog-visible="dialogVisible"
                   :field-list="fieldList"
                   :total="total"
                   :list="list"></sales-kit>

      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../../components/Header'
import asideOne from "../../../components/asideOne";
import salesKit from "../../../components/salesKit";
import CurrentPage from "../../../components/currentPage";
import Scene from "../../../components/scene";
import Search from "../../../components/search";

export default {
  components: {Search, Scene, CurrentPage, appHeader, asideOne, salesKit},
  name: "index",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '本人'
      }, {
        value: '选项2',
        label: '本人及下属'
      }, {
        value: '选项3',
        label: '本部门'
      }, {
        value: '选项4',
        label: '本部门及下属部门'
      }, {
        value: '选项5',
        label: '自定义'
      }],
      value: '选项2',
      options2: [{
        value2: '选项1',
        label2: '昨天'
      }, {
        value2: '选项2',
        label2: '今天'
      }, {
        value2: '选项3',
        label2: '本周'
      }, {
        value2: '选项4',
        label2: '上周'
      }, {
        value2: '选项5',
        label2: '本月'
      }, {
        value2: '选项6',
        label2: '上月'
      }, {
        value2: '选项7',
        label2: '本季度'
      }, {
        value2: '选项8',
        label2: '上季度'
      }, {
        value2: '选项9',
        label2: '本年'
      }, {
        value2: '选项10',
        label2: '去年'
      }, {
        value2: '选项11',
        label2: '自定义'
      }],
      value2: '选项5',
      dialogVisible: false,
      title: '',
      list: [],
      fieldList: [],
      total: 0,

    }
  }, methods: {

    setTotal() {

    },

    getSalesKit(title) {

      this.extracted(title)
      this.title = "销售简报-" + title
      this.dialogVisible = true

    },
    extracted: function (title) {
      let fieldList = []
      let list = []
      if ("新增客户" == title) {
        fieldList = [
          {
            field: "name",
            name: "客户名称"
          }, {
            field: "source",
            name: "客户来源"
          },
          {
            field: "mobile_phone",
            name: "手机"
          },
          {
            field: "Telephone",
            name: "电话"
          },
          {
            field: "website",
            name: "网站"
          },
          {
            field: "mailbox",
            name: "邮箱"
          },
          {
            field: "industry",
            name: "行业"
          },
          {
            field: "level",
            name: "客户基本"
          },
          {
            field: "Next_contact_time",
            name: "下次联系时间"
          },
          {
            field: "remarks",
            name: "备注"
          },
          {
            field: "Lock_state",
            name: "锁定状态"
          },
          {
            field: "Transaction_status",
            name: "成交状态"
          },
          {
            field: "Final_follow_up_time",
            name: "最后跟进时间"
          },
          {
            field: "Final_follow_up_record",
            name: "最后跟进记录"
          }, {
            field: 'Detailed_address',
            name: '详细地址',
          }, {
            field: 'Regional_positioning',
            name: '地区定位',
          }, {
            field: 'Days_before_entering_the_high_seas',
            name: '距进入公海天数',
          }, {
            field: 'person_in_charge',
            name: '负责人',
          }, {
            field: 'Update_time',
            name: '更新时间',
          }, {
            field: 'Creation_time',
            name: '创建时间',
          }, {
            field: 'Founder',
            name: '创建人',
          }, {
            field: '',
            name: '',
          }
        ]

      } else if (title == "新增联系人") {
        fieldList = [
          {
            field: "name",
            name: "姓名"
          },
        ]
      } else if (title == "新增商机") {

      } else if (title == "新增合同") {

      } else if (title == "合同金额") {

      } else if (title == "商机金额") {

      } else if (title == "回款金额") {

      } else if (title == "新增跟进记录") {
        fieldList = [
          {
            field: "modular",
            name: "模块"
          },
          {
            field: "Number_of_new_follow_up_records",
            name: "新增跟进记录数"
          }
          ,
        ]
        list = [
          {
            modular: "线索",
            Number_of_new_follow_up_records: 0
          },
          {
            modular: "客户",
            Number_of_new_follow_up_records: 0
          }, {
            modular: "联系人",
            Number_of_new_follow_up_records: 0
          }, {
            modular: "商机",
            Number_of_new_follow_up_records: 0
          }, {
            modular: "合同",
            Number_of_new_follow_up_records: 0
          }]
      }
      this.fieldList = fieldList
      this.list = list

      this.total = list.length;
    }


  }


}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.box {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgb(225, 225, 225);
  position: absolute;
  padding: 2px 4px;
  margin-top: 10px;

}

.boxson {
  cursor: pointer;
  width: calc(25% - 20px);
  height: 88px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 16px 0px;
  border-radius: 4px;
  margin: 10px;
  text-align: left;

}

.box >>> .el-input__inner {
  border: 0px;
  background: rgba(0, 0, 0, 0);
  padding-left: 32px;
}

.yuer >>> .el-input__inner {
  padding: 0;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
