<template>
  <div class="form-word">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程模板" name="first">
        <ul class="cou-form-list">
          <li
            v-for="(item, index) in formwordList"
            :key="index"
            class="cou-form-item"
          >
            <div>
              <icon-svg icon-class="iconwo"></icon-svg>
              <p>{{ item.title }}</p>
            </div>
            <button :class="item.btn == '会议' ? 'border-color':''">{{ item.btn }}</button>
          </li>
        </ul>
        <div class="more">
          <span>更多模板</span>
          <icon-svg icon-class="iconxiangyou"></icon-svg>
        </div>
      </el-tab-pane>
      <el-tab-pane label="会议模板" name="second">会议模板</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getFormword } from "network/home";

export default {
  data() {
    return {
      activeName: "first",
      formwordList: []
    };
  },
  mounted() {
    this._getForword();
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    // 2.
    async _getForword() {
      const result = await getFormword();
      // console.log(result)
      if (result.code === 0) {
        this.formwordList = result.data;
      }
      // console.log(this.formwordList);
    }
  }
};
</script>
<style scoped lang="scss">
.form-word {
  margin-top: 10px;
  height: 245px;
  width: 100%;
  border: 1px solid $gray;
  padding: 0 15px;
  background: $white;
  .el-tabs {
    .el-tab-pane {
      .cou-form-list {
        .cou-form-item {
          display: flex;
          justify-content: space-between;
          line-height: 30px;
          align-items: center;
          div {
            display: flex;
            align-items: center;
            svg {
              margin-right: 3px;
            }
            p {
              font-size: 14px;
            }
          }
          button {
            height: 20px;
            font-size: 10px;
            padding: 0 12px;
            border-radius: 15px;
            border: 1px solid blue;
          }
          .border-color{
            border-color: green;
            color: green;
          }
        }
        .cou-form-item:hover{
          cursor: pointer;
        }
      }
      .more {
        font-size: 12px;
        color: #999;
        line-height: 26px;
        svg{
          margin-left: 5px;
        }
      }
      .more:hover{
        cursor: pointer;
      }
    }
  }
}
</style>
