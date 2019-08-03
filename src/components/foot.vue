<template>
	<div class="base_bottomContent">
		<div class="base_bottomCont">
			<div class="cont_top">
				友情链接：
				<a v-on:click="openUrl('https://www.baidu.com')">百度</a>
				<a v-on:click="openUrl('https://www.feixiaohao.com')">非小号</a>
				<a v-on:click="openUrl('https://www.aliyun.com') ">阿里云</a>
				<a v-on:click="openUrl('https://www.huaweicloud.com')">华为云</a>
			</div>
			<ul class="cont_top">
				<li>电话：023-68886556</li>
				<!-- <li>QQ群：53854427</li> -->
				<li>邮箱：admin@niming.com.cn</li>
				<li>© 2018 匿名（重庆）区块链科技有限公司 渝ICP备18013466号-1</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			openUrl: function(url) {
				window.open(url);
			}

		}
	};
</script>

<style>

</style>