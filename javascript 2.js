

  $( document ).ready(function() {
    $( "#yoga1" ).click(function() {
      $("#video").html('<source src="../images/tisvildevid.mp4" type="video/mp4"></source>' );
      video.load();
      $("body").css("background-color", "white");
      });
});





$( document ).ready(function() {
  $( "#yoga2" ).click(function() {
    $("#video").html('<source src="../images/tisvildevid.mp4" type="video/mp4"></source>' );
    video.load();
    $("body").css("background-color", "white");
    });
});





$( document ).ready(function() {
  $( "#yoga3" ).click(function() {
    $("#video").html('<source src="../images/aarhusyoga.mp4" type="video/mp4"></source>' );
    video.load();
    $("body").css("background-color", "rgba(128, 255, 0, 0.226)");
    });
});



$( document ).ready(function() {
  $( "#beloud" ).click(function() {
    $("#video").html('<source src="../images/Beloudvid.mp4" type="video/mp4"></source>' );
    video.load();
    $("body").css("background-color", "black");
    });
});




///////////--------------------------------------------------------fad in puligin at https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win
 

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

