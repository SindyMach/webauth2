$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var BagColour = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + BagColour + ']').addClass('active');
      $(this).addClass('active');
  });
 
});

$(document).ready(function() {
 
  $('.pocket-config input').on('click', function() {
      var BagColour = $(this).attr('data-image');
 
      $('.left-column img[data-image = ' + BagColour + ']').addClass('active');
      $(this).addClass('active');
  });
 
});