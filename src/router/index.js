import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: '/dist/',
	routes: [
		// index
		{
			path: '/',
			name: 'index',
			component: resolve => require(['@/pages/index'], resolve),
			meta: {　　　　
				title: '重庆区块链防伪溯源平台  - 匿名科技' //此处为要修改的 title 名称，浏览器目前的标题显示：Home
				　　
			}
		},
		// about
		{
			path: '/about',
			name: 'about',
			component: resolve => require(['@/pages/about'], resolve),
			meta: {　　　　
				title: '关于我们  - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 区块浏览器
		{
			path: '/browser',
			name: 'browser',
			component: resolve => require(['@/pages/browser'], resolve),
			meta: {　　　　
				title: 'NOS浏览器  - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 交易列表
		{
			path: '/transaction_list',
			name: 'transaction_list',
			component: resolve => require(['@/pages/transaction_list'], resolve),
			meta: {　　　　
				title: '交易列表  - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 交易详情
		{
			path: '/transaction_details',
			name: 'transaction_details',
			component: resolve => require(['@/pages/transaction_details'], resolve),
			meta: {　　　　
				title: '交易详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 搜索详情
		{
			path: '/search_details',
			name: 'search_details',
			component: resolve => require(['@/pages/search_details'], resolve),
			meta: {　　　　
				title: '搜索详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 商品详情
		{
			path: '/search_commodity',
			name: 'search_commodity',
			component: resolve => require(['@/pages/search_commodity'], resolve),
			meta: {　　　　
				title: '商品详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 商品详情
		{
			path: '/search_plane',
			name: 'search_plane',
			component: resolve => require(['@/pages/search_plane'], resolve),
			meta: {　　　　
				title: '溯源详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 采购详情
		{
			path: '/search_purchase',
			name: 'search_purchase',
			component: resolve => require(['@/pages/search_purchase'], resolve),
			meta: {　　　　
				title: '商品详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 溯源详情
		{
			path: '/search_traceability',
			name: 'search_traceability',
			component: resolve => require(['@/pages/search_traceability'], resolve),
			meta: {　　　　
				title: '溯源详情  - 重庆区块链防伪溯源平台  - 匿名科技'
			}
		},
		// 资讯
		{
			path: '/information',
			name: 'information',
			component: resolve => require(['@/pages/information'], resolve),
			meta: {　　　　
				title: '资讯 - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 产品服务
		{
			path: '/service',
			name: 'service',
			component: resolve => require(['@/pages/service'], resolve),
			meta: {　　　　
				title: '产品服务 - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 解决方案
		{
			path: '/solution',
			name: 'solution',
			component: resolve => require(['@/pages/solution'], resolve),
			meta: {　　　　
				title: '解决方案 - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		},
		// 登录注册
		{
			path: '/login',
			name: 'login',
			component: resolve => require(['@/pages/login'], resolve),
			meta: {　　　　
				title: '登录注册 - 重庆区块链防伪溯源平台  - 匿名科技'　　
			}
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		}
		return {
			x: 0,
			y: 0
		}
	}
})
