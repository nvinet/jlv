// JavaScript for wave
(($) => {
  $(document).ready(() => {
    // Scroll down opacity
    const divs = $('.slider-inner');
    $(window).on('scroll', () => {
      const st = $(this).scrollTop();
      divs.css({opacity: (1 - st / 700)});
    });

    // Litebox
    $('.swipebox').swipebox();

    // Parallax effect
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive: true
    });

    // Counter
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // Hamburger Menu
    $('.hamburger-menu').on('click', () => {
      $('.hamburger-menu').toggleClass('menu-open');
      $('.navigation').toggleClass('show-me');
      $('.navigation ul li').toggleClass('show-me');
    });

    // Transition delay
    $('.transition').on('click', function (e) {
      $('.transition-overlay').toggleClass('show-me');
      e.preventDefault();
      const goTo = this.getAttribute('href');
      setTimeout(() => {
        window.location = goTo;
      }, 1000);
    });

    // Hide Fixed Slider
    $(window).on('scroll touchmove', () => {
      $('.slider .slider-inner').toggleClass('hide', $(document).scrollTop() > 1500);
    });
  });

  // Wow animations
  new WOW(
    {
      animateClass: 'animated',
      offset: 50
    }
  ).init();

  // Masonry
  $(window).load(() => {
    const $container = $('.portfolio-masonry');
    $container.masonry({
      columnWidth: 0,
      itemSelector: '.portfolio-masonry li'
    });
  });
})(jQuery);
