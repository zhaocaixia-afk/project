<template>
    <div class="menu-list-item">
        <icon-svg icon-class="icongeren6"></icon-svg>
        <p>{{menuItem.text}}</p>
    </div>
</template>
<script>
export default {
    name: 'MenuListItem',
    props: {
        menuItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped lang="scss">
.menu-list-item{
    color: $white;
    text-align: center;
    padding: 20px 0;
    svg{
        margin-bottom: 6px;
        font-size: 20px;
    }
    p{
        font-size: 10px;
    }
}
.menu-list-item:hover{
    cursor: pointer;
}
</style>