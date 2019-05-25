$(document).ready(function(){
    //$("#sidebar-left, #sidebar-left-only-logo").hide();
    //$("#sidebar-left, #sidebar-left-only-logo").css("visibility","visible");
   // $(".side-menu").hide();
    //$(".side-menu").css("visibility","visible");
    $(".misc").hide();
    $(".misc").css("visibility","visible");
    $(".onLogin").hide();

    $("#log a").click(function(){
        $("#login-panel").toggle();
    });

    $("#gplus-opt").click(function(){
        $("#gplus-option").toggle();
    });

    $("#expand-left").mouseover(function(){
        $(".sidebar").css("visibility","visible");
        $(".sidebar .side-menu-div").css("visibility","visible");
        $("#expand-left").hide();
       
    });

    $(".side-menu").mouseleave(function(){
        $(".side-menu").css("visibility","hidden");
        $(".sidebar").css("visibility","hidden");
        $(".sidebar .side-menu-div").css("visibility","hidden");
        $("#expand-left").show();
    });

    $("#outer").mouseleave(function(){
        $(".side-menu").css("visibility","hidden");
        $(".sidebar").css("visibility","hidden");
        $(".sidebar .side-menu-div").css("visibility","hidden");
        $("#expand-left").show();
    });

    $(".sidebar .side-menu-div").mouseover(function(){
        var index = $(".sidebar .side-menu-div").index($(this));
        var hide = ".side-menu-div:nth-child("+index+")";
        console.log("index: "+index);
        var sel = ".side-menu:nth-child("+(index+1)+")";
        $(sel).hide().css("visibility","visible").animate({width:'toggle'},350);
        $(this).css("visibility","hidden");
        $(sel).siblings().css("visibility","hidden");
        $(this).siblings().css("visibility","visible");
        $("#expand-left").hide();

        console.log($(".side-menu-name").css("height"));
        console.log($(".side-menu-name").css("overflow"));
        
    });

    $(".freq").hover(function(){
        $(this).css({"background":"transparent","color":"black"});
        $(this).find(".img-div").css("float","right");

    });

    $(".freq").mouseleave(function(){
        $(this).css({"background":"#4a4a4a4a","color":"white"});
        $(this).find(".img-div").css("float","left");
    });
  
    
    
	var num = 1 + Math.floor(Math.random() * 6);
	var im = "url(images/cover"+num+".jpg)";
	$(".body").css("background-image", im);
    $("#bg").click(function(){
    	num = 1 + Math.floor(Math.random() * 6);
    	im = "url(images/cover"+num+".jpg)";
    	console.log(im);
        $(".body").css("background-image", im);
   

    });

/*
    $(".side-menu").mouseleave(function(){
        $(".side-menu").css("visibility","hidden");
        $("#sidebar-left-only-logo").css("visibility","hidden");
        $("#expand-left").show();
    });

    $(".freq").hover(function(){
        console.log($(this));
        var obj = this+" .imgdiv";
        $(obj).css("float","right");
    });
    */
});

//<img src="search.gif" height="50px" id="searchgif" class="search">