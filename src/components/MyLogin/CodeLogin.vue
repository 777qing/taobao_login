<template>
	<div class="code-main">
		<div class="phonechange">
			<i class="iconfont icon-diannaodenglu1"></i>
		</div>
		<div class="tishi">
			<p>手机扫码，安全登录</p>
		</div>
		<!-- 二维码 -->
		<div class="loginCodeImg">
			<div class="img">
				<img src="../../assets/二维码.png" alt="" />
			</div>
			<!-- 图标 -->
			<div class="jieshao">
				<div class="i">
					<i class="iconfont icon-saoyisao"></i>
				</div>
				<!-- 介绍 -->
				<ul class="js">
					<li>
						<pre><a href="javascript:;">打开 淘宝App</a> | <a href="javascript:;">天猫App</a></pre>
					</li>
					<li>
						<p>扫一扫登录</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 其他 -->
		<ul class="mima-zc">
			<li><a href="">密码登陆</a></li>
			<li><a href="">免费注册</a></li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scpoed>
.code-main {
	.phonechange {
		position: absolute;
		top: 0px;
		right: 8px;
		width: 40px;
		height: 40px;
		// background: black;
		i {
			color: #f40;
			font-size: 50px;
		}
	}
	position: absolute;
	top: 80px;
	right: 0;
	width: 300px;
	height: 311px;
	padding: 25px;
	background: hsla(0, 0%, 100%, 0.9);
	.tishi {
		width: 300px;
		height: 44px;
		p {
			height: 18px;
			line-height: 18px;
			color: #3c3c3c;
			font-size: 16px;
			font-weight: 700;
			padding-bottom: 8px;
		}
	}
	.loginCodeImg {
		width: 300px;
		height: 222px;
		.img {
			width: 140px;
			height: 140px;
			margin: 20px 80px;

			img {
				width: 130px;
				height: 130px;
			}
		}
		.jieshao {
			width: 188px;
			height: 36px;
			display: flex;
			margin: 0 auto;
			.i {
				margin-right: 10px;
				i {
					font-size: 35px;
					color: #f40;
					font-weight: 600;
				}
			}
			.js {
				color: #666;
				li {
					margin-bottom: 5px;
				}
			}
		}
	}
	.mima-zc {
		position: absolute;
		bottom: 20px;
		right: 20px;
		li {
			float: left;
			margin-left: 15px;
			font-size: 14px;
			color: #666;
		}
	}
}
</style>