(function($) {
  href = window.location.href;

  pathnames = ["/","/#about","/#resource-links","/#testimonials","/#interviews"]

  currentSlide = 0;

  if (href.includes(pathnames[1])) {currentSlide = 1}
  else if (href.includes(pathnames[2])) {currentSlide = 2}
	else if (href.includes(pathnames[3])) {currentSlide = 3}
	else if (href.includes(pathnames[4])) {currentSlide = 4};

  var changeTopic = function(topicIndex) {
    if (topicIndex == 0){
      $(".menu-nav-li").removeClass("active");
      $(".menu-container").removeClass("menu-header");

    } else {
      $('[data-nav-link-index="' + topicIndex + '"]').siblings("li").removeClass("active");
      $('[data-nav-link-index="' + topicIndex + '"]').addClass("active");
      $(".menu-container").addClass("menu-header");
    };

    $('[data-section-index="' + topicIndex + '"]').siblings("div").removeClass("active-section");
    $('[data-section-index="' + topicIndex + '"]').addClass("active-section");

    window.history.pushState('obj', 'newtitle', this.href);
  }

  $(document).ready(function(){
    changeTopic(currentSlide);
  });

  $(".menu-link").click(function() {
  	currentSlide = $(this).parent().data("nav-link-index");
    changeTopic(currentSlide);
  });

  $(window).bind('popstate', function(){
    window.location.href = window.location.href;
  });
})(jQuery);
