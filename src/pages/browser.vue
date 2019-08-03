<template>
	<div id="browser">
		<div class="container">
			<!--<div class="Home_HeadBackgroundImg"id="particles-js"></div>-->
			<div class="banner">
				<div class="banner-top clearfloat">
					<div class="left-box float-left">
						<div class="map-box img-auto">
							<img src="../../static/image/img/map.png" />
							<div class="node-list"></div>
							<div class="node-pop">
								<div class="node-line"></div>
								<div class="pop-box shadow-box" v-for="(item ,index) in showComArr">
									<div class="border-box left-top-border"></div>
									<div class="border-box left-bottom-border"></div>
									<div class="border-box right-top-border"></div>
									<div class="border-box right-bottom-border"></div>
									<div class="company-logo img-auto">
										<!--公司的logo-->
										<img :src="item.img" alt="" />
									</div>
									<div class="company-name">{{item.name}}</div>
								</div>

							</div>
							<div class="maptouch"></div>
						</div>
						<div class="description-list clearfloat">
							<div class="description float-left">
								<span class="inline-block">
									<div class="node-box">
										<div class="node-outer bg-blue-opacity xy-middle"></div>
										<div class="node-inner bg-blue xy-middle"></div>
									</div>
								</span>
								<span class="col-white">正常节点</span>
							</div>

							<div class="description float-left">
								<span class="inline-block">
									<div class="node-box">
										<div class="node-outer bg-red-opacity xy-middle"></div>
										<div class="node-inner bg-red xy-middle"></div>
									</div>
								</span>
								<span class="col-white">异常节点</span>
							</div>

							<div class="description float-left">
								<span class="inline-block">
									<div class="node-box">
										<div class="node-outer bg-white-opacity xy-middle"></div>
										<div class="node-inner bg-white xy-middle"></div>
									</div>
								</span>
								<span class="col-white">离线节点</span>
							</div>
						</div>
					</div>
					<div class="right-box float-right">
						<div class="search-box shadow-box clearfloat">
							<div class="border-box left-top-border"></div>
							<input type="text" v-model="searchText" placeholder="搜索交易ID/用户地址" class="search-input float-left" />
							<div class="search-btn float-left shadow-box" v-on:click="searchClick"><i class="iconfont iconsousuo"></i></div>
						</div>
						<div class="block-height shadow-box">
							<div class="border-box right-bottom-border"></div>
							<div class="title">
								<span class="iconfont iconzhuzhuangtu"></span>
								<span>当前区块高度</span>
							</div>
							<div class="number"></div>
							<div class="recent-ledger-box">
								<div class="recent-ledger"></div>
								<div class="liner-bg"></div>
							</div>
						</div>
						<div class="user-count animate-box shadow-box clearfloat">
							<div class="border-box left-bottom-border"></div>
							<div class="title float-left">
								<span class="iconfont iconqunzu"></span>
								<span>当前用户总数</span>
							</div>
							<div class="user-count-number animate-box-number"></div>
						</div>
						<div class="business-count animate-box shadow-box clearfloat">
							<div class="border-box right-top-border"></div>
							<div class="title float-left">
								<span class="iconfont iconnaozhong"></span>
								<span>24小时交易量</span>
							</div>
							<div class="business-count-number animate-box-number"></div>
						</div>
						<div class="clearfloat" style="margin-top: 20px">
							<div class="contract-count min-animate-box float-left shadow-box">
								<div class="border-box left-bottom-border"></div>
								<div class="title">
									<span class="iconfont iconxinwen"></span>
									<span>合约数量</span>
								</div>
								<div class="contract-count-number min-animate-box-number"></div>
							</div>
							<div class="integral-count min-animate-box float-right shadow-box">
								<div class="border-box left-bottom-border"></div>
								<div class="title">
									<span class="iconfont iconqiandao"></span>
									<span>积分种类</span>
								</div>
								<div class="integral-count-number min-animate-box-number"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="banner-bottom shadow-box">
					<div class="border-box left-top-border"></div>
					<div class="border-box left-bottom-border"></div>
					<div class="border-box right-top-border"></div>
					<div class="border-box right-bottom-border"></div>
					<div class="swiper">
						<div class="logo-list">

						</div>
						<div class="left-mask"></div>
						<div class="right-mask"></div>
					</div>
					<div class="node-count shadow-box">
						<div class="title">
							<span class="iconfont iconfuwuliu"></span>
							<span>当前节点数量</span>
						</div>
						<div class="node-count-number"></div>
					</div>
				</div>
			</div>
		</div>
		<!--
		作者：2648268870@qq.com
		时间：2019-06-28
		描述：头部效果
	-->
		<div class="Content mb30">
			<div class="title">最新交易</div>
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
				<ul class="cont_list list" v-for="(item, index) in deals" v-if="index < 5">
					<li class="ct1">{{getItemName(deals[index].act.account)}}</li>
					<li class="ct2 font_blue" @click="trxItemClick($event)">{{ deals[index].trx_id }}</li>
					<li class="ct3">{{ deals[index].act.data.quantity }}</li>
					<li class="ct4">{{ deals[index].block_time }}</li>
				</ul>
				<ul class="cont_list tips">
					<li class="ct1" v-on:click="loadMoreClick">加载更多</li>
				</ul>
			</div>
		</div>
		<div class="Content" v-if="false">
			<div class="title">最新区块</div>
			<div class="ListContent">
				<ul class="cont_list list_name">
					<li class="ct1">所属应用</li>
					<li class="ct2">交易ID</li>
					<li class="ct3">单笔交易量</li>
					<li class="ct4">交易时间</li>
				</ul>
				<ul class="cont_list list" v-for="(item, index) in 5">
					<li class="ct1">所属应用</li>
					<li class="ct2">6060dac90f4d4f438bbec85a1bdb354ecdea74b15043360240a19b7d8...</li>
					<li class="ct3">2200</li>
					<li class="ct4">2019-6-17 12:27:17</li>
				</ul>
				<ul class="cont_list tips">
					<li class="ct1">加载更多</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import nos from '../../static/js/nos.js';
	export default {
		data() {
			return {
				dataHeight: '',
				deals: [],
				allDeals: [],
				searchText: '',
				logArr: [],
				searchType: "*",
				nameTabel: [],
				showComArr: [],
				showElementArr: [],
				isPopChooseShow: false,
				isFirst: true
			}
		},
		mounted: function() {

			mqttSetNodeCall(msg => {
				//注册区块高度接口，当收到消息时回调msg
				var info = JSON.parse(msg);
				this.dataHeight = info.Data.head_block_num;
				var a = $('.number').numberAnimate({
					speed: 2000, //动画速度
					num: info.Data.head_block_num, //初始化值
					iniAnimate: true, //是否要初始化动画效果
					symbol: ',', //默认的分割符号，千，万，千万
					dot: 0 //保留几位小数点
				});

				$('.recent-ledger').numberAnimate({
					speed: 2000,
					num: info.Data.head_block_num,
					iniAnimate: true,
					symbol: ',',
					dot: 0
				});

				console.log('区块高度' + info.Data.head_block_num);
			});

			mqttSetTransCall(msg => {
				//注册交易消息接口，当收到消息时回调msg
				var info = JSON.parse(msg);

				if(info.Data) {
					this.allDeals = [];
					if(info.Data) {
						for(var q = 0; q < info.Data.length; q++) {
							for(var j = 0; j < info.Data[q].length; j++) {
								info.Data[q][j].block_time = convertTime(info.Data[q][j].block_time);
								if(info.Data[q][j].act.name == "setdata") {
									info.Data[q][j].act.data = {
										quantity: "无"
									}
								}
								if(this.isFirst) {
									this.deals.push(info.Data[q][j]);
								}
								this.allDeals.push(info.Data[q][j]);
							}
						}
						this.isFirst=false;
						this.searchTypeClick({name:this.searchType});
					}
				}
			});

			mqttSetNumInfoCall((type, msg) => {
				//注册区块信息接口，当收到消息时回调msg
				var info = JSON.parse(msg);
				if(type == topicTransactionCount) {
					//24小时交易量
					$('.business-count-number').numberAnimate({
						speed: 2000,
						num: info.Data,
						iniAnimate: true,
						symbol: ',',
						dot: 0
					});

					console.log('24小时交易量' + info.Data);
				}
				if(type == topicTotalNodes) {
					//当前节点数量
					$('.node-count-number').numberAnimate({
						speed: 2000,
						num: info.Data.length,
						iniAnimate: true,
						symbol: ',',
						dot: 0
					});

					console.log('当前节点数量' + info.Data.length);
					var nodes = [];
					for(var k = 0; k < info.Data.length; k++) {
						var item = JSON.parse(info.Data[k].json);
						var relPos = getPosByNE(item.org.location.longitude, item.org.location.latitude);
						nodes.push({
							top: relPos.y + "px",
							left: relPos.x + "px",
							name: item.org.candidate_name,
							img: item.org.branding.logo_256,
							color: Math.random() > 0.5 ? "blue" : "blue"
						})
					}
					var len = 0;

					if(this.logArr.length != nodes.length) {
						$(".node-list").empty();
						$(".logo-list").empty();
						this.logArr = nodes;
					} else {
						return;
					}
					nodes.forEach(function(item, index) {
						len++;
						var rand = Math.random() * 1000;
						setTimeout(function() {
							var nodeStr = `<div class="node-box"><div class="node-outer bg-color"></div><div class="node-inner bg-color xy-middle"></div></div>`;
							nodeStr = nodeStr.replace(/color/g, item.color);
							var node = $(nodeStr);
							node.css({
								'left': item.left,
								"top": item.top
							});
							item.id = "pop" + index;
							node.attr('id', "pop" + index);
							node.find(".node-outer").addClass("node-outer-animate");
							$(".node-list").append(node);

							var logNode = $('<div class="logo-box img-auto"></div>');
							var myImage = document.createElement("img");
							myImage.src = item.img;
							logNode.append(myImage);
							$(".logo-list").append(logNode);

						}, rand)

					});
					if(window.logAniInter) {
						clearInterval(window.logAniInter);
					}
					var times = 0;
					$(".logo-list").width(len * 135);
					window.logAniInter = setInterval(function() {
						var logoLeft = parseInt($(".logo-list").css("left"));
						var px = len * -129;
						if(logoLeft <= px) {
							logoLeft = $(".swiper").width();
						}
						$(".logo-list").css("left", logoLeft - 1);
					}, 17)

				}
				if(type == topicTotalTokens) {
					//积分数量
					$('.integral-count-number').numberAnimate({
						speed: 2000,
						num: info.Data,
						iniAnimate: true,
						symbol: ',',
						dot: 0
					});
					console.log('积分种类' + info.Data);
				}
				if(type == topicTotalUsers) {
					//当前用户总量
					$('.user-count-number').numberAnimate({
						speed: 2000, //动画速度
						num: info.Data, //初始化值
						iniAnimate: true, //是否要初始化动画效果
						symbol: ',', //默认的分割符号，千，万，千万
						dot: 0 //保留几位小数点
					});
					console.log('当前用户总量' + info.Data);
				}
				if(type == topicSmartContracts) {
					//合约数量
					$('.contract-count-number').numberAnimate({
						speed: 2000,
						num: info.Data,
						iniAnimate: true,
						symbol: ',',
						dot: 0
					});
					console.log('合约数量' + info.Data);
				}
			});

			//首先链接mqtt服务器

			mqttGetNameTabel(info => {
				//昵称列表接口，当收到消息时回调msg
				this.nameTabel = [];
				this.nameTabel.push({
					name: "*",
					type: "全部"
				})
				console.log(info.Data);
				if(info.Data) {
					if(info.Data) {
						this.nameTabel = this.nameTabel.concat(info.Data);
					}
				}
				this.startListen();
				mqttConnect();
			});

		},
		methods: {
			getNameTabelCls: function(it) {
				if(it.name == this.searchType) {

					return "active"
				} else {
					return ""
				}
			},
			getItemName: function(it) {
				console.log(it)
				for(var k = 0; k < this.nameTabel.length; k++) {

					if(this.nameTabel[k].name == it) {
						return this.nameTabel[k].type;
					}

				}

				return "全部";
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
			popMenuClick: function(event) {
				this.isPopChooseShow  = !this.isPopChooseShow;

			},
			popWindClick: function(event) {

				var sp = document.getElementById("popChoose");
				console.log(sp);
				if(sp) {

					console.log(sp.contains(event.target));
					if(!sp.contains(event.target)) {       //这句是说如果我们点击到了id为myPanel以外的区域

						this.isPopChooseShow  = false;

					}

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
									this.$router.push("/search_commodity?id=" + trxItem + "&from=browser");
								}
								if(info.Data.Data[0].act.data.jsonData.info) {
									this.$router.push("/search_purchase?id=" + trxItem + "&from=browser");
								}
								if(info.Data.Data[0].act.data.jsonData.ip2) {
									this.$router.push("/search_traceability?id=" + trxItem + "&from=browser");
								}
							} else {
								this.$router.push("/transaction_details?id=" + trxItem + "&from=browser");
							}

						} else {
							this.$router.push("/search_details?id=" + trxItem + "&from=browser");
						}
					} else //表示搜索出错
					{
						alert(info.Message);
					}

				});
			},
			startListen: function() {

				$('.maptouch').mousemove((e) => {
					var positionX = e.pageX - $('.node-list').offset().left; //获取当前鼠标相对img的X坐标  
					var positionY = e.pageY - $('.node-list').offset().top; //获取当前鼠标相对img的Y坐标  
					var nodeBoxArr = $('.node-box');
					var showArr = [];
					for(var j in nodeBoxArr) {
						if(nodeBoxArr[j].offsetLeft) {
							if(this.isOnRect(nodeBoxArr[j], positionX, positionY)) {

								showArr.push(nodeBoxArr[j].id);
							}

						}
					}
					this.showNodeArr(showArr);
				})
			},
			isOnRect: function(nd, px, py) {
				if((px - nd.offsetLeft < 15 && px - nd.offsetLeft > 0) & (py - nd.offsetTop < 15 && py - nd.offsetTop > 0)) {

					return true;
				}
				return false;

			},
			showNodeArr: function(arr) {

				if(arr.length == 0) {
					this.showComArr = [];
					$(".node-pop").hide(1);
					$(".node-line").hide(1);
					return;
				}
				$(".node-pop").show();
				$(".node-line").show();
				this.showComArr = [];
				var len = arr.length <= 3 ? arr.length : 3;
				var line = arr.length <= 3 ? 0 : Math.floor(arr.length / 3);
				$(".node-line").css("left", len * 100 + 8);
				$(".node-line").css("top", 102 + 3);
				for(var k = 0; k < arr.length; k++) {
					for(var j in this.logArr) {
						if(this.logArr[j].id == arr[k]) {
							this.showComArr.push(this.logArr[j]);
							$(".node-pop").css({
								'left': parseInt(this.logArr[j].left) - len * 100,
								"top": parseInt(this.logArr[j].top) - 102
							});
						}
					}
				}
			},
			searchClick: function(event) {
				if(this.searchText.length > 0) {

					mqttGetSearchResult(this.searchText, (info) => {

						if(info.StatusCode == 200) //表示搜索到了
						{
							if(info.Data.type == "transaction") {
								if(info.Data.Data[0].act.data.jsonData) {
									if(info.Data.Data[0].act.data.jsonData.goods_info1) {
										this.$router.push("/search_commodity?id=" + this.searchText + "&from=browser");
									}
									if(info.Data.Data[0].act.data.jsonData.info) {
										this.$router.push("/search_purchase?id=" + this.searchText + "&from=browser");
									}
									if(info.Data.Data[0].act.data.jsonData.ip2) {
										this.$router.push("/search_traceability?id=" + this.searchText + "&from=browser");
									}
								} else {
									this.$router.push("/transaction_details?id=" + this.searchText + "&from=browser");
								}

							} else {
								this.$router.push("/search_details?id=" + this.searchText + "&from=browser");
							}
						} else //表示搜索出错
						{
							alert(info.Message);
						}

					});

				} else {
					alert("请输入搜索内容");
				}
			},
			loadMoreClick: function(event) {
				this.$router.push("/transaction_list?" + "from=browser");
			}

		}
	};
</script>

<style scoped>
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap2 a {
		color: #2590fe;
	}
	
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap2:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		background-color: #2590fe;
	}
	
	.Content {
		width: 100%;
		height: auto;
		min-width: 1200px;
		background-color: #fff;
		padding-top: 80px;
	}
	
	.Content .title {
		color: #2590fe;
		font-size: 23px;
		position: relative;
		width: 100%;
		height: auto;
		text-align: center;
		padding: 15px;
	}
	
	.Content .title:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: calc(50% - 20px);
		width: 40px;
		height: 2px;
		background-color: #2590fe;
	}
	
	.Content .ListContent {
		width: 1200px;
		height: auto;
		margin: auto;
	}
	
	.Content .ListContent .cont_list {
		width: 100%;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
	}
	
	.Content .ListContent .cont_list li {
		height: 60px;
		white-space: nowrap;
		text-overflow: ellipsis;
		/*		overflow: hidden;*/
		display: inline-flex;
		align-content: center;
		align-items: center;
		color: #333333;
	}
	
	.Content .ListContent .cont_list li.ct1 {
		width: 200px;
		padding-left: 30px;
	}
	
	.Content .ListContent .cont_list li.ct2 {
		width: calc(100% - 600px);
		padding-left: 30px;
	}
	
	.Content .ListContent .cont_list li.ct2:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	
	.Content .ListContent .cont_list.list_name li.ct5 {
		width: calc(100% - 600px);
		text-decoration: none;
		padding-left: 30px;
	}
	
	.Content .ListContent .cont_list li.ct3 {
		width: 200px;
	}
	
	.Content .ListContent .cont_list li.ct4 {
		width: 200px;
	}
	
	.Content .ListContent .cont_list.list_name {
		background-color: #f5f5f5;
		margin-top: 30px;
	}
	
	.Content .ListContent .cont_list.list_name li {
		color: #666666;
		position: relative;
	}
	
	.Content .ListContent .cont_list.list {
		border-bottom: 1px solid #f5f5f5;
	}
	
	.Content .ListContent .cont_list.tips li {
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