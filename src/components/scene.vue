<template>
  <el-table-header>
    <div style="
    border-bottom:1px solid #e6e6e6;
    font-size: 13px;
    height: 50px;
    padding: 0 20px;">
      <div style="margin-top:20px">场景:</div>
      <div style="margin:-23px 0 0 35px; width: 220px">
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option style="font-size: 12px"
                     v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
          <div style="border-top:1px solid #e6e6e6 ">
            <div style="margin: 0 34px ;">
              <el-button type="text" @click="dialogFormVisible = true" style="font-size: 12px"> 新增场景</el-button>
              <el-dialog title="新建场景" :visible.sync="dialogFormVisible">
                <el-form :model="form" label-position="top">
                  <el-form-item label="场景名称">
                    <el-input v-model="form.name" autocomplete="off" style="width: 260px"
                              placeholder="请输入场景名称，最多10个字符"></el-input>
                  </el-form-item>
                  筛选条件
                  <el-form-item label=""
                                v-for="domain in dynamicValidateForm.domains"
                                :key="domain.key">
                    <div v-model="domain.value">
                      <el-select v-model="form.region" placeholder="请选择要筛选的字段名">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>

                      <el-select v-model="value2" placeholder="请选择">
                        <el-option
                          v-for="item in options2"
                          :key="item.value2"
                          :label="item.label2"
                          :value="item.value2">
                        </el-option>
                      </el-select>
                      <el-input type="text" placeholder="请输入筛选条件" style="width: 200px"></el-input>
                      <el-button @click.prevent="removeDomain(domain)" type="text" class="el-icon-error"></el-button>
                    </div>
                  </el-form-item>
                  <el-button type="text" @click="addDomain">添加筛选条件</el-button>
                </el-form>
                <div slot="footer" class="dialog-footer">

                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>


            </div>
            <div style="margin:0 34px ">

              <el-button type="text" @click="dialogFormVisible2 = true" style="font-size: 12px"> 管理</el-button>
              <el-dialog title="管理" :visible.sync="dialogFormVisible2">

                <el-transfer v-model="value3" :data="data"></el-transfer>

                <el-button type="text" @click="dialogFormVisible = true" style="font-size: 12px"> 新增场景</el-button>

              </el-dialog>
            </div>
          </div>
        </el-select>
      </div>

      <div style="margin:-32px 0 0 255px">
        <el-button type="primary" size="small" @click="dialogFormVisible3=true">高级搜索</el-button>
        <el-dialog title="高级搜索" :visible.sync="dialogFormVisible3">
          <el-form :model="form2" label-position="top">
            筛选条件
            <el-form-item label=""
                          v-for="domain in dynamicValidateForm.domains"
                          :key="domain.key">
              <div v-model="domain.value">
                <el-select v-model="form2.region" placeholder="请选择要筛选的字段名" size="medium">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>

                <el-select v-model="value2" size="medium" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label2"
                    :value="item.value2">
                  </el-option>
                </el-select>
                <el-input type="text" placeholder="请输入筛选条件" size="medium" style="width: 200px"></el-input>
                <el-button @click.prevent="removeDomain(domain)" type="text" class="el-icon-error"></el-button>
              </div>
            </el-form-item>
            <el-button type="text" @click="addDomain">添加筛选条件</el-button>

            <el-form-item>
                <el-checkbox label="" @click="denf=true"  v-model="denf">保存为场景 <el-input type="text" v-show="denf" placeholder="请输入场景名称，最多10个字符" ></el-input></el-checkbox>
                <br>
                <el-checkbox label="设置为默认" v-show="denf" v-model="moren"></el-checkbox>
              </el-form-item>



          </el-form>

        </el-dialog>

      </div>


    </div>

  </el-table-header>
</template>

<script>
export default {
  name: "scene",
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      denf:false,
      moren:false,
      options: [{
        value: '选项1',
        label: '全部项目'
      }, {
        value: '选项2',
        label: '我负责的项目'
      }, {
        value: '选项3',
        label: '下属负责的项目'
      }, {
        value: '选项4',
        label: '我参与的客户'
      }, {
        value: '选项5',
        label: '我关注的客户'
      }],
      value: '选项1',
      dialogFormVisible2: false,
      dialogFormVisible: false,
      dialogFormVisible3: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }, form2: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
      },
      options2: [{
        value2: '选项1',
        label2: '等于'
      }, {
        value2: '选项2',
        label2: '不等于'
      }, {
        value2: '选项3',
        label2: '包含'
      }, {
        value2: '选项4',
        label2: '不包含'
      }, {
        value2: '选项5',
        label2: '开始于'
      }, {
        value2: '选项6',
        label2: '结束于'
      }, {
        value2: '选项7',
        label2: '为空'
      }, {
        value2: '选项8',
        label2: '不为空'
      }, {
        value2: '选项9',
        label2: '小于'
      }, {
        value2: '选项10',
        label2: '小于等于'
      }, {
        value2: '选项11',
        label2: '大于'
      }, {
        value2: '选项12',
        label2: '大于等于'
      },


      ],
      value2: '选项3', data: generateData(), value3: [1, 4]

    }
  },

  methods: {
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    }
  }
}

</script>

<style scoped>

</style>
