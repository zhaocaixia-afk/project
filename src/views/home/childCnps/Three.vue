<template>
  <div class="three-container">
    <div class="three-item">
      <icon-svg icon-class="icondianshi1"></icon-svg>
      <span>直播巡看</span>
    </div>
    <div class="line"></div>
    <div class="three-item">
      <icon-svg icon-class="iconwenjian"></icon-svg>
      <span>创建模板</span>
    </div>
    <div class="line"></div>
    <div class="three-item">
      <icon-svg icon-class="iconjigouguanli"></icon-svg>
      <span>组织机构</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.three-container {
  margin-top: 10px;
  height: 100px;
  border: 1px solid $gray;
  display: flex;
  align-items: center;
  background-color: $white;
  .line {
    width: 1px;
    background-color: $gray;
    height: 50px;
  }
  .three-item {
    padding: 0 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg{
      font-size: 40px;
      color: $green;
      margin-bottom: 10px;
    }
    span{
      font-size: 10px;
    }
  }
}
</style>
