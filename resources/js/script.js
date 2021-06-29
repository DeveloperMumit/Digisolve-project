$(document).ready(function(){
//Adding sticky navigation
   $(".about-section").waypoint(function(direction){
       if(direction == "down"){
            $("nav").addClass("sticky-nav");
       }
      else{
        $("nav").removeClass("sticky-nav");
      }
   });


//Animation on scroll

});


