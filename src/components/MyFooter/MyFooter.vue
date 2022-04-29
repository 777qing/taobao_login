<template>
	<div class="footer-main">
		<div class="main clearfiv">
			<ul class="biao">
				<li><a href="">阿里巴巴集团</a><span>|</span></li>
				<li><a href="">阿里巴巴国际站</a><span>|</span></li>
				<li><a href=""></a>阿里巴巴中国站<span>|</span></li>
				<li><a href="">全球速卖通</a><span>|</span></li>
				<li><a href="">淘宝网</a><span>|</span></li>
				<li><a href="">天猫</a><span>|</span></li>
				<li><a href="">聚划算</a><span>|</span></li>
				<li><a href="">一淘</a><span>|</span></li>
				<li><a href="">阿里妈妈</a><span>|</span></li>
				<li><a href="">飞猪</a><span>|</span></li>
				<li><a href="">虾米</a><span>|</span></li>
				<li><a href="">阿里云计算</a><span>|</span></li>
				<li><a href="">云OS</a><span>|</span></li>
				<li><a href="">万网</a><span>|</span></li>
				<li><a href="">支付宝</a></li>
			</ul>
			<div class="warn">
				<p>
					<span><a href="">关于淘宝1</a></span>
					<span><a href="">关于淘宝2</a></span>
					<span><a href="">关于淘宝3</a></span>
					<span><a href="">关于淘宝4</a></span>
					<span><a href="">关于淘宝5</a></span>
					<span><a href="">关于淘宝6</a></span>
					<span><a href="">关于淘宝7</a></span>
					<span><a href="">关于淘宝8</a></span>
					<span><a href="">关于淘宝9</a></span>
					<span><a href="">关于淘宝10</a></span>
					<span><a href="">关于淘宝11</a></span>
					<span><a href="">关于淘宝12</a></span>
				</p>
				<p>
					<span><a href="">000000许可证1</a></span>
					<span><a href="">000000许可证2</a></span>
					<span><a href="">000000许可证3</a></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyFooter",
};
</script>

<style lang="less" scoped>
.clearfiv::after {
	content: "";
	display: block;
	clear: both;
}
.main {
	width: 1200px;
	margin: 0 auto;
	margin-top: 5px;
	color: #666;
}
.main .biao {
	width: 1200px;
	height: 40px;
	padding-top: 10px;
	margin: 16px 0;
	border-top: 1px solid #999;
	border-bottom: 1px solid #999;
}
.main a:hover {
	color: #f40;
}
.main .biao span {
	margin: 8px;
}
.main .biao li {
	float: left;
}

.main .warn p {
	margin-bottom: 10px;
}
.main .warn p span {
	margin-right: 10px;
}
</style>