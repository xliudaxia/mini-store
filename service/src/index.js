const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const { connect } = require("./database/init.js");
const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());


let user = require("./appApi/user.js");
router.use("/user", user.routes());


let goods = require('./appApi/goods.js')
router.use('/goods',goods.routes())

app.use(router.routes());
app.use(router.allowedMethods());

(async () => {
  await connect();
  require("./database/schema/User");
  require("./database/schema/Goods");
  require("./database/schema/Category");
  require("./database/schema/CategorySub");

})();

app.use(async ctx => {
  ctx.body = "<h1>hello Koa2</h1>";
});


app.listen(3000, () => {
  console.log("[Server] starting at port 3000");
});
