function write_spooky(){
  
  $('.spooky_text').addClass('write');
  setTimeout(function(){ $('.write').addClass('spooky_text_filled');}, 1000);
      // setTimeout(function(){$('.path2').addClass('path_go');}, 1000);
}