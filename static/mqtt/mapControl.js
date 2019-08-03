var chinaW=73*60*60;
var chinaE=135*60*60;
var chinaS=18*60*60+10*60;
var chinaN=53*60*60+31*60;


var picW=519;

var picH=440;

function getPosByNE(e,n) //传入经纬度，e是经度，n是纬度， 返回距离地图图片的左上位置
{
	var rn=n*60*60;
	
	var re=e*60*60;
	
	
	var relPicX=(re-chinaW)/(chinaE-chinaW)*picW;
	
    var relPicY=picH-((rn-chinaS)/(chinaN-chinaS)*picH);
    
    
    return {
    	x:relPicX, //距离地图左边位置
    	y:relPicY  //距离地图右边位置
    }
	
}
