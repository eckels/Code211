$(document).ready(function() {
  $('#tab1').click(function() {
    console.log('works');
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
