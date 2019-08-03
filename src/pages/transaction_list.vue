<template>
	<div id="transaction_list">
		<div class="title">
			<span class="S1" v-on:click="backClick">
				<i class="iconfont iconxiangzuo"></i>
				返回
			</span>
			<span class="S2">当前位置：公示 - 交易列表</span>
		</div>
		<div class="ContentBox">
			<div class="ListContent">
				<ul class="cont_list list_name">
					<li class="ct1">
						<a class="ct2" @click="popMenuClick">{{getItemName(searchType)}}</a>
						<div id="popChoose" class="ChoiceContent" v-if="isPopChooseShow">

							<p v-for="(item,index) in nameTabel" :class="getNameTabelCls(item)" @click="searchTypeClick(item)">{{item.type}}</p>
						</div>
					</li>
					<li class="ct5">交易ID</li>
					<li class="ct3">单笔交易量</li>
					<li class="ct4">交易时间</li>
				</ul>
				<ul class="cont_list list" v-for="(item, index) in deals" v-if="index < maxIndex">
					<li class="ct1">{{getItemName(deals[index].act.account)}}</li>
					<li class="ct2 font_blue" v-on:click="trxItemClick($event)">{{ deals[index].trx_id }}</li>
					<li class="ct3">{{ deals[index].act.data.quantity }}</li>
					<li class="ct4">{{ deals[index].block_time }}</li>
				</ul>
				<ul class="cont_list tips" v-on:click="loadMoreClick" v-if="!loadOver">
					<li class="ct1">加载更多</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				deals: [],
				allDeals: [],
				maxIndex: 10,
				nameTabel: [],
				loadOver: false,
				trxId: '',
				trxFrom: '',
				trxTo: '',
				trxName: '',
				trxQuantity: '',
				trxTime: '',
				isPopChooseShow: false,
				searchType: "*"
			};
		},

		methods: {
			popMenuClick: function(event) {
				this.isPopChooseShow  = !this.isPopChooseShow;

			},
			getItemName: function(it) {

				for(var k = 0; k < this.nameTabel.length; k++) {

					if(this.nameTabel[k].name == it) {
						return this.nameTabel[k].type;
					}

				}

				return "交易信息";
			},
			searchTypeClick: function(it) {
				this.searchType = it.name;
				this.nameTabel = this.nameTabel.concat([]);
				this.isPopChooseShow = false;
				if(this.searchType == "*") {
					this.deals = this.allDeals;
					this.loadOver = false;
					return;
				}
				var newDeals = [];

				for(var k = 0; k < this.allDeals.length; k++) {
					if(this.allDeals[k].act.name == "setdata") {
						if(this.allDeals[k].act.account == this.searchType) {
							newDeals.push(this.allDeals[k]);
						}
					} else {
						if(this.allDeals[k].act.data.from == this.searchType) {
							newDeals.push(this.allDeals[k]);
						}
					}

				}
				this.deals = newDeals;
				if(this.deals.length == 0) {
					this.loadOver = true;
				} else {
					this.loadOver = false;
				}

			},
			trxItemClick: function(e) {
				var trxItem = e.target.innerText;
				mqttGetSearchResult(trxItem, (info) => {

					if(info.StatusCode == 200) //表示搜索到了
					{
						if(info.Data.type == "transaction") {
							if(info.Data.Data[0].act.data.jsonData) {
								if(info.Data.Data[0].act.data.jsonData.goods_info1) {
									this.$router.push("/search_commodity?id=" + trxItem + "&from=transaction_list");
								}
								if(info.Data.Data[0].act.data.jsonData.info) {
									this.$router.push("/search_purchase?id=" + trxItem + "&from=transaction_list");
								}
								if(info.Data.Data[0].act.data.jsonData.ip2) {
									this.$router.push("/search_traceability?id=" + trxItem + "&from=transaction_list");
								}
							} else {
								this.$router.push("/transaction_details?id=" + trxItem + "&from=transaction_list");
							}

						} else {
							this.$router.push("/search_details?id=" + trxItem + "&from=transaction_list");
						}
					} else //表示搜索出错
					{
						alert(info.Message);
					}

				});
			},
			backClick: function() {
				this.$router.replace('/' + 'browser');
			},
			loadMoreClick: function(event) {
				this.maxIndex += 5;
				if(this.deals.length <= this.maxIndex) {
					this.maxIndex = this.deals.length;
					this.loadOver = true;
				}
			},
			getNameTabelCls: function(it) {
				if(it.name == this.searchType) {

					return "active"
				} else {
					return ""
				}
			}
		},

		mounted: function() {
			//請求交易信息
			mqttGetNameTabel(info => {
				//昵称列表接口，当收到消息时回调msg
				if(info.Data) {
					this.nameTabel = [];
					this.nameTabel.push({
						name: "*",
						type: "全部"
					})
					if(info.Data) {
						this.nameTabel = this.nameTabel.concat(info.Data);
						$.ajax({
							async: false, //表示请求是否异步处理
							type: 'get', //请求类型
							url: 'https://nos.k1m.cn/nos-iot/v1/noschain/getTransactions?account=' + this.searchType, //请求的 URL地址
							dataType: 'json', //返回的数据类型
							success: data => {
								var info = data;
								if(info.Data) {
									for(var q = 0; q < info.Data.length; q++) {
										for(var j = 0; j < info.Data[q].length; j++) {
											info.Data[q][j].block_time = convertTime(info.Data[q][j].block_time);
											if(info.Data[q][j].act.name == "setdata") {
												info.Data[q][j].act.data = {
													quantity: "无"
												}
											}
											this.deals.push(info.Data[q][j]);
											this.allDeals.push(info.Data[q][j]);
										}
									}
								}
								//在控制台打印服务器端返回的数据
							},
							error: function(data) {}
						});

					}
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
	
	#transaction_list {
		min-height: 100vh;
		padding-bottom: 150px;
		/*overflow-y: scroll;*/
	}
	
	#transaction_list>.title {
		margin: auto;
		width: 1200px;
		height: 50px;
		display: flex;
		align-content: center;
		align-items: center;
		color: #999999;
	}
	
	#transaction_list>.title span {
		height: 100%;
		width: auto;
		display: inline-flex;
		align-content: center;
		align-items: center;
	}
	
	#transaction_list>.title .iconfont {
		font-size: 18px;
		margin-right: 5px;
	}
	
	#transaction_list>.title span.S1 {
		cursor: pointer;
	}
	
	#transaction_list>.title span.S2 {
		margin-left: 20px;
	}
	
	.ContentBox {
		margin: auto;
		width: 1200px;
		height: auto;
		box-shadow: 0px 0px 8px 0px #dbdee3;
	}
	
	.ContentBox .ListContent {
		width: 100%;
		height: auto;
		margin: auto;
	}
	
	.ContentBox .ListContent .cont_list {
		width: 100%;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
	}
	
	.ContentBox .ListContent .cont_list li {
		height: 60px;
		white-space: nowrap;
		text-overflow: ellipsis;
		/*		overflow: hidden;*/
		display: inline-flex;
		align-content: center;
		align-items: center;
		color: #333333;
	}
	
	.ContentBox .ListContent .cont_list li.ct1 {
		width: 200px;
		padding-left: 30px;
	}
	
	.ContentBox .ListContent .cont_list li.ct2 {
		width: calc(100% - 600px);
		padding-left: 30px;
	}
	
	.ContentBox .ListContent .cont_list.list_name li.ct5 {
		text-decoration: none;
		width: calc(100% - 600px);
		padding-left: 30px;
	}
	
	.ContentBox .ListContent .cont_list li.ct2:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	
	.ContentBox .ListContent .cont_list li.ct3 {
		width: 200px;
	}
	
	.ContentBox .ListContent .cont_list li.ct4 {
		width: 200px;
	}
	
	.ContentBox .ListContent .cont_list.list_name {
		background-color: #f5f5f5;
	}
	
	.ContentBox .ListContent .cont_list.list_name li {
		color: #666666;
		position: relative;
	}
	
	.Content .ListContent .cont_list.list_name li.ct5 {
		width: calc(100% - 600px);
		text-decoration: none;
	}
	
	.ContentBox .ListContent .cont_list.list {
		background-color: #ffffff;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.ContentBox .ListContent .cont_list.tips li {
		background-color: #f5f5f5;
		width: 100%;
		color: #333333;
		justify-content: center;
		cursor: pointer;
	}
	
	.ChoiceContent {
		position: absolute;
		top: 60px;
		left: 0px;
		width: auto;
		min-width: 200px;
		height: auto;
		background-color: #FFFFFF;
		box-shadow: 0px 1px 10px #DBDEE3;
		border-radius: 1 px;
		z-index: 100;
		padding: 5px 0px;
	}
	
	.ChoiceContent p {
		width: 100%;
		height: auto;
		text-align: center;
		cursor: pointer;
		color: #666666;
		line-height: 30px;
		font-size: 9px;
		display: block;
	}
	
	.ChoiceContent p:hover {
		color: #2590FE;
	}
	
	.ChoiceContent p.active {
		color: #2590FE;
	}
</style>