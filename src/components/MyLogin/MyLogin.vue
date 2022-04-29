<template>
	<div class="login-main">
		<div class="main">
			<div class="login-option">
				<!-- 二维码 -->
				<div class="code">
					<p>扫码登录更安全<em></em><span></span></p>
					<div class="code-img">
						<a href=""><i class="iconfont icon-erweima"></i></a>
					</div>
				</div>
				<!-- 登陆切换 -->
				<div class="in-fation">
					<ul>
						<a @click="loginChange = 'MyPassword'">密码登陆</a>
						<a @click="loginChange = 'MyPhone'">短信登录</a>
					</ul>
					<div class="user">
						<keep-alive>
							<components :is="loginChange"></components>
						</keep-alive>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MyPhone from "@/components/User-info/MyPhone.vue";
import MyPassword from "@/components/User-info/MyPassword.vue";
export default {
	data() {
		return {
			border: true,
			loginChange: "MyPassword",
		};
	},
	methods: {
		// mima() {
		// 	this.border = true;
		// },
		// message() {
		// 	this.border = false;
		// },
	},
	components: {
		MyPhone,
		MyPassword,
	},
};
</script>

<style lang="less" scoped>
.login-main {
	.in-fation {
		height: 311px;
	}
	position: absolute;
	top: 80px;
	right: 0;
	width: 300px;
	height: 311px;
	padding: 25px;
	background: #fff;
	.code {
		position: absolute;
		// width: 106px;
		height: 28px;
		top: 10px;
		right: 40px;
		// padding: 5px 10px;
		box-sizing: border-box;
		.code-img {
			position: absolute;
			// background: black;
			width: 40px;
			height: 40px;
			top: -10px;
			right: -35px;
			i {
				color: #f40;
				font-size: 45px;
			}
		}

		p {
			font-size: 12px;
			color: #f40;
			border: 1px solid #f3d995;
			padding: 5px 10px;
			em {
				position: absolute;
				top: 6px;
				right: -12px;
				display: block;
				border: 6px solid transparent;
				border-left: 6px solid #ff9000;
				// border-width: 6px 6px 6px 6px;
			}
			span {
				position: absolute;
				top: 6px;
				right: -11px;
				display: block;
				border: 6px solid transparent;
				border-left: 6px solid #fff;
			}
		}
	}
	ul {
		height: 50px;
		a {
			float: left;
			margin-right: 15px;
			padding-bottom: 5px;
			cursor: pointer;
		}
		.login-in {
			border-bottom: 1px solid black;
		}
	}
}
</style>