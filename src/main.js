// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import {
  Button,
  Row,
  Col,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Field,
  NavBar,
  Tab,
  Tabs,
  PullRefresh,
  Tabbar,
  TabbarItem,
  Stepper,
  Cell,
  CellGroup,
} from "vant";

// require styles
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(Search)
  .use(SwipeItem)
  .use(Lazyload)
  .use(List)
  .use(Field)
  .use(Tab)
  .use(Tabs)
  .use(Tabs)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Stepper)
  .use(Cell).use(CellGroup)
  .use(PullRefresh);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
