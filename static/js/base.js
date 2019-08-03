/**
 * 打开新窗口(带有原生导航栏)
 * @param {String} 窗口名
 * @param {String} 窗口标题
 * @param {String} 页面传参（对象方式）
 */
var createWebview = function(name,title,extras){
	extras = extras ? extras : {};
	mui.openWindow({
	    url: name + '.html',
	    id: name,
	    styles: {                            
		    titleNView: {                                
		      titleText: title,
		      backgroundColor: "#ffffff",
		      autoBackButton: true,
		    }
		},
		extras: extras,
	    createNew: false,//是否重复创建同样id的webview
	    waiting:{
	      autoShow: true,
	      title: '正在加载...',
	    }
	})
}
/**
 * 打开新页面（自定义导航栏）
 * @param {Object} times
 */
var showOpen = function(name,animate) {
	var web = plus.webview.getWebviewById(name);
	if(web) {
		web.show();
	}
	else{
		plus.nativeUI.showWaiting('正在加载...');
		web = plus.webview.create(name + ".html", name);
		setTimeout(function(){
			if(animate){
				web.show(animate);
			}else{
				web.show("slide-in-right");
			}
			plus.nativeUI.closeWaiting();
		},200);	
	}
	return web;
};
/**
 * 关闭当前窗口
 */
var _close = function(animate){
	var web = plus.webview.currentWebview();
	if(!animate){
		web.close();
	}else{
		web.close('none');
	}
};
/**
 * 退出程序
 */
var loginQuit = function(){
	setTimeout(function() {
		var Model=plus.os.name.toLowerCase();
		window.localStorage.clear();
	    plus.runtime.restart();
	    if(Model== "ios"){
//		    mui.alert('退出成功');
	    };
    },300);
};
/**
 * 设置缓存
 * @param {String} 缓存名称
 * @param {JSON} 缓存对象
 */
var setItem = function(name, item) {
	try {
		window.localStorage.setItem(name, JSON.stringify(item));
	} catch(e) {

	}
};
/**
 * 获取缓存信息
 * @param {String} 缓存名称
 */
var getItem = function(name) {
	try {
		var json = window.localStorage.getItem(name);
		if(json) {
			if(json.length < 2) {
				return null;
			} else {
				return JSON.parse(json);
			}
		} else {
			return null;
		}
	} catch(e) {
		return null;
	}
};
/**
 * 截取小数
 * @param {String} 内容
 */
var _toFixed = function(str1, num) {
	var str = String(str1);
	function hanZeo(z) {
		var zeo = '';
		for(var i = 0; i < z; i++) {
			zeo += '0';
		}
		return zeo;
	}
	var arr = str.split('.');
	if(arr[1]) {
		if(arr[1].length >= num) {
			return arr[0] + '.' + arr[1].slice(0, num);
		} else {
			return arr[0] + '.' + arr[1] + hanZeo(num - arr[1].length);
		}
	} else {
		return str + '.' + hanZeo(num);
	}
};
/**
 * 监听网络
 * @param {String} 内容
 */
var _networkMethod = function() {
	if(navigator.onLine) {
		//console.log("在线_online");
	} else {
		mui.alert('您当前处于离线状态,请连接网络后操作', '提示');
	};
	window.addEventListener("offline", function(e) { //监听是否离线(是否有网络)
		mui.alert('您当前处于离线状态,请连接网络后操作', '提示');
	});
};
/**
 * 判断手机号码的正则表达式
 * @param {String} 内容
 */
var _checkMobile = function(sMobile) {
	if(!(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(sMobile))) {
		return false;
	} else {
		return true;
	};
};
/**
 * 手机号中间用****代替
 * @param {String} 内容
 */
var _phoneMethod=function(cellValue){
	if (Number(cellValue) && String(cellValue).length === 11) {
        var mobile = String(cellValue);
        var reg = /^(\d{3})\d{4}(\d{4})$/;
        return mobile.replace(reg, '$1****$2');
    } else {
        return cellValue;
    };
};
/**
 * 验证密码
 * @param {String} 内容
 */
var _checkPwd = function(pwd) {
	if(!(/^(?![0-9]*$)[a-zA-Z0-9\W]{8,20}$/.test(pwd))) {
		return false;
	} else {
		return true;
	};
};
/**
 * 验证支付密码
 * @param {String} 内容
 */
var _checkPayPwd = function(pwd) {
	if(!(/^(?![0-9]*$)[a-zA-Z0-9\W]{8,20}$/.test(pwd))) {
		return false;
	} else {
		return true;
	};
};
/**
 * 复制文字
 * @param {String} 内容
 */
var _copy = function(text) {
	var osName = plus.os.name;
	if(plus.os.name == "Android") {
		var Context = plus.android.importClass("android.content.Context");
		var main = plus.android.runtimeMainActivity();
		var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
		plus.android.invoke(clip, "setText", text);
	} else if(osName == "iOS") {
		var UIPasteboard = plus.ios.importClass("UIPasteboard");
		var generalPasteboard = UIPasteboard.generalPasteboard();
		// 设置/获取文本内容:
		generalPasteboard.setValueforPasteboardType(text, "public.utf8-plain-text");
	}
};
/**
 * 乘法
 * @param {String} 参数1
 * @param {String} 参数2
 */
var _accMul = function(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch(e) {}
	try {
		m += s2.split(".")[1].length
	} catch(e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
};
/**
 * 除法
 * @param {String} 参数1
 * @param {String} 参数2
 */
var _accDiv = function(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length
	} catch(e) {}
	try {
		t2 = arg2.toString().split(".")[1].length
	} catch(e) {}
	with(Math) {
		r1 = Number(arg1.toString().replace(".", ""))
		r2 = Number(arg2.toString().replace(".", ""))
		return(r1 / r2) * pow(10, t2 - t1);
	}
};
/**
 * 日期
 * @param {String} 内容
 */
var _formatDate = function(inputTime) {
	var date = new Date(parseInt(inputTime * 1000));
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d +' ' + h + ':' + minute + ':' + second;
};
/**
 * 自动消失提示框
 * @param {String} 提示内容
 * @param {String} 窗口位置
 */
var toast = function(content, position) {
	if(!position) {
		position = 'bottom';
	}
	plus.nativeUI.toast(content, {
		verticalAlign: position
	});
};
/**
 * 验证输入的是否是数字
 * @param {String} 内容
 */
var IS_num=function(num){
	var reg = /^[-+]?\d+$/;
	if(isNaN(num) || num < 0 || num == 0){
		return false;
	}else{
		return true;
	};
};
/**
 * 首页底部tap显示隐藏
 * @param {String} 内容
 */
var indexShow=function(name){
	if(!name){
		plus.webview.getLaunchWebview().show("slide-out-right");
	}else{
		if(plus.webview.getWebviewById(name)){
			plus.webview.getWebviewById(name).show("slide-out-right");
		}else{
			var web=plus.webview.create(name+".html",name);
			web.show();
		};
	};
};
/**
 * 获取当前时间戳
 * @param {String} 内容
 */
var nowTime_stamp=function(){
	var timestamp =parseInt(new Date().getTime()/1000);
	return timestamp;
};
/**
 * 获取发送短信需要的KEY值
 * @param {String} 内容
 */
var get_key=function(mobile,time,type,ticket,randstr){
	var str='is_slider=1&mobile='+mobile+'&randstr='+randstr+'&ticket='+ticket+'&time='+time+'&type='+type+'wO62AJ8oD9k8m4yR';
	console.log(str);
	return str;
};