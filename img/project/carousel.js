$(document).ready(function () {
    console.log("ready!");
    $(".reviewSlide").slick({
        nextArrow: '<button id="nextReview" type="button" class="btn btn-juliet"> >  <i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button id="prevReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-left" aria-hidden="true"></i> < </button>',
        appendArrows: $("#arrows"),
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
    });
    $(".reviewSlide").on("afterChange", function() {
        let dataId = parseInt($(".slick-current").attr("data-slick-index"));    
        console.log(dataId);
        $(".current").html("0"+(dataId+=1))
    });
    $("#workingwithcarouselupper").slick({
        adaptiveHeight: true,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding:"80px",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 5
              }
            },
         ]
    }
    );
    $("#workingwithcarousellower").slick({
        adaptiveHeight: true,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding:"120px",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 6
              }
            },
         ]
    }); 
});