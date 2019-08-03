<template>
	<div id="web">
		<div class="banner_Img"><img src="../../static/image/08e77a724115e0b7807c6aedced9b2b.jpg" /></div>
		<div class="contentBox contentBox1">
			<div class="Content Content1">
				<div class="title">Name.OS简介</div>
				<div class="cont_data">
					<div class="text">
						Name.OS是由匿名（重庆）区块链科技有限公司自主研发，采用区块链技术来建立一个百万级的公共区块链网络。Name.OS真正实现了用区块链技术防伪溯源，是继阿里巴巴、百度之后的第三个应用开发系统。
						<br /> Name.OS能在系统符号框架的基础之上延展出不同概念，帮助不同用户在不同场景下，实现多元的数据记录传达。让足够多的参与者的机器节点加入到这个网络中，一起参与记账，基于该网络上进行的交易等都会存储在所有机器节点，单一机构对于自身节点数据的修改无法通过其他节点数据验证，从而保障数字资产的真实性。
						<br /> 基于真实可信的数字，并且都存在于一个大家共享的数据库中，后续数字资产流通环节将不依赖与发行方系统，极大的提高资产流通的效率，也给我们的生活带来便捷，从而构建起一个未来的Name.OS数字生态。
						<br /> 凭借其高安全性高、高性能、强真实性的冲击力，去表达“科技世界”的明亮与浩瀚，由此形成一个识别度高，且易于开发应用的超级区块链系统。
						<br /> Name.OS现已有防伪溯源、工商、食药监等首批入驻者。并可服务于社会公益、分布式云存储、商品溯源、新零售、基因产业、供应链金融等各个行业。随着Name.OS这个区块链数字资产网络的运转，还会建立起完善的服务信誉体系和用户信誉体系，会有更多需求方参与进来，为企业级用户提供技术和商业支持服务。
						<br />
					</div>
					<img src="../../static/image/41a532a23eaa8955606b56026510b10.jpg" />
				</div>
			</div>
			<div class="Content Content2">
				<div class="title">为价值应用而生的区块链</div>
				<div class="cont_data">
					<div class="cont">
						<img src="../../static/image/41e7cfe53d02d6aa48e7a0242ad9177.png" />
						<br /> 区块链技术架构开发服务
					</div>
					<div class="cont">
						<img src="../../static/image/27170353657a36f0bcfc6dca4a7680d.png" />
						<br /> 区块链品牌孵化
					</div>
					<div class="cont">
						<img src="../../static/image/30944a1c2133a803a5b1c3fe936fbc0.png" />
						<br /> 区块链落地运营
					</div>
					<div class="cont">
						<img src="../../static/image/a069e67670cb36ac33230575495da0b.png" />
						<br /> 区块链资源共享
					</div>
				</div>
			</div>
			<div class="Content Content3">
				<div class="title">Name.OS的目标</div>
				<div class="cont_data">
					<div class="text">
						Name.OS融合最前沿区块链、分布式账本技术发展，
						<br /> 密切结合各行业业务发展，形成创新开源的技术体系和开放的合作机制，
						<br /> 为各行业机构与业务模式提供完整、健壮、灵活的企业级分布式账本框架，
						<br /> 帮助每个组织拥抱区块链。
					</div>
					<img src="../../static/image/519d29d6278024ba0b2584ea3d39928.png" />
				</div>
			</div>
			<div class="Content Content4" id="comlist">
				<div class="title">不断壮大，只是希望与您更近一步</div>
				<div class="cont_data" v-for="(item,index) in  comArr">
					<div class="cont" v-if="comArr[index*2]!=null">
						<div class="cont_title">{{comArr[index*2].title}}</div>
						<div class="text">总经理：{{comArr[index*2].nickname}}</div>
						<div class="text">Call：+86 {{comArr[index*2].phone}}</div>
						<div class="text">地址：{{comArr[index*2].addr}}</div>
					</div>
					<div class="cont" v-if="comArr[index*2+1]!=null">
						<div class="cont_title">{{comArr[index*2+1].title}}</div>
						<div class="text">总经理：{{comArr[index*2+1].nickname}}</div>
						<div class="text">Call：+86 {{comArr[index*2+1].phone}}</div>
						<div class="text">地址：{{comArr[index*2+1].addr}}</div>
					</div>
				</div>
			</div>
		</div>
		<Join></Join>
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
				comArr: []
			};
		},
		methods: {

		},

		mounted: function() {
			this.comArr = [];
			mqttGetComList((info) => {
				//获取到搜索内容
				this.comArr=info.data;
			});
		}
	};
</script>

<style scoped>
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap6 a {
		color: #2590fe;
	}
	
	.base_headContent>.base_headCont>.base_head_tap>li.tap.tap6:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		background-color: #2590fe;
	}
	
	.banner_Img {
		width: 100%;
		height: auto;
	}
	
	.banner_Img img {
		width: 100%;
	}
	.contentBox {
		width: 1200px;
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
	
	.contentBox1 .Content1 {}
	
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
	
	.contentBox1 .Content1 .cont_data .text {
		width: 650px;
		line-height: 30px;
		color: #333333;
		font-size: 14px;
	}
	
	.contentBox1 .Content1 .cont_data img {
		width: 450px;
	}
	
	.contentBox1 .Content2 {
		background-color: #f9f9f9;
	}
	
	.contentBox1 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 50px;
	}
	
	.contentBox1 .Content2 .cont_data {
		padding: 0px 100px;
	}
	
	.contentBox1 .Content2 .cont_data .cont {
		color: #333333;
		font-size: 14px;
		text-align: center;
	}
	
	.contentBox1 .Content2 .cont_data .cont img {
		width: 80px;
		margin-bottom: 20px;
	}
	
	.contentBox1 .Content3 .text {
		width: 650px;
		line-height: 30px;
		color: #333333;
		font-size: 14px;
		margin-left: 100px;
	}
	
	.contentBox1 .Content3 img {
		width: 300px;
		margin-right: 100px;
	}
	
	.contentBox .Content4 {
		background-color: #f9f9f9;
	}
	
	.contentBox .Content4 .title {
		margin-bottom: 65px;
	}
	
	.contentBox .Content4 .cont_data {
		width: 1200px;
		height: auto;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-top: 25px;
	}
	
	.contentBox .Content4 .cont_data .cont {
		width: 49%;
		height: auto;
		padding: 25px;
		box-shadow: 0px 0px 8px 0px #e4effd;
		background: #fff;
	}
	
	.contentBox .Content4 .cont_data .cont .cont_title {
		width: 100%;
		height: auto;
		color: #333333;
		font-weight: bold;
		font-size: 18px;
		position: relative;
		padding-left: 20px;
		margin-bottom: 15px;
	}
	
	.contentBox .Content4 .cont_data .cont .cont_title:after {
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
	
	.contentBox1 .Content4 .cont_data .cont .text {
		width: 100%;
		line-height: 22px;
		color: #333333;
		font-size: small;
	}
</style>