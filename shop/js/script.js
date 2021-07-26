//headerスクロール時に半透明化
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('header').css('opacity', 0.8);
    } else {
      $('header').css('opacity', 1);
    }
  });
});
window.addEventListener('DOMContentLoaded', function(){
  // Do something
});
if ($(this).scrollTop() > 0) {
  // Topでないとき
} else {
  // Topのとき
}//ここまで



