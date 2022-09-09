// Method to auto open drop down item
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});  
// Slick slider, Our expertise section
$(document).ready(function(){
$(".expertise-logos").slick({
    dots: false,
    infinite: true,
    autoplaySpeed:1500,
    autoplay:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// Slick slider, Our expertise section
$(document).ready(function(){
$(".expertise-logos").slick({
    dots: false,
    infinite: true,
    autoplaySpeed:1500,
    autoplay:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
// Solid to transparent navbar on scroll
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > $(window).height()){
          $(".navbar").css({"background-color":"rgba(0, 0, 0, 0.549)"});   
      }
      else{
          $(".navbar").css({"background-color":"#0d0e0e"});
      }

  });
});



