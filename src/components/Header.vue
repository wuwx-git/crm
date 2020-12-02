  <template>
    <div style="height: 48px; border-bottom: solid 1px #e6e6e6 ;">

      <img class="logo" src="static/img/logo.5560563.png"/>
      <div style="margin: -52px 0 0  157px;width: 50.5%">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">客户管理</el-menu-item>
          <el-menu-item index="2">任务/审批</el-menu-item>
          <el-menu-item index="3">日志</el-menu-item>
          <el-menu-item index="4">项目管理</el-menu-item>
          <el-menu-item index="5">商业智能</el-menu-item>
          <el-menu-item index="6">日历</el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-s-grid"></i>
          </el-menu-item>

        </el-menu>
      </div>
      <div style="top: 0; right: 2% ;position: absolute; ">
        <el-button type="text" @click="drawer = true">
          <i class="el-icon-message-solid"
             style="font-size: 20px ;margin-right: 20px;color: #9da9c2; cursor: pointer;"></i>
        </el-button>


        <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

        <i class="el-icon-caret-bottom" style="position: absolute;  top: 19px;"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>基本信息</el-dropdown-item>
            <el-dropdown-item divided>帮助中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item disabled>版本</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>


      <div id="apps" style="
      z-index: 2000;
      display: none ;
      top: 61px;
      right: 15px;
      box-shadow: 0 8px 11px 1px rgba(0,0,0,.1);
      left: 215px;
      background-color: #fff;
      border-bottom-left-radius:4px ;
      border-bottom-right-radius: 4px;
      position: absolute;
      padding: 20px 15px 40px;
      ">

        <div style="position: relative">

          <el-button size="small" type="button" style="right: 20px;top: -5px;position: absolute;">编辑</el-button>
          <div style="font-weight: 700;">
            顶置应用
            <span style="    color: #ccc;
      font-weight: 400;">（最多可设置8个置顶应用，可通过拖拽进行排列）</span>
          </div>

          <el-menu style="border: none" v-model="activeIndex" class="el-menu" mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1" style="border: none">客户管理</el-menu-item>
            <el-menu-item index="2" style="border: none">任务/审批</el-menu-item>
            <el-menu-item index="3" style="border: none">日志</el-menu-item>
            <el-menu-item index="4" style="border: none">项目管理</el-menu-item>
            <el-menu-item index="5" style="border: none">商业智能</el-menu-item>
            <el-menu-item index="6" style="border: none">日历</el-menu-item>

          </el-menu>


        </div>

        <div style="margin-top: 20px;border-top: 1px solid #e6e6e6;">
          <div style="    font-weight: 700;    margin-top: 20px;">
            全部应用
          </div>

          <el-menu style="border: none" v-model="activeIndex" class="el-menu" mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1" style="border: none">客户管理</el-menu-item>
            <el-menu-item index="2" style="border: none">任务/审批</el-menu-item>
            <el-menu-item index="3" style="border: none">日志</el-menu-item>
            <el-menu-item index="4" style="border: none">项目管理</el-menu-item>
            <el-menu-item index="5" style="border: none">商业智能</el-menu-item>
            <el-menu-item index="6" style="border: none">日历</el-menu-item>

          </el-menu>

        </div>
      </div>

      <el-drawer :visible.sync="drawer" :with-header="false" size="40%">
        <div
          style="padding: 0 20px; height: 50px;line-height: 50px;font-size: 14px;color: #333;background-color: #f7f8fa;">
          <span style="font-weight: 600">通知</span>
        </div>
        <div
          style="overflow-x: auto;overflow-y: hidden;padding-right: 15px;margin-bottom: 15px;border-top: 1px solid #e6e6e6;">
          <menu>
            <el-radio-group v-model="menuIndex">

              <el-radio-button style="margin: 0" label="全部" round>全部</el-radio-button>
              <el-radio-button style="margin: 0" label="公告" round>公告</el-radio-button>
              <el-radio-button style="margin: 0" label="办公审批" round>办公审批</el-radio-button>
              <el-radio-button style="margin: 0" label="任务" round>任务</el-radio-button>
              <el-radio-button style="margin: 0" label="日志" round>日志</el-radio-button>
              <el-radio-button style="margin: 0" label="客户管理" round>客户管理</el-radio-button>
              <el-radio-button style="margin: 0" label="日程" round>日程</el-radio-button>
            </el-radio-group>
          </menu>
        </div>
        <div>


          <p style="margin: 15px 0 65px;text-align: center;font-size: 12px;color: #666;">没有更多了</p>
        </div>

        <div
          style="   position: absolute; left: 0; right: 0; bottom: -1px; height: 50px; background-color: #f7f8fa; padding: 0 15px; ">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>

          <span style="
           font-size: 13px;
      margin-left: 10px;
      color: #333;">仅显示未读消息</span>
        </div>
      </el-drawer>

    </div>
  </template>

  <script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '1',
        drawer: false,
        badge: "1",
        value: false,
        menuIndex: "全部",
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key == "7") {
          document.getElementById("apps").style.display = "inherit";
        } else {
          document.getElementById("apps").style.display = "none"
        }
        console.log(key, keyPath);
      },


    }
  }
  </script>

  <style scoped>

  .el-dropdown-link {
    cursor: pointer;
    font-size: 15px;
    color: #aaa;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .logo {
    width: 150px;
    height: 40px;
    display: block;
    flex-shrink: 0;
    margin-right: 15px;
    background-color: #fff;
    cursor: pointer;
  }


  </style>

