<template>
	<div id="service">
		<div class="banner_Img"><img src="../../static/image/821e3fc883f2c3ec3c280583f30572d.jpg" /></div>
		<ul class="tap">
			<li :class="{ active: tap == 1 }" @click="tap = 1">
				<img src="../../static/image/259f704c3373a9c7cdd940a4be908a1.svg" /> 防伪溯源
			</li>
			<li :class="{ active: tap == 2 }" @click="tap = 2">
				<img src="../../static/image/259f704c3373a9c7cdd940a4be908a2.svg" /> 企业链改
			</li>
			<li :class="{ active: tap == 3 }" @click="tap = 3">
				<img src="../../static/image/259f704c3373a9c7cdd940a4be908a3.svg" /> 供应链金融
			</li>
			<li :class="{ active: tap == 4 }" @click="tap = 4">
				<img src="../../static/image/259f704c3373a9c7cdd940a4be908a4.svg" /> 数据可视化
			</li>
		</ul>
		<div class="contentBox contentBox1" v-if="tap == 1">
			<div class="Content Content1">
				<div class="title">为什要做防伪溯源</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">国家政策需要</div>
						<div class="text">
							国办发（2015）95号文件《关于加快推进重要产品追溯体系建设的意见》中强调：应用物联网、云计算等技术加快建设追溯体系，实现产品来源可查、去向可追、责任可究。
						</div>
					</div>
					<div class="cont">
						<div class="cont_title">市场环境需要</div>
						<div class="text">假冒产品侵吞市场，消费者想买真货，但苦于无从鉴别，逐渐对品牌失去信任。企业耗费大量人力物力打假，但效果不佳。</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont">
						<div class="cont_title">行业/企业管理需要</div>
						<div class="text">经销商体系复杂，难以有效管控，窜货难以管理，终端管理零散，库存积压，市场动向不明朗，掌握不到一手数据。</div>
					</div>
					<div class="cont">
						<div class="cont_title">品牌营销需要</div>
						<div class="text">动销方式单一，急需市场营销策略。传统零售商促销，因奖品吸引力不够、兑奖困难等原因，消费者积极性不高，参与率低。</div>
					</div>
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">核心优势</div>
				<div class="tips">Name.OS防伪溯源具有多行业、多产品、多流程、多流程、多组件等产品核心优势。</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/84f323438c84f512e2e66967534c677.png" />
						<div class="cont_title">多行业</div>
						<div class="cont_text">
							Name.OS根据行业生产流程特性设置对应的溯源流程，完美匹配不同行业的溯源需求，无论是任何生产行业都能自定义适合的溯源流程。包括食品、药品、农产品、汽配以及茶叶等行业。
						</div>
					</div>
					<div class="cont" style="height: 219.67px;">
						<img src="../../static/image/a04f33d176640bb22e91bd96feffcd7.png" />
						<div class="cont_title">多产品</div>
						<div class="cont_text">
							开放性的自定义系统可根据不同产品所特有的生产流程来自定义溯源流程，实现企业多品牌多产品的不同溯源流程需求，完美匹配大型多元化生产企业的需求。
						</div>
					</div>
				</div>
				<div class="cont_data">
					<div class="cont" style="height: 219.67px;">
						<img src="../../static/image/01d562b4db7001310cd0f5861335d5f.png" />
						<div class="cont_title">多流程</div>
						<div class="cont_text">
							根据要追溯产品的生产特性，设计一套符合产品特性的溯源流程，每个产品都可以有不一样的追溯流程，想追溯什么流程就可以加什么流程，所想即所得。
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/e6d6c1b0b9e1ed19059c0c2e49d5203.png" />
						<div class="cont_title">多组件</div>
						<div class="cont_text">
							Name.OS溯源系统可完全自定义产品管理、供应商管理、人员管理、原料管理等基础信息管理的表单，企业想通过什么流程显示什么溯源信息，由谁录入信息都可以自由设置，组件完全根据企业需求自定义添加。
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-26
	            	描述：
	            -->
		<div class="contentBox contentBox2" v-if="tap == 2">
			<div class="Content Content1">
				<div class="title">商业模式逻辑的创新工具</div>
				<div class="cont_data">
					<div class="text">
						赋能经济转型升级，帮助项目快速落地，提供资产token化的个性化解决方案，营销工具无缝接入，并帮助对接广泛的企业、项目方资源。
						<br /> 实现企业利益协调、提升效率、扩大规模，
						<br /> 让企业换发出新的活力，新的财富增长点。
					</div>
					<img src="../../static/image/b5019813a459cf928e639cc0ad72935.png" />
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">传统企业急需链改</div>
				<div class="cont_data">
					<img src="../../static/image/79f6035682766371d5c40e95191371c.png" />
					<div class="text">
						在信息天然不对称的情况下，市场必然会被人性引导走向一个偏离平等的结局。Name.OS“链改”的逻辑是通过区块链技术与实体产业相融合，
						<br /> 通过技术改变生产关系的组织形式，降低产业链运行成本、提高产业流通效率，
						<br /> 实现节点间的价值共享，脱虚向实，让技术真正赋能实体经济。
						<br />
					</div>
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">全流程技术服务，重新定义企业未来</div>
				<div class="tips">Name.OS拥有丰富经验的解决方案团队，从需求分析到业务部署，提供完整的、端到端的、全流程的技术与咨询服务。</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/69ac5920007ad4a3bee887385d3d6a1.svg" />
						<br /> 知识能力培训
					</div>
					<div class="cont">
						<img src="../../static/image/69ac5920007ad4a3bee887385d3d6a2.svg" />
						<br /> 业务需求分析
					</div>
					<div class="cont">
						<img src="../../static/image/69ac5920007ad4a3bee887385d3d6a3.svg" />
						<br /> 链改方案设计
					</div>
					<div class="cont">
						<img src="../../static/image/69ac5920007ad4a3bee887385d3d6a4.svg" />
						<br /> 产品技术研发
					</div>
					<div class="cont">
						<img src="../../static/image/69ac5920007ad4a3bee887385d3d6a5.svg" />
						<br /> 运营支撑服务
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-27
	            	描述：供应链金融
	            -->
		<div class="contentBox contentBox3" v-if="tap == 3">
			<div class="Content Content1">
				<div class="title">高效提升供应链竞争力，加速数字化转型</div>
				<div class="cont_data">
					<div class="cont">
						<div class="text">
							基于区块链技术打造的专业化供应链服务系统，系统中的核心企业将应付账款数字化，生成数字票据支付给一级供应商，可以轻松实现数字票据的流转、拆分、持有、融资。
						</div>
						<div class="text">
							系统中的金融机构再为持有数字票据的供应商提供低成本的融资支持，从而实现供应链金融体系的信用穿透，极大提高了资金的流转，为金融机构和实体经济全产业链提供一站式融资管理服务。
						</div>
					</div>
					<img src="../../static/image/e4360b10d55947471a884a30995415e.png" />
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">传统供应链金融痛点</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/75f9ba3fb6c62783fcb233915d9dcfd.png" />
						<br /> 供应链上的中到多小企业融资难、成本高，涉及方处理， 征信周期长。
					</div>
					<div class="cont">
						<img src="../../static/image/4e43055b724db6fb035f48ea8da1e28.png" />
						<br /> 现阶段融资工具如商业汇票、银行汇票等使用场景受限， 转让难度较大。
					</div>
					<div class="cont">
						<img src="../../static/image/273f42707a544be9c20f280f7599a57.png" />
						<br /> 核心企业系统存在信息不对称、作假篡改的风险，导致资金端风控成本居高不下。
					</div>
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">区块链+供应链金融 打造高效生态圈</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/f5428ea971cba0499c4d76815103f1f.png" />
						<br /> 发行、运行数字票据
						<br /> 在公开透明、多方见证的情况下
						<br /> 进行随意的拆分和转移
					</div>
					<div class="cont">
						<img src="../../static/image/fa171a530e139fb29042c3ecaafd6af.png" />
						<br /> 打造联盟链提供给成员企业使用
						<br /> 利用区块链特性使得
						<br /> 债权转让得到多方共识，降低操作难度
					</div>
					<div class="cont">
						<img src="../../static/image/567c8f2eb2dc43ee6a0265f56e31a3e.png" />
						<br /> 利用区块链特性提供绝对可信的环境
						<br /> 减少资金端的风控成本
						<br /> 解决银行对于被信息篡改的疑虑
					</div>
				</div>
			</div>
		</div>
		<!--
	            	作者：2648268870@qq.com
	            	时间：2019-06-27
	            	描述：数据可视化
	            -->
		<div class="contentBox contentBox4" v-if="tap == 4">
			<div class="Content Content1">
				<div class="title">大数据可视化 Name.OS让数据不再枯燥</div>
				<img src="../../static/image/2f9d19ea430d154b25fae1a8490dac2.jpg" />
			</div>
			<div class="Content Content2">
				<div class="title">让数据真正“放心”流动起来</div>
				<div class="tips">随着区块链技术的创新，数据开放、融合和共享成为时代主流，数据红利不断放大，互联网的发展进入了一个数字价值的时代。</div>
				<div class="cont_data">
					<div class="text">
						区块链不仅仅是一个公开的账本和分布式数据库，它也是一个承载着庞大数字资产的网络。
						<br />
						<br /> 未来会有百亿甚至千亿的资产数字化后在区块链中流动，用户资产可能会遍布于多个区块链平台当中，资产数字化是未来必然会达成的趋势。
					</div>
					<img src="../../static/image/cb49f94f37933c833a7d60298746858.png" />
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">让数据真正“放心”可视化数据展现 发现属于你的价值</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/e984e34d65766081143bd3823c9251f.png" />
						<div class="cont_title">轻量级的数据可视化分析平台</div>
						<div class="cont_text">
							提供了从数据采集、
							<br /> 数据处理、数据分析、
							<br /> 数据协作于一体的完整解决方案
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/74d1d807032309b1515fb920a719ee2.png" />
						<div class="cont_title">数据可视化大屏展示工具</div>
						<div class="cont_text">
							丰富的组件库、
							<br /> 主题风格及行业模板，
							<br /> 自由配置企业专属数据可视化大屏
						</div>
					</div>
					<div class="cont">
						<img src="../../static/image/66c3caef1b15fce633ee274893008b8.png" />
						<div class="cont_title">数据智能决策加速</div>
						<div class="cont_text">
							AI智能数据分析助理，
							<br /> 利用机器学习、
							<br /> 数据挖掘技术助力企业业务优化
						</div>
					</div>
				</div>
			</div>
		</div>
		<div :class="{ white: tap == 1, gray: tap != 1 }">
			<Join></Join>
		</div>
	</div>
</template>

<script>
	import Join from '@/components/join.vue';
	export default {
		components: {
			Join
		},
		data() {
			return {
				tap: 1
			};
		}
	};
</script>

<style scoped>
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap3 a {
		color: #2590fe;
	}
	
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap3:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		background-color: #2590fe;
	}
	
	.JoinUs {
		/*background-color: #F9F9F9;*/
		background: transparent;
	}
	
	.white {
		background-color: #ffffff;
	}
	
	.gray {
		background-color: #f9f9f9;
	}
	
	.banner_Img {
		width: 100%;
		height: auto;
	}
	
	.banner_Img img {
		width: 100%;
	}
	
	#service>.tap {
		width: 100%;
		height: 60px;
		background-color: #e6f3ff;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		min-width: 1200px;
	}
	
	#service>.tap li {
		height: 100%;
		width: calc(1200px / 4);
		display: inline-flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 20px;
		color: #333333;
	}
	
	#service>.tap li img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #e6f3ff;
		margin-right: 20px;
	}
	
	#service>.tap li.active {
		background-color: #ffffff;
		color: #2590fe;
	}
	
	#service>.tap li:hover {
		background-color: #ffffff;
		color: #2590fe;
	}
	
	.contentBox {
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.contentBox .title {
		color: #2590fe;
		font-size: 20px;
		position: relative;
		width: 100%;
		height: auto;
		text-align: center;
		padding: 15px;
	}
	
	.contentBox .title:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: calc(50% - 20px);
		width: 40px;
		height: 2px;
		background-color: #2590fe;
	}
	
	.contentBox .Content {
		width: 100%;
		height: auto;
		min-width: 1200px;
		padding: 80px 0px;
	}
	
	.contentBox1 .Content1 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox1 .Content1 .cont_data .cont {
		width: 49%;
		height: auto;
		padding: 25px;
		box-shadow: 0px 0px 8px 0px #e4effd;
	}
	
	.contentBox1 .Content1 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		color: #333333;
		font-weight: bold;
		font-size: 18px;
		position: relative;
		padding-left: 20px;
		margin-bottom: 15px;
	}
	
	.contentBox1 .Content1 .cont_data .cont .cont_title:after {
		content: '';
		position: absolute;
		left: 0px;
		top: calc(50% - 4px);
		width: 4px;
		height: 4px;
		border-radius: 50%;
		overflow: hidden;
		background-color: #2590fe;
	}
	
	.contentBox1 .Content1 .cont_data .cont .text {
		width: 100%;
		line-height: 22px;
		color: #333333;
		font-size: small;
	}
	
	.contentBox1 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox1 .Content2 .tips {
		width: 100%;
		height: auto;
		color: #333333;
		text-align: center;
		padding-top: 30px;
	}
	
	.contentBox1 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox1 .Content2 .cont_data .cont {
		width: 48%;
		height: auto;
		text-align: center;
	}
	
	.contentBox1 .Content2 .cont_data .cont img {
		height: 70px;
	}
	
	.contentBox1 .Content2 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		text-align: center;
		color: #000000;
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 15px;
	}
	
	.contentBox1 .Content2 .cont_data .cont .cont_text {
		width: 100%;
		height: auto;
		text-align: left;
		line-height: 30px;
		color: #555555;
		font-size: small;
	}
	
	.contentBox2 .Content1 {}
	
	.contentBox2 .Content1 .cont_data,
	.contentBox2 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox2 .Content1 .cont_data {
		background: url(../../static/image/556479ee73424e52077bd0ca51973f6.png) no-repeat bottom 45px left;
		background-size: 150px;
	}
	
	.contentBox2 .Content2 .cont_data {
		background: url(../../static/image/556479ee73424e52077bd0ca51973f6.png) no-repeat bottom 45px right;
		background-size: 150px;
	}
	
	.contentBox2 .Content1 .cont_data .text,
	.contentBox2 .Content2 .cont_data .text {
		color: #333333;
		line-height: 40px;
		width: 500px;
	}
	
	.contentBox2 .Content1 .cont_data img,
	.contentBox2 .Content2 .cont_data img {
		width: 300px;
		margin-right: 100px;
	}
	
	.contentBox2 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox2 .Content3 {}
	
	.contentBox2 .Content3 .tips {
		width: 100%;
		height: auto;
		color: #333333;
		text-align: center;
		padding-top: 30px;
	}
	
	.contentBox2 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox2 .Content3 .cont_data .cont {
		width: 20%;
		height: auto;
		text-align: center;
		color: #333333;
		font-size: small;
		/* border: 1px solid red; */
	}
	
	.contentBox2 .Content3 .cont_data .cont img {
		margin-bottom: 10px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: #e6f3ff;
	}
	
	.contentBox3 .Content1 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox3 .Content1 .cont_data img {
		width: 500px;
		margin-right: 100px;
	}
	
	.contentBox3 .Content1 .cont_data .cont {
		width: 500px;
	}
	
	.contentBox3 .Content1 .cont_data .cont .text {
		width: 100%;
		height: auto;
		box-shadow: 0px 0px 8px 0px #e4effd;
		padding: 20px 30px;
		padding-top: 30px;
		margin-bottom: 30px;
		color: #333333;
		font-size: 12px;
		line-height: 25px;
		position: relative;
	}
	
	.contentBox3 .Content1 .cont_data .cont .text:before {
		content: '';
		position: absolute;
		left: 30px;
		top: 20px;
		width: 20px;
		height: 2px;
		background-color: #2590fe;
	}
	
	.contentBox3 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox3 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox3 .Content2 .cont_data .cont {
		background-color: #ffffff;
		width: 30%;
		padding: 50px 30px;
		color: #333333;
		line-height: 30px;
		font-size: 14px;
	}
	
	.contentBox3 .Content2 .cont_data .cont img {
		width: 100px;
		margin-bottom: 30px;
	}
	
	.contentBox3 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox3 .Content3 .cont_data .cont {
		background-color: #f8fbff;
		width: 30%;
		text-align: center;
		padding: 70px 40px;
		color: #333333;
		line-height: 30px;
		font-size: 12px;
	}
	
	.contentBox3 .Content3 .cont_data .cont img {
		width: 100px;
		margin-bottom: 35px;
	}
	
	.contentBox4 .Content1 {
		padding: 0px;
		position: relative;
	}
	
	.contentBox4 .Content1 img {
		width: 100%;
	}
	
	.contentBox4 .Content1 .title {
		position: absolute;
		top: 20px;
		left: 0px;
		background: transparent;
	}
	
	.contentBox4 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox4 .Content2 .tips {
		width: 100%;
		height: auto;
		color: #333333;
		text-align: center;
		padding-top: 30px;
	}
	
	.contentBox4 .Content2 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox4 .Content2 .cont_data .text {
		color: #333333;
		width: 500px;
		font-size: 12px;
		line-height: 30px;
	}
	
	.contentBox4 .Content2 .cont_data img {
		width: 400px;
		margin-right: 100px;
	}
	
	.contentBox4 .Content3 {}
	
	.contentBox4 .Content3 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox4 .Content3 .cont_data .cont {
		background-color: #f8fbff;
		width: 30%;
		text-align: center;
		padding: 70px 50px;
	}
	
	.contentBox4 .Content3 .cont_data .cont img {
		height: 80px;
	}
	
	.contentBox4 .Content3 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		text-align: center;
		color: #000000;
		font-size: 14px;
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 10px;
	}
	
	.contentBox4 .Content3 .cont_data .cont .cont_text {
		width: 100%;
		height: auto;
		color: #333333;
		font-size: 12px;
		line-height: 30px;
	}
</style>