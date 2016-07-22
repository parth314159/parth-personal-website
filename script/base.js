$(document).ready(
  function()
  {
    $("a").on('click', function(event)  //track event
    {
      if (this.hash !== "") //check if location is not null
      {
        event.preventDefault(); //prevent default behaviour
        var hash = this.hash; //store location in variable
        $('html, body').animate( //animate to that location
        {
          scrollTop: $(hash).offset().top
        }, 500, function(){ // will take 800 miliseconds to go to the location
          window.location.hash = hash;
        });
      } 
    });
});

$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});

 $(function(){
        $(".element").typed({
            strings: ["Graduate Student", "Application Developer"]
        });
    });


/*var onResize = function() {
  $("body").css("padding-top", $(".navbar-fixed-top").height()); //dynamic padding according to navbar
};

$(window).resize(onResize); // call function on window resize

$(function() {
  onResize(); // call when page is ready after reload
});*/