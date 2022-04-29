<template>
	<div id="app">
		<my-head></my-head>
		<!-- 背景区域 -->
		<div class="backgroun-img">
			<div class="img"></div>
			<div class="in">
				<!-- 背景中央 -->
				<a href="javascript:;"></a>
				<!-- 切换为电脑/二维码 -->
				<div class="changein" @click="changLogin"></div>
				<keep-alive>
					<component :is="loginFer"></component>
				</keep-alive>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import MyHead from "@/components/MyHead/MyHead.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import MyLogin from "@/components/MyLogin/MyLogin.vue";
import CodeLogin from "@/components/MyLogin/CodeLogin.vue";

export default {
	name: "MyApp",
	data() {
		return {
			loginFer: "MyLogin",
		};
	},
	methods: {
		changLogin() {
			if (this.loginFer == "MyLogin") {
				this.loginFer = "CodeLogin";
			} else {
				this.loginFer = "MyLogin";
			}
		},
	},

	components: {
		MyHead,
		MyFooter,
		MyLogin,
		CodeLogin,
	},
};
</script>


<style lang="less" scoped>
.backgroun-img {
	position: relative;
	height: 600px;
	width: 100%;
	.img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 600px;
		background-image: url("./assets/back.jpg");
		background-size: cover;
		background-position: 50%;
		// background: black;
	}
	.in {
		position: relative;
		width: 1200px;
		margin: 0 auto;
		.changein {
			position: absolute;
			width: 50px;
			height: 50px;
			// background: black;
			top: 80px;
			right: 0;
			cursor: pointer;
			z-index: 999;
		}

		a {
			position: absolute;
			top: 80px;
			left: 100px;
			display: block;
			width: 600px;
			height: 500px;
		}
	}
}
</style>
