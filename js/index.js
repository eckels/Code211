$(document).ready(function() {
  /*var windowWidth = $(window).width;
  console.log(windowWidth);
  if (windowWidth > 580) {
    var cardHeight = $('#target').height();
    cardHeight = cardHeight + 'px';
    console.log(cardHeight);
    var i = 0;
    while (i < 10) {
      document.getElementsByClassName('faq-item').item(i).style.height = cardHeight;
      i++
    }
  }*/

  $('#tab1').click(function() {
    $('#tab1').addClass('active');
    $('#tab2').removeClass('active');
    $('#day1').addClass('showntable');
    $('#day1').removeClass('hiddentable');
    $('#day2').removeClass('showntable');
    $('#day2').addClass('hiddentable');
  });
  $('#tab2').click(function() {
    $('#tab2').addClass('active');
    $('#tab1').removeClass('active');
    $('#day2').addClass('showntable');
    $('#day2').removeClass('hiddentable');
    $('#day1').addClass('hiddentable');
    $('#day1').removeClass('showntable');
  });
});
