<template>
	<div class="password-main">
		<!-- 边框 -->
		<span class="father-border"></span>
		<!-- 账号 -->
		<form action="">
			<div class="usernumber">
				<i class="iconfont icon-yonghu"></i>
				<input
					type="text"
					placeholder="账号名/邮箱/手机号"
					v-model="username"
				/>
			</div>
			<!-- 密码 -->
			<div class="userpassword">
				<i class="iconfont icon-suotou"></i>
				<input
					type="password"
					placeholder="请输入登录密码"
					v-model="userpassword"
				/>
			</div>
			<!-- 其他方式 -->
			<!-- <otherlogin></otherlogin> -->
			<div class="other-conmainter">
				<div class="btn">
					<button type="submit" @click="getUserinfo">登录</button>
				</div>
				<!-- 其他登陆方式 -->
				<div class="other">
					<ul class="clearfix">
						<li @click="login">
							<a href="#"
								><i class="iconfont icon-weibo-copy red"></i> 微博登录</a
							>
						</li>
						<li @click="login">
							<a href="#"
								><i class="iconfont icon-zhifubao blue"></i> 支付宝登陆</a
							>
						</li>
					</ul>
				</div>
			</div>
		</form>
		<!-- 帮助 -->
		<div class="help">
			<ul>
				<li><a href="javascript:;">忘记密码</a></li>
				<li><a href="javascript:;">忘记账号名</a></li>
				<li><a href="javascript:;">免费注册</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
// import Otherlogin from "@/components/User-info/Otherlogin.vue";
export default {
	data() {
		return {
			username: "",
			userpassword: "",
		};
	},
	methods: {
		login(e) {
			e.preventDefault();
		},
		getUserinfo() {
			console.log(this.username);
			console.log(this.userpassword);
		},
	},
};
</script>

<style lang="less" scoped>
.password-main {
	position: relative;
	// 边框
	.father-border {
		position: absolute;
		top: -30px;
		left: -8px;
		width: 80px;
		height: 1px;
		background: black;
	}
	// 账号
	.usernumber {
		margin-bottom: 15px;
	}
	//密码
	// 账号和密码
	.usernumber,
	.userpassword {
		width: 300px;
		height: 50px;
		border: 1px solid #f1eeee;
		input {
			height: 45px;
			line-height: 45px;
			text-indent: 10px;
			font-size: 16px;
		}
		i {
			display: block;
			width: 50px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: #ccc;
			float: left;
			font-size: 30px;
			color: #fff;
		}
	}

	// 帮助
	.help {
		position: absolute;
		bottom: -50px;
		right: 0;
		ul {
			li {
				float: left;
				font-size: 12px;
				margin-left: 10px;
			}
		}
	}
	// 其他
	.other-conmainter {
		.other {
			ul {
				li {
					float: left;
					margin-right: 10px;
					a {
						color: #6c6c6c;
						font-size: 12px;
					}
					.red {
						color: #e52425;
					}
					.blue {
						color: #1ba9ee;
					}
				}
			}
		}
		.btn button {
			margin: 15px 0;
			width: 305px;
			height: 40px;
			background: #f40;
			line-height: 40px;
			text-align: center;
			border-radius: 5px;
			color: #fff;
			font-size: 16px;
			cursor: pointer;
		}
	}
}
</style>