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
      padding: 0px 0px 10px;
    ">
        <div style="top: 0;background: #f5f6f9; border-bottom: solid 1px #e6e6e6;">
          <div style=" width: 25% ;background: #f5f6f9;">
            <el-menu
              background-color="#f5f6f9"
              :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" style="padding: 0px;border-width: 3px;margin:0 20px">
                <img src="static/img/客户.png" style="width: 30px;">
                <span>客户</span>
              </el-menu-item>
              <el-menu-item index="2" style="padding: 0px;border-width: 3px;margin:0 20px">
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
          <el-table

            :data="tableData"
            border
            style="width: 100%;font-size: 12px"
            max-height="490"
            height="490"
            size="mini"
          >
            <el-table-column
              style="padding: 0"
              fixed
              type="selection"
              show-overflow-tooltip="true"
              width="55">
            </el-table-column>
            <el-table-column
              show-overflow-tooltip="true"
              fixed
              prop="bo"
              disabled
              width="50"
              header-align="center"
              align="center">
              <template slot="header" slot-scope="scope">
                <el-button type="text" disabled>
                  <img src="static/img/商机.png" width="20px" style="border-radius: 50%;">
                </el-button>
              </template>
              <template slot-scope="scope">
                <span v-show="scope.row.bo">
                  <el-button type="text" style="padding: 2px;" circle>
                  <img src="static/img/商机.png" width="20px" style="border-radius: 50%">
                </el-button>
                </span>
              </template>
            </el-table-column>
            <el-table-column
              show-overflow-tooltip="true"
              fixed
              prop="Cname"
              label="客户名称"
              sortable
              width="220">
              <template slot-scope="scope">
                <div>
                  <el-button type="text" @click="openDrawer(scope.row.id)" size="mini">{{ scope.row.Cname }}</el-button>
                </div>
                <div>
                  <el-drawer
                    :title="scope.row.Cname"
                    :visible="scope.row.drawer"
                    :modal-append-to-body="1==2"
                    :before-close="function() {
                      scope.row.drawer=false
                    }"
                    size="65%">
                    <h2 v-text="scope.row.Cname" style="padding: 20px"></h2>
                  </el-drawer>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="sfo"
              label="客户来源"
              sortable
              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="phnum"
              label="手机"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="telep"
              label="电话"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="wedsite"
              label="网址"
              sortable

              show-overflow-tooltip="true"
              width="300">
            </el-table-column>
            <el-table-column
              prop="mailbox"
              label="邮箱"
              sortable

              show-overflow-tooltip="true"
              width="120">

            </el-table-column>
            <el-table-column
              prop="industry"
              label="客户行业"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="level"
              label="客户级别"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="netime"
              label="下次联系时间"
              sortable

              show-overflow-tooltip="true"
              width="130">
            </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="lock"
              label="锁定状态"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="tran"
              label="成交状态"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>

            <el-table-column
              prop="fintime"
              label="最后跟进时间"
              sortable

              show-overflow-tooltip="true"
              width="130">
            </el-table-column>
            <el-table-column
              prop="finrecord"
              label="最后跟进记录"
              sortable

              show-overflow-tooltip="true"
              width="130">
            </el-table-column>
            <el-table-column
              prop="address"
              label="详细地址"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="posi"
              label="地区定位"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="daysform"
              label="距进公海天数"
              sortable

              show-overflow-tooltip="true"
              width="130">
            </el-table-column>
            <el-table-column
              prop="charge"
              label="负责人"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="updtime"
              label="更新时间"
              sortable
              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="cretime"
              label="创建时间"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="Founder"
              label="创建人"
              sortable

              show-overflow-tooltip="true"
              width="120">
            </el-table-column>
            <el-table-column
              prop="zip"
              label=""
              show-overflow-tooltip="true"
              width="120">
            </el-table-column>


            <el-table-column
              fixed="right"
              sortable
              prop="follow"
              show-overflow-tooltip="true"
              label="关注"
              width="70">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="||"
              width="60">
            </el-table-column>

          </el-table>
          <current-page  :total="tableData.length"></current-page>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import appHeader from "../../../components/Header";
import asideOne from "../../../components/asideOne";
import search from "../../../components/search";
import DifferentialWeight from "../../../components/DifferentialWeight";
import Scene from "../../../components/scene";
import CurrentPage from "../../../components/currentPage";

export default {
  components: {CurrentPage, Scene, asideOne, appHeader, search, DifferentialWeight},
  name: "index",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tableData: [
        {
          id: 1,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 2,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 3,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 4,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 5,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 6,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 7,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 8,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 9,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 10,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 11,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 12,

          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
        {
          id: 13,

          bo: false, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: false,
          tran: true,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: false,
        },
        {
          id: 14,
          bo: true, drawer: false,
          Cname: "重庆市三分科技建设有限公司",
          sfo: '凌康网',
          phnum: '18558869241',
          telep: '6688 6688',
          wedsite: 'www.sanfen.cn',
          mailbox: 'sanfen.@com',
          industry: '科技建设',
          level: '高级',
          netime: '2014.02.29 10:54',
          remarks: '时不可失大肯德基',
          lock: true,
          tran: false,
          fintime: '2014.02.29 10:54',
          finrecord: '无数据',
          address: '暂无数据',
          posi: '99',
          charge: '王二蛋',
          updtime: '2014.02.29 10:54',
          cretime: '2014.02.29 10:54',
          Founder: '张铁柱',
          follow: true,
        },
      ],

    };
  },
  methods: {
    setTotal(){
      CurrentPage.methods.setTotal(this.tableData.length)

    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    openDrawer(id) {
      let list = this.tableData;
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
          list[i].drawer = true
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

