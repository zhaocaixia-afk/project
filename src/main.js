import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.normalize.css
import 'normalize.css/normalize.css'

// 2.element-ui的按需导入
import './plugins/element.js'

// 3.iconfont的引入
import './assets/icon/iconfont.js'
import IconSvg from 'components/common/svgIcon/SvgIcon.vue'
Vue.component('icon-svg',IconSvg)

// 4.mockjs模拟数据
import './mock/mock'

// 5.echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart',ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
