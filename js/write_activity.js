
// //我要發文
// document.getElementById('write_activity').addEventListener('click',function()
// {
//   window.location.href='post_activity.html'
// })

// // 點選卡片觀看內文--------
// document.getElementById('activity_detail_display_1').addEventListener('click',function()
// {
//   document.getElementById('activity_display').classList.remove("display_none")
//   document.body.style.overflow = 'hidden'
// })

// document.getElementById('activity_display_close').addEventListener('click',function()
// {
//   document.getElementById('activity_display').classList.add("display_none")
//   document.body.style.overflow = 'scroll'
// })



// // 當點擊檢視報名者，拿掉display none ,顯示報名者資訊頁-----
// $("#view_activity_add_person").click(function(){
//   $("#activity_add_personal_display").removeClass("display_none")
// })

// // 報名者資訊頁面關閉
// $('#view_activity_add_person_close').click(function(){
//   $('#activity_add_personal_display').addClass("display_none")
//   // document.body.style.overflow = 'scroll'
// })


// // 當點擊頭像，拿掉display none ,顯示觀看他人介紹-----
// $("#view_user_img").click(function(){
//   $("#view_personal_display").removeClass("display_none")
// })

// // 觀看他人介紹關閉
// $('#view_personal_close').click(function(){
//   $('#view_personal_display').addClass("display_none")
//   // document.body.style.overflow = 'scroll'
// })


// --------------------以上改用fetch寫了------------------------------

//寫文章提示下拉時改變
$(window).scroll(function () {
  if($(window).scrollTop()+$(window).height()<=$('.header').height()+$('#write_activity').height()+parseInt($('#write_activity').css('bottom')))
  {
    $('#write_activity').removeClass('write_activity_down');
    // $('#write_activity').css('border','1px rgba(255, 255, 255, 0) solid')
    // $('#write_activity').css('cursor','url(/img/pen.svg),auto')
  } 
  else
  {
    $('#write_activity').addClass('write_activity_down');
    // $('#write_activity').css('border','1px rgba(0, 0, 0, 0.4) solid')
    // $('#write_activity').css('cursor','url(/img/pen_black.svg),auto')
  }
});

$('#write_activity').click(function (e) { 
  e.preventDefault();
  window.open('post_activity.html')
});

