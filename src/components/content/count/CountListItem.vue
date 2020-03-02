<template>
  <div class="count-list-item">
    <div class="img-container" :style="{ background: countItem.bgColor }">
      <icon-svg icon-class="iconbofang1"></icon-svg>
    </div>
    <div class="count-text">
      <p class="title">{{ countItem.title }}</p>
      <p class="count">{{ countItem.count }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CountListItem",
  props: {
    countItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped lang="scss">
.count-list-item {
  width: 32.5%;
  border: 1px solid $gray;
  background-color: $white;
  height: $height;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-container {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    margin-right: 15px;
    svg {
      font-size: 25px;
      color: $white;
    }
  }
  .count-text {
    .title {
      font-size: 14px;
      margin-bottom: 2px;
    }
    .count {
      font-weight: 700;
      font-size: 22px;
    }
  }
}
</style>
