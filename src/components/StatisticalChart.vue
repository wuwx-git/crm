<template>
  <div style="padding: 0 10px">


    <h4><i style="color: blue" class="el-icon-s-data"></i> {{ optionName }}目标及完成情况


      <el-select size="mini" style=" margin-left:40%;background:#ddd;width: 120px ; border-radius: 4px;"
                 v-model="optionValue"
                 placeholder="请选择" @change="ttt(optionValue)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </h4>
    <div id="main" style="width:700px;height:400px;"></div>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: "StatisticalChart",
  props: [""],
  data() {
    return {
      options: [
        {name: '合同金额', value: 1},
        {name: '回款金额', value: 2}
      ],
      optionName: '合同金额',
      optionValue: 1,
      chartOption: {
        color: ['#6ca2ff', '#ff7474'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '46px',
          left: '20px',
          right: '20px',
          bottom: '10px',
          containLabel: true,
          borderColor: '#fff'
        },
        legend: {
          right: '20px',
          data: ['当月目标金额', '金额']
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true,
              lineStyle: {width: 0}
            },
            axisLabel: {
              color: '#333'
            },
            /** 坐标轴轴线相关设置 */
            axisLine: {
              lineStyle: {color: '#BDBDBD'}
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: true,
              lineStyle: {width: 0}
            },
            /** 坐标轴轴线相关设置 */
            axisLine: {
              lineStyle: {width: 0}
            },
            splitLine: {
              lineStyle: {
                color: '#eee',
                type: 'dotted'
              }
            }
          }
        ],
        series: [
          {
            name: '当月目标金额',
            type: 'bar',
            stack: 'one',
            barMaxWidth: 25,
            barGap: '0',
            data: []
          },
          {
            name: '金额',
            type: 'bar',
            stack: 'two',
            barMaxWidth: 25,
            barGap: '0%',
            data: []
          }
        ]
      },
      chartObj: null,
      loading: false
    }

  },
  methods: {
    ttt(val) {
      let list=this.options
      for (let i = 0; i < list.length; i++) {
        if (list[i].value==val){
          this.optionValue=val
          this.optionName=list[i].name
          break
        }
      }

             // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "近一年的" + this.optionName + "目标完成情况柱状图",
          textStyle: {
            fontSize: 15
          },
        },
        color: ['#6ca2ff', '#ff7474'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          right: '20px',

          data: ['当月目标金额', '金额']
        },
        xAxis: [
          {
            type: 'category',
            data: [20201101,20201111,20201121,20201131],
            axisTick: {
              alignWithLabel: true,
              lineStyle: { width: 0 }
            },
            axisLabel: {
              color: '#333'
            },
            /** 坐标轴轴线相关设置 */
            axisLine: {
              lineStyle: { color: '#BDBDBD' }
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            axisTick: {
              alignWithLabel: true,
              lineStyle: { width: 0 }
            },
            /** 坐标轴轴线相关设置 */
            axisLine: {
              lineStyle: { width: 0 }
            },
            splitLine: {
              lineStyle: {
                color: '#eee',
                type: 'dotted'
              }
            }
          }
        ],
        series: [{
          name: '当月目标金额',
          type: 'bar',
          stack: 'one',
          barMaxWidth: 25,
          barGap: '0',
          data: [1121,1546,988,2121]
        },
          {
            name: '金额',
            type: 'bar',
            stack: 'two',
            barMaxWidth: 25,
            barGap: '0%',
            data: [222,2121,2122,1212]
          }
        ],
      };



      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }, mounted() {
    this.ttt()
  }

}
</script>

<style scoped>

</style>
