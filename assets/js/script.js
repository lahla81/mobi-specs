$(document).ready(function(){var a=window.pageYOffset;window.onscroll=function(){if(50<=$(this).scrollTop()){var n=window.pageYOffset;document.getElementById("navbar").style.top=n<a?"0":"-15vw",a=n}},$(".navbar-nav li a").click(function(n){$(".navbar-collapse").collapse("hide")}),$(function(){$(".c-contact__form").validate()})});