<template>
	<div class="JoinUs">
		<div class="title">加入我们</div>
		<div class="cont_data">
			<ul class="cont_left">
				<li class="ct1">您好，HELLO!</li>
				<li class="ct2">感谢您来到Name.OS，若您有合作意向，请填充注册信息或使用以下方式联系我们，我们将尽快给你回复，并为您提供更专业的商业策划服务，谢谢！</li>
				<li class="ct3">
					<i class="iconfont iconshouji"></i> 023-68886556
				</li>
				<li class="ct3">
					<i class="iconfont iconwenjianjia"></i> admin@niming.com.cn
				</li>
				<li class="ct3">
					<i class="iconfont iconcangku"></i> 重庆市渝中区总部城D区1栋4层
				</li>
				<li class="ct4"><img src="../../static/image/ef13c14a901228a02b6df9135f777f8.png" /></li>
			</ul>
			<div class="register_table">
				<div class="title">企业</div>
				<div style="margin-top: 20px;"></div>
				<div class="inputTip" v-if="phoneForTip.length!=0">{{phoneForTip}}</div>
				<div class="cont_Input">
					<input type="text" v-model="nickname" placeholder="希望我们怎称呼您？" />
				</div>
				<div class="cont_Input">
					<input type="text" v-model="title" placeholder="企业名称" />
					<!-- <span v-on:click="getYzmClick">{{yzmTipStr}}</span> -->
				</div>
				<div class="cont_Input">
					<input type="text" v-model="addr" placeholder="企业地址" />
				</div>
				<div class="cont_Input">
					<input type="text" v-model="range" placeholder="行业/经营内容" />
				</div>

				<!-- <div class="btn_Content" v-on:click="registClick"> -->
				<div class="btn_Content" v-on:click="registClick">
					<button>立即提交</button>
				</div>
				<div class="Agreement">
					工作人员会在24小时内与您取得联系，请保持通讯畅通，谢谢。
					<!-- 注册即表示已阅读并同意<span>《Name.OS网站服务协议》</span> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nickname: "",
				addr: "",
				title: "",
				range: "",
				phone: "",
				phoneForTip: ""
			}
		},
		// props:{
		// 	Img_type: {//logo字体类型
		// 		type: String,
		// 		default: 'Img1'
		// 	},
		// },
		methods: {

			registClick: function() {
				var n = localStorage.getItem("userName");
				var token = "nos "+localStorage.getItem("token");
				if(n) {
					if(n.length > 0) {
						this.phone = n;
					} else {
						this.phoneForTip = "请先登录";

						return;
					}
				} else {
					this.phoneForTip = "请先登录";
					return;
				}

				if(this.title.length == 0) {
					this.phoneForTip = "请输入企业名称"
					return;
				}

				if(this.nickname.length == 0) {
					this.phoneForTip = "请输入用户名"
					return;
				}
				if(this.range.length == 0) {
					this.phoneForTip = "请输入经营范围"
					return;
				}
				if(this.addr.length == 0) {
					this.phoneForTip = "请输入企业地址"
					return;
				}
				mqttJoinCom(this.phone, this.title, this.nickname, this.addr, this.range, token, (info) => {
					console.log(info);

					this.phoneForTip = "" + info.msg;

				});

			},
			getYzmClick: function(e) {
				if(window.yzmInter3) {
					return;
				}

				if(this.phone.length != 11) {
					this.phoneForTip = "请输入有效的11位手机号"
					return;
				}

				mqttGetYzm(this.phone, (info) => {
					if(parseInt(info.code) < 0) {
						this.phoneForTip = "" + info.msg;
					} else {
						this.yzmTipStr = this.maxTime + "s";
						window.yzmInter3 = setInterval(() => {

							this.currTime--;
							this.yzmTipStr = this.currTime + "s";
							if(this.currTime <= 0) {
								this.currTime = this.maxTime;
								this.yzmTipStr = "获取验证码";
								clearInterval(window.yzmInter3);
								window.yzmInter3 = null;
							}

						}, 1000);
					}

				})
			}
		},
	};
</script>

<style>

</style>