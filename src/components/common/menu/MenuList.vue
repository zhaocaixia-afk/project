<template>
    <div class="menu-list">
        <menu-list-item v-for="(item,index) in menuList" :key="item.path" :menu-item="item" :menu-icon="menuIconList[index]"></menu-list-item>
    </div>
</template>
<script>
import MenuListItem from './MenuListItem'
export default {
    name: 'MenuList',
    data(){
        return{
            menuIconList: ["icongeren6","iconbofang1","iconinstitute","iconkebiao","iconyonghu"]
        }
    },
    props: {
        menuList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        MenuListItem
    }
}
</script>
<style scoped>

</style>