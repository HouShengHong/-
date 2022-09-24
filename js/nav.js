


if(sessionStorage.getItem('Customer_id') == null)
{
    $('.sign_in_for_js').html('登入');
    $('.sign_out_for_js').css('display', 'none');
    $('.sign_in_for_js').addClass('sign_in_hover');
}
else
{
    $('.sign_in_for_js').html(`
    <img src="http://20.187.74.2/FileUpload/${sessionStorage.getItem('Images')}">
    `);
    $('.sign_out_for_js').css('display', 'block');
    $('.sign_in_for_js').removeClass('sign_in_hover');
    $('.sign_in').addClass('sign_in_user');
}

let bool_log_in_display = false
function function_login_alert(){
    if(sessionStorage.getItem('Customer_id') == null)
    {
        if (bool_log_in_display == true)
        {
            document.getElementById('log_in_alert').style.display = 'none'
            bool_log_in_display = false 
        }
        else
        {
            document.getElementById('log_in_alert').style.display = 'block'
            bool_log_in_display = true 
        }
    }
    else
    {
        window.open(`user_personal.html?id=${sessionStorage.getItem('Customer_id')}`)
    }  
}




//註冊 ------------
$('.sign_up_for_js,.sign_up_btn').click(function (e) { 
    e.preventDefault();
    window.open('register.html') 
});
// document.getElementById('sign_up').addEventListener('click',function()
// {
//   window.location.href='1_check_Email.html'
// })
//首頁 ------------
$('.nav_index_for_js').click(function (e) { 
    e.preventDefault();
    window.open('index.html')
});

document.querySelector('.nav_content_logo').addEventListener('click',function(){
    window.open('index.html')
})


document.getElementById('nav_post').addEventListener('click',function()
{
 if(!(window.location.href=='http://127.0.0.1:5500/index.html'||window.location.href=='http://127.0.0.1:5500/index.html#HI'))
 {
    window.open('index.html#HI')
 }
 else
 {
    $('html,body').animate({scrollTop:($('.main').offset().top-$('.nav').height())},800,"swing")
 }
  
})

//登入alert
//document.getElementById('sign_in').addEventListener('click',function_login_alert)
$('.sign_in_for_js').click(function_login_alert);

//nav動畫
// $(window).scroll(function () 
// { 
//     if($(window).scrollTop()/$('.header').height()<0.6)
//     {
//         document.querySelector('#nav').classList.add('static')
//         document.querySelector('#nav').classList.remove('fixed_top_0')
//         $('#nav').css('backgroundColor',`rgb(255, 255, 255,0)`);
//         $('#nav').css('boxShadow','');
//         $('#nav_svg').css('fill','rgb(255,255,255)')
//         $('.sign_up').css('color','#f3f3f3c4')
//         $('.sign_in').css(
//             {
//                 "border":"#F8F7F7 1px solid",
//                 "color":"#fff"
//             }
//         )
//     }
//     else if($(window).scrollTop()/$('.header').height()<=1 && $(window).scrollTop()/$('.header').height()>=0.6)
//     {
//         document.querySelector('#nav').classList.remove('static')
//         document.querySelector('#nav').classList.add('fixed_top_0')
//         $('#nav').css('backgroundColor',`rgb(255, 255, 255,${$(window).scrollTop()/$('.header').height()})`);
//         $('#nav').css('boxShadow',`0px 5px 3px 0px rgba(0, 0, 0, ${0.1*$(window).scrollTop()/$('.header').height()})`);
//         $('#nav_svg').css('fill',`rgb(${255-155*$(window).scrollTop()/$('.header').height()},${255-155*$(window).scrollTop()/$('.header').height()},${255-155*$(window).scrollTop()/$('.header').height()})`)
//         $('.sign_up').css('color','rgba(150, 150, 150)')
//         $('.sign_in').css(
//             {
//                 "border":"rgb(150,150,150) 1px solid",
//                 "color":"rgb(150,150,150)"
//             }
//         )
//     }
//     else
//     {
//         document.querySelector('#nav').classList.remove('static')
//         document.querySelector('#nav').classList.add('fixed_top_0')
//         $('#nav').css('backgroundColor',`rgb(255, 255, 255,1)`);
//         $('#nav').css('boxShadow',`0px 5px 3px 0px rgba(0, 0, 0, 0.1)`);
//         $('#nav_svg').css('fill',`rgb(100,100,100)`)
//         $('.sign_up').css('color','rgba(150, 150, 150)')
//         $('.sign_in').css(
//             {
//                 "border":"rgb(150,150,150) 1px solid",
//                 "color":"rgb(150,150,150)"
//             }
//         )
//     }
// });

$(window).scroll(function ()
{
    if($(window).scrollTop()<= $('#nav').height())
    {
        document.querySelector('#nav').classList.add('static')
        document.querySelector('#nav').classList.remove('fixed_top_0')
        $('#nav').css('backgroundColor',`rgb(255, 255, 255,0)`);
        $('#nav').css('boxShadow','');
        $('#nav_svg').css('fill','rgb(255,255,255)')
        $('.sign_up').css('color','#f3f3f3c4')
        $('#nav_menu i').css('color','rgba(255, 255, 255)')
        if(sessionStorage.getItem('Customer_id') == null)
        {
        $('.sign_in').css(
            {
                "border":"#F8F7F7 1px solid",
                "color":"#F8F7F7"
            }
        )
    }
    else
    {
        $('.sign_in').css(
            { 
                "border":"none",
                "color":"none"
            }
        )
    }

    }
    else
    {
        document.querySelector('#nav').classList.remove('static')
        document.querySelector('#nav').classList.add('fixed_top_0')
        $('#nav').css('backgroundColor',`rgb(255, 255, 255,1)`);
        $('#nav').css('boxShadow',`0px 5px 3px 0px rgba(0, 0, 0, 0.1)`);
        $('#nav_svg').css('fill',`rgb(100,100,100)`)
        $('.sign_up').css('color','rgba(150, 150, 150)')
        $('.sign_in').css({'border':'rgb(150, 150, 150) 1px solid',"color":"rgb(150, 150, 150)"})
        $('#nav_menu i').css('color','rgba(150, 150, 150)')
 

        if(sessionStorage.getItem('Customer_id') == null)
                {

        $('.sign_in').css(
            {
                "border":"rgb(150, 150, 150) 1px solid ",
                "color":"rgb(150, 150, 150)"
            }
        )
                }
                else
                {
                    $('.sign_in').css(
                        { 
                            "border":"none",
                            "color":"none"
                        }
                    )
                }


        
    }
})




// fetch('./json/test.json',{
//     method:'POST',
//     headers:
//     {
//         "Content-Type": "application/json;charset=utf-8"
//     },
//     body:JSON.stringify(
//         {
//             'a':'123',
//             'b':'456'
//         }
//     )
// })
// .then(function (response) {
// return response.json();
// })
// .then(function (body) {
// console.log(`${body.a} + ${body.b}`);
// })
// .catch(function(err){
//     console.log(err)
// })













// 登入小框框的登入btn
$('#log_in_btn').click(function (e) { 
    e.preventDefault();
    fetch('http://20.187.74.2/api/Login/GetLogin',
    {
        method:'POST',
        headers:
        {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify
        (
            {
                'Email':document.querySelector('#login_email').value,
                'Password':document.querySelector('#login_password').value
            }
        )
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson) {
        console.log(myJson)
        if(myJson == 'nothing')
        {
            alert('帳號不存在')
        }
        else if(myJson == 'Email exist')
        {
            alert('帳號存在')
        }
        else
        {
            alert('登入成功')
            
            sessionStorage.setItem('Customer_id',myJson[0].Customer_id)
            sessionStorage.setItem('About_me',myJson[0].About_me)
            sessionStorage.setItem('Birthday',myJson[0].Birthday.replace('T',' '))
            sessionStorage.setItem('Email',myJson[0].Email)
            sessionStorage.setItem('Images',myJson[0].Images)
            sessionStorage.setItem('Name',myJson[0].Name)
            sessionStorage.setItem('Sex',myJson[0].Sex)
            document.getElementById('log_in_alert').style.display = 'none'
            bool_log_in_display = false
            $('.sign_in_for_js').html(`
            <img src="http://20.187.74.2/FileUpload/${sessionStorage.getItem('Images')}">
            `);

            $('.sign_in_for_js').removeClass('sign_in_hover');
            $('.sign_out_for_js').css('display', 'block');
            $('.sign_in').addClass('sign_in_user');        }
    })
    .catch(function(err){
        console.log(err)
    })
});


// nav bar的 登出btn
$('.sign_out_for_js').click(function (e) { 
    e.preventDefault();
    if(confirm('您確定要登出？'))
    {
        sessionStorage.removeItem('Customer_id')
        sessionStorage.removeItem('About_me')
        sessionStorage.removeItem('Birthday')
        sessionStorage.removeItem('Email')
        sessionStorage.removeItem('Images')
        sessionStorage.removeItem('Name')
        sessionStorage.removeItem('Sex')
        $('.sign_in_for_js').html('登入');
        $('.sign_out_for_js').css('display', 'none');

        
        $('.sign_in_for_js').addClass('sign_in_hover');
        $('.sign_in').removeClass('sign_in_user');


    //滾輪 登出狀態確認位置
    if($(window).scrollTop()<= $('#nav').height())
    {
        document.querySelector('#nav').classList.add('static')
        document.querySelector('#nav').classList.remove('fixed_top_0')
        $('#nav').css('backgroundColor',`rgb(255, 255, 255,0)`);
        $('#nav').css('boxShadow','');
        $('#nav_svg').css('fill','rgb(255,255,255)')
        $('.sign_up').css('color','#f3f3f3c4')
                 if(sessionStorage.getItem('Customer_id') == null)
                {
                    $('.sign_in').css(
                        { 
                            "border":"#F8F7F7 1px solid",
                            "color":"#F8F7F7"
                        }
                    )
                }
                else
                {
                    $('.sign_in').css(
                        { 
                            "border":"none",
                            "color":"none"
                        }
                    )
                }


    }
    else
    {
        document.querySelector('#nav').classList.remove('static')
        document.querySelector('#nav').classList.add('fixed_top_0')
        $('#nav').css('backgroundColor',`rgb(255, 255, 255,1)`);
        $('#nav').css('boxShadow',`0px 5px 3px 0px rgba(0, 0, 0, 0.1)`);
        $('#nav_svg').css('fill',`rgb(100,100,100)`)
        $('.sign_up').css('color','rgba(150, 150, 150)')
        $('.sign_in').css({'border':'rgb(150, 150, 150) 1px solid',
                           "color":"rgb(150, 150, 150)"
    })
 

        if(sessionStorage.getItem('Customer_id') == null)
                {
                    $('.sign_in').css(
                        { 
                            "border":"rgb(150, 150, 150) 1px solid ",
                            "color":"rgb(150, 150, 150)"
                        }
                    )

                    
                }
                else
                {
                    $('.sign_in').css(
                        { 
                            "border":"none",
                            "color":"none"
                        }
                    )
                }


        
    }
    }
});