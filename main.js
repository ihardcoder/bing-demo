(function($) {
  // 背景图片尺寸
  var imgWidh = 1920,
    imgHeight = 1080;
  // 图片宽高比
  var imgRatio = imgWidh / imgHeight;

  var $bgDiv = $("#bgDiv");

  var offsetLeft = 0,
    offsetTop = 0;

  var resize = function() {
    // 浏览器viewport尺寸
    var winWidth = window.innerWidth,
      winHeight = window.innerHeight;
    // 浏览器viewport宽高比
    var winRatio = winWidth / winHeight;
    if (winWidth > imgWidh) {
      $bgDiv.css({
        width: imgWidh,
        height: imgHeight
      });
    } else {
      if (winRatio > imgRatio) {
        // 屏幕宽高比大于图片宽高比，屏幕高度不足，图片向上偏移
        offsetLeft = 0;
        offsetTop = (Math.ceil(winWidth / imgRatio) - winHeight) / 2;
        $bgDiv.css({
          width: winWidth,
          height: winWidth / imgRatio,
          top: -offsetTop,
          left: offsetLeft
        });
      } else if (winRatio < imgRatio) {
        // 屏幕宽高比大于图片宽高比，屏幕宽度不足，图片向左偏移
        offsetLeft = (Math.ceil(winHeight * imgRatio) - winWidth) / 2;
        offsetTop = 0;
        $bgDiv.css({
          width: winHeight * imgRatio,
          height: winHeight,
          top: offsetTop,
          left: -offsetLeft
        });
      }
    }
  };
  resize();
  $(window).on("resize", resize);
})(jQuery);