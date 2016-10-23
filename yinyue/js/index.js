var songListArr=[
				{
				name:"风花雪月",	
				zuozhe:"山猫",
				images:"img/1.bmp",
				src:"audio/山猫 - 风花雪月.mp3"
				},
				{
				name:"上邪",	
				zuozhe:"小曲",
				images:"img/2.bmp",
				src:"audio/小曲儿 - 上邪.mp3"
				},
				{
				name:"卜卦",	
				zuozhe:"崔子格",
				images:"img/3.bmp",
				src:"audio/崔子格 - 卜卦.mp3"
				},
				{
				name:"着魔",	
				zuozhe:"张杰",
				images:"img/4.bmp",
				src:"audio/zhaomo.mp3"
				},
				{
				name:"断点",	
				zuozhe:"张敬轩",
				images:"img/5.bmp",
				src:"audio/bg.mp3"
				},
				{
				name:"年轮",	
				zuozhe:"张碧晨",
				images:"img/6.bmp",
				src:"audio/年轮.mp3"
				},
				{
				name:"案语",	
				zuozhe:"少司命",
				images:"img/7.bmp",
				src:"audio/少司命 - 案语.mp3"
				},
				{
				name:"摆渡",	
				zuozhe:"少司命 ",
				images:"img/8.bmp",
				src:"audio/少司命 - 摆渡.mp3"
				},
				{
				name:"独孤九剑",	
				zuozhe:"少司命",
				images:"img/9.bmp",
				src:"audio/少司命 - 独孤九剑.mp3"
				},
				{
				name:"一万个舍不得",	
				zuozhe:"庄心妍",
				images:"img/10.bmp",
				src:"audio/庄心妍 - 一万个舍不得.mp3"
				},
				{
				name:"冬天的秘密",	
				zuozhe:"周传雄",
				images:"img/11.bmp",
				src:"audio/mimi.mp3"
				},
				{
				name:"飞鸟",	
				zuozhe:"郑智化",
				images:"img/12.bmp",
				src:"audio/郑智化 - 飞鸟.mp3"
				}
				
				
];
	function creatsec(){
		for(var i=0;i<songListArr.length;i++){
			$("article").append("<section class='sec'><p class='p1'>"+(i+1)+"</p>"+
			"<p class='p2'><b>"+songListArr[i].name+"</b><b>"+songListArr[i].zuozhe+"</b></p>"+
			"<p class='p3'><img src='img/laji.jpg' class='remove' /></p></section>");
		}
	}
var num;
$(function(){
	creatsec();
	
	$(".sec").on("click",function(){
		
		$(".bclass").removeClass("moveflash");
		var index=$(".sec").index(this);
		$(this).siblings().css("background-color","#054859");
		$(this).css("background-color","#062d4b");
		num=index;
		$("audio")[0].src=songListArr[index].src;
		$("audio")[0].play();
		//将正在播放的歌曲名称放在首行
		$(".bclass").html(songListArr[index].name+"---"+songListArr[index].zuozhe);
		
		$(".bclass").addClass("moveflash");
		//显示进度条
		setFunc();
		$("#tu3")[0].src="img/ff3.jpg";
		$(".img1Id")[0].src="img/"+index+".bmp";//改变播放区的图片
		//给图片添加动画
		$(".img1Id").addClass("flash");
	});

	//删除
	$(".remove").on("click",function(){
		var index=$(".remove").index(this);
		$(this).parent().parent().hide();
		songListArr.splice(index,1);
	});
	//暂停和播放歌曲
	var inc=0;
	$("#tu3").on("click",function(){
		
		inc++;
		if(inc%2==1){
			$("audio")[0].pause();
			$("#tu3")[0].src="img/kaiguan2.jpg";
			$(".img1Id").addClass("stop");
		}else{
			$("audio")[0].play();
			$("#tu3")[0].src="img/ff3.jpg";
			$(".img1Id").removeClass("stop").addClass("flash");
		}

	});
	//上一首歌曲
	$("#prevsong").on("click",function(){
		num--;
		if(num>=0){
			$("audio")[0].src=songListArr[num].src;
			$("audio")[0].play();//alert(num);
		}else{
			alert("当前播放为第一首歌曲");
			num=0;
		}
		$(".sec").siblings().css("background-color","#054859");
		$(".sec").eq(num).css("background-color","#062d4b");
		$(".bclass").html(songListArr[num].name+"---"+songListArr[num].zuozhe);
		$(".img1Id")[0].src="img/"+num+".bmp";

	});
	//下一首歌曲
	$("#aftersong").on("click",function(){
		num++;
		if(num<songListArr.length){
			$("audio")[0].src=songListArr[num].src;
			$("audio")[0].play();//alert(num);
		}else{
			alert("当前播放为最后一首歌曲");
			num=songListArr.length-1;
		}
		$(".sec").siblings().css("background-color","#054859");
		$(".sec").eq(num).css("background-color","#062d4b");
		$(".bclass").html(songListArr[num].name+"---"+songListArr[num].zuozhe);
		$(".img1Id")[0].src="img/"+num+".bmp";

	});
	//点击改变进度条
	$("#jindutiaobox").on("click",function(e){
		//clearInterval(timer);
		var audios=$("audio")[0];
		var e=e||e.window;
		var offsetX=e.offsetX;
		kuai=offsetX;
		var duration=audios.duration;
		fff=offsetX/widthClient*duration;
		currentTime=fff;

		$("#jindutiao").css("width",offsetX+"px");
	});
})

var kuai;
var currentTime;
function jindutiao(){
		getwidth();
		var audios=$("audio")[0];
		currentTime=audios.currentTime;
		var duration=audios.duration;
	    var kuai1=widthClient/parseInt(duration);
		kuai=kuai1*currentTime;
		$("#jindutiao").css("width",kuai+"px");
		if(kuai>=widthClient){
			num++;
			if(num>=songListArr.length){
				num=0;
			}
			audios.src=songListArr[num].src;
			audios.play();
			$(".sec").eq(num).siblings().css("background-color","#054859");
			$(".sec").eq(num).css("background-color","#062d4b");
			$(".bclass").html(songListArr[num].name+"---"+songListArr[num].zuozhe);
			$(".bclass").addClass("moveflash");
			$(".img1Id")[0].src="img/"+num+".bmp";//改变播放区的图片
			$(".img1Id").addClass("flash");
		}
	}
var timer;
function setFunc(){
	timer=setInterval(jindutiao,20);
}
var widthClient;
function getwidth(){
	widthClient=document.documentElement.clientWidth||document.body.clientWidth;
}










