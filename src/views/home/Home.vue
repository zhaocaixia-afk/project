<template>
  <el-container class="home-container">
    <el-header style="height: 70px;">
      <div class="logo">
        <icon-svg icon-class="icon777"></icon-svg>
        <div class="title">
          <p>后台管理系统</p>
          <p>background management systers</p>
        </div>
      </div>
      <div class="icon-group">
        <icon-svg icon-class="icongeren6"></icon-svg>
        <icon-svg icon-class="iconshezhi"></icon-svg>
        <icon-svg icon-class="iconwenjian"></icon-svg>
      </div>
    </el-header>
    <el-container>
      <el-aside width="80px">
        <menu-list :menu-list="menuList"></menu-list>
      </el-aside>
      <el-main>
        <el-row :gutter="10">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <count-list :count-list="countList" />
              <tabs />
              <echarts/>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <open />
              <three/>
              <formword/>
              <wait/>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenu, getCount, getCourse } from "network/home";

import MenuList from "components/common/menu/MenuList";
import CountList from "components/content/count/CountList";
import Open from "./childCnps/Open";
import Tabs from "./childCnps/Tabs";
import Three from './childCnps/Three';
import Formword from './childCnps/Formword';
import Echarts from './childCnps/echarts/Echarts';
import Wait from './childCnps/Wait';

export default {
  name: "Home",
  data() {
    return {
      menuList: [],
      countList: []
    };
  },
  mounted() {
    this._getMenu();
    this._getCount();
  },
  methods: {
    // 1.获取菜单数据
    async _getMenu() {
      const result = await getMenu();
      // console.log(result)
      if (result.code === 0) {
        this.menuList = result.data;
      }
    },
    // 2.获取count列表
    async _getCount() {
      const result = await getCount();
      // console.log(result)
      if (result.code === 0) {
        this.countList = result.data;
      }
    }
  },
  components: {
    MenuList,
    CountList,
    Open,
    Tabs,
    Three,
    Formword,
    Echarts,
    Wait
  }
};
</script>

<style scoped lang="scss">
.home-container {
  height: 100%;
  .el-header {
    background-color: $green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;
    padding-left: 10px;
    padding-right: 10px;
    .logo {
      display: flex;
      align-items: center;
      svg {
        font-size: 36px;
        margin-right: 10px;
      }
      .title {
        p:first-of-type {
          font-size: 24px;
          margin-bottom: 5px;
        }
        p:last-of-type{
          font-size: 12px;
        }
      }
    }
    .icon-group {
      svg {
        font-size: 22px;
        margin: 0 13px;
      }
    }
  }
  .el-container {
    .el-aside {
      background-color: #333744;
    }
    .el-main {
      background-color: #eaedf1;
      padding: 10px;
      .el-row {
        height: 100%;
        .grid-content {
          min-height: 36px;
        }
      }
    }
  }
}
</style>
