$(document).ready(function() {
	$(".submenu-btn").click(function() {
		$(".submenu").toggleClass("show");
	});
});

$(document).on("click", function(event) {
	if (!$(event.target).closest(".submenu-btn").length) {
		$(".submenu").removeClass("show");
	}
});

$(document).ready(function() {
	$(".hdr-btn").click(function() {
		$(".hdrmenu").toggleClass("show");
		$(".hdr-btn").css("display", "none");
		$(".hdr-cls").css("display", "block");
	});
});

$(document).on("click", function(event) {
	if (!$(event.target).closest(".hdr-btn").length) {
		$(".hdrmenu").removeClass("show");
		$(".hdr-btn").css("display", "block");
		$(".hdr-cls").css("display", "none");
	}
});

function myFunction() {  
	let theme = document.querySelector("#theme");
	let moon1 = document.querySelector("#moon1");
	let soon1 = document.querySelector("#soon1");
	let moon2 = document.querySelector("#moon2");
	let soon2 = document.querySelector("#soon2");
	let menu = document.querySelector(".submenu > svg > path");
	if (theme.getAttribute("href") !== "./css/night.css") {
		theme.href = "./css/night.css";
		moon1.style.display = "none";
		soon1.style.display = "block";
		moon2.style.display = "none";
		soon2.style.display = "block";
		$(".menu-menu").css("stroke", "white");
		$(".hdr-btn-menu").css("stroke", "white");
		$(".hdr-cls-menu").css("stroke", "white");
		$(".moon-moon").css("fill", "white");
		$(".soon-soon").css("fill", "white");
	} else {
		theme.href = " "
		moon1.style.display = "block";
		soon1.style.display = "none";
		moon2.style.display = "block";
		soon2.style.display = "none";
		$(".menu-menu").css("stroke", "black");
		$(".hdr-btn-menu").css("stroke", "black");
		$(".hdr-cls-menu").css("stroke", "black");
		$(".moon-moon").css("fill", "#4f4f4f");
		$(".soon-soon").css("fill", "#4f4f4f");
	}; 
  };

let btn = $('#yakor');
$(window).scroll(function() {	
	if ($(window).scrollTop() > 300) {	  
		btn.addClass('show_yakor');	
	} else {	  
		btn.removeClass('show_yakor');	
	}
});

btn.on('click', function(e) {	
	e.preventDefault();	
	$('html, body').animate({scrollTop:0}, '300');
});

