// =================owl===========
// _____popup_____*/
$(document).on("click", ".popBtn", function () {
  var popUp = $(this).data("popup");
  $("body").addClass("flow");
  $(".popup[data-popup= " + popUp + "]").fadeIn();
});
$(document).on("click", ".crosBtn", function () {
  $(".popup").fadeOut();
  $("body").removeClass("flow");
});

//
/*____ FAQ's ____*/
$(document).on("click", ".faqBlk > h5", function () {
  $(".faqBlk")
    .not($(this).parent().toggleClass("active"))
    .removeClass("active");
  $(".faqBlk > .txt")
    .not($(this).parent().children(".txt").slideToggle())
    .slideUp();
});
/*========== Toggle ==========*/
$(document).on("click", ".toggle", function () {
  $(".toggle").toggleClass("active");
  $("body").toggleClass("flow");
  $("[nav]").toggleClass("active");
  $(".upperlay").toggleClass("active");
  // $("nav > ul > li > .sub").slideUp();
});

// money=============
$(".property-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  navText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: true,
  loop: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 20,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoHeight: true,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
    },
    991: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".story-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  navText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: true,
  loop: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 30,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoHeight: true,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
    },
    991: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// money=============
$(".testi-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  navText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: true,
  loop: true,
  center: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 20,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoHeight: true,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
    },
    991: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
// ===============fieldset============
$(document).on("click", ".nextBtn", function () {
  var curntField = $(this).parents("fieldset");
  var nextField = curntField.next("fieldset");
  curntField.hide();
  nextField.show();
});

$(document).on("click", ".backBtn", function () {
  var curntField = $(this).parents("fieldset");
  var prevField = curntField.prev("fieldset");
  curntField.hide();
  prevField.show();
});
// file upload
$(document).ready(function () {
  // upload file
  var imgFile;
  $(document).on("click", ".uploadImg", function () {
    $(this).parents("form").find(".uploadFile").trigger("click");
  });
});
// active
// $(document).on("click", ".lg_inner_form_quote .cmn_quote_bill", function (e) {
//   e.preventDefault();
//   let current = $(this);
//   let input = current.find("input");
//   $(".lg_inner_form_quote .cmn_quote_bill input").attr("checked", false);
//   $(".lg_inner_form_quote .cmn_quote_bill").removeClass("active");
//   input.attr("checked", true);
//   current.addClass("active");
// });
/*========== Dropdown ==========*/
$(document).on("click", ".dropBtn", function (e) {
  e.stopPropagation();
  var $this = $(this).parent().children(".dropCnt");
  $(".dropCnt").not($this).removeClass("active");
  var $parent = $(this).parent(".dropDown");
  $parent.children(".dropCnt").toggleClass("active");
});

$(document).on("click", function () {
  $(".dropCnt").removeClass("active");
});
