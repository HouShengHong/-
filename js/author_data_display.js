let hover_user_out_display = false
$(".activity_author_img").click(function (e) { 
    e.preventDefault();
    if(hover_user_out_display == false)
    {
        $(".hover_user_out").css('display', 'block');
        hover_user_out_display = true
    }
    else
    {
        $(".hover_user_out").css('display', 'none');
        hover_user_out_display = false
    }
});

$('.activity_content_out').scroll(function () { 
    $('#hover_user_out ').css('top',`${$('.activity_author').position().top+80}px`);
});