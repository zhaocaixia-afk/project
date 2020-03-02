<template>
    <div class="echarts">
        <left-echarts/>
        <right-echarts/>
    </div>
</template>
<script>
import LeftEcharts from './LeftEcharts'
import RightEcharts from './RigthEcharts'

export default {
    name: 'Echarts',
    components: {
        LeftEcharts,
        RightEcharts
    }
}
</script>
<style scoped lang="scss">
.echarts{
    width: 100%;
    height: 290px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
</style>