(function($) {
  var selector = ".section";

  var $slides = $(selector);
  var href = window.location.href;

  var pathnames = ["/","/#resource-links-section","/#testimonials-section","/#mentorship-programme-section","/#interviews-section","/#about-section"]

  console.log (href);

  var currentSlide = 0;

  if (href.includes(pathnames[1])) {currentSlide = 1}
  else if (href.includes(pathnames[2])) {currentSlide = 2}
	else if (href.includes(pathnames[3])) {currentSlide = 3}
	else if (href.includes(pathnames[4])) {currentSlide = 4}
	else if (href.includes(pathnames[5])) {currentSlide = 5};

  var isAnimating = false;

  var stopAnimation = function() {
    setTimeout(function() {
      isAnimating = false;
    }, 300);
  };

  var bottomIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.bottom <= $(window).height();
  };

  var topIsReached = function($elem) {
    var rect = $elem[0].getBoundingClientRect();
    return rect.top >= 0;
  };

  var changeTopic = function(topicIndex) {
    if (topicIndex == 0){
      $(".menu-link").removeClass("active");
    }
    else {
      $('[data-nav-link-index="' + topicIndex + '"]').siblings("li").removeClass("active");
      $('[data-nav-link-index="' + topicIndex + '"]').addClass("active");
    }
    window.history.pushState('obj', 'newtitle', window.location.protocol + pathnames[topicIndex]);
  }

  $(document).ready(changeTopic(currentSlide));

  $(".menu-link").click(function() {
  	currentSlide = $(this).data("nav-link-index");
    changeTopic(currentSlide);
  });

  document.addEventListener("wheel", function(event) {
      var $currentSlide = $($slides[currentSlide]);

      if (isAnimating) {
        event.preventDefault();
        return;
      }

      var direction = -event.deltaY;

      if (direction < 0) {
        // next
        if (currentSlide + 1 >= $slides.length) return;
        if (!bottomIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide++;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        changeTopic(currentSlide);
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      } else {
        // back
        if (currentSlide - 1 < 0) return;
        if (!topIsReached($currentSlide)) return;
        event.preventDefault();
        currentSlide--;
        var $slide = $($slides[currentSlide]);
        var offsetTop = $slide.offset().top;
        isAnimating = true;
        changeTopic(currentSlide);
        $("html, body").animate(
          {
            scrollTop: offsetTop
          },
          1000,
          stopAnimation
        );
      }
    },
    { passive: false }
  );
})(jQuery);
