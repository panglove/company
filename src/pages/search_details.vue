<template>
	<div id="transaction_details">
		<div class="title">
			<span class="S1" v-on:click="backClick">
				<i class="iconfont iconxiangzuo"></i>
				返回
			</span>
			<span class="S2">当前位置：NOS浏览器 - 搜索结果</span>
		</div>
		<div class="ContentBox">
			<div class="toptitle">
				<i class="search-icon"></i>
				<span>{{account}}</span>
			</div>
			<div class="bottom">
				<ul>
					<li class="ct">可用余额：{{canUseCount}}</li>
					<li class="ct">赎回中：{{shuhuiCount}}</li>
					<li class="ct">CPU Staked：{{cpuStaked}}</li>
					<li class="ct">NET Staked：{{netStaked}}</li>
					<li class="ct">Staked by Others：{{stakedByOther}}</li>
					<li class="ct">Total REX：{{totalRex}}</li>
				</ul>
				<div class="pross">
					<div class="prossbg">
						<div class="prossblue" :class="{'textblack':prossstyle}" id="ramPc"><span>{{ramUsePercent}}</span></div>
					</div>
					<div class="text">RAM used - {{ram_usage}} MB / {{ram_quota}} MB</div>
					<div class="prossbg">
						<div class="prossblue prossgreen" :class="{'textblack':bprossstyle}" id="cpuPc" ><span>{{cpuUsePercent}}</span></div>
					</div>
					<div class="text">CPU used - {{cpuused}} µs / {{cpumax}} µs</div>
					<div class="prossbg">
						<div class="prossblue prossred" :class="{'textblack':cprossstyle}" id="netPc" ><span>{{netUsePercent}}</span></div>
					</div>
					<div class="text">NET used - {{netused}} KB/ {{netmax}} KB</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				account: "",
				canUseCount: "",
				shuhuiCount: "",
				cpuStaked: "",
				netStaked: "",
				stakedByOther: "",
				totalRex: "",
				ramUsePercent: "",
				cpuUsePercent: "",
				ram_quota: "",
				cpuused: "",
				cpumax: "",
				netused: "",
				netmax: "",
				ram_usage: "",
				netUsePercent: "",
				prossstyle:false,
				bprossstyle:false,
				cprossstyle:false
			};
		},

		methods: {
			backClick: function() {
				this.$router.replace('/' + this.$route.query.from);
			}
		},

		mounted: function() {
			mqttGetSearchResult(this.$route.query.id, (info) => {
				//获取到搜索内容
				if(info.StatusCode == 200) {
					this.canUseCount = info.Data.Data.core_liquid_balance; //交易发起方
					this.cpuStaked = info.Data.Data.cpu_weight; //cpu statke
					this.netStaked = info.Data.Data.net_weight; //net stake
					this.ram_quota = info.Data.Data.ram_quota; //ram总数
					this.ramUsePercent = ((parseFloat(info.Data.Data.ram_usage) / parseFloat(info.Data.Data.ram_quota)) * 100).toFixed(2) + "%"; //ram总数
					// 小于10%的时候文字颜色为黑色
					if(parseFloat(this.ramUsePercent) < 10){
						this.prossstyle=true
					}else{
						this.prossstyle=false
					}
					
					$("#ramPc").css("width", this.ramUsePercent);
					this.ram_usage = info.Data.Data.ram_usage; //ram总数

					this.netused = info.Data.Data.net_limit.used; //net
					this.netmax = info.Data.Data.net_limit.max; //net
					this.netUsePercent = ((parseFloat(this.netused) / parseFloat(this.netmax)) * 100).toFixed(2) + "%"; //ram总数
					// 小于10%的时候文字颜色为黑色
					if(parseFloat(this.netUsePercent) < 10){
						this.bprossstyle=true
					}else{
						this.bprossstyle=false
					}
					$("#netPc").css("width", this.netUsePercent);

					this.cpuused = info.Data.Data.cpu_limit.used; //cpu
					this.cpumax = info.Data.Data.cpu_limit.max; //cpu
					this.cpuUsePercent = ((parseFloat(this.cpuused) / parseFloat(this.cpumax)) * 100).toFixed(2) + "%"; //ram总数
					// 小于10%的时候文字颜色为黑色
					if(parseFloat(this.cpuUsePercent) < 10){
						this.cprossstyle=true
					}else{
						this.cprossstyle=false
					}
					$("#cpuPc").css("width", this.cpuUsePercent);
					this.account = info.Data.Data.account_name
					if(info.Data.Data.refund_request == null) {
						this.shuhuiCount = "0.0000 NOS";
					} else {
						var num1 = parseInt(info.Data.Data.refund_request.net_amount.split(" ")[0]);
						var num2 = parseInt(info.Data.Data.refund_request.cpu_amount.split(" ")[0]);
						var re=num1+num2;
						this.shuhuiCount = re+info.Data.Data.refund_request.net_amount.split(" ")[1];
						
					}
					this.stakedByOther = "0.0000 NOS";
					this.totalRex = "0.0000NOS";

				} //表示搜索出错
				else {
					alert(info.Message);
				}
			});
		}
	};
</script>

<style lang="scss" scoped>
	.base_headContent {
		background-color: #ffffff;
	}
	
	.base_bottomContent {
		position: absolute;
		bottom: 0px;
		left: 0px;
	}
	
	#transaction_details {
		min-height: 100vh;
		padding-bottom: 150px;
		/*overflow-y: scroll;*/
	}
	
	#transaction_details>.title {
		margin: auto;
		width: 1200px;
		height: 50px;
		display: flex;
		align-content: center;
		align-items: center;
		color: #999999;
	}
	
	#transaction_details>.title span {
		height: 100%;
		width: auto;
		display: inline-flex;
		align-content: center;
		align-items: center;
	}
	
	#transaction_details>.title .iconfont {
		font-size: 18px;
		margin-right: 5px;
	}
	
	#transaction_details>.title span.S1 {
		cursor: pointer;
	}
	
	#transaction_details>.title span.S2 {
		margin-left: 20px;
	}
	
	.ContentBox {
		position: relative;
		margin: auto;
		width: 1200px;
		height: auto;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		box-shadow: 0px 0px 8px 0px #dbdee3;
		.toptitle {
			display: flex;
			width: 100%;
			height: 65px;
			border-bottom: 1px solid #f1f1f1;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 50px;
			.search-icon {
				margin-left: 50px;
				width: 30px;
				height: 22px;
				background-size: cover;
				background-repeat: no-repeat;
				background-image: url('../../static/image/search-icon.png');
			}
			span {
				font-size: 26px;
				margin-left: 10px;
			}
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			padding: 0 50px 50px 50px;
		}
	}
	
	.ContentBox ul {
		width: 700px;
		height: auto;
		text-align: left;
	}
	
	.ContentBox ul li {
		width: 100%;
		height: auto;
		color: #333333;
		font-size: 18px;
		padding-bottom: 50px;
	}
	
	.ContentBox ul li:last-child {
		padding-bottom: 0px;
	}
	
	.ContentBox img {
		width: 300px;
	}
	
	.pross {
		.prossbg {
			position: relative;
			width: 520px;
			height: 36px;
			line-height: 36px;
			background: #f1f1f1;
			color: #fff;
			margin-bottom: 15px;
			.prossblue {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				background: #2590fe;
				text-align: right;
				span{
					margin-right: 10px;
				}
				&.prossgreen {
					background: #00d8a0;
				}
				&.prossred {
					background: #f25b5b;
				}
			}
		}
		.text {
			text-align: center;
			margin-bottom: 40px;
			font-size: 18px;
		}
	}
</style>