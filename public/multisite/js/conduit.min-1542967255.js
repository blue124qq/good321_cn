$(function(){var b=$("iframe[src^='//www.youtube.com']");var a=$(".sub-article-outer iframe[src^='//www.youtube.com']");$fluidEl=$(".video");$subfluidEl=$(".sub-article-outer .video");b.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")});$(window).resize(function(){if($(window).width()>=960){$("#top-nav").show()}if($(window).width()<959){$("#top-nav").hide()}var c=$fluidEl.width();b.each(function(){var d=$(this);d.width(c).height(c*d.data("aspectRatio"))});var c=$subfluidEl.width();a.each(function(){var d=$(this);d.width(c).height(c*d.data("aspectRatio"))})}).resize()});$(document).ready(function(){$(".nav-button").click(function(){$("#top-nav").slideToggle()});$("#change_weather").keypress(function(a){if(a.which==13){window.location="?weather_location="+$("#change_weather").val()+"#weather";return false}});$(".site-search").keypress(function(a){if(a.which==13){$("#search-results").slideDown();return false}});$(".site-search").keyup(function(){var b=$(this).val();console.log(b.length+""+b);if(b.length>2){var a=b;$.ajax({type:"POST",url:"/ajax/site_search",data:{search:a},async:true,success:function(c){if(c!=""){$("#search-results").html(c);$("#search-results").slideDown()}}})}else{$("#search-results").slideUp()}})});