<template>
  <div class="wait">
    <div class="title">
      <icon-svg icon-class="iconyanjing"></icon-svg>
      <p>待发布课程</p>
    </div>
    <div class="wait-list">
      <div class="wait-item" v-for="(item, index) in waitList" :key="index">
        <div class="left">
          <div class="icon" :style="{background:item.bgColor}">{{ item.img }}</div>
          <div class="center">
            <p class="center-title">{{ item.title }}</p>
            <div class="name-tiem">
              <p class="name">
                <icon-svg icon-class="iconwo"></icon-svg>
                <span>{{ item.name }}</span>
              </p>
              <p class="data-time">
                <icon-svg icon-class="iconshijian"></icon-svg>
                <span class="data">{{ item.data }}</span>
                <span class="time">{{ item.time }}</span>
              </p>
            </div>
          </div>
        </div>
        <button>发布</button>
      </div>
    </div>
    <div class="more">
      <span>更多模板</span>
      <icon-svg icon-class="iconxiangyou"/>
    </div>
  </div>
</template>
<script>
import { getWait } from "network/home";
export default {
  name: "Wait",
  data() {
    return {
      waitList: []
    };
  },
  mounted() {
    this._getWait();
  },
  methods: {
    async _getWait() {
      const result = await getWait();
      // console.log(result)
      if (result.code === 0) {
        this.waitList = result.data;
      }
      console.log(this.waitList);
    }
  }
};
</script>
<style scoped lang="scss">
.wait {
  width: 100%;
  height: 290px;
  border: 1px solid $gray;
  background: $white;
  margin-top: 10px;
  .title {
    border-bottom: 1px solid $gray;
    display: flex;
    align-items: center;
    padding-left: 15px;
    line-height: 40px;
    svg{
      font-size: 26px;
      margin-right: 5px;
      color: $green;
    }
  }
  .wait-list {
    .wait-item {
      border-bottom: 1px solid $gray;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        display: flex;
        .icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          // background: green;
          line-height: 35px;
          text-align: center;
          color: $white;
          margin-right: 10px;
        }
        .center {
          .center-title {
            font-size: 15px;
            margin-bottom: 10px;
          }
          .center-title:hover{
            cursor: pointer;
          }
          .name-tiem {
            display: flex;
            font-size: 12px;
            justify-content: space-between;
            .data-time{
              .data{
                margin-right: 5px;
              }
            }
          }
        }
      }

      button {
        padding: 0 10px;
        border: 1px solid $green;
        color: $green;
        border-radius: 20px;
        height: 20px;
        font-size: 14px;
      }
    }
    .wait-item:last-of-type {
      border-bottom: none;
    }
  }
  .more {
    font-size: 12px;
    color: #999;
    margin-left: 26px;
  }
  .more:hover{
    cursor: pointer;
  }
}
</style>
