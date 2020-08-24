(function($) {
  var selector = ".section";

  var $slides = $(selector);
  var href = window.location.href;

  console.log (href);

  var currentSlide = 0;

  if (href.includes("#resource-links-section")) {currentSlide = 1}
  else if (href.includes("#testimonials-section")) {currentSlide = 2}
	else if (href.includes("#mentorship-programme-section")) {currentSlide = 3}
	else if (href.includes("#interviews-section")) {currentSlide = 4}
	else if (href.includes("#about-section")) {currentSlide = 5};

	console.log (currentSlide);

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

  $(".menu-link").click(function() {
  	currentSlide = $(this).data("nav-link-index");
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
