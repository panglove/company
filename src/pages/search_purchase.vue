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
			<ul>
				<li class="ct">标题:{{title}}</li>
				<li class="ct" v-for="(item ,index ) in  infoList">{{item.k}}:{{item.v}}</li>
				<li class="ct">区块信息:
					<a style=" margin-left: 0px;margin-top: 0px;" @click="isShow=!isShow">点击查看</a>
				</li>
			</ul>
			<img src="../../static/image/180bdab5fce18790076d6a85715090e.png" />
		</div>
			<div class="blockInfo" v-if="isShow">
		<div class="block">
			<div style="margin-top: 50px; text-align: center; font-size:25px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(51,51,51,1);">
				区块信息
			</div>
			<ul>

				<li class="ctb">时间戳:<span style="float: right;">{{block.block_time}}</span></li>
				<li class="ctb">发起方:<span style="float: right;">{{block.act.account}}</span></li>
				<li class="ctb">区块编号:<span style="float: right;">{{block.block_num}}</span></li>
				<li class="ctb">存证节点:<span style="float: right;">{{block.trx_id}}</span></li>
				<div class="knowBt" @click="isShow=!isShow">
					<div class="cts">知道了</div>
				</div>

			</ul>
		</div>
	</div>
	</div>

</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				title: "",
				people: "",
				time: "",
				infoList:[],
				isShow:false
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
					this.infoList = info.Data.Data[0].act.data.jsonData.info;
					this.title = info.Data.Data[0].act.data.jsonData.title;
					this.block = info.Data.Data[0];
					this.block.block_time = convertTime(this.block.block_time);
					this.block.trx_id = this.block.trx_id.substring(0, 10) + "********" + this.block.trx_id.substring(this.block.trx_id.length - 10, this.block.trx_id.length);
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
		height: 300px;
	}
	
	.ctb {
		font-size: 26px;
		font-family: PingFang-SC-Medium;
		color: #555555;
	}
	
	.block ul {
		padding-top: 70px;
		padding-left: 30px;
		padding-right: 30px;
		width: 100%;
		height: auto;
		text-align: left;
	}
	
	.block ul li {
		width: 100%;
		height: auto;
		color: #333333;
		font-size: 14px;
		padding-bottom: 20px;
	}
	
	.block ul li:last-child {
		padding-bottom: 0px;
	}
	
	.knowBt {
		margin-top: 20px;
		width: 100%;
		margin-left: 0px;
		margin-right: 10px;
		text-align: center;
		height: 67px;
		background: rgba(37, 144, 254, 1);
		border-radius: 6px;
	}
	
	.cts {
		font-size: 25px;
		height: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
	
	#transaction_details>.blockInfo {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 20;
	}
	
	#transaction_details>.blockInfo .block {
		width: 523px;
		height: auto;
		min-height: 627px;
		background-color: #FFFFFF;
		position: relative;
		padding-bottom: 60px;
		border-radius: 10px;
		-moz-border-radius: 10px;
	}
</style>