<template>
  <div class="course-list">
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="(item, index) in courseList"
      :key="index"
      shadow="hover"
    >
      <div class="bgColor" :style="{ background: bgColorList[index] }">
        <p class="bgtitle">{{ item.bgtitle }}</p>
        <span class="smalltitle">{{ item.smalltitle }}</span>
      </div>
      <div class="bottom">
        <p class="coursename">{{ item.coursename }}</p>
        <div class="name-time">
          <p class="name">
            <icon-svg icon-class="iconwo"></icon-svg>
            <span>{{ item.people }}</span>
          </p>
          <p class="name">
            <icon-svg icon-class="iconshijian"></icon-svg>
            <span>{{ item.time }}</span>
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Course",
  data() {
    return {
      bgColorList: [
        "linear-gradient(#9ecef2,#95a0db)",
        "linear-gradient(#fddfc1,#e9b583)",
        "linear-gradient(#dbdafa,#9aa0e9)",
        "linear-gradient(#f0f2b1,#dee970)"
      ]
    };
  },
  props: {
    courseList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
  // components: {
  //     courseList
  // }
};
</script>
<style lang="scss" scoped>
.course-list {
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 180px;
    height: 155px;
    border: 1px solid $gray;
    .bgColor {
      height: 100px;
      text-align: center;
      padding-top: 20px;
      .bgtitle {
        font-size: 20px;
        color: $white;
        margin-bottom: 5px;
      }
      .smalltitle {
        padding: 0 5px;
        background-color: $white;
        font-size: 10px;
      }
    }
    .bottom {
      padding: 5px 15px;
      .coursename {
        font-size: 14px;
        line-height: 25px;
      }
      .name-time {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .name {
          font-size: 12px;
          svg {
            font-size: 16px;
          }
        }
      }
    }
  }
  .el-card:hover{
    cursor: pointer;
  }
}
</style>
