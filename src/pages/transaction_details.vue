<template>
	<div id="transaction_details">
		<div class="title">
			<span class="S1" v-on:click="backClick">
				<i class="iconfont iconxiangzuo"></i>
				返回
			</span>
			<span class="S2">当前位置：公示 - 交易详情</span>
		</div>
		<div class="ContentBox" v-for="(item) in transList">
			<ul>
				<li class="ct">交易ID：{{item.trx_id}}</li>
				<li class="ct">交易发起方：{{item.act.data.from}}</li>
				<li class="ct">
					交易接收方：
					<span class="font_blue">{{item.act.data.to}}</span>
				</li>
				<li class="ct">资产名称：{{item.type}}</li>
				<li class="ct">交易数量：{{item.act.data.quantity.split("|")[0]}}</li>
				<li class="ct" v-if="(item.act.data.quantity.split('|')).length>2">&#12288;&#12288;&#12288;&#12288;&#12288;{{item.act.data.quantity.split("|")[1]}}</li>
				<li class="ct" v-if="(item.act.data.quantity.split('|')).length>3"> &#12288;&#12288;&#12288;&#12288;&#12288;{{item.act.data.quantity.split("|")[2]}}</li>
				<li class="ct">交易时间：{{item.block_time}}</li>
			</ul>
			<img src="../../static/image/180bdab5fce18790076d6a85715090e.png" />
		</div>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				transList:[]
			};
		},

		methods: {
			backClick: function() {
				this.$router.replace("/" + this.$route.query.from);
			}
		},

		mounted: function() {
			mqttGetSearchResult(this.$route.query.id, (info) => { //获取到搜索内容
				if(info.StatusCode == 200) //表示搜索到了
				{
					this.transList=info.Data.Data;
					var subStr="";
					for(var q in this.transList)
					{
						subStr=subStr+this.transList[q].act.data.quantity.split(" ")[0]+"枚("+this.transList[q].act.data.memo+")|";
					}
					this.transList[0].type=this.transList[0].act.data.quantity.split(" ")[1];
					this.transList[0].act.data.quantity=subStr;
					this.transList[0].block_time=convertTime(this.transList[0].block_time);
					this.transList=[this.transList[0]];
				} else //表示搜索出错
				{
					alert(info.Message);
				}

			});
		}
	};
</script>

<style scoped>
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
		margin: auto;
		width: 1200px;
		height: auto;
		background-color: #ffffff;
		box-shadow: 0px 0px 8px 0px #dbdee3;
		display: flex;
		justify-content: space-between;
		padding: 50px;
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
		font-size: 14px;
		padding-bottom: 20px;
	}
	
	.ContentBox ul li:last-child {
		padding-bottom: 0px;
	}
	
	.ContentBox img {
		width: 300px;
	}
</style>