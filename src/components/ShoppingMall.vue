<template>
  <div>
    <!--search bar layout-->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3"
          ><img :src="locationIcon" width="80%" class="location-icon"
        /></van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="4" offset="1"><van-button size="mini">查找</van-button></van-col>
      </van-row>
    </div>
    
    <!--swiper area-->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="type-bar">
      <div class="type-item" v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>

   

    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{ item.goodsName }}</div>
              <div>
                ￥{{ item.price | moneyFilter }}(￥{{
                  item.mallPrice | moneyFilter
                }})
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <floor-component
      :floorData="floor1"
      :floorTitle="floorName.floor1"
    ></floor-component>
    <floor-component
      :floorData="floor2"
      :floorTitle="floorName.floor2"
    ></floor-component>
    <floor-component
      :floorData="floor3"
      :floorTitle="floorName.floor3"
    ></floor-component>

    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info
                :goodsId="item.goodsId"
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              >
              </goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPI.config.js";
import { toMoney } from "@/filter/moneyFilter.js";
import floorComponent from "./components/floorComponent";
import goodsInfo from "./components/goodsInfoComponent";
export default {
  data() {
    return {
      locationIcon: require("../assets/images/location.png"),
      bannerPicArray: [
       
      ],
      category: [],
      bannerPicArray: [],
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3,
      },
      floor1: [], //楼层1的数据
      floor2: [], //楼层1的数据
      floor3: [], //楼层1的数据
      floorName: {}, //楼层名称
      hotGoods: [], //热卖商品
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    },
  },
  components: { floorComponent, goodsInfo },
  created() {
    axios({
      url: url.getShoppingMallInfo,
      method: "get",
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.hotGoods = response.data.data.hotGoods;
          this.bannerPicArray = response.data.data.slides;
        }
      })
      .catch((error) => {});
  },
};
</script>

<style scoped>
.search-bar {
  height: 2.5rem;
  background-color: #e5017d;
  line-height: 2rem;
  display: flex;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important ;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}

.swiper-area {
  width: 20rem;
  clear: both;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}

.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.type-item {
  flex: 1;
}

.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}
</style>