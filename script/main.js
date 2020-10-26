$(document).ready(function() {
	/* 새 창으로 열기 */
	$("a[href^='http']").attr('target','_blank');
	
	/* 배경화면 마우스 클릭 시 */
	function dock_hide() {
		$("#header_logo_sub").hide();
		$("#control_container").stop(true).animate({bottom:-220}, 100);
	};
	$("#container>img").click(function() {dock_hide();});
	
	/* 시작 시 로딩 부분 */
	$(window).load(function() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 479) {
			$("#loading_bar li:nth-of-type(2)").animate({width:200}, 3000, 'easeOutQuad');
			$("#loading").delay(3000).fadeOut();
		} else {
			$("#loading_bar li:nth-of-type(2)").animate({width:260}, 3000, 'easeOutQuad');
			$("#loading").delay(3000).fadeOut();
		}
	});
	
	/* 로그인 페이지 부분 */
	$("#login_img>div").click(function() {
		$("#login").stop(true).fadeOut();
	});
	$("#login_ul li:nth-of-type(1)").click(function() {
		$("#login_ul i:nth-of-type(1) span").animate({top:0}, 700);
		$("#login_ul i:nth-of-type(1) span").delay(1000).animate({top:-30}, 700);
	});	
	$("#login_ul li:nth-of-type(2)").click(function() {
		$("#login_ul i:nth-of-type(2) span").animate({top:0}, 700);
		$("#login_ul i:nth-of-type(2) span").delay(1000).animate({top:-30}, 700);
	});
	$("#login_ul li:nth-of-type(3)").click(function() {
		$("#login_ul i:nth-of-type(3) span").animate({top:0}, 700);
		$("#login_ul i:nth-of-type(3) span").delay(1000).animate({top:-30}, 700);
	});
	
	/* 상단 메뉴 부분 */
	$("#header_logo").click(function() {
		var z = $(this).parent().css("zIndex");
		$(this).next().toggle();
		$(this).parent().css({zIndex:2000});
		if (z == 2000) {
			$(this).parent().css({zIndex:500});
		}
	});
	$("#header_menubar li:nth-of-type(2)").click(function() {
		skill_zero(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#profile_container").fadeIn();
		$("#skill_container, #address_container, #contact_container").fadeOut();
		$(".contents_header_category li:nth-of-type(1)").addClass("dark");
		$(".contents_header_category li:nth-of-type(1)").siblings().removeClass("dark");
	});
	$("#header_menubar li:nth-of-type(3)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeIn();
		$("#cgv_container").show();
		$("#cgv_container").siblings().hide();
		$(".tab_one").attr("src","images/chrome_tab_on.png").css({zIndex:1600});
		$(".tab_two, .tab_three").attr("src","images/chrome_tab.png").css({zIndex:1500});
	});
	$("#header_menubar li:nth-of-type(4)").click(function() {
		skill_zero(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#contact_container").fadeIn();
		$("#profile_container, #skill_container, #address_container").hide();
		$(".contents_header_category li:nth-of-type(4)").addClass("dark");
		$(".contents_header_category li:nth-of-type(4)").siblings().removeClass("dark");
	});
	
	$(".header_sub_contents li:nth-of-type(1)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#about_portfolio").stop(true).fadeIn();
	});
	$(".header_sub_contents li:nth-of-type(2)").click(function() {
		skill_zero(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#profile_container").fadeIn();
		$("#skill_container, #address_container, #contact_container").fadeOut();
		$(".contents_header_category li:nth-of-type(1)").addClass("dark");
		$(".contents_header_category li:nth-of-type(1)").siblings().removeClass("dark");
	});
	$(".header_sub_contents li:nth-of-type(3)").click(function() {
		skill_photoshop(); skill_illustrator(); skill_html(); skill_css(); skill_js(); skill_jquery(); skill_bar(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#skill_container").fadeIn();
		$("#profile_container, #address_container, #contact_container").hide();
		$(".contents_header_category li:nth-of-type(2)").addClass("dark");
		$(".contents_header_category li:nth-of-type(2)").siblings().removeClass("dark");
	});
	$(".header_sub_contents li:nth-of-type(4)").click(function() {
		skill_zero(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#address_container").fadeIn();
		$("#profile_container, #skill_container, #contact_container").hide();
		$(".contents_header_category li:nth-of-type(3)").addClass("dark");
		$(".contents_header_category li:nth-of-type(3)").siblings().removeClass("dark");
	});
	$(".header_sub_contents li:nth-of-type(5)").click(function() {
		skill_zero(); dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#contact_container").fadeIn();
		$("#profile_container, #skill_container, #address_container").hide();
		$(".contents_header_category li:nth-of-type(4)").addClass("dark");
		$(".contents_header_category li:nth-of-type(4)").siblings().removeClass("dark");
	});
	$(".header_sub_contents li:nth-of-type(6)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeIn();
		$("#cgv_container").show();
		$("#cgv_container").siblings().hide();
		$(".tab_one").attr("src","images/chrome_tab_on.png").css({zIndex:1600});
		$(".tab_two, .tab_three").attr("src","images/chrome_tab.png").css({zIndex:1500});
	});
	$(".header_sub_contents li:nth-of-type(7)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeIn();
		$("#mini_container").show();
		$("#mini_container").siblings().hide();
		$(".tab_two").attr("src","images/chrome_tab_on.png").css({zIndex:1600});
		$(".tab_one, .tab_three").attr("src","images/chrome_tab.png").css({zIndex:1500});
	});
	$(".header_sub_contents li:nth-of-type(8)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeIn();
		$("#kiehls_container").show();
		$("#kiehls_container").siblings().hide();
		$(".tab_three").attr("src","images/chrome_tab_on.png").css({zIndex:1600});
		$(".tab_one, .tab_two").attr("src","images/chrome_tab.png").css({zIndex:1500});
	});
	$(".header_sub_contents li:nth-of-type(9)").click(function() {
		dock_hide();
		$("#redesign").stop(true).fadeOut();
		$("#contents, #about_portfolio").fadeOut();
		$("#login").stop(true).fadeIn();
	});
	
	/* 상단 메뉴 (이 Portfolio에 관하여) */
	$("#function_contents_one span").click(function() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 479) {
			$("#function_contents_one>ul").stop(true).animate({height:60}).show();
		} else {
			$("#function_contents_one>ul").stop(true).animate({height:40}).show();
		}
		$("#function_contents_two>ul").stop(true).animate({height:0}).hide("slow");
		$("#function_contents_three>ul").stop(true).animate({height:0}).hide("slow");
		$("#control_container").stop(true).animate({bottom:-220});
		$("#header_logo_sub").show();
	});
	$("#function_contents_two span").click(function() {
		$("#function_contents_two>ul").stop(true).animate({height:40}).show();
		$("#function_contents_one>ul").stop(true).animate({height:0}).hide("slow");
		$("#function_contents_three>ul").stop(true).animate({height:0}).hide("slow");
		$("#control_container").stop(true).animate({bottom:0});
		$("#header_logo_sub").hide();
	});
	$("#function_contents_three span").click(function() {
		$("#function_contents_three>ul").stop(true).animate({height:40}).show();
		$("#function_contents_one>ul").stop(true).animate({height:0}).hide("slow");
		$("#function_contents_two>ul").stop(true).animate({height:0}).hide("slow");
		$("#control_container").stop(true).animate({bottom:-220});
		$("#header_logo_sub").hide();
	});
	
	/* 상단 메뉴 시간 부분 */
	function nowTime() {
		setInterval(function() {
			var d = new Date();
			var week = new Array("일", "월", "화", "수", "목", "금", "토");
			var hours = d.getHours();
			var minutes = d.getMinutes();
			var seconds = d.getSeconds();
			var amPm = "오전";
			
			if (hours >= 1 && hours <= 12) {
				var amPm = "오전"
			} else if (hours >= 12 && hours <= 24) {
				var amPm = "오후"
			}
			
			if (minutes < 10) {var minutes = "0"+minutes;}
			if (hours < 10) {var hours = "0"+hours;}
			if (seconds < 10) {var seconds = "0"+seconds;}
			
			$(".now_time").text('(' + week[d.getDay()] + ')' + " " + amPm + " " + hours + ":" + minutes + ":" + seconds);
		}, 1000);
	}
	nowTime();
	
	/* 하단 독 부분 */
	// 하단 독 마우스 오버 시
	$(".basic_app li img, .portfolio_page li img").on({
		mouseover : function() {$(this).next("p").stop(true).fadeIn(200);}, 
		mouseout : function() {$(this).next("p").stop(true).fadeOut(200);}
	});

	// 하단 독 Profile 클릭 시
	$(".profile").click(function() {
		skill_zero(); dock_hide();
		$(".swiper-container").fadeOut();
		$("#control_container").stop(true).animate({bottom:-220});
		$("#contents").stop(true).fadeIn();
		$("#profile_container").fadeIn();
		$("#skill_container, #address_container, #contact_container").fadeOut();
		$(".contents_header_category li:nth-of-type(1)").addClass("dark");
		$(".contents_header_category li:nth-of-type(1)").siblings().removeClass("dark");
	});
	
	// 하단 독 Skill 클릭 시
	function skill_photoshop() {
		var skill_photoshop = 80;
  
		$({ val : 0 }).animate({ val : skill_photoshop}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(1) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(1) span").text(num);
			}
		});
	};
	function skill_illustrator() {
		var skill_illustrator = 90;
  
		$({ val : 0 }).animate({ val : skill_illustrator}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(2) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(2) span").text(num);
			}
		});
	}
	function skill_html() {
		var skill_html = 92;
  
		$({ val : 0 }).animate({ val : skill_html}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(3) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(3) span").text(num);
			}
		});
	}
	function skill_css() {
		var skill_css = 94;
  
		$({ val : 0 }).animate({ val : skill_css}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(4) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(4) span").text(num);
			}
		});
	}
	function skill_js() {
		var skill_js = 76;
  
		$({ val : 0 }).animate({ val : skill_js}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(5) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(5) span").text(num);
			}
		});
	}
	function skill_jquery() {
		var skill_jquery = 88;
  
		$({ val : 0 }).animate({ val : skill_jquery}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(6) span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p:nth-of-type(6) span").text(num);
			}
		});
	}
	function skill_zero() {
		var skill_zero = 0;
  
		$({ val : 0 }).animate({ val : skill_zero}, {
			duration: 1800,
			step : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p span").text(num);
		},
			complete : function() {
			var num = Math.floor(this.val);
			$(".skill_percent p span").text(num);
			}
		});
		$(".skill_bar span").animate({width:0});
	}	

	function skill_bar() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 479) {
			$(".skill_bar span:nth-of-type(1)").animate({width:180}, 1200);
			$(".skill_bar span:nth-of-type(2)").delay(100).animate({width:200}, 1200);
			$(".skill_bar span:nth-of-type(3)").delay(200).animate({width:205}, 1200);
			$(".skill_bar span:nth-of-type(4)").delay(300).animate({width:210}, 1200);
			$(".skill_bar span:nth-of-type(5)").delay(400).animate({width:170}, 1200);
			$(".skill_bar span:nth-of-type(6)").delay(500).animate({width:195}, 1200);
		} else if (windowWidth >= 480 && windowWidth <= 767){
			$(".skill_bar span:nth-of-type(1)").animate({width:220}, 1200);
			$(".skill_bar span:nth-of-type(2)").delay(100).animate({width:260}, 1200);
			$(".skill_bar span:nth-of-type(3)").delay(200).animate({width:270}, 1200);
			$(".skill_bar span:nth-of-type(4)").delay(300).animate({width:280}, 1200);
			$(".skill_bar span:nth-of-type(5)").delay(400).animate({width:200}, 1200);
			$(".skill_bar span:nth-of-type(6)").delay(500).animate({width:250}, 1200);
		} else {
			$(".skill_bar span:nth-of-type(1)").animate({width:320}, 1200);
			$(".skill_bar span:nth-of-type(2)").delay(100).animate({width:360}, 1200);
			$(".skill_bar span:nth-of-type(3)").delay(200).animate({width:370}, 1200);
			$(".skill_bar span:nth-of-type(4)").delay(300).animate({width:380}, 1200);
			$(".skill_bar span:nth-of-type(5)").delay(400).animate({width:300}, 1200);
			$(".skill_bar span:nth-of-type(6)").delay(500).animate({width:350}, 1200);
		}
	}

	$(".skill").click(function() {
		skill_photoshop(); skill_illustrator(); skill_html(); skill_css(); skill_js(); skill_jquery(); skill_bar(); dock_hide();
		$(".swiper-container").fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#skill_container").fadeIn();
		$("#profile_container, #address_container, #contact_container").hide();
		$(".contents_header_category li:nth-of-type(2)").addClass("dark");
		$(".contents_header_category li:nth-of-type(2)").siblings().removeClass("dark");
	});
	
	// 하단 독 Address 클릭 시
	$(".address").click(function() {
		skill_zero(); dock_hide();
		$(".swiper-container").fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#address_container").fadeIn();
		$("#profile_container, #skill_container, #contact_container").hide();
		$(".contents_header_category li:nth-of-type(3)").addClass("dark");
		$(".contents_header_category li:nth-of-type(3)").siblings().removeClass("dark");
	});
	
	// 하단 독 Contact 클릭 시
	$(".contact").click(function() {
		skill_zero(); dock_hide();
		$(".swiper-container").fadeOut();
		$("#contents").stop(true).fadeIn();
		$("#contact_container").fadeIn();
		$("#profile_container, #skill_container, #address_container").hide();
		$(".contents_header_category li:nth-of-type(4)").addClass("dark");
		$(".contents_header_category li:nth-of-type(4)").siblings().removeClass("dark");
	});
	
	// 하단 독 Launchpad 부분
	$(".launchpad").click(function() {
		dock_hide();
		$(".swiper-container").fadeToggle();
	});
	
	 var swiper = new Swiper('.swiper-container', {
		 direction : 'horizontal',
		 loop : true,
		 observer: true,
		 
		pagination: {
        el: '.swiper-pagination',
		},
    });
	
	// 하단 독 Control 부분
	$(".control").click(function() {
		$("#header_logo_sub").hide();
		var control_bottom = parseInt($("#control_container").css("bottom"));
		$("#control_container").stop(true).animate({bottom:0});
		if (control_bottom == 0) {
			$("#control_container").stop(true).animate({bottom:-220});
		}
	});
	
	// 하단 독 CGV 부분
	$(".cgv").click(function() {
		dock_hide();
		$(".swiper-container").fadeOut();
		$("#redesign").stop(true).fadeIn();
		$("#cgv_container").show();
		$("#cgv_container").siblings().hide();
		$(".tab_one").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_two, .tab_three").css({"border-bottom-color":"#d2d2d2"});
	});
	
	// 하단 독 MINI 부분
	$(".mini").click(function() {
		dock_hide();
		$(".swiper-container").fadeOut();
		$("#redesign").stop(true).fadeIn();
		$("#mini_container").show();
		$("#mini_container").siblings().hide();
		$(".tab_two").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_one, .tab_three").css({"border-bottom-color":"#d2d2d2"});
	});
	
	// 하단 독 Kiehls 부분
	$(".kiehls").click(function() {
		dock_hide();
		$(".swiper-container").fadeOut();
		$("#redesign").stop(true).fadeIn();
		$("#kiehls_container").show();
		$("#kiehls_container").siblings().hide();
		$(".tab_three").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_one, .tab_two").css({"border-bottom-color":"#d2d2d2"});
	});
	
	/* 하단 독 Control(라이트 모드) 클릭 시 */
	$(".light_mode").on('click', function() {
		$(".day_ver").fadeIn(1000);
		$(".night_ver").fadeOut(1000);
		
		// header 부분
		$("#header").css({background:"rgba(255,255,255,0.5)", boxShadow:"1px 0px 4px 0px #646464"});
		$("#header_menubar li").css({color:"#000"});
		$("#header_logo").on({
			mouseover : function() {$(this).children("img").eq(1).stop(true).fadeIn(300);},
			mouseout : function() {$(this).children("img").eq(1).stop(true).fadeOut(300);}
		});
		$("#header_menubar li").on({
			mouseover : function() {$(this).css({color:"#fff"});},
			mouseout : function() {$(this).css({color:"#000"});}
		});
		$(".header_sub_contents").css({background:"rgba(230,230,230,0.5)"});
		$(".header_sub_contents li").css({color:"#000", fontWeight:"bold"});
		$(".sub_line").css({background:"#bebebe"});
		$(".header_sub_contents li").on({
			mouseover : function() {$(this).css({color:"#fff"});},
			mouseout : function() {$(this).css({color:"#000"});}
		});
		$("#header_taskbar .now_time").css({color:"#000", fontWeight:"bold"});
		
		// contents_header 부분
		$("#contents_header, #about_portfolio_header").css({background:"#c8c8c8", boxShadow:"1px 1px 4px 0px #646464"});
		$(".contents_header_controlbar span, .about_portfolio_header_controlbar span").css({border:"1px solid #8c8c8c"});
		$(".contents_header_title li, .about_portfolio_header_title li").css({color:"#000"});

		// contents_container 부분
		$("#contents_container, #about_portfolio_container").css({background:"#fff"});
		$("#about_portfolio_container p, #function_contents_three, #function ul>ul li").css({color:"#000", fontWeight:"bold"});
		$(".profile_part li, .experience_part li, .character_part li, #profile_container_contents span, #profile_container_contents h1").css({color:"#000"});
		$("#profile_container_rotate, #skill_container_rotate, #address_container_rotate").css({background:"#fff", boxShadow:"1px 1px 30px 10px #646464 inset"});
		$("#profile_container_contents>div").css({border:"10px solid #282828"});
		$("#skill_container_contents p, #skill_container_contents span").css({color:"#000"});
		$(".skill_name p").css({fontWeight:"bold"});
		$("#address_container_contents p, #address_container_contents span").css({color:"#000", fontWeight:"bold"});
		$("#address_container_contents h2").css({color:"#000"});
		$("#contact_container_contents li, #contact_container_contents span").css({color:"#000"});
		$("#contact_container_contents").css({background:"rgba(230,230,230,0.5)"});
			
		// dock li p 부분
		$(".basic_app li p, .portfolio_page li p").css({background:"rgba(230,230,230,0.9)", color:"#000"});
		$(".basic_app li p, .portfolio_page li p").toggleClass("changed");
		
		// control 부분
		$("#control_container").css({background:"rgba(230,230,230,0.9)"});
		$("#control_container").toggleClass("changed");
		$("#control_container p, #control_container h4").css({color:"#000"});
	});	
	
	/* 하단 독 Control(다크 모드) 클릭 시 */
	$(".dark_mode").on('click', function() {
		$(".night_ver").fadeIn(1000);
		$(".day_ver").fadeOut(1000);
		
		// header 부분
		$("#header").css({background:"rgba(40,40,40,0.5)", boxShadow:"1px 0px 6px 0px #141414"});
		$("#header_logo").unbind('mouseover, mouseout');
		$("#header_menubar li").unbind('mouseover, mouseout');
		$("#header_menubar li").css({color:"#fff"});
		$(".header_sub_contents").css({background:"rgba(40,40,40,0.5)"});
		$(".header_sub_contents li").css({color:"#fff", fontWeight:"normal"});
		$(".sub_line").css({background:"#505050"});
		$(".header_sub_contents li").unbind('mouseover, mouseout')
		$("#header_taskbar .now_time").css({color:"#fff", fontWeight:"normal"});
		
		// contents_header 부분
		$("#contents_header, #about_portfolio_header").css({background:"#323232"});
		$(".contents_header_controlbar span, .about_portfolio_header_controlbar span").css({border:"1px solid #3c3c3c"});
		$(".contents_header_title li, .about_portfolio_header_title li").css({color:"#fff"});
		
		// contents_container 부분
		$("#contents_container, #about_portfolio_container").css({background:"#2d2d2d"});
		$("#about_portfolio_container p, #function_contents_three, #function ul>ul li").css({color:"#fff", fontWeight:"normal"});
		$(".profile_part li, .experience_part li, .character_part li, #profile_container_contents span, #profile_container_contents h1").css({color:"#fff"});
		$("#profile_container_rotate, #skill_container_rotate, #address_container_rotate").css({background:"#2d2d2d", boxShadow:"1px 1px 30px 10px #000 inset"});
		$("#profile_container_contents>div").css({border:"10px solid #fff"});
		$("#skill_container_contents p, #skill_container_contents span").css({color:"#fff"});
		$(".skill_name p").css({fontWeight:"normal"});
		$("#address_container_contents p, #address_container_contents span").css({color:"#fff", fontWeight:"normal"});
		$("#address_container_contents h2").css({color:"#fff"});
		$("#contact_container_contents li, #contact_container_contents span").css({color:"#fff"});
		$("#contact_container_contents").css({background:"rgba(40,40,40,0.5)"});
			
		// dock li p 부분
		$(".basic_app li p, .portfolio_page li p").css({background:"rgba(40,40,40,0.9)", color:"#fff"});
		$(".basic_app li p, .portfolio_page li p").toggleClass("changed");
		
		// control 부분
		$("#control_container").css({background:"rgba(40,40,40,0.9)"});
		$("#control_container").toggleClass("changed");
		$("#control_container p, #control_container h4").css({color:"#fff"});
	});
	
	/* 창 화면 (세부) */
	// 컨트롤 바 마우스 오버 시
	$(".contents_header_controlbar, .about_portfolio_header_controlbar, .chrome_header_controlbar").on({
		mouseover : function() {$(".contents_header_controlbar i, .about_portfolio_header_controlbar i, .chrome_header_controlbar i").show();}, 
		mouseout : function() {$(".contents_header_controlbar i, .about_portfolio_header_controlbar i, .chrome_header_controlbar i").hide();}
	});
	
	// 컨트롤 바 클릭 시
	$(".contents_header_controlbar i:nth-of-type(1)").click(function() {
		$("#contents").stop(true).fadeOut();
	});
	$(".about_portfolio_header_controlbar i:nth-of-type(1)").click(function() {
		$("#about_portfolio").stop(true).fadeOut();
		$("#function_contents_one>ul").stop(true).animate({height:0}).hide("slow");
		$("#function_contents_two>ul").stop(true).animate({height:0}).hide("slow");
		$("#function_contents_three>ul").stop(true).animate({height:0}).hide("slow");
		$("#control_container").stop(true).animate({bottom:-220});
	});
	$(".chrome_header_controlbar i:nth-of-type(1)").click(function() {
		$("#redesign").stop(true).fadeOut();
	});
	
	// 카테고리 클릭 시
	$(".contents_header_category li:nth-of-type(1)").click(function() {
		skill_zero()
		$("#profile_container").fadeIn();
		$("#skill_container, #address_container, #contact_container").fadeOut();
		$(this).addClass("dark");
		$(this).siblings().removeClass("dark");
	});
	$(".contents_header_category li:nth-of-type(2)").click(function() {
		skill_photoshop(); skill_illustrator(); skill_html(); skill_css(); skill_js(); skill_jquery(); skill_bar();
		$("#skill_container").fadeIn();
		$("#profile_container, #address_container, #contact_container").fadeOut();
		$(this).addClass("dark");
		$(this).siblings().removeClass("dark");
	});
	$(".contents_header_category li:nth-of-type(3)").click(function() {
		skill_zero()
		$("#address_container").fadeIn();
		$("#profile_container, #skill_container, #contact_container").fadeOut();
		$(this).addClass("dark");
		$(this).siblings().removeClass("dark");
	});
	$(".contents_header_category li:nth-of-type(4)").click(function() {
		skill_zero()
		$("#contact_container").fadeIn();
		$("#profile_container, #skill_container, #address_container").fadeOut();
		$(this).addClass("dark");
		$(this).siblings().removeClass("dark");
	});
	
	/* 크롬 화면 (세부) */
	// 카테고리 클릭 시
	$(".cgv_tab").click(function() {
		$("#cgv_container").show();
		$("#cgv_container").siblings().hide();
		$(".tab_one").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_two, .tab_three").css({"border-bottom-color":"#d2d2d2"});
	});
	$(".mini_tab").click(function() {
		$("#mini_container").show();
		$("#mini_container").siblings().hide();
		$(".tab_two").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_one, .tab_three").css({"border-bottom-color":"#d2d2d2"});
	});
	$(".kiehls_tab").click(function() {
		$("#kiehls_container").show();
		$("#kiehls_container").siblings().hide();
		$(".tab_three").css({"border-bottom-color":"#f0f0f0"});
		$(".tab_one, .tab_two").css({"border-bottom-color":"#d2d2d2"});
	});

	// 카테고리 이미지 마우스 오버 시
	$("#cgv_container_contents>span>img").mouseover(function() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 1280) {
			$(this).stop(true).animate({top:0});
		} else if (windowWidth >= 1281) {
			$(this).stop(true).animate({top:-720}, 5000, 'easeInOutQuad');
		}
	});
	$("#cgv_container_contents>span>img").mouseout(function() {
		$(this).stop(true).animate({top:0}, 1000, 'easeInOutQuad');
	});
	
	$("#mini_container_contents>span>img").mouseover(function() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 1280) {
			$(this).stop(true).animate({top:0});
		} else if (windowWidth >= 1281) {
			$(this).stop(true).animate({top:-2400}, 5000, 'easeInOutQuad');
		}
	});
	$("#mini_container_contents>span>img").mouseout(function() {
		$(this).stop(true).animate({top:0}, 1000, 'easeInOutQuad');
	});
	
	$("#kiehls_container_contents>span>img").mouseover(function() {
		var windowWidth = $(window).width();
		if(windowWidth >= 320 && windowWidth <= 1280) {
			$(this).stop(true).animate({top:0});
		} else if (windowWidth >= 1281) {
			$(this).stop(true).animate({top:-830}, 5000, 'easeInOutQuad');
		}
	});
	$("#kiehls_container_contents>span>img").mouseout(function() {
		$(this).stop(true).animate({top:0}, 1000, 'easeInOutQuad');
	});
});