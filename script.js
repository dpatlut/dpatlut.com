console.log('linked');

$(document).ready(function(){

 // setTimeout(function(){
    
 //    $("#name").removeClass("larger");

 //    $("#name span").each(function(){
 //      $(this).css("-webkit-transition-delay",$(this).data("delay")+"ms").css("transition-delay",$(this).data("delay")+"ms");
 //      $(this).addClass("visible");
 //    });
    
	// }, 4000);    



function nameFunction(){
	$("#name").removeClass("larger");

    $("#name span").each(function(){
      $(this).css("-webkit-transition-delay",$(this).data("delay")+"ms").css("transition-delay",$(this).data("delay")+"ms");
      $(this).addClass("visible");
    });
}

setTimeout(nameFunction, 5000);


//Credit to : http://codepen.io/gregkohn/



$('.about').on('click' , function(){
	$('#intro').css('display', 'none');
	$('.about-text').css('display' , 'block');
	$('.about-text').addClass('animated fadeIn');
	$('.work-text').css('display','none');
	$('.carousel').css('display' , 'none');
	$('.webapplicationsshower').css('display', 'none');
});


$('.my-work').on('click' , function(){
	$('.work-text').css('display','block');
	$('.web-apps').css('display' , 'block');
	$('.websites').css('display' , 'block');
	$('.about-text').css('display' , 'none');
	$('.webapplicationsshower').css('display', 'none');
	$('#intro').css('display', 'none');
	$('.apps').css('display' , 'none');
    $('.carousel').css('display' , 'none');
	$(".work-text").removeClass('animated fadeOut');
	$('.work-text').css('display','block');
	$('.divider').addClass("animated fadeIn");
	$('.apps').css('display' , 'none');
	$('.website-work').css('display' , 'none');
	$('.web-apps').addClass("animated bounceInDown");
	$('.websites').addClass("animated bounceInDown");
    $('.react').addClass('active');
    $('.react').removeClass('react');

})

$('.web-apps').on('click',function(){
	$('.about-text').css('display' , 'none');
	$('#intro').css('display', 'none');
	$('.webapplicationsshower').css('display', 'none');
	$('.work-text').addClass('animated fadeOut')
	$('.work-text').css('display','none');
	$('.webapplicationsshower').css('display' , 'block')
	$('.webapplicationsshower').delay(1000).addClass("animated bounceInDown");
});

$('.websites').on('click',function(){
	$('.carousel').css('display' , 'block');
	$('.about-text').css('display' , 'none');
	$('#intro').css('display', 'none');
	$('.work-text').addClass('animated fadeOut')
	$('.work-text').css('display','none');
	$('.carousel').delay(1500).addClass("animated bounceInDown");
});

$('.mil').delay(10000).animate({right: '110%', top: '+=1000'}, 40000 , 'easeInCirc');


$('.squadron').delay(20000).animate({right: '110%', top: '+=900'}, 40000 , 'easeInCirc');




  // Floating Contact Widget Trigger
  $(".amg-floating-icon").on("mouseenter", function(){
    $(this).closest(".amg-floating-contact-wrap").addClass("hover")
  });
  $(".amg-floating-contact-wrap").on("mouseleave", function(){
    $(this).removeClass("hover");
  });
  
 
 /*Credit to:http://codepen.io/aidangarza */


$('.blackjack').on('click' , function(){
	$('.ui.basic.modal.bj').modal('show');
});

$('.raly').on('click' , function(){
	$('.ui.basic.modal.raly-modal').modal('show');
});

$('.wingit').on('click' , function(){
	$('.ui.basic.modal.wingit-modal').modal('show');
});

$('.lostandfound').on('click' , function(){
	$('.ui.basic.modal.lnf-modal').modal('show');
});
 



});