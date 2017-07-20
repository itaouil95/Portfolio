// Call smooth scroll
$(function() {
  console.log("Function loaded !");
  smoothScroll(500);
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
