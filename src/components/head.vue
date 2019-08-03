<template>
	<div class="base_headContent" id="base_head">
		<div class="base_headCont">
			<img src="../../static/image/49722dffbd41b67c6f011ca820204b7.png" class="logo" v-if="this.$route.path=='/'" />
			<img src="../../static/image/534a0160e8cc25b34f4dcd1911ac6ce.png" class="logo" v-if="this.$route.path !== '/'" />
			<ul class="base_head_tap">
				<li class="tap tap1">
					<a href="./">首页</a>
				</li>
				<li class="tap tap2">
					<a href="./browser">NOS浏览器</a>
				</li>
				<li class="tap tap3">
					<a href="./service">产品服务</a>
				</li>
				<li class="tap tap4">
					<a href="./solution">解决方案</a>
				</li>
				<li class="tap tap5">
					<a href="javascript:;">实施案例</a>
				</li>
				<li class="tap tap6">
					<a href="./about">关于我们</a>
				</li>
				<li class="login" v-if="userName.length==0" @click="look_login()">登录</li>
				<li class="register" v-if="userName.length==0" @click="look_register()">注册</li>
				<li class="loginName" v-if="userName.length!=0" @click="personCenterClick()">{{userName}}</li>
				<li class="login" v-if="userName.length!=0" @click="exitLoginClick()">退出登录</li>

			</ul>
		</div>

		<div class="loginContent" v-if="PopupSW.sw == true">
			<div class="loginCont">
				<ul class="login_tap">
					<li :class="{ active: PopupSW.loginSW == true }" @click="look_login()">登录</li>
					<li :class="{ active: PopupSW.registerSW == true }" @click="look_register()">注册</li>
				</ul>
				<div v-if="PopupSW.registerSW == true">
					<div style="margin-top: 20px;"></div>
					<div class="inputTip" v-if="phoneForTip.length!=0">{{phoneForTip}}</div>
					<div class="Input_cont"><input type="text" placeholder="手机号" v-model="phone" /></div>
					<div class="Input_cont">
						<input type="text" placeholder="验证码" v-model="yzm" />
						<span class="font_blue" v-on:click="getYzmClick">{{yzmTipStr}}</span>
					</div>
					<div class="Input_cont"><input type="password" placeholder="设置密码" v-model="pass1" /></div>
					<div class="Input_cont"><input type="password" placeholder="确认密码" v-model="pass2" /></div>
					<div class="Agreement">
						注册即表示同意
						<span class="font_blue">《Name.OS用户服务协议》</span>
					</div>
					<div class="btn" v-on:click="registClick"><button>立即注册</button></div>
					<div class="close">
						<button @click="
								PopupSW.registerSW = false;
								PopupSW.sw = false;
								phoneForTip= '';
				                phoneForTipLogin='';
				                phoneForTipReset='';
							">
							取消
						</button>
					</div>
				</div>
				<div v-if="PopupSW.loginSW == true">
					<div>
						<div class="Agreement">别担心，Name.OS不会导致您的信息泄露</div>
						<div class="inputTip" v-if="phoneForTipLogin.length!=0">{{phoneForTipLogin}}</div>
						<div class="Input_cont"><input type="text" placeholder="账号" v-model="account" /></div>
						<div class="Input_cont"><input type="password" placeholder="密码" v-model="pass" /></div>
						<div class="forget_pass" @click="
								forget_pass.sw = true;
								PopupSW.sw = false;
							">
							<a>忘记密码？</a>
						</div>
						<div class="btn" v-on:click="loginClick"><button>登录</button></div>
					</div>
					<div class="close">
						<button @click="
								PopupSW.loginSW = false;
								PopupSW.sw = false;
								phoneForTip= '';
				                phoneForTipLogin='';
				                phoneForTipReset='';
							">
							取消
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="loginContent" v-if="forget_pass.sw == true">
			<div class="loginCont">
				<ul class="login_tap">
					<li>忘记密码</li>
				</ul>
				<div>
					<div class="inputTip" v-if="phoneForTipReset.length!=0">{{phoneForTipReset}}</div>
					<div style="margin-top: 20px;"></div>
					<div class="Input_cont"><input type="text" placeholder="手机号" v-model="rphone" /></div>
					<div class="Input_cont">
						<input type="text" placeholder="验证码" v-model="ryzm" />
						<span class="font_blue" v-on:click="getPassYzmClick">{{ryzmTipStr}}</span>
					</div>
					<div class="Input_cont"><input type="password" placeholder="设置密码" v-model="rpass1" /></div>
					<div class="Input_cont"><input type="password" placeholder="确认密码" v-model="rpass2" /></div>
					<div class="btn" v-on:click="resetPassClick"><button>确认修改</button></div>
				</div>
				<div class="close"><button @click="
					forget_pass.sw = false;
					PopupSW.sw = true;
					phoneForTip= '';
				    phoneForTipLogin='';
				    phoneForTipReset='';
					">取消</button></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				PopupSW: {
					sw: false,
					loginSW: false,
					registerSW: false
				},
				forget_pass: {
					sw: false,
					forgetSW: false
				},
				account: "",
				pass: "",
				userName: "",
				phone: "",
				pass1: "",
				pass2: "",
				yzm: "",
				yzmTipStr: "获取验证码",
				ryzmTipStr: "获取验证码",
				maxTime: 60,
				currTime: 60,
				rmaxTime: 60,
				rcurrTime: 60,
				phoneForTip: "",
				phoneForTipLogin: "",
				phoneForTipReset: "",
				rphone: "",
				rpass1: "",
				isLogin: false,
				rpass2: "",
				ryzm: "",
			}
		},
		// props:{
		// 	Img_type: {//logo字体类型
		// 		type: String,
		// 		default: 'Img1'
		// 	},
		// },
		mounted: function() {
			mqttConnect(); //首先链接mqtt服务器
			var n=localStorage.getItem("userName");
			if(n)
			{
				if(n.length>0)
				{
					this.userName=n;
				}
			}
			
			
		},
		methods: {

			look_login: function() {
				var self = this;
				console.log("1")
				self.PopupSW.sw = true;
				self.PopupSW.loginSW = true;
				self.PopupSW.registerSW = false;
			},
			look_register: function() {
				var self = this;
				self.PopupSW.sw = true;
				self.PopupSW.registerSW = true;
				self.PopupSW.loginSW = false;
			},

			registClick: function() {
				if(this.phone.length != 11) {
					this.phoneForTip = "请输入有效的11位手机号"
					return;
				}

				if(this.yzm.length != 6) {
					this.phoneForTip = "请输入有效的6位验证码"
					return;
				}

				if(this.pass1.length < 6) {
					this.phoneForTip = "密码至少6位数"
					return;
				}
				if(this.pass2 != this.pass1) {
					this.phoneForTip = "两次输入的密码不一致"
					return;
				}
				mqttRegist(this.phone, this.yzm, this.pass1, (info) => {
					console.log(info);
					if(parseInt(info.code) < 0) {

						this.phoneForTip = "" + info.msg;

					} else {
						this.phoneForTip= "";
						this.phone = "";
						this.pass1 = "";
						this.pass2 = "";
						this.yzm = "";
						this.phoneForTipLogin = "注册成功,请登录";
						this.PopupSW.loginSW = true;
						this.PopupSW.sw = true;
						this.PopupSW.registerSW = false;
					}
				});

			},
			loginClick: function() {
				if(this.account.length != 11) {
					this.phoneForTipLogin = "请输入有效的11位手机号"
					return;
				}
				if(this.pass.length < 6) {
					this.phoneForTipLogin = "密码至少6位数"
					return;
				}
				if(this.account.length > 0 && this.pass.length > 0) {

					console.log(this.account + " " + this.pass);
					mqttLogin(this.account, this.pass, (info) => {
						console.log(info);
						if(parseInt(info.code) < 0) {

							this.phoneForTipLogin = "" + info.msg;

						} else {
							this.account="";
							this.pass="";
							this.isLogin = true;
							this.PopupSW.loginSW = false;
							this.PopupSW.sw = false;
							this.userName=""+info.data.phone;
				            localStorage.setItem("userName",this.userName);
				            localStorage.setItem("token",info.data.token);
						}

					});
				}
			},
			exitLoginClick: function() {
				this.userName="";
				localStorage.setItem("userName","");
				localStorage.setItem("token","");
			},
			personCenterClick:function()
			{
				
			},
			getYzmClick: function(e) {
				if(window.yzmInter) {
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
						window.yzmInter = setInterval(() => {

							this.currTime--;
							this.yzmTipStr = this.currTime + "s";
							if(this.currTime <= 0) {
								this.currTime = this.maxTime;
								this.yzmTipStr = "获取验证码";
								clearInterval(window.yzmInter);
								window.yzmInter = null;
							}

						}, 1000);
					}

				})
			},
			getPassYzmClick: function(e) {
				if(window.yzmInter2) {
					return;
				}
				if(this.rphone.length != 11) {
					this.phoneForTipReset = "请输入有效的11位手机号";
					return;
				}
				mqttPassGetYzm(this.rphone, (info) => {
					if(parseInt(info.code) < 0) {
						this.phoneForTipReset = "" + info.msg;
					} else {
						this.ryzmTipStr = this.maxTime + "s";
						window.yzmInter2 = setInterval(() => {

							this.rcurrTime--;
							this.ryzmTipStr = this.rcurrTime + "s";
							if(this.rcurrTime <= 0) {
								this.rcurrTime = this.rmaxTime;
								this.ryzmTipStr = "获取验证码";
								clearInterval(window.yzmInter2);
								window.yzmInter2 = null;
							}

						}, 1000);
					}

				})
			},
			resetPassClick: function() {
				if(this.rphone.length != 11) {
					this.phoneForTipReset = "请输入有效的11位手机号"
					return;
				}

				if(this.ryzm.length != 6) {
					this.phoneForTipReset = "请输入有效的6位验证码"
					return;
				}

				if(this.rpass1.length < 6) {
					this.phoneForTipReset = "密码至少6位数"
					return;
				}
				if(this.rpass2 != this.rpass1) {
					this.phoneForTipReset = "两次输入的密码不一致"
					return;
				}
				mqttResetPass(this.rphone, this.ryzm, this.rpass1, (info) => {
					console.log(info);
					if(parseInt(info.code) < 0) {

						this.phoneForTipReset = "" + info.msg;

					} else {

						this.phoneForTipReset = "";
						this.rphone = "";
						this.rpass1 = "";
						this.rpass2 = "";
						this.ryzm = "";
						this.phoneForTipLogin = "重置密码成功,请登录" ;
						this.forget_pass.sw = false;
						this.PopupSW.sw = true;

					}

				});

			},
		},
	};
</script>

<style></style>