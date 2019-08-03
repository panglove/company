<template>
	<div id="app">
		<div class="box">
			<Header :class="{new_base_headContent:$route.name=='index'}"></Header>
			<div class="indexmain">
				<router-view v-wechat-title="$route.meta.title" ></router-view>
			</div>
			<Footer footerid="0" v-if="$route.meta.title"></Footer>
		</div>
	</div>
</template>
<script>
import Header from '@/components/head.vue';
import Footer from '@/components/foot.vue';
import Index from '@/pages/index.vue';
export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data(){
		return{
		}
	},
	mounted() {
	},
	methods: {
		
	}
};
</script>

<style>
@import url('../static/base.css');
@import url('../static/fonts/iconfont.css');
@import url('../static/nos.css');
#app {
	font: 12px/1 PingFang-SC-Medium, Tahoma, Helvetica, Arial, '\5b8b\4f53', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}
.indexmain {
	min-height: 700px;
}

	.new_base_headContent {
		position: absolute!important;
		top: 0px;
		left: 0px;
		z-index: 1;
		background: transparent!important;
	}
	.new_base_headContent>.base_headCont>.base_head_tap>li.tap>a {
		color: #ffffff;
	}
	
	.new_base_headContent>.base_headCont>.base_head_tap>li {
		color: #ffffff;
	}
	
	.new_base_headContent>.base_headCont>.base_head_tap>li.tap.tap1 a {
		color: #2590fe;
	}
	
	.new_base_headContent>.base_headCont>.base_head_tap>li.tap.tap1:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		background-color: #2590fe;
	}
</style>
