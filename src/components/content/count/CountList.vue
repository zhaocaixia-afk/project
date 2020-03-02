<template>
  <div class="count-list">
    <count-list-item
      v-for="(item, index) in countList"
      :key="index"
      :count-item="item"
    ></count-list-item>
  </div>
</template>
<script>
import CountListItem from "./CountListItem";

export default {
  name: "CountList",
  props: {
    countList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CountListItem
  }
};
</script>
<style scoped lang="scss">
.count-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
