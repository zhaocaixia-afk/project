<template>
  <div class="rigth-echarts">
    <div class="header-con">
      <div class="title">
        <icon-svg icon-class="iconkeben"></icon-svg>
        <p>课程统计</p>
      </div>
    </div>
    <chart class="chart1" ref="chart1" :options="orgOptions" />
  </div>
</template>

<script>
export default {
  name: "RigthEcharts",
  data() {
    return {
      orgOptions: {}
    };
  },
  mounted() {
    this.orgOptions = {
      color: ["#3398DB"],
      xAxis: {
        type: "category",
        splitLine: { show: false }, //去除网格分割线
        splitLine: {
          show: false //去掉分割线
        },
        data: [
          "语文",
          "数学",
          "英语",
          "地理",
          "化学",
          "生物",
          "历史",
          "美术",
          "政治",
          "音乐"
        ]
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false
        }
      },
      series: [
        {
          data: [19, 15, 35, 55, 50, 32, 25, 11, 22, 41],
          type: "bar",
          barWidth: 15 //设置柱子宽度，单位为px
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.rigth-echarts {
  width: 49%;
  height: 100%;
  border: 1px solid $gray;
  background-color: $white;
  padding: 15px;
  .header-con {
    display: flex;
    justify-content: space-between;
    .title {
      display: flex;
      svg {
        margin-right: 5px;
        font-size: 20px;
        color: $green;
      }
    }
  }
  .chart1 {
    width: 100%;
    height: 90%;
  }
}
</style>
