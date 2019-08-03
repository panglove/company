<template>
	<div id="information">
		<div class="title">
			<span class="S1" v-on:click="backClick">
				<i class="iconfont iconxiangzuo"></i>
				返回
			</span>
			<span class="S2">当前位置：首页 - 行业资讯</span>
		</div>
		<div class="ContentBox">
			<div class="left_Content">
				<div class="title">{{newsTitle}}</div>
				<div class="time">{{newsTime}}</div>
				<div class="text_content" v-html="newsContent">
					{{newsContent}}
				</div>
			</div>
			<div class="right_Content" id="idnewsList">
				<div :class="getClassInfo(item.id)" v-for="(item ,index) in newsList">
					<div class="text" @click="newsItemClick(item.id)">{{item.title}}</div>
					<div class="time">{{item.created_at}}</div>
				</div>

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
				newsList: [],
				urlId: this.$route.query.id,
				newsTime: "",
				newsTitle: "",
				claseez: "cont_list",
				newsContent: ""
			};
		},

		methods: {
			backClick: function() {
				this.$router.replace("/" + (this.$route.query.from == "index" ? "" : this.$route.query.from));
			},
			newsItemClick(id) {
				var hre = window.location.href;
				hre = hre.substring(0, hre.indexOf("?") >= 0 ? hre.indexOf("?") : hre.length);
				window.location.href = hre + "?id=" + id + "&from=" + this.$route.query.from;
			},
			getClassInfo(id) {
				if(id == this.$route.query.id)
					return "cont_list active";
				else
					return "cont_list";
			}
		},

		mounted: function() {
			mqttGetNewsDetail(this.$route.query.id, (info) => { //获取到搜索内容

				this.newsContent = info.data.content;
				this.newsTitle = info.data.title;
				this.newsTime = timestampToTimeStr(parseInt(info.data.created_at));

			});
			mqttGetNews((info) => {
				var self = this;
				for(var k in info.data) {
					info.data[k].created_at = timestampToTimeStr(parseInt(info.data[k].created_at));
					this.newsList = info.data;
				}
			});
		}
	};
</script>

<style>
	#information {
		background: #f9f9f9;
		padding-bottom: 30px;
	}
	
	.base_headContent {
		background-color: #ffffff;
	}
	/* .base_bottomContent {
	position: fixed;
	bottom: 0px;
	left: 0px;
} */
	/* #information {
	height: calc(100vh - 160px);
	overflow-y: scroll;
} */
	
	#information>.title {
		margin: auto;
		width: 1200px;
		height: 50px;
		display: flex;
		align-content: center;
		align-items: center;
		color: #999999;
	}
	
	#information>.title span {
		height: 100%;
		width: auto;
		display: inline-flex;
		align-content: center;
		align-items: center;
	}
	
	#information>.title .iconfont {
		font-size: 18px;
		margin-right: 5px;
	}
	
	#information>.title span.S1 {
		cursor: pointer;
	}
	
	#information>.title span.S2 {
		margin-left: 20px;
	}
	
	.ContentBox {
		width: 1200px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.ContentBox .left_Content {
		width: 800px;
		height: auto;
		background-color: #ffffff;
		padding: 40px 50px;
	}
	
	.ContentBox .left_Content .title {
		color: #333333;
		font-size: 20px;
		height: auto;
		width: auto;
		font-weight: bold;
	}
	
	.ContentBox .left_Content .time {
		height: auto;
		width: auto;
		color: #999999;
		font-size: 10px;
		padding: 30px 0px;
	}
	
	.ContentBox .left_Content .text_content {
		width: 100%;
		height: auto;
		word-break: break-all;
		color: #555555;
		font-size: 14px;
		line-height: 30px;
	}
	
	.ContentBox .left_Content .text_content img {
		max-width: 100%;
	}
	
	.ContentBox .right_Content {
		width: 350px;
		height: auto;
		background-color: #ffffff;
		padding: 25px 25px;
	}
	
	.ContentBox .right_Content .cont_list {
		width: 100%;
		height: auto;
		border-bottom: 1px solid #f5f5f5;
		padding: 15px 0px;
		cursor: pointer;
	}
	
	.ContentBox .right_Content .cont_list .text {
		color: #555555;
		width: 100%;
		height: auto;
		font-size: 16px;
		line-height: 24px;
	}
	
	.ContentBox .right_Content .cont_list .time {
		width: 100%;
		height: auto;
		color: #999999;
		font-size: 14px;
		padding-top: 8px;
	}
	
	.ContentBox .right_Content .cont_list.active .text {
		color: #2590fe;
	}
	
	.ContentBox .right_Content .cont_list:hover .text {
		color: #2590fe;
	}
</style>