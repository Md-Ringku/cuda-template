$(window).scroll(function(){
 $("nav").toggleClass("scrolled",$(this).scrollTop()>100)
});



$(function(){

  $('.circlechart').circlechart();

});







 document.querySelector(".btn1").addEventListener("click",function(){
	document.querySelector(".all-img").classList.add("active");
	document.querySelector(".web-img").classList.remove("active");
		document.querySelector(".icons-img").classList.remove("active");
			document.querySelector(".apps-img").classList.remove("active");
			
	
 });
 document.querySelector(".btn2").addEventListener("click",function(){
	document.querySelector(".all-img").classList.remove("active");
	document.querySelector(".web-img").classList.add("active");
	document.querySelector(".icons-img").classList.remove("active");
	document.querySelector(".apps-img").classList.remove("active");
	
 });
 document.querySelector(".btn3").addEventListener("click",function(){
document.querySelector(".all-img").classList.remove("active");
	document.querySelector(".web-img").classList.remove("active");
	document.querySelector(".icons-img").classList.remove("active");
	document.querySelector(".apps-img").classList.add("active");
	
 });
 document.querySelector(".btn4").addEventListener("click",function(){
	 document.querySelector(".all-img").classList.remove("active");
	document.querySelector(".web-img").classList.remove("active");
	document.querySelector(".icons-img").classList.add("active");
	document.querySelector(".apps-img").classList.remove("active");
	
 });

  function shownav(){
	document.querySelector("#mynav").style.width="100%";  
  };
 function closenav(){
	document.querySelector("#mynav").style.width="0%";  
  };