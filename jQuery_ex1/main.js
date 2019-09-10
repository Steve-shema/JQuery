$(function() {
    $('.tab li').click(function() {
  
      $('.tab li').removeClass('select');
  
      $(this).addClass('select');
  
      $('.content li').addClass('hide');
      // Find out which child element
      let index = $('.tab li').index($(this));
    //   // ↑ Acquire the content corresponding to the index value acquired in the previous sentence.
      $('.content li').eq(index).removeClass('hide');
    });
  });