// Call smooth scroll
$(function() {
  smoothScroll(500);
  workBelt();
});

// Smooth scroll
function smoothScroll (duration) {

  // Add click event on all a tags with href
  // containing the # character
  $('a[href^="#"]').on('click', function(event) {

    // Select clicked a tag's href attribute
    var target = $( $(this).attr('href') );

    if (target.length) {
      // Avoid normal hyperlink
      // scrolling (re-loading)
      event.preventDefault();

      // Smooth animation
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }

  });
}

// Work Belt
function workBelt() {

  // On thumb unit click move
  // left position by 100% left
  // (as to show work wrap)
  $('.thumb-unit').on('click', function() {
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  // On work return unit click move
  // left position by 0% left
  // (as to show work container)
  $('.work-return').on('click', function() {
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(100);
  });

}
