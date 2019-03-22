/**
 * 
 * @authors Chaoyang Zhu (zcy_2013@163.com)
 * @date    2017-02-21 10:00:00
 * @tel 	15903620494
 */
 
window.onload = function(){
	layer.closeAll();
}

require.config({
	baseUrl: 'js',
	urlArgs: "v133",
	paths: {
		

	}
})


require(['xml' ], function(xml){

 

	

	$(".header_videoControl .play").click(function(){
		$(".header_videoBg").get(0).pause();
		$(".video_large_wrap").show();
		$(".video_large_wrap video").get(0).play();
	});
	$(".video_close").click(function(){
		$(".header_videoBg").get(0).play();
		$(".video_large_wrap").hide();
		$(".video_large_wrap video").get(0).pause();
	});


	$(".header_lbBox li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".header_videoBg").attr("src", $(this).attr("data-src"));
		$(".video_large_wrap video").attr("src", $(this).attr("data-src"));
	});

	var timer = null, timer2 = null, iSpeed = -1;
	// var videoLb_ul = $(".header_lbBox ul").clone(true);
	// $(".header_lbBox ul").append(videoLb_ul.html());
	var header_lbWidth = $(".header_lb").width();
	var header_lbWidth_li = parseInt($(".header_lb").width())/5;
	$(".header_lbBox li").css("width", header_lbWidth_li);

	// var header_lbBoxWidth = $(".header_lbBox").width();

	// function header_lbFn(){
	// 	$(".header_lbBox").css("left", "+=" + iSpeed + "px");
	// 	if( parseInt($(".header_lbBox").css("left")) == -header_lbBoxWidth/2 ){
	// 		$(".header_lbBox").css("left", 0);
	// 		clearInterval(timer);
	// 		timer2 = setTimeout(function(){timer=setInterval(header_lbFn,1)},2000);
	// 	} else if( parseInt($(".header_lbBox").css("left")) > 0 ){
	// 		clearInterval(timer);
	// 		$(".header_lbBox").css("left", -header_lbBoxWidth/2 +"px");
	// 		timer2 = setTimeout(function(){timer=setInterval(header_lbFn,1)},2000);
	// 	} else if( parseInt($(".header_lbBox").css("left"))%header_lbBoxLiWidth == 0 ){
	// 		clearInterval(timer);
	// 		timer2 = setTimeout(function(){timer=setInterval(header_lbFn,1)},2000);
	// 	}
	// }
	// timer = setInterval(header_lbFn, 1);












})

























