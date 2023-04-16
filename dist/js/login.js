const tabBtns = document.querySelectorAll(".tabs__btn");
const tabContents = document.querySelectorAll(".tabs__content");

for (const [index, value] of tabBtns.entries()) {
  value.addEventListener("click", () => {
    for (const tab of tabContents) {
      tab.classList.remove("active");
    }
    for (const btn of tabBtns) {
      btn.classList.remove("active");
    }
    tabContents[index].classList.add("active");
    tabBtns[index].classList.add("active");
  });
}

$(document).ready(() => {
  document.getElementById("pace-progress").style.width = `100%`;

  setTimeout(() => {
    document.getElementById("logo-preloader").style.opacity = 0;
  }, 2000);
  setTimeout(() => {
    document.getElementById("logo-preloader").style.opacity = 0;
    document.getElementById("pace-progress").style.backgroundColor = "#F7C427";
    document.getElementById("pace").classList.add("pace-inactive");
    document.getElementById("preloader").classList.add("isdone");
  }, 3000);
  $("#tab-1-content").slideDown();
  $("#tab-2-content").slideUp();
  $("#tab-1").css("background-color", "#ffffff");
  $("#tab-2").css("background-color", "#003C6B");
  $("#tab-1").css("border-top-color", "#dcad11");
  $("#tab-2").css("border-top-color", "transparent");
  $("#tab-1").css("color", "#003C6B");
  $("#tab-2").css("color", "white");
  $("#tab-1").click(() => {
    $("#tab-1").css("background-color", "#ffffff");
    $("#tab-2").css("background-color", "#003C6B");
    $("#tab-1").css("border-top-color", "#dcad11");
    $("#tab-2").css("border-top-color", "transparent");
    $("#tab-1").css("color", "#003C6B");
    $("#tab-2").css("color", "white");
    $("#tab-1-content").slideDown();
    $("#tab-2-content").slideUp();
  });
  $("#tab-2").click(() => {
    $("#tab-2").css("background-color", "#ffffff");
    $("#tab-1").css("background-color", "#003C6B");
    $("#tab-2").css("border-top-color", "#dcad11");
    $("#tab-1").css("border-top-color", "transparent");
    $("#tab-2").css("color", "#003C6B");
    $("#tab-1").css("color", "white");
    $("#tab-2-content").slideDown();
    $("#tab-1-content").slideUp();
  });
  setTimeout(() => {
    $("#breakingNews").slideUp();
  }, 8000);
  $(".TopSlider").slick({
    dots: true,
    // speed: 500,
    // autoplay: true,
    arrows: true,
    prevArrow:
      '<i class="fa fa-chevron-left P-30 Pointer ArrowSlider" style="z-index:8;left:50px;top:50%;transform: translateY(-50%);position:absolute;color:#ffffff;"></i>',
    nextArrow:
      '<i class="fa fa-chevron-right P-30 Pointer ArrowSlider" style="z-index:8;right:50px;top:50%;transform: translateY(-50%);position:absolute;color:#ffffff;"></i>',
  });
  $(".NavTopSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".TopSlider",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
  $("#GallerySlider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slilderCari").slick({
    arrows: true,
    prevArrow:
      '<i class="fa fa-chevron-left P-30 Pointer ArrowSlider" style="z-index:8;left:20px;top:50%;transform: translateY(-50%);position:absolute;color:#ffffff;"></i>',
    nextArrow:
      '<i class="fa fa-chevron-right P-30 Pointer ArrowSlider" style="z-index:8;right:20px;top:50%;transform: translateY(-50%);position:absolute;color:#ffffff;"></i>',
  });
  $("#VideoSlider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $("#maxWidthIcon").click(() => {
    $("#maxWidth").toggleClass("maxWidth");
    setTimeout(() => {
      $(".TopSlider").slick("refresh");
    }, 100);
  });
});
