
jQuery(function($) {
  $('.scroll').click(function() {
    var anchor_name = $(this).attr('href').split('#')[1];
    var anchor = $('#' + anchor_name);
    $('html, body').animate({
      scrollTop: anchor.offset().top
    }, 600);
    return false;
  });
}
