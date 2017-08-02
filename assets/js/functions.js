// Call smooth scroll
$(function() {
  smoothScroll(500);
  workBelt();
  workLoad();
  activeExperience()
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

// Active Experiences
function activeExperience() {

  // Assign class to first experience
  $('.exp-unit').first().addClass('active-exp');
  $('.exp-navigation').children().first().addClass('active-navigation');

  // Navigation logic (only mobile)
  $('.exp-navigation span').click(function move() {

    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    // Remove active-* class from current exp-unit
    // and assign it to one with positon equal to
    // the navigation span
    $('.exp-unit').removeClass('active-exp').eq(position).addClass('active-exp');

    // Remove active-navigation class from current span
    // and assign it to this (aka where the click was fired)
    $siblings.removeClass('active-navigation');
    $this.addClass('active-navigation');

  });

  // Controls logic
  $('.exp-control-next, .exp-control-prev').click(function next() {

    var $this = $(this),
        currActiveClient = $('.exp-belt').find('.active-exp'),
        position = $('.exp-belt').children().index(currActiveClient),
        clientNum = $('.exp-unit').length;

    // Next logic
    if ($this.hasClass('exp-control-next')) {

      if (position < (clientNum - 1)) {
        $('.active-exp').removeClass('active-exp').next().addClass('active-exp');
        $('.active-navigation').removeClass('active-navigation').next().addClass('active-navigation');
      }

      else {
        $('.exp-unit').removeClass('active-exp').first().addClass('active-exp');
        $('.exp-navigation').children().removeClass('active-navigation').first().addClass('active-navigation');
      }

    }

    // Prev logic
    else {

      if (position > 0) {
        $('.active-exp').removeClass('active-exp').prev().addClass('active-exp');
        $('.active-navigation').removeClass('active-navigation').prev().addClass('active-navigation');
      }

      else {
        $('.exp-unit').removeClass('active-exp').last().addClass('active-exp');
        $('.exp-navigation').children().removeClass('active-navigation').last().addClass('active-navigation');
      }

    }

  });

}
