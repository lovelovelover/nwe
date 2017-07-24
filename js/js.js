var s = 0;
$(".show").click(function(){
	//alert($(this).children(".showList"))
	if(s==0){
		$(this).children(".showList").slideDown();
		s = 1;
	}else{
		$(this).children(".showList").slideUp();
		s = 0;
	}
})
var num = 0;
$(".scarchBox").click(function(){
	//alert($(this).children(".showList"))
	if(num==0){
		$(this).children(".list").slideDown();
		num = 1;
	}else{
		$(this).children(".list").slideUp();
		num = 0;
	}
})
var ipt = document.querySelectorAll(".list_item input");
$("#btn1").click(function(){
	//$(".list_item").children("input").checkked = true;
//	alert(1)
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=true;
		}
})
$("#btn2").click(function(){
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=false;
		}
})
$("#btn3").click(function(){
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=!ipt[i].checked;
		}
})
//三个按钮
$("#change").click(function(){
	$(".videoList_newList").eq(0).css("display","none");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$("#back").click(function(){
	$(".videoList_newList").eq(0).css("display","block");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
//视频、综艺跳转
$("#lick").click(function(){
//	$(".c_listTab").children().addClass("hide");
	$(".c_listTab").css("height","244px")
	$(".pt10").children().removeClass("hide");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$("#zhuanlan").click(function(){
	$(".pt10").children().removeClass("hide");
	$(".c_listTab").children().addClass("hide");
	$(".c_listTab").css("height","0")
	$(this).addClass("noBl").siblings("li").removeClass();
})
var tel = 0;
$(".prev").click(function(){
	tel--;
	if(tel==0){
		tel = 4
	}
	$(".prev+span>i").eq(tel).addClass("active").siblings("i").removeClass("active");
	$(".c_list_scroll>ul").eq(tel).removeClass("hide").siblings().addClass("hide")
})
$(".next").click(function(){
	tel++;
	if(tel>4){
		tel = 0;
	}
	$(".prev+span>i").eq(tel).addClass("active").siblings("i").removeClass("active");
	$(".c_list_scroll>ul").eq(tel).removeClass("hide").siblings().addClass("hide")
})
//喜欢、专栏跳转
$(".tab_title").children("li").click(function(){
	$(this).children().addClass("active");
	$(this).siblings().children().removeClass();
	$(".smList").children().eq($(this).index()).addClass("show");
	$(".smList").children().eq($(this).index()).siblings().removeClass("show");
})
//教育、培训、招生、出国跳转
$(".day").children("a").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".aaa").eq($(this).index()).addClass("show").siblings().removeClass("show")
})
//今日明日跳转
$(".comTitle_tabs").children("li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(this).parents().parents().next().children().eq($(this).index()).addClass("show").siblings().removeClass("show")
})
