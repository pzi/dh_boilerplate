// @codekit-prepend "../bower_components/jquery/dist/jquery.js"

// Remove NavBar from iOS
if( !window.location.hash && window.addEventListener ){
  window.addEventListener( "load",function() {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 0);
  });
  window.addEventListener( "orientationchange",function() {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 0);
  });
}

$(document).ready(function(){



});
