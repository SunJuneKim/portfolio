
var nav_mobile_on = false;

var header = document.getElementsByClassName("header");
var header_title = document.getElementsByClassName("header_title");
var tree = document.getElementsByClassName("tree");
var apple = document.getElementsByClassName("apple");
var nav_controll =document.getElementsByClassName("nav-control");
var nav = document.getElementsByClassName("nav");
var nav_menu = document.getElementsByClassName("nav_menu");
var nav_container = document.getElementsByClassName("nav_container");
var section = document.getElementsByClassName("section");
var myinfo = document.getElementsByClassName("article_myinfo");
var myinfo_introduce = document.getElementsByClassName("myinfo_introduce");
var myinfo_introduce2 = document.getElementsByClassName("myinfo_introduce2");
var myinfo_introduce2_img = document.getElementsByClassName(
  "myinfo_introduce2_img"
);

var project_container = document.getElementsByClassName("project_container");
var project_img1 = document.getElementsByClassName("project_img1");
var project_intro1 = document.getElementsByClassName("project_intro1");
var project_img2 = document.getElementsByClassName("project_img2");
var project_intro2 = document.getElementsByClassName("project_intro2");
var project_img3 = document.getElementsByClassName("project_img3");
var project_intro3 = document.getElementsByClassName("project_intro3");

function nav_scroll(e) {
  // Nav_menu 스크롤 이동
  var scroll_target = document.getElementsByClassName(e);
  var scroll_tartget_offset = scroll_target[0].offsetTop;
  window.scroll({ top: scroll_tartget_offset, left: 0, behavior: "smooth" });

  // for mobile
  if (window.innerWidth < 450) {
    nav_container[0].style.height = "0";
    for (i = 0; i < nav_menu.length; i++) {
      nav_menu[i].style.opacity = "0";
    }
    nav_mobile_on = false;
  }
}
function nav_mobile() {
  // for mobile
  if (nav_mobile_on == false && window.innerWidth < 450) {
    for (i = 0; i < nav_menu.length; i++) {
      nav_menu[i].style.opacity = "1";
    }
    nav_container[0].style.height = "280px";
    nav_mobile_on = true;
  } else {
    for (i = 0; i < nav_menu.length; i++) {
      nav_menu[i].style.opacity = "0";
    }
    nav_container[0].style.height = "0";
    nav_mobile_on = false;
  }
}


function github_on(e) {
  window.open("https://github.com/" + e);
}
function page_on(e) {
  window.open(e);
}
window.onload = function() {
  var anicheck = 0;
  var ie_check = navigator.userAgent.match(/Trident\/(\d)/);

  window.scrollTo(0, 1); // adressbar 숨기기
  scroll_animation(); // 새로고침시 애니메이션 1회 호출
  window.addEventListener("scroll", scroll_animation);

  function scroll_animation() {
    // 스크롤 이벤트리스너
    var scrolltop = document.documentElement.scrollTop;
    var client_height = document.documentElement.clientHeight;

    // 헤더 타이틀 opacity
    if (scrolltop < section[0].offsetTop / 2) {
      header_title[0].style.opacity = 1 - (scrolltop * 0.004).toFixed(1);
      nav_controll[0].style.opacity = 1-(scrolltop).toFixed(1);
      tree[0].style.opacity = (scrolltop * 0.004).toFixed(1);
      apple[0].style.opacity=(scrolltop * 0.004).toFixed(1);
    }

    // 스크롤에 따른 Nav bar화면 고정
    if (scrolltop>= section[0].offsetTop) {
      nav[0].style.position = "fixed";  
   
    }
    if (scrolltop <= section[0].offsetTop) {
      nav[0].style.position = "absolute";
    }

    //스크롤 위치에 따른 div show 및 애니메이션 효과
    if (window.innerWidth > 450) {
     
      if (
        anicheck == 0&&
        scrolltop + client_height / 2 >=
        section[2].offsetTop + project_container[0].offsetTop
      ) {
        project_img1[0].style.animation = "slide-right 0.7s ease-out both";
        project_intro1[0].style.animation = "slide-left 0.7s ease-out both";
        project_img1[0].style.opacity = "1";
        project_intro1[0].style.opacity = "1";
        anicheck++;
      }
      if (
        anicheck == 1 &&
        scrolltop + client_height / 2 >=
          section[2].offsetTop + project_container[1].offsetTop
      ) {
        project_img2[0].style.animation = "slide-left 0.7s ease-out both";
        project_intro2[0].style.animation = "slide-right 0.7s ease-out both";
        project_img2[0].style.opacity = "1";
        project_intro2[0].style.opacity = "1";
        anicheck++;
      }
      if (
        anicheck == 2 &&
        scrolltop + client_height / 2 >=
          section[2].offsetTop + project_container[2].offsetTop
      ) {
        project_img3[0].style.animation = "slide-right 0.7s ease-out both";
        project_img3[0].style.opacity = "1";
        project_intro3[0].style.animation = "slide-left 0.7s ease-out both";
        project_intro3[0].style.opacity = "1";
        anicheck++;
      }
      
    }
  }
};

