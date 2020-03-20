$(document).ready(function(){
	$(window).on("scroll",function(){
		var sc=$(window).scrollTop();
		if(sc>0){
			$(".navbar-expand-lg").css("backgroundColor","#2D1010");
		}else{
			$(".navbar-expand-lg").css("backgroundColor","transparent");}
	});
/*-------------------------------ContentAreass----------------------------------------*/
	/*$(window).on("scroll",function(){
		var st=$(window).scrollTop();

		if (st>2000&&st<2600){
		$("#img").animate({
			top:"10%",
			height:"85%"
		},3000)
		
		}

		else{
			$("#img").css({top:"20%",
				height:"90%"
		});}
	})/*tzbet el ertfa3 bta3 el escroll top fe el if condition*/

/*-------------------------------start:youwilllove--------------------------------------------------*/

/*$(window).scroll(function(){
		$("#img1").animate({position:'absolute',top:'100px'},5000);
	});*/

	/*var sc=$(window).scrollTop();--------------start:youwilllove-----------------------
	if (sc>288 && sc<1693) {
		$("#img1").animate({position:'absolute',top:'100px'},5000);
	} else {
		$("#img1").animate({position:'absolute',top:'400px'},5000);
	}*/

/*-------------------------------------------start:Free Demo---------------------------------------*/
	
	$(".dddiv .btn:nth-of-type(2),#btn2").mouseenter(function(){
		$(this).css("backgroundColor","#ebebeb");
		$(this).css("border","1px solid gray");
	});
    $(".dddiv .btn:nth-of-type(2),#btn2").mouseleave(function(){
		$(this).css("backgroundColor","#f1f3f3");
		$(this).css("border","0px");
	});
	$(".bubble").mouseenter(function(){
		$(this).css("color","#007bff");
	});
	$(".bubble").mouseleave(function(){
		$(this).css("color","black");
	});
	$(".float-left .btn:first-of-type").mouseenter(function(){
		$(this).css("opacity","0.8");
	});
	$(".float-left .btn:first-of-type").mouseleave(function(){
		$(this).css("opacity","1");
	})
/*-------------------------------------------start:Free Demo---------------------------------------*/
	$(".Icons .row div:first-child button:first-of-type").mouseenter(function(){
		$(this).css("opacity","0.8");
	})
	$(".Icons .row div:first-child button:first-of-type").mouseleave(function(){
		$(this).css("opacity","1");
	})
	$(".Icons .row div:first-child button:nth-of-type(2)").mouseenter(function(){
		$(this).css("opacity","0.8");
	})
	$(".Icons .row div:first-child button:nth-of-type(2)").mouseleave(function(){
		$(this).css("opacity","1");
	})

	
	
});/*end of document ready*/

