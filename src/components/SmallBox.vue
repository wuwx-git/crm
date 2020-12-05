<template>
  <div style="padding: 16px">
    <div>
      <el-avatar :src="src"></el-avatar>
    </div>
    <div class="box">
      <span style="font-size: 12px">{{ BoxTitle }}</span>
      <div class="text">{{ total }}</div>
    </div>
    <div class="leiron" v-show="stage!=''">
      <div>{{stage}}</div>
      <div style="color: #2bbf24">{{percentage}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SmallBox",
  props: ["src", "BoxTitle", "total","stage","percentage"]
}
</script>

<style scoped>
.box {
  margin-top: -50px;
  margin-left: 50px;
}

.text {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700
}

.leiron {
  text-align: center;
  font-size: small;
  width: 100px;
  height: 37.6px;
  border-left: 1px solid #e6e6e6;
  margin-left: calc(100% - 90px);
  margin-top: -50px;
  padding: 0 3px;

}
</style>
