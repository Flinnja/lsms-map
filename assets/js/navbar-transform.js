window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 546 || document.documentElement.scrollTop > 546) {
    $(".menu-container").addClass("menu-scrolled")
  }
  else {
    $(".menu-container").removeClass("menu-scrolled")
  };
};
