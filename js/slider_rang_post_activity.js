  
// 進階搜尋，年齡範圍滑桿
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 15,
    max: 70,
    step:5,
    // 初始值
    values: [ 15, 15 ],
    slide: function( event, ui ) {
      if(ui.values[ 0 ]==15&&ui.values[ 1 ]==15)
      {
        $( "#amount" ).html('不限年齡')
      }
      else
      {
        $( "#amount" ).html( ui.values[ 0 ] + " 歲 - " + ui.values[ 1 ] +" 歲" );
      }
      
    }
  });
  $( "#amount" ).html(  "不限年齡" );
  
});


// 進階搜尋，人數範圍滑桿
$(function() {
  $( "#slider-range-old" ).slider({
    range: 'min',
    min: 1,
    max: 100,
    // 初始值
    value: 100,
    slide: function( event, ui ) {
      if(ui.value == 100)
      {
        $( "#amount_old" ).html(' 不限人數')
      }
      else
      {
        $( "#amount_old" ).html( ui.value +" 人" );
      }
      
    }
  });
  $( "#amount_old" ).html(" 不限人數" );
});