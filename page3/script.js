$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $(".index-btn").index($(this));
    // Declare the clickedIndex variable and assign it the value of the button that is clicked
    
    
    // Replace the eq method's argument with the clickedIndex variable
    $('.slide').eq(clickedIndex).addClass('active');
    
  });
});
