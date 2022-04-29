<template>
	<div class="phone-main">
		<span class="father-border"></span>
		<form action="#">
			<!-- 手机号 -->
			<form action="">
				<div class="phone clearfix">
					<i class="iconfont icon-shouji"></i>
					<p>
						<!-- <span>{{ opname }}</span> -->
						<select :label="phone.hao">
							<!-- <option value="" selected>+86 中国大陆</option>
					<option value="">+852 中国香港</option>
					<option value="">+853 中国澳门</option>
					<option value="">+82 韩国</option>
					<option value="">+1 美国</option> -->
							<option
								value=""
								v-for="item in phone"
								:key="item.id"
								:selected="item.select"
							>
								{{ item.name }}
							</option>
						</select>
					</p>
					<input
						type="text"
						name=""
						id=""
						placeholder="请输入手机号"
						v-model="userPhone"
					/>
				</div>
				<!-- 验证码 -->
				<div class="check clearfix">
					<i class="iconfont icon-yanzhengma"></i>
					<input type="text" placeholder="请输入验证码" />
					<div class="getCheck">
						<a href="javascript:;">获取验证码</a>
					</div>
				</div>
				<!-- 登录按钮 -->
				<!-- <otherlogin></otherlogin> -->
				<div class="other-conmainter">
					<div class="btn">
						<button type="submit">登录</button>
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
			<!-- 注册 -->
			<div class="zc">
				<a href="" @click="login">免费注册</a>
			</div>
		</form>
	</div>
</template>

<script>
// import Otherlogin from "@/components/User-info/Otherlogin.vue";
export default {
	data() {
		return {
			phone: [
				{ id: 1, hao: "+86", name: "+86 中国大陆", select: false },
				{ id: 2, hao: "+852", name: "+852 中国香港", select: false },
				{ id: 3, hao: "+853", name: "+853 中国澳门", select: false },
				{ id: 4, hao: "+82", name: "+82 韩国", select: false },
				{ id: 5, hao: "+1", name: "+1 美国", select: true },
			],
			// poname: "",
			userPhone: "",
			check: "",
		};
	},

	methods: {
		// getSelect() {
		// 	this.phone.filter((item) => {
		// 		if (item.select === true) {
		// 			console.log(item.name);
		// 			return (this.opname = item.name);
		// 		}
		// 	});
		// },
		login(e) {
			e.preventDefault();
		},
	},
	// components: {
	// 	Otherlogin,
	// },
};
</script>

<style lang="less" scpoed>
.clearfix::after {
	content: "";
	display: block;
	clear: both;
}
.phone-main {
	position: relative;
	.father-border {
		position: absolute;
		top: -30px;
		left: 70px;
		width: 80px;
		height: 1px;
		background: black;
	}
	.zc {
		position: absolute;
		bottom: -45px;
		right: 0;
		font-size: 13px;
	}
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

.phone,
.check {
	width: 300px;
	height: 50px;
	// background: red;
	// padding: 1px;
	border: 1px solid #f1eeee;

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
	p {
		position: relative;
		display: block;
		width: 65px;
		height: 50px;
		float: left;
		font-size: 13px;
		span {
			position: absolute;
			width: 20px;
			height: 50px;
			line-height: 47.8px;
			padding-left: 13px;
			background: transparent;
			// background: #fff;
			font-weight: 400;
			overflow: hidden;
			// z-index: 999;
		}
		select {
			// position: relative;
			width: 65px;
			height: 50px;
			border: none;
			padding: 0 2px 0 10px;
			// color: rgba(0, 0, 0, 0.0001);
			// background: yellow;
			&:focus {
				outline: none;
			}
			option {
				font-size: 13px;
			}
		}
	}

	input[type="text"] {
		float: left;
		height: 45px;
		border: none;
		outline: none;
		// background: red;
	}
}

.check {
	position: relative;
	margin-top: 15px;
	input[type="text"] {
		text-indent: 10px;
		font-size: 15px;
	}
	a {
		position: absolute;
		top: 20px;
		right: 10px;
		color: rgb(108, 108, 108);
		font-size: 12px;
	}
}
</style>