//------burger bar---------//
$( document ).ready(function() {

 
  $( ".menu-burger" ).hide();
  $('#nav-burger').click(function(){
  $(this).toggleClass('open');
  $( ".menu-burger" ).slideToggle( "slow")
  });
  });

  //---------scroll stycky nav with color change-------//

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 800) {
        $(".logo").css("background" , "rgb(62,25,106)");
      }
  
      else{
        $(".logo").css("background" , "white"); 
        $(".navigation").css("background" , "white");
      }
    })
  })
