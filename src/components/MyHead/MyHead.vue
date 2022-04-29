<template>
	<div class="main">
		<div class="head">
			<!-- 左 -->
			<div class="left">
				<h1>
					<a
						href="http://127.0.0.1:5500/2%E3%80%81%E6%B7%98%E5%AE%9D%E7%BD%91/taobao.html"
						target="_black"
					></a
					>淘宝
				</h1>
			</div>
			<div class="right">
				<ul>
					<li><a href="">网站无障碍</a></li>
					<li>
						<i class="iconfont icon-caidan"></i
						><a href="">“登陆页面”改进建议</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyHead",
};
</script>







<style lang='less' scoped>
.main {
	margin-bottom: 20px;
}
.head {
	display: flex;
	justify-content: space-between;
	width: 1200px;
	height: 44px;
	margin: 0 auto;
	margin-top: 18px;
}
.head h1 {
	width: 72px;
	height: 45px;
	font-size: 0;
}
.head h1 a {
	display: block;
	width: 72px;
	height: 45px;
	background: url("@/assets/head/logo.png") no-repeat 0 0 /100% 100%;
}

.head .right li {
	list-style: none;
	color: #666;
	font-size: 13px;
	margin-bottom: 5px;
}

.head .right li :hover {
	color: #f40;
}
.head .right li .icon-caidan {
	color: #f40;
	font-size: 13px;
	vertical-align: text-bottom;
}
</style>