<template>
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行课程" name="first">
        <course :course-list="courseList" />
      </el-tab-pane>
      <el-tab-pane label="正在进行会议" name="second">正在进行会议</el-tab-pane>
      <div class="tabLine"></div>
    </el-tabs>
  </div>
</template>
<script>
import Course from "./Course";
import { getCourse } from "network/home";

export default {
  name: "Tabs",
  data() {
    return {
      activeName: "first",
      courseList: []
    };
  },
  mounted() {
    this._getCourse();
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    // 2.获取course列表
    async _getCourse() {
      const result = await getCourse();
      // console.log(result)
      if (result.code === 0) {
        this.courseList = result.data;
      }
      // console.log(this.courseList);
    }
  },
  components: {
    Course
  }
};
</script>
<style scoped lang="scss">
.tabs {
  padding: 0 20px;
  height: 245px;
  border: 1px solid $gray;
  background-color: $white;
  .el-tabs .el-tabs--top{
    .el-tabs__header .is-top{
      margin-bottom: 20px;
      height: 45px;
    }
  }
}
</style>
