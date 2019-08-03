<template>
	<div id="web">
		<div class="headeContent">
			<img src="../../static/image/9e8d842d4281c1ad23d1045bc2e7e68.jpg" />
			<ul class="heade_data">
				<li class="cont_data">
					<i class="iconfont iconzhuzhuangtu"></i>
					<ul>
						<li class="title">当前区块高度</li>
						<li class="value">{{ blockHeight }}</li>
					</ul>
				</li>
				<li class="cont_data">
					<i class="iconfont iconnaozhong"></i>
					<ul>
						<li class="title">24小时交易量</li>
						<li class="value">{{ trans24 }}</li>
					</ul>
				</li>
				<li class="cont_data">
					<i class="iconfont iconqunzu"></i>
					<ul>
						<li class="title">当前用户总数</li>
						<li class="value">{{ userCount }}</li>
					</ul>
				</li>
				<li class="cont_data">
					<i class="iconfont iconxinwen"></i>
					<ul>
						<li class="title">合约数量</li>
						<li class="value">{{ contractCount }}</li>
					</ul>
				</li>
				<li class="cont_data">
					<i class="iconfont iconqiandao"></i>
					<ul>
						<li class="title">积分种类</li>
						<li class="value">{{ tokenCount }}</li>
					</ul>
				</li>
				<li class="cont_data">
					<i class="iconfont iconfuwuliu"></i>
					<ul>
						<li class="title">当前节点数量</li>
						<li class="value">{{ nodeCount }}</li>
					</ul>
				</li>
			</ul>
		</div>
		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：头部
	        -->
		<div class="Content Content1">
			<div class="title">核心优势</div>
			<div class="cont_data">
				<div class="cont">
					<img src="../../static/image/aadd9e2ed5d1a0448ab41603c8be022.png" />
					<ul>
						<li>高性能</li>
						<li>秒级确认；Nonce Table 数据结构；签名优化算法</li>
					</ul>
				</div>
				<div class="cont">
					<img src="../../static/image/09afe8878886722d71a1a3ea8274061.png" />
					<ul>
						<li>高安全</li>
						<li>金融级隐私保护；支持可信执行环境（TEE）</li>
					</ul>
				</div>
				<div class="cont">
					<img src="../../static/image/1b86155e56132b7c787076210c6c68b.png" />
					<ul>
						<li>全球部署</li>
						<li>支持跨境多机构部署；多个跨境案例生产落地</li>
					</ul>
				</div>
			</div>
			<div class="cont_data">
				<div class="cont">
					<img src="../../static/image/c081805e4e4051daf7e7b0e45b0e880.png" />
					<ul>
						<li>高性能</li>
						<li>操作简易化；支持可插拔式工程实现</li>
					</ul>
				</div>
				<div class="cont">
					<img src="../../static/image/aadd9e2ed5d1a0448ab41603c8be022.png" />
					<ul>
						<li>跨链</li>
						<li>支持 Oracle 数据源调用，支持跨链外部 http访问</li>
					</ul>
				</div>
			</div>
		</div>
		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：核心优势
	        -->
		<div class="Content Content2">
			<div class="title">Name.OS 服务优势</div>
			<div class="cont_data">
				<div class="cont">
					<img src="../../static/image/ea3b44283a6b74cf82fe94b4f82a693.png" />
					<ul>
						<li>安全可信赖</li>
						<li>5年数字资产金融服务经验</li>
						<li>专业分布式架构和防 DDOS攻击系统</li>
					</ul>
				</div>
				<div class="cont">
					<img src="../../static/image/e18ee3e2aa9e317c073dfc626fc7e31.png" />
					<ul>
						<li>安全可信赖</li>
						<li>多个国家设立本土化交易服务中心</li>
						<li>打造多业务形态为一体的区块链生态圈</li>
					</ul>
				</div>
				<div class="cont">
					<img src="../../static/image/180bdab5fce18790076d6a85715090e.png" />
					<ul>
						<li>用户至上</li>
						<li>建立先行赔付机制</li>
						<li>设立投资者保护基金</li>
					</ul>
				</div>
			</div>
		</div>
		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：服务优势
	        -->
		<div class="Content Content3">
			<div class="cont_data">
				<ul>
					<li class="ct1">Name.OS您值得信赖</li>
					<li class="ct2">Name.OS是一个数字资产的“银行”，这个“银行”不属于任何一个人</li>
					<li class="ct2">也没有任何人能够篡改里面的数字，我们将资产放在这里可以更加的放心。</li>
					<li class="ct3" v-on:click="bottomClick()"><button>加入我们</button></li>
				</ul>
				<img src="../../static/image/db19fae94c58e35ef78425c23301b80.png" />
			</div>
		</div>

		<div class="Content Content4">
			<div class="title">合作伙伴</div>
			<div class="cont_data">
				<div class="cont"><img src="../../static/image/94446cfb24059a517dc5d95bef3e848.png" /></div>
				<div class="cont"><img src="../../static/image/50ac913c81c5f6f644a6d03b61d4d49.png" /></div>
				<div class="cont"><img src="../../static/image/b0b1e1e50b219d6d22a4bdfe7d98a38.png" /></div>
				<div class="cont"><img src="../../static/image/9d9c982b7893c861ecbc76c70b47508.png" /></div>
			</div>
			<div class="cont_data">
				<div class="cont"><img src="../../static/image/10ad7bbc24377bdfd36aae186930367.png" /></div>
				<div class="cont"><img src="../../static/image/5211a633a15517effb9058d39814745.png" /></div>
				<div class="cont"><img src="../../static/image/842b82e3a72938cf835194be6c78c8a.png" /></div>
				<div class="cont"><img src="../../static/image/4b942874d3b5d940fc92cfd1c092755.png" /></div>
			</div>
		</div>
		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：合作伙伴
	        -->
		<div class="Content Content5">
			<div class="title">行业资讯</div>
			<div class="cont_data" v-for="(item, index) in newsArr">
				<div class="cont" v-if="index * 2 < newsArr.length">
					<ul class="time">
						<li class="ct1">{{ newsArr[index * 2].display_timeDate }}</li>
						<li class="ct2">{{ newsArr[index * 2].display_timeYear }}</li>
					</ul>
					<ul class="text">
						<li class="ct1" v-on:click="newsItemClick(newsArr[index * 2].id)">{{ newsArr[index * 2].title }}</li>
						<li class="ct2">{{ newsArr[index * 2].content }}</li>
					</ul>
				</div>
				<div class="cont" v-if="index * 2 + 1 < newsArr.length">
					<ul class="time">
						<li class="ct1">{{ newsArr[index * 2 + 1].display_timeDate }}</li>
						<li class="ct2">{{ newsArr[index * 2 + 1].display_timeYear }}</li>
					</ul>
					<ul class="text">
						<li class="ct1" v-on:click="newsItemClick(newsArr[index * 2 + 1].id)">{{ newsArr[index * 2 + 1].title }}</li>
						<li class="ct2">{{ newsArr[index * 2 + 1].content}}</li>
					</ul>
				</div>
			</div>
		</div>

		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：行业资讯
	        -->
		<Join></Join>
		<!--
	        	作者：2648268870@qq.com
	        	时间：2019-06-25
	        	描述：加入我们
	        -->
		<div class="bottom"></div>
	</div>
</template>

<script>
	import scrptHtml from 'js-striphtml'
	import Join from '@/components/join.vue';
	export default {
		components: {
			Join
		},
		data() {
			return {
				nodeCount: 0,
				tokenCount: 0,
				contractCount: 0,
				userCount: 0,
				blockHeight: 0,
				trans24: 0,
				newsArr: []
			};
		},
		methods: {
			bottomClick: function() {
				$('html,body').animate({
						scrollTop: $('.bottom').offset().top
					},
					800
				);
			},
			newsItemClick: function(id) {
				this.$router.push('/information?id=' + id + '&from=index');
			}
			
		},
		mounted: function() {
			mqttSetNodeCall(msg => {
				//注册区块高度接口，当收到消息时回调msg
				var info = JSON.parse(msg);
				this.blockHeight = info.Data.head_block_num;
			});

			mqttSetNumInfoCall((type, msg) => {
				//注册区块信息接口，当收到消息时回调msg
				var info = JSON.parse(msg);
				if(type == topicTransactionCount) {
					this.trans24 = info.Data;
				}
				if(type == topicTotalNodes) {
					//当前节点数量
					this.nodeCount = info.Data.length;
				}
				if(type == topicTotalTokens) {
					//积分数量
					this.tokenCount = info.Data;
					console.log('积分种类' + info.Data);
				}
				if(type == topicTotalUsers) {
					//当前用户总量
					this.userCount = info.Data;
					console.log('当前用户总量' + info.Data);
				}
				if(type == topicSmartContracts) {
					//合约数量
					this.contractCount = info.Data;
					console.log('合约数量' + msg);
				}
			});
			mqttGetNews(info => {
				for(var k in info.data) {

					var time = timestampToTime(parseInt(info.data[k].created_at));

					info.data[k].display_timeDate = time.M + '-' + time.D;
					info.data[k].display_timeYear = time.Y;
					info.data[k].content =scrptHtml.stripTags(info.data[k].content);
				}
				this.newsArr = info.data;
			});

			mqttConnect(); //首先链接mqtt服务器
		}
	};
</script>

<style scoped>

	.headeContent {
		width: 100%;
		height: auto;
		position: relative;
	}
	
	.headeContent>img {
		width: 100%;
	}
	
	.headeContent>.heade_data {
		width: 100%;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		padding: 30px 30px;
		position: absolute;
		bottom: 0px;
		left: 0px;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.headeContent>.heade_data>.cont_data {
		height: auto;
		display: inline-flex;
		align-content: center;
		align-items: center;
	}
	
	.headeContent>.heade_data>.cont_data>.iconfont {
		color: #2590fe;
		display: inline-flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 40px;
		margin-right: 15px;
		font-size: 25px;
		box-shadow: inset 0px 0px 5px 0px #2590fe;
	}
	
	.headeContent>.heade_data>.cont_data>ul {}
	
	.headeContent>.heade_data>.cont_data>ul>li {
		width: 100%;
		height: auto;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #ffffff;
	}
	
	.headeContent>.heade_data>.cont_data>ul>li.title {
		font-size: 10px;
		opacity: 0.7;
		padding-bottom: 4px;
	}
	
	.headeContent>.heade_data>.cont_data>ul>li.value {
		font-size: 22px;
		letter-spacing: 1px;
	}
	
	.Content {
		width: 100%;
		height: auto;
		min-width: 1200px;
		padding: 80px 0px;
	}
	
	.Content .title {
		color: #2590fe;
		font-size: 20px;
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
	
	.Content1 {
		background-color: #f9f9f9;
	}
	
	.Content1 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-top: 50px;
	}
	
	.Content1 .cont_data .cont {
		width: 33.3%;
		height: auto;
		text-align: center;
	}
	
	.Content1 .cont_data .cont img {
		width: 100px;
	}
	
	.Content1 .cont_data .cont ul {
		width: 100%;
		height: auto;
	}
	
	.Content1 .cont_data .cont ul li {
		width: 100%;
		height: auto;
		padding-top: 10px;
	}
	
	.Content1 .cont_data .cont ul li:first-child {
		color: #333333;
		font-size: 16px;
	}
	
	.Content1 .cont_data .cont ul li:last-child {
		color: #666666;
		font-size: small;
	}
	
	.Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-top: 50px;
	}
	
	.Content2 .cont_data .cont {
		width: 33.3%;
		height: auto;
		text-align: center;
	}
	
	.Content2 .cont_data .cont img {
		width: 120px;
	}
	
	.Content2 .cont_data .cont ul {
		width: 100%;
		height: auto;
	}
	
	.Content2 .cont_data .cont ul li {
		width: 100%;
		height: auto;
		padding-top: 10px;
		color: #666666;
		font-size: small;
	}
	
	.Content2 .cont_data .cont ul li:first-child {
		color: #333333;
		font-size: 16px;
	}
	
	.Content3 {
		background-color: #f9f9f9;
	}
	
	.Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
	}
	
	.Content3 .cont_data img {
		width: 380px;
	}
	
	.Content3 .cont_data ul {
		width: auto;
		height: auto;
	}
	
	.Content3 .cont_data ul li {
		width: 100%;
		height: auto;
	}
	
	.Content3 .cont_data ul li.ct1 {
		color: #333333;
		font-size: 30px;
		font-weight: bold;
		padding-bottom: 10px;
		letter-spacing: 2px;
	}
	
	.Content3 .cont_data ul li.ct2 {
		width: auto;
		height: auto;
		color: #555555;
		font-size: 13px;
		padding-top: 10px;
	}
	
	.Content3 .cont_data ul li.ct3 {
		padding-top: 20px;
	}
	
	.Content3 .cont_data ul li.ct3 button {
		background-color: #2590fe;
		color: #ffffff;
		width: 150px;
		height: 42px;
		cursor: pointer;
	}
	
	.Content4 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		border-left: 1px solid #eeeeee;
	}
	
	.Content4 .cont_data {
		margin-top: 50px;
	}
	
	.Content4 .cont_data:last-child {
		margin-top: 0px;
		border-bottom: 1px solid #eeeeee;
	}
	
	.Content4 .cont_data .cont {
		border-top: 1px solid #eeeeee;
		border-right: 1px solid #eeeeee;
		width: 25%;
		height: 150px;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.Content4 .cont_data .cont img {
		height: 80px;
		width: auto;
	}
	
	.Content5 {
		background-color: #f9f9f9;
	}
	
	.Content5 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
	}
	
	.Content5 .cont_data .cont {
		width: 47%;
		height: auto;
		display: flex;
		justify-content: space-between;
		margin-top: 80px;
	}
	
	.Content5 .cont_data .cont .time {
		width: 100px;
		height: auto;
	}
	
	.Content5 .cont_data .cont .time li.ct1 {
		color: #2a2c35;
		padding-bottom: 5px;
		font-size: 20px;
	}
	
	.Content5 .cont_data .cont .time li.ct2 {
		color: #666666;
		font-size: small;
	}
	
	.Content5 .cont_data .cont .text {
		width: calc(100% - 100px);
		text-align: left;
	}
	
	.Content5 .cont_data .cont .text .ct1 {
		color: #2a2c35;
		font-size: 20px;
		line-height: 28px;
		padding-bottom: 8px;
	}
	
	.Content5 .cont_data .cont .text .ct1:hover {
		color: #2590fe;
		cursor: pointer;
	}
	
	.Content5 .cont_data .cont .text .ct2 {
		color: #666666;
		line-height: 24px;
		font-size: small;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>