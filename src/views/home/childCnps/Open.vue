<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <div style="background:rgb(62,164,88)" class="open-item">
        <icon-svg icon-class="iconbofang3"></icon-svg>
        <div>
          <p>开课</p>
          <p>Open course</p>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div style="background:#df7537;" class="open-item">
        <icon-svg icon-class="iconhuiyikaihuitaolun"></icon-svg>
        <div>
          <p>开课</p>
          <p>Open course</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.el-row {
  .el-col {
    .open-item {
      height: $height;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      svg {
        font-size: 40px;
        margin-right: 10px;
      }
      div {
        p:first-of-type {
          font-size: 26px;
          margin-bottom: 5px;
        }
        p:last-of-type {
            font-size: 12px;
        }
      }
    }
  }
}
</style>
