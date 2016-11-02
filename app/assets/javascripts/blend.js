$(function(){
  addBlendingContent();
  onSlide();
});


function addBlendingContent(){
  $('.blender').html("<h5><span id='redtype'>R</span><span id='greentype'>G</span><span id='bluetype'>B</span><br><span id='cyantype'>C</span><span id='yellowtype'>Y</span><span id='magentatype'>M</span><br><span id='blacktype'>K</span><span id='whitetype'>W</span><br><span id='lightgreytype'>LG</span><span id='darkgreytype'>DG</span></h5>");
}

// var value = mySlider.slider('getValue');

function onSlide(){
  var mySlider = $("input.slider").slider({max: 100});
  mySlider.slider('setValue', 100);
  mySlider.on('slide',function(e){
    $('.blender').css('opacity', e.value/100);
  });
}
