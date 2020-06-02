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
				<li class="ct" v-for="(item,index) in goodsList">

					{{index}}：{{item}}

				</li>
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
				goodsList:[],
				goodsImg:""
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
					console.log(info.Data.Data[0].act.data.jsonData.goods_info1);
					this.goodsList=info.Data.Data[0].act.data.jsonData;
					this.goodsImg ="http://mymymy.8kpay.com/"+info.Data.Data[0].act.data.jsonData.image1;
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
</style>
