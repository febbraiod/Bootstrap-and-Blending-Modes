function start_ani(){
  $('#draw').click(function(){
      $('#clickme').hide();
      $('.path').addClass('path_go');
      setTimeout(function(){$('.path2').addClass('path_go');}, 500);
  });
}


