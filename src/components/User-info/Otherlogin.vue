<template>
	<div class="other-conmainter">
		<div class="btn">
			<button type="submit">登录</button>
		</div>
		<!-- 其他登陆方式 -->
		<div class="other">
			<ul class="clearfix">
				<li @click="login">
					<a href="#"><i class="iconfont icon-weibo-copy red"></i> 微博登录</a>
				</li>
				<li @click="login">
					<a href="#"><i class="iconfont icon-zhifubao blue"></i> 支付宝登陆</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		login(e) {
			e.preventDefault();
		},
	},
};
</script>

<style lang="less" scoped>
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
</style>