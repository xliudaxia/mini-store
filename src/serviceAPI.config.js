const BASEURL = "https://run.mocky.io/v3/201a709c-11fb-457b-9122-f376c6bff075";
const LOCALURL = "http://localhost:3000/";
const URL = {
  getShoppingMallInfo: BASEURL,
  getGoodsInfo: BASEURL + "getGoodsInfo",
  registerUser: LOCALURL + "user/register",
  login: LOCALURL + "user/login",
  getDetailGoodsInfo: LOCALURL + "goods/getDetailGoodsInfo",
  getCateGoryList: LOCALURL + "goods/getCategoryList",
  getCateGorySubList: LOCALURL + "goods/getCateGorySubList",
  getGoodsListByCategorySubID: LOCALURL + "goods/getGoodsListByCategorySubID"
};

module.exports = URL;
