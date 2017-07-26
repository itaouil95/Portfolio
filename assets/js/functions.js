// Call smooth scroll
$(function() {
  smoothScroll(500);
  workBelt();
  workLoad();
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
// Switch between work section and thumbnails
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
    $('.work-container').hide(800);
  });

}

// AJAX Content Loading
function workLoad() {

  // Cache content
  $.ajaxSetup({
    cache: true
  });

  $('.thumb-unit').on('click', function() {

    // Cache this
    var $this = $(this);

    // Spinner Loading Animation
    var spinner = '<div class="loader">Loading...</div>';

    // Document to load (work) dinamically using
    // data key. Plus spinner load injection
    var newHTML = '/work/' + $this.data('folder') + '.html';
    $('.project-load').html(spinner).load(newHTML);

    // Load dinamically work project
    var newTitle = $this.find('strong').text();
    $('.project-title').text(newTitle);

  });

}
