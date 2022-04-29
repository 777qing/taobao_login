<template>
<div class="tao-main">
      <!-- 导航 -->
    <div class="nav">
        <div class="zhong clearfix">
            <!-- 左 -->
            <ul class="left nav-left">
                <li>
                    <span class="nav-zi">中国大陆</span>
                    <span class="iconfont icon-xiajiantou  xiajian"></span>
                </li>
                <li>
                    <a href="" class="guding">亲，请登录</a>
                    <a href="">免费注册</a>
                </li>
                <li><a href="">手机逛淘宝</a></li>
                <li><a href="">网页无障碍</a></li>
            </ul>



            <!-- 右 -->

            <ul class="nav-right right">
                <li>
                    <a href="">我的淘宝</a>
                    <span class="iconfont icon-xiajiantou  xiajian"></span>
                </li>
                <li>

                    <a href="">
                        <span class="iconfont icon-gouwuche  che"></span>
                        购物车</a>
                </li>
                <li>

                    <a href="">
                        <span class="iconfont icon-shoucang xing"></span>
                        收藏夹
                        <span class="iconfont icon-xiajiantou  xiajian"></span>
                    </a>
                </li>
                <li><a href="">商品分类</a></li>
                <li class="nav-fenge">|</li>
                <li>
                    <a href="">千牛卖家中心</a>
                    <span class="iconfont icon-xiajiantou  xiajian"></span>
                </li>
                <li>
                    <a href="">联系客服</a>
                    <span class="iconfont icon-xiajiantou  xiajian"></span>
                </li>
            </ul>
        </div>
    </div>
    <!-- 头部 -->
    <header class="header">
        <div class="zhong clearfix">
            <!-- 左 -->

            <div class="header-title left">
                <h1>
                    <a href="">
                        <span>淘宝</span>
                    </a>
                </h1>
            </div>

            <!-- 右 -->

            <div class="header-code right">
                <a href="">
                    <span> 下载淘宝</span>
                    <img src="@/assets/tao-main/image/code.webp" alt="">
                </a>
            </div>

            <!-- 中 -->

            <div class="header-search clearfix">
                <div class="choose left">
                    <span class="zi">宝贝
                        <span class="iconfont icon-xiajiantou"></span>
                    </span>
                </div>
                <form>
                    <input class="left iconfont icon-sousuo" type="text">
                    <!-- 搜索中的字 -->
                    <div class="placeholder">
                        <i class="iconfont">&#xe603;</i>
                        <span>小白鞋</span>
                    </div>
                </form>
                <button>搜索</button>



            </div>


            <ul class="hot-choose left">

                <li><a href="">新款连衣裙</a></li>
                <li><a href="">四件套</a></li>
                <li class="selected"><a href="">潮流T恤</a></li>
                <li><a href="">时尚女鞋</a></li>
                <li class="selected"><a href="">短裤</a></li>
                <li><a href="">半身裙</a></li>
                <li class="selected"><a href="">男士外套</a></li>
                <li><a href="">墙纸</a></li>
                <li><a href="">行车记录仪</a></li>
                <li><a href="">新款男鞋</a></li>
                <li><a href="">耳机</a></li>
                <li><a href="">时尚女包</a></li>
                <li><a href="">沙发</a></li>
            </ul>



        </div>
    </header>

    <!--   主 -->

    <div class="main">
        <div class="zhong clearfix">

            <!-- 主题市场 -->
            <div class="main-nav">
                <h2 class="left">主题市场</h2>
                <ul class="left nav2">
                    <li class="fen"> <a href=""> 天猫</a></li class="fen">
                    <li class="fen"> <a href=""> 聚划算</a> </li>
                    <li class="lv"> <a href=""> 天猫超市</a> </li>
                </ul>

                <ul class="left nav3">
                    <li>|</li>
                    <li><a href="">司法拍卖</a></li>
                    <li><a href="">飞猪旅行</a></li>
                    <li><a href="">天天特卖</a></li>
                </ul>

                <ul class="left nav4">
                    <li>|</li>
                    <li><a href="">造点新货</a></li>
                    <li><a href="">苏宁易购</a></li>
                    <li><a href="">淘宝心选</a></li>
                    <li><a href="">智能生活</a></li>
                </ul>

            </div>
            <!-- 边侧 -->
            <div class="main-aside right">
                <!-- 用户 -->
                <div class="user">
                    <div class="user-head">
                        <img src="@/assets/tao-main/image/main-user-1.jpg" alt="">
                        <a>HI! 你好</a>
                    </div>
                    <!-- 注册、登录、开店 -->
                    <div class="user-choose clearfix">
                        <a class="choose1 left" href="">登录</a>
                        <a class="choose2 left" href="">注册</a>
                        <a class="choose3 left" href="">开店</a>
                    </div>
                    <!-- 广告区域 -->
                    <div class="user-ad">
                        <a href="">
                            <img src="@/assets/tao-main/image/user-ad.png" alt="">
                        </a>
                    </div>
                    <!-- 公告 -->
                    <ul class="user-message">
                        <li class="message-title">
                            <span class="title">公告</span>
                            <span class="des">新鲜事儿都在这里~</span>

                        </li>

                        <li class="min-title">
                            <a class="title" href="">
                                <span>规则</span>
                                <p>2021年淘宝12.12招商规则</p>
                            </a>

                        </li>

                        <li class="min-title">
                            <a class="title" href="">
                                <span>热点</span>
                                <p>关于推进“清朗”账号乱象专项整治的通知</p>
                            </a>


                        </li>
                        <li class="min-title">
                            <a class="title" href="">
                                <span>热点</span>
                                <p>《淘宝平台违禁信息管理规则》规则变更通知</p>
                            </a>

                        </li>
                    </ul>
                    <!-- 我的信息 -->
                    <div class="user-news">
                        <div class="left">
                            <a href="">
                                <i class="iconfont icon-kongxinwujiaoxing"></i>
                                收藏的宝贝
                            </a>
                        </div>

                        <div class="left">
                            <a href="">
                                <i class="iconfont icon-shoutibao"></i>
                                买过的店铺
                            </a>
                        </div>

                        <div class="left">
                            <a href="">
                                <i class="iconfont icon-dianpu"></i>
                                收藏的店铺
                            </a>
                        </div>

                        <div class="left">
                            <a href="">
                                <i class="iconfont icon-shijian"></i>
                                我的足迹
                            </a>
                        </div>


                    </div>

                </div>
            </div>

            <!-- 右侧主区域 -->
            <div class="main-main clearfix">
                <!-- 左侧导航 -->

                <div class="left-nav left">
                    <ul>
                        <li>
                            <i class="iconfont icon-lianyiqun"></i>
                            <a href="">女装</a>
                            <span>/</span>
                            <a href="">内衣</a>
                            <span>/</span>
                            <a href="">家居</a>
                        </li>


                        <li>
                            <i class="iconfont icon-xie"></i>
                            <a href="">女鞋</a>
                            <span>/</span>
                            <a href="">男鞋</a>
                            <span>/</span>
                            <a href="">箱包</a>
                        </li>


                        <li>
                            <i class="iconfont icon-xiaoyazi"></i>
                            <a href="">母婴</a>
                            <span>/</span>
                            <a href="">童装</a>
                            <span>/</span>
                            <a href="">玩具</a>
                        </li>

                        <li>
                            <i class="iconfont icon-chenshan"></i>
                            <a href="">男装</a>
                            <span>/</span>
                            <a href="">运动户外</a>
                        </li>

                        <li>
                            <i class="iconfont icon-meizhuang-meizhuangshua"></i>
                            <a href="">美妆</a>
                            <span>/</span>
                            <a href="">彩妆</a>
                            <span>/</span>
                            <a href="">个护</a>
                        </li>

                        <li>
                            <i class="iconfont icon-shouji"></i>
                            <a href="">手机</a>
                            <span>/</span>
                            <a href="">数码</a>
                            <span>/</span>
                            <a href="">企业</a>
                        </li>

                        <li>
                            <i class="iconfont icon-xiyiji"></i>
                            <a href="">大家电</a>
                            <span>/</span>
                            <a href="">生活电器</a>
                        </li>

                        <li>
                            <i class="iconfont icon-quqi"></i>
                            <a href="">零食</a>
                            <span>/</span>
                            <a href="">生鲜</a>
                            <span>/</span>
                            <a href="">茶酒</a>
                        </li>

                        <li>
                            <i class="iconfont icon-guo"></i>
                            <a href="">厨具</a>
                            <span>/</span>
                            <a href="">收纳</a>
                            <span>/</span>
                            <a href="">清洁</a>
                        </li>

                        <li>
                            <i class="iconfont icon-haofangtuo400iconfont2shafa"></i>
                            <a href="">家纺</a>
                            <span>/</span>
                            <a href="">家饰</a>
                            <span>/</span>
                            <a href="">鲜花</a>
                        </li>

                        <li>
                            <i class="iconfont icon-shu"></i>
                            <a href="">图书音像</a>
                            <span>/</span>
                            <a href="">文具</a>
                        </li>

                        <li>
                            <i class="iconfont icon-yiyaoxiang"></i>
                            <a href="">医药保健</a>
                            <span>/</span>
                            <a href="">进口</a>
                        </li>

                        <li>
                            <i class="iconfont icon-xiaoche"></i>
                            <a href="">汽车</a>
                            <span>/</span>
                            <a href="">二手车</a>
                            <span>/</span>
                            <a href="">用品</a>
                        </li>

                        <li>
                            <i class="iconfont icon-building"></i>
                            <a href="">房产</a>
                            <span>/</span>
                            <a href="">装修家具</a>
                            <span>/</span>
                            <a href="">建材</a>
                        </li>

                        <li>
                            <i class="iconfont icon-shoubiao"></i>
                            <a href="">手表</a>
                            <span>/</span>
                            <a href="">眼镜</a>
                            <span>/</span>
                            <a href="">珠宝饰品</a>
                        </li>





                    </ul>


                </div>

                <!-- 右侧图片 -->

                <div class="main-right left">
                    <div class="shang">
                        <div class="shang-img">
                            <a href="">
                                <img src="@/assets/tao-main/image/main-shang1.png" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/tao-main/image/main-shang-2.jpg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/tao-main/image/main-shang-3.jpg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/tao-main/image/main-shang-4.jpg" alt="">
                            </a>
                            <a href="">
                                <img src="@/assets/tao-main/image/main-shang-5.png" alt="">
                            </a>

                        </div>

                        <div class="jian">
                            <span class="iconfont zuo icon-jiantouzuo"></span>
                            <span class="iconfont you icon-jiantouyouright"></span>
                        </div>

                        <ul class="dot">
                            <li class="selected"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>


                    </div>

                    <!-- 中间标识 -->

                    <div class="mian-sign">
                        <span class="sign"></span>
                        <span class="sign-des">理想生活上天猫</span>
                        <strong>
                            <i>1</i>
                            /5
                        </strong>
                    </div>

                    <!-- 下方图片 -->

                    <div class="xia clearfix">
                        <div class="xia-img">
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/main-xia-left1.jpg" alt="">
                            </a>
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/main-xia-right1.jpg" alt="">
                            </a>

                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/main-xia-left2.jpg" alt="">
                            </a>
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/main-xia-right2.jpg" alt="">
                            </a>

                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/3.jpg" alt="">
                            </a>
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/right3.jpg" alt="">
                            </a>

                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/left-4.jpg" alt="">
                            </a>
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/right4.jpg" alt="">
                            </a>

                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/left5.jpg" alt="">
                            </a>
                            <a href="" class="left">
                                <img src="@/assets/tao-main/image/right5.jpg" alt="">
                            </a>

                        </div>
                        <div class="jian">
                            <span class="iconfont zuo icon-jiantouzuo"></span>
                            <span class="iconfont you icon-jiantouyouright"></span>
                        </div>

                    </div>



                </div>




            </div>

            <!-- 有好货 -->
            <div class="goods">
                <div class="title">
                    <h3 class="left">有好货</h3>
                    <span>
                        <img src="@/assets/tao-main/image/goods-title.png" alt="">
                    </span>
                </div>
                <ul>
                    <li class="left">
                        <div class="goods-tu">
                            <a href="">
                                <img src="@/assets/tao-main/image/goods-1.webp" alt="">
                            </a>
                        </div>
                        <div class="goods-des">
                            <a href="">毒液venom耳机绕线器</a>
                            <p>包装挺精致的，还送了两张贴画，挺好玩的 买来送对象的小玩具，宝贝收到了 发货挺快的 疫情期间物流速度也可以～挺阔爱一小东西～</p>
                        </div>
                    </li>

                    <li class="left">
                        <div class="goods-tu">
                            <a href="">
                                <img src="@/assets/tao-main/image/goods-2.webp" alt="">
                            </a>
                        </div>
                        <div class="goods-des">
                            <a href="">贝乐动漫钢铁蜘蛛玩具手办</a>
                            <p>逼真的人物模型栩栩如生，巧妙的设计精致的外观十分吸睛。</p>
                        </div>
                    </li>

                    <li class="left">
                        <div class="goods-tu">
                            <a href="">
                                <img src="@/assets/tao-main/image/goods-3.webp" alt="">
                            </a>
                        </div>
                        <div class="goods-des">
                            <a href="">毒液venom耳机绕线器</a>
                            <p>包装挺精致的，还送了两张贴画，挺好玩的 买来送对象的小玩具，宝贝收到了 发货挺快的 疫情期间物流速度也可以～挺阔爱一小东西～</p>
                        </div>
                    </li>

                    <li class="left">
                        <div class="goods-tu">
                            <a href="">
                                <img src="@/assets/tao-main/image/goods-4.webp" alt="">
                            </a>
                        </div>
                        <div class="goods-des">
                            <a href="">毒液venom耳机绕线器</a>
                            <p>包装挺精致的，还送了两张贴画，挺好玩的 买来送对象的小玩具，宝贝收到了 发货挺快的 疫情期间物流速度也可以～挺阔爱一小东西～</p>
                        </div>
                    </li>

                    <li class="left">
                        <div class="goods-tu">
                            <a href="">
                                <img src="@/assets/tao-main/image/goods-5.webp" alt="">
                            </a>
                        </div>
                        <div class="goods-des">
                            <a href="">毒液venom耳机绕线器</a>
                            <p>包装挺精致的，还送了两张贴画，挺好玩的 买来送对象的小玩具，宝贝收到了 发货挺快的 疫情期间物流速度也可以～挺阔爱一小东西～</p>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.clearfix::after {
	content: "";
	display: block;
	clear: both;
}

body {
	color: #3c3c3c;
	font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
	background: url("./../image/background.png") left top / 100%;
	font-size: 12px;
}

body a:hover {
	color: #f40;
}

.left {
	float: left;
}

.right {
	float: right;
}

.zhong {
	width: 1190px;
	margin: 0 auto;
}

/*  导航  */
.nav li {
	color: #6c6c6c;
	line-height: 35px;
	padding: 0 6px;
}

.nav li a,
.nav span.nav-zi {
	margin-right: 7px;
	font-size: 12px;
}

.nav li.nav-fenge {
	font-size: 12px;
}

.nav span.iconfont {
	font-size: 12px;
	margin-top: 16.5px;
}

.jian {
	height: 30px;
	width: 100%;
	display: none;
}

.jian span {
	width: 20px;
	height: 30px;
	color: #fff;
	background: rgba(128, 125, 125, 0.5);
	line-height: 30px;
	cursor: pointer;
}

/*         导航           */

.nav {
	background: #f5f5f5;
}

.nav .zhong {
	height: 35px;
	background: #f5f5f5;
}

.nav .zhong .nav-left,
.nav .zhong .nav-right {
	font-size: 0;
}

.nav .zhong .nav-left li {
	float: left;
}

.nav .nav-right li {
	float: left;
}

.nav .zhong .nav-right .nav-fenge {
	padding: 0 5px;
	color: #ddd;
}

.nav .nav-right .xing {
	color: #9c9c9c;
}

.nav .nav-right .che {
	color: #ff4400;
}

.nav .nav-right .xing,
.nav .nav-right .che {
	margin-right: 5px;
}

.nav .nav-left .guding {
	color: #f22e00;
}

/*
.nav ul li a:hover{
    color: #ff4400;
}
*/
/*
.nav span{
    margin-right: 7px;
}








/*     头部       */

/*  左  */
/*
.header .zhong a{
    font-size: 12px;
}
*/

.header .zhong {
	padding-top: 24px;
	height: 97px;
}

.header .header-title {
	width: 190px;
	height: 80px;
	margin-top: 10px;
	text-align: center;
}

.header .header-title a {
	display: block;
	width: 142px;
	height: 58px;
	margin: 0 auto;
	background: url("./../image/logo.png") no-repeat top;
}

.header .header-title h1 span {
	display: none;
}

/*   右   */

.header .zhong {
	position: relative;
}

.header .header-code {
	width: 77px;
	height: 90px;
	background: #fff;
	text-align: center;
	position: absolute;
	right: 110px;
}

.header .header-code a span {
	display: block;
	margin: 4px auto;
	color: #ff5000;
}

.header .header-code img {
	width: 62px;
	height: 62px;
}

/*   中    */

.header-search {
	width: 627px;
	height: 40px;
	/*
    font-size: 12px;
    */
	background: #fff;
	border: 1px solid #ff5000;
	border-radius: 20px;
	box-sizing: border-box;
	position: absolute;
	overflow: hidden;
	margin: 0 302px 0 258px;
	margin-top: 12px;
	position: relative;
}

.header-search .choose {
	width: 74px;
	height: 38px;
	line-height: 38px;
	cursor: pointer;
}

.header-search .choose .zi {
	margin-left: 25px;
}

.header-search .choose span.zi {
	text-align: center;
}

.header-search .choose span.iconfont {
	font-size: 1px;
}

.header-search input[type="text"] {
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	height: 32px;
	width: 477px;
	z-index: 1;
	background: transparent;
	text-indent: 6px;
	border-left: 1px solid #f5f5f5;
}

.header-search .placeholder {
	position: absolute;
	left: 80px;
	margin-top: 10px;
	color: #999;
}

.header-search button {
	position: absolute;
	top: 2px;
	right: 2px;
	width: 73px;
	height: 34px;
	background-image: linear-gradient(to right, #ff9000, #ff5000);
	border-radius: 20px;
	font-size: 18px;
	color: #fff;
	font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
}

.header .hot-choose li {
	display: inline-block;
}

.header .hot-choose {
	width: 586px;
	height: 25px;
	position: absolute;
	left: 258px;
	padding-top: 5px;
	padding-right: 41px;
}

.header .hot-choose .selected {
	color: #ff5000;
}
/*
.header .hot-choose li a:hover{
    color: #f40;
}
*/

/*      主          */

.main .main-nav li a {
	padding: 0 5px;
}

.main .zhong {
	background: #fff;
	height: 1000px;
	border-radius: 20px;
	overflow: hidden;
}

.main .zhong .main-nav {
	height: 30px;
	padding-top: 6px;
}

/*     1       */
.main .zhong .main-nav h2 {
	width: 190px;
	height: 30px;
	margin-right: 52px;
	text-align: center;
	line-height: 30px;
	font-size: 16px;
	color: #ff6200;
	font-weight: bold;
}

/*2*/

.main-nav .nav2 {
	height: 30px;
	line-height: 30px;
}

.main-nav .nav2 .fen a {
	color: #ff0036;
}

.main-nav .nav2 .lv a {
	color: #33c900;
}

.main .zhong .main-nav .nav2 li {
	float: left;
	padding: 0 4px;
	margin: 0 3px;
	font-size: 16px;
	font-weight: bold;
}

/*
.main .zhong .main-nav .nav2 a:hover{
    color: #f40;
}
*/

/*3*/

.main .main-nav .nav3 {
	height: 30px;
	line-height: 30px;
}

.main .main-nav .nav3 li,
.main .main-nav .nav4 li {
	float: left;
	margin-left: 7px;
	font-size: 14px;
}

/*4*/

.main .main-nav .nav4 {
	height: 30px;
	line-height: 30px;
}

/*   边侧   */

/*     取消a的变色   */
.main .main-aside .user a:hover {
	color: inherit;
}

.main .main-aside {
	width: 384px;
	height: 508px;
	margin-top: 10px;
	margin-right: 18px;

	border-radius: 5px;

	background: #f3f3f3;
}

/*   用户    */
.main-aside .user {
	width: 384px;
	height: 124px;
	margin-top: 20px;
}

.main-aside .user-head {
	text-align: center;
}

.main-aside .user-head img {
	width: 50px;
	height: 50px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
	cursor: pointer;
}
.main-aside .user-head a {
	display: block;
	margin: 0 auto;
	margin-top: 4px;
	cursor: pointer;
}

.main .main-aside .user-head a:hover {
	color: #f40;
}

/*    用户选择        */

.main .user .user-choose {
	width: 384px;
	height: 42px;
	margin-top: 11px;
	padding-left: 14px;
	font-size: 16px;
	box-sizing: border-box;
	color: #fff;
}

.main .user-choose .choose1 {
	display: block;
	width: 128px;
	height: 32px;
	background-image: linear-gradient(to right, #ff5000 0, #ff6f06 100%);
	text-align: center;
	margin-top: 10px;
	line-height: 32px;
	border-radius: 5px;
	margin-right: 6px;
}

.main .user-choose .choose2,
.main .user-choose .choose3 {
	display: block;
	display: block;
	width: 108px;
	height: 32px;
	background-image: linear-gradient(to right, #ff5000 0, #ff6f06 100%);
	text-align: center;
	margin-top: 10px;
	line-height: 32px;
	border-radius: 5px;
	margin-right: 6px;
}

.main-aside .user-ad {
	width: 356px;
	height: 145px;
	margin-top: 16px;
	margin-left: 14px;
}

/*    公告信息     */

.user .user-message {
	width: 370px;
	height: 100px;
	margin-left: 14px;
}

.user-message li.message-title {
	width: 370px;
	margin-top: 17px;
	line-height: 16px;
	margin-bottom: 14px;
}

.user-message li span.des {
	margin-left: 6px;
	/*   font-size: 12px;*/
}

.user-message li span.title {
	/*  font-size: 12px;*/
	font-weight: bold;
}

.user-message .min-title {
	margin-bottom: 8px;
	line-height: 18px;
}

.user-message li.min-title .title span {
	width: 32px;
	height: 18px;
	background: rgba(255, 174, 174, 0.2);
	color: #ff5000;
	font-weight: bold;
}

.user-message .min-title a p {
	display: inline;
	margin-left: 8px;
}

/*           我的信息      */

.main-aside .user .user-news {
	width: 372px;
	height: 53px;
	margin: 20px 0 0 12px;
}

.main-aside .user .user-news div {
	width: 60px;
	height: 53px;

	margin-right: 43px;
	text-align: center;
	line-height: 17px;
}

.main-aside .user .user-news div:last-child {
	margin-right: 0;
}

.main-aside .user .user-news div i {
	display: block;
	width: 60px;
	height: 36px;
	font-size: 27px;
	line-height: 30px;
}

.main-aside .user .user-news div i:hover {
	color: #f40;
}

/*             主区域的主区域             */

.main .main-main .left-nav {
	width: 212px;
	height: 526px;
}

.main .main-main .left-nav ul {
	padding: 6px 0 3px 18px;
}

.main .main-main .left-nav ul li {
	margin-bottom: 14px;
	line-height: 20px;
	color: #666;
}

.main-main .left-nav ul li i {
	margin-right: 12px;
	display: inline-block;
	width: 16px;
	height: 16px;
}

.main-main .left-nav ul li span {
	padding: 0 8px;
}

.main-main .left-nav ul li:hover {
	color: #ff5000;
}

.main-main .left-nav ul li a:hover {
	text-decoration: underline;
}

/*        右侧图片           */

.main .main-main .main-right {
	width: 520px;
	height: 512px;
	margin: 10px 0 0 22px;
}

/*   上  */

.main .main-main .main-right .shang {
	width: 520px;
	height: 280px;
	position: relative;
	overflow: hidden;
}

/*      图片          */

.main-right .shang .shang-img {
	width: 2465px;
	height: 280px;
}

.main-right .shang .shang-img img {
	width: 520px;
	height: 280px;
	margin-right: 27px;
	border-radius: 10px;
}

/*      切换箭头、点       */

.main-right .shang:hover .jian {
	display: block;
}
/*
.main-right .shang:hover .jian span{
    width: 20px;
    height: 30px;
    color: #fff;
    background: rgba(128,125,125,.5);
    line-height: 30px;
    cursor: pointer;
}


.main-right .shang .jian .zuo,
.main-right .shang .jian .you{
    width: 20px;
    height: 30px;
    color: #fff;
    background: rgba(128,125,125,.5);
    line-height: 30px;
    cursor: pointer;

}

*/
.main-right .shang .jian .you {
	padding-left: 3px;
	box-sizing: border-box;
}

.main-right .shang .jian .zuo:hover,
.main-right .shang .jian .you:hover {
	background: rgba(84, 81, 81, 0.8);
}

.main-right .shang .jian .zuo {
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border-radius: 0 20px 20px 0;
}

.main-right .shang .jian .you {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border-radius: 20px 0 0 20px;
}

.main-right .shang .dot {
	width: 70px;
	height: 13px;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 15px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	bottom: 15px;
}

.main-right .shang .dot li {
	width: 8px;
	height: 8px;
	margin: 3px;
	line-height: 8px;
	background: #fff;
	float: left;
	border-radius: 50%;
}

.main-right .shang .dot li.selected {
	background: #ff5000;
}

/*        中间标识        */

.main-main .mian-sign {
	width: 520px;
	height: 30px;
	padding-top: 6px;

	position: relative;
}

.main-main .mian-sign .sign {
	position: absolute;
	width: 74px;
	height: 22px;
	background: url("./../image/main-sign-left.png") no-repeat 100%;
}

.main-main .mian-sign .sign-des {
	position: absolute;
	line-height: 22px;
	margin-left: 80px;
	color: #999;
}

.main-main .mian-sign strong {
	position: absolute;
	right: 0;
	line-height: 22px;
}

.main-main .mian-sign strong i {
	color: #ff1648;
}

/*       下面           */

.main-right .xia {
	width: 520px;
	height: 201px;
	background: #f3f3f3;
	border-radius: 20px;
	position: relative;
}

.main-right .xia .xia-img {
	width: 520px;
	height: 200px;
	overflow: hidden;
}

.main-right .xia img {
	width: 250px;
	height: 155px;
	margin-top: 22px;
	margin-left: 7px;
	border-radius: 10px;
}

.main-right .xia .jian .zuo {
	position: absolute;
	bottom: 0;
	top: 0;
	margin: auto 0;
	left: 0;
	border-radius: 0 20px 20px 0;
}

.main-right .xia .jian .you {
	position: absolute;
	bottom: 0;
	top: 0;
	margin: auto 0;
	right: 0;
	border-radius: 20px 0 0 20px;
	padding-left: 4px;
	box-sizing: border-box;
}

.main-right .xia .jian .zuo:hover,
.main-right .xia .jian .you:hover {
	background: rgba(84, 81, 81, 0.8);
}

.main-right .xia:hover .jian {
	display: block;
}

/*         有好货          */

.main .goods {
	width: 1190px;
	height: 330px;
	margin-top: 10px;
	background: lightblue;
}

.main .goods .title {
	width: 1170px;
	height: 24px;
	margin: 20px 0;
	padding-left: 20px;
}

.main .goods .title h3 {
	font-weight: bold;
	font-size: 24px;
}

.main .goods .title span {
	width: 65px;
	height: 20px;
}

.main .goods .title span img {
	margin-top: 4px;
	margin-left: 6px;
}

.goods ul {
	width: 1190px;
	height: 310px;
}

.goods ul li {
	width: 215px;
	height: 264px;
	margin-left: 20px;
}
.goods ul li .goods-tu img {
	width: 215px;
	height: 215px;
	border-radius: 20px;
}

.goods ul li .goods-des {
	padding: 0 4px 0 6px;
}

.goods ul li .goods-des a {
	display: block;
	font-size: 16px;
	margin-top: 10px;
}

.goods ul li .goods-des p {
	display: inline-block;
	max-width: 100%;
	/*空白的处理方式是不换行*/
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #999;
	font-size: 14px;
	margin-top: 8px;
}
</style>