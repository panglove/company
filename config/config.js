module.exports = {
    //测试环境移动端api
  	baseURL: 'https://nos.k1m.cn',
    //正式环境移动端api
    //baseURL: 'http://mportal.rrfamen.com/',
    //测试环境pc端api
  	baseURL1: 'http://192.168.1.191:8080/portal/',
    //正式环境pc端api
  	//baseURL1: 'http://portal.rrfamen.com/',
	headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Authorization,Origin, X-Requested-With, Content-Type, Accept", "Access-Control-Allow-Methods": "get,post" },
	wsState: ['正在连接..', '连接已建立', '正在关闭..', '已经关闭'],
	wsHost: 'ws://192.168.1.191:7070/ws/',
	wsIp: '192.168.1.191'
}
