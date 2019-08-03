var newsUrl = "https://www.niming.com.cn:8080//web/news_Information"; //節點數量

var topicNodeUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getInfo"; //節點數量

var userCountUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getTotalUser"; //用戶總量

var transCountUrl24 = "https://nos.k1m.cn/nos-iot/v1/noschain/getTransactionsCount"; //交易總量

var contractCountUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getTotalSmartContracts"; //合約量

var tokenCountUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getTotalToken"; //節分總量

var nodeCountUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getTotalNodes"; //節點總量

var transInfoUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/getTransactions?account=*"; //交易信息
var getYzmUrl = "https://www.niming.com.cn:8080//reg/sendSms";

var getPassYzmUrl = "https://www.niming.com.cn:8080//editPass/sendSms";

var resetPassUrl = "https://www.niming.com.cn:8080//edit/pass";

var registUrl = "https://www.niming.com.cn:8080//reg/regHandle";

var loginUrl = "https://www.niming.com.cn:8080//login/handle";

var searchInfoUrl = "https://nos.k1m.cn/nos-iot/v1/noschain/searchAll"
var topicNode = "NOS/NODE_INFO";

//var topicTrans = "NOS/TRANSACTIONS_DBG";

var topicTrans = "NOS/TRANSACTIONS";


var topicTotalTokens = "NOS/GROUP1/TOTAL_TOKENS"; //积分

var topicTotalUsers = "NOS/GROUP1/TOTAL_USERS";

var topicTransactionCount = "NOS/GROUP1/TOTAL_TRANSACTIONS_COUNT"; //24小时交易量

var topicTotalNodes = "NOS/GROUP1/TOTAL_NODES";
var topicSmartContracts = "NOS/GROUP1/TOTAL_SMART_CONTRACTS"; //合约数量

var nameTableUrl ="https://nos.k1m.cn/nos-iot/v1/noschain/getTotalUserName";

var joinComListUrl = "https://www.niming.com.cn:8080//company/list";

var newsDetailUrl = "https://www.niming.com.cn:8080//information/detail";
var joinComUrl = "https://www.niming.com.cn:8080//applyme/add";
var infoTopArr = [topicTotalNodes, topicSmartContracts, topicTotalTokens, topicTotalUsers, topicTransactionCount];
var nodeCall = null;
var transCall = null;
var numInfoCall = null;
var client = null;

function requsetGetFirst() {
	//请求节点信息
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: topicNodeUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(nodeCall) {
				nodeCall(JSON.stringify(data));
			}
		},
		error: function(data) {

		}
	});
	//請求用戶總量
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: userCountUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(numInfoCall) {
				numInfoCall(topicTotalUsers, JSON.stringify(data));
			}
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
	//請求交易總量
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: transCountUrl24, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(numInfoCall) {
				numInfoCall(topicTransactionCount, JSON.stringify(data));
			} //在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
	//請求合約量
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: contractCountUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(numInfoCall) {
				numInfoCall(topicSmartContracts, JSON.stringify(data));
			} //在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
	//請求積分總量
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: tokenCountUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(numInfoCall) {
				numInfoCall(topicTotalTokens, JSON.stringify(data));
			} //在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
	//節點總量
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: nodeCountUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(numInfoCall) {
				numInfoCall(topicTotalNodes, JSON.stringify(data));
			}
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
	//請求交易信息
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: transInfoUrl + "", //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			if(transCall) {
				transCall(JSON.stringify(data));
			}
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});

}

function mqttGetNews(callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		url: newsUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		data: {},
		error: function(data) {}
	});
}
function mqttGetNameTabel(callback) {
	//請求交易信息
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: nameTableUrl + "", //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {

		}
	});
}
function mqttGetNewsDetail(id, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		url: newsDetailUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		data: {
			id: id
		},
		error: function(data) {}
	});
}

function mqttGetYzm(phone, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		url: getYzmUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		data: {
			phone: phone
		},
		error: function(data) {}
	});
}

function mqttGetComList(callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		url: joinComListUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttPassGetYzm(phone, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		url: getPassYzmUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		data: {
			phone: phone
		},
		error: function(data) {}
	});
}

function mqttJoinCom(phone, title, nickname, addr, range, token, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		data: {
			phone: phone,
			title: title,
			nickname: nickname,
			addr: addr,
			range: range,
			Authorization: token
		},
		url: joinComUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttLogin(phone, pass, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		data: {
			phone: phone,
			password: pass

		},
		url: loginUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttRegist(phone, yzm, pass, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		data: {
			phone: phone,
			yzm: yzm,
			password: pass
		},
		url: registUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttResetPass(phone, yzm, pass, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "post", //请求类型
		data: {
			phone: phone,
			yzm: yzm,
			pass1: pass,
			pass2: pass
		},
		url: resetPassUrl, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttGetSearchResult(text, callback) {
	$.ajax({
		async: false, //表示请求是否异步处理
		type: "get", //请求类型
		url: searchInfoUrl + "?queryKey=" + text, //请求的 URL地址
		dataType: "json", //返回的数据类型
		success: function(data) {
			callback(data);
			//在控制台打印服务器端返回的数据
		},
		error: function(data) {}
	});
}

function mqttSetNodeCall(callBack) {
	nodeCall = callBack;
}

function mqttSetTransCall(callBack) {
	transCall = callBack;
}

function mqttPublish(topic, msg) {
	mqclient.pub(topic, msg);
}

function mqttSetNumInfoCall(callBack) {
	numInfoCall = callBack;
}

function mqttConnect() {
	var mqttOpts = {
		host: 'mqtt.k1m.cn',
		port: 8085,
		clientId: 'mqttjs_' + (new Date().getTime()),
		timeout: 5,
		keepAlive: 100,
		cleanSession: false,
		ssl: true
	};
	client = new Paho.MQTT.Client(mqttOpts.host, mqttOpts.port, mqttOpts.clientId);
	var options = {
		invocationContext: {
			host: mqttOpts.host,
			port: mqttOpts.port,
			path: client.path,
			clientId: mqttOpts.clientId
		},
		timeout: mqttOpts.timeout,
		keepAliveInterval: mqttOpts.keepAlive,
		cleanSession: mqttOpts.cleanSession,
		useSSL: mqttOpts.ssl,
		onSuccess: onConnect,
		onFailure: function(e) {
			console.log(e);
			s = "{time:" + new Date().Format("yyyy-MM-dd hh:mm:ss") + ", onFailure()}";
			console.log(s);
		}
	};
	client.connect(options);
	requsetGetFirst();
	client.onMessageArrived = onMessageArrived;
}

function onMessageArrived(message) {
	var subTopic = message.destinationName;
	var msg = message.payloadString;
	if(subTopic == topicNode) {
		if(nodeCall) {
			nodeCall(msg);
			return;
		}
	}
	if(subTopic == topicTrans) {
		if(transCall) {
			transCall(msg);
			return;
		}
	}
	for(var mq = 0; mq < infoTopArr.length; mq++) {
		if(infoTopArr[mq] == subTopic) {
			if(numInfoCall) {
				numInfoCall(subTopic, msg);
			}

		}
	}
}

function onConnect() {
	mqttSubscribe(topicNode);
	mqttSubscribe(topicTrans);
	for(var q = 0; q < infoTopArr.length; q++) {
		mqttSubscribe(infoTopArr[q]);
	}
}

function mqttSubscribe(subTpic) {
	client.subscribe(subTpic);
}

function mqttOnMessageArrived(subTopic, msg) {
	if(subTopic == topicNode) {
		if(nodeCall) {
			nodeCall(msg);
			return;
		}
	}
	if(subTopic == topicTrans) {
		if(transCall) {
			transCall(msg);
			return;
		}
	}
	for(var mq = 0; mq < infoTopArr.length; mq++) {
		if(infoTopArr[mq] == subTopic) {
			if(numInfoCall) {
				numInfoCall(subTopic, msg);
			}

		}
	}
	//console.log("topic " + subTopic + " MSG:" + msg.toString());

}

function mqttUnSubscribe(subTpic) {
	mqclient.once('onsus', function() {

		//console.log(subTpic + " cancel");

	})
	mqclient.sus(subTpic);

}

function convertTime(utc_datetime) {
	// 转为正常的时间格式 年-月-日 时:分:秒
	utc_datetime = utc_datetime.replace(/-/g, "/");
	var T_pos = utc_datetime.indexOf('T');
	var Z_pos = utc_datetime.length;
	var year_month_day = utc_datetime.substr(0, T_pos);
	var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
	
	
	var hour_minute_second =hour_minute_second.substring(0,hour_minute_second.indexOf(".")>=0?hour_minute_second.indexOf("."):hour_minute_second.length);
	var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06
	timestamp = new Date(Date.parse(new_datetime));
	timestamp = timestamp.getTime();
	timestamp = timestamp / 1000;

	// 增加8个小时，北京时间比utc时间多八个时区
	var timestamp = timestamp + 8 * 60 * 60;
	
	var date = new Date(parseInt(timestamp) * 1000);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = change(date.getDate()) + ' ';
	h = change(date.getHours()) + ':';
	m = change(date.getMinutes()) + ':';
	s = change(date.getSeconds());
	return Y + M + D + h + m + s;// 2017-03-31 16:02:06
}

function timestampToTimeStr(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = change(date.getDate()) + ' ';
	h = change(date.getHours()) + ':';
	m = change(date.getMinutes()) + ':';
	s = change(date.getSeconds());
	return Y + M + D + h + m + s;
}

function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = change(date.getDate());
	var h = change(date.getHours());
	var m = change(date.getMinutes());
	var s = change(date.getSeconds());
	return {

		Y: Y,
		M: M,
		D: D
	}
}

function change(t) {
	if(t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}