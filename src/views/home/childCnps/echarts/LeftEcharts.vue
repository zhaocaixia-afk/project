<template>
  <div class="left-echarts">
    <div class="header-con">
      <div class="title">
        <icon-svg icon-class="iconwj-bjb"></icon-svg>
        <p>课程播放统计</p>
      </div>
      <div class="button">
        <button class="btn-active">天</button>
        <button>周</button>
      </div>
    </div>
    <div id="main"></div>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "LeftEcharts",
  mounted() {
    // 初始化实例
    var myChart = echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: "category",
        data: ["星期一", "星期二", "星期三", "星期四", "星期五"]
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false
        }
      },
      series: [
        {
          data: [
            { value: 300 },
            { value: 608 },
            { value: 700, label: { show: true } },
            { value: 450 },
            { value: 900 }
          ],
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#6c9abb",
              width: 3
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>
<style scoped lang="scss">
.left-echarts {
  width: 49%;
  height: 100%;
  border: 1px solid $gray;
  padding: 15px;
  background-color: $white;
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
    .button {
      button {
        font-size: 14px;
        padding: 0 15px;
        border: 1px solid gray;
        border-radius: 10px;
        margin-left: 10px;
      }
      .btn-active {
        color: blue;
        border-color: blue;
      }
    }
  }
  #main {
    width: 100%;
    height: 90%;
  }
}
</style>
