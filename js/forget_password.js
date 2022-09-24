let date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/
let email_reg =/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
let password_reg =/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@\.#$%^&*? ]).*$/

function function_next()
{
    let element = document.querySelector('.box3'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width');
    if(!(document.querySelector('.box2').style.left==`${parseInt(width)*(-4)}px`))
    {
        document.querySelector('.box2').style.left = `${parseInt(document.querySelector('.box2').style.left)-parseInt(width)}px` 
    }
}
function function_previous()
{
    let element = document.querySelector('.box3'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width');
    if(!(document.querySelector('.box2').style.left=='0px'))
    {
        document.querySelector('.box2').style.left = `${parseInt(document.querySelector('.box2').style.left)+parseInt(width)}px` 
    }
}
//寄出Email後的特效
function function_send_token()
{
    try{clearInterval(function_time)}catch{}
    let int_time = 60
    document.getElementById('send_token').disabled = true
    document.getElementById('send_token').classList.remove('grid-container2_cell_6_button_for_hover')
    document.getElementById('send_token').classList.add('button_disable')
    setTimeout(function()
    {
        document.getElementById('send_token').disabled = false
        document.getElementById('send_token').classList.remove('button_disable')
        document.getElementById('send_token').classList.add('grid-container2_cell_6_button_for_hover')
    },(int_time+1)*1000)
    function_time =  setInterval(function()
    {
        document.querySelector('.grid-container2_cell_7').innerHTML = `${int_time}秒後方可重新寄出`
        int_time-=1
        if(int_time < 0)
        {
            document.querySelector('.grid-container2_cell_7').innerHTML = ' '
            clearInterval(function_time)
        }
    },1000)
}
//重新寄出Email 
function function_send_again()
{
    fetch('http://20.187.74.2/api/Email/Again',{
        method:'POST',
        headers:
        {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify(
            {
                'Email':document.getElementById('container1_input_email').value
            }
        )
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (body) {
        console.log(body);
    })
    .catch(function(err){
        console.log(err)
    })
}
//驗證驗證碼
function function_reg()
{
    console.log(document.getElementById('container1_input_email').value)
    console.log(document.querySelector('.grid-container2_input_token').value)
    fetch('http://20.187.74.2/api/Email/Code',{
        method:'POST',
        headers:
        {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify(
            {
                'Email':document.getElementById('container1_input_email').value,
                'verification_code':document.querySelector('.grid-container2_input_token').value
            }
        )
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (body) {
        console.log(body);
        if(body == '驗證正確')
        {
            alert('驗證成功，繼續下一步驟')
            function_next()
            document.querySelector('.progress li:nth-child(3)').classList.add('active')
            document.querySelector('.grid-container2_cell_3>p').innerHTML = ''
            //document.querySelector('#write_data_Email').value = document.getElementById('container1_input_email').value
        }
        else
        {
            alert('驗證失敗')
            document.querySelector('.grid-container2_cell_3>p').innerHTML = '1.請檢查輸入法是否切換為英文半形狀態； <br/>2.請檢查輸入驗證碼填寫是否正確；<br/>&emsp;例如：111111。'
        }
    })
    .catch(function(err){
        console.log(err)
    })
}

// 1.Email寄出驗證信
document.getElementById('container1_button_sendmail').addEventListener('click',function()
{
    document.getElementById('container1_button_sendmail').classList.add('button_disable')
    document.getElementById('container1_button_sendmail').disabled=true
    if(!(email_reg.test(document.getElementById('container1_input_email').value)))
    {
        alert('Email 格式有誤')
        document.querySelector('.grid-container1_cell_5').innerHTML = '1.請檢查輸入法是否切換為英文半形狀態； <br/>2.請檢查輸入帳號拼寫是否正確；<br/>3.電子郵件信箱需輸入完整的帳號，即電子郵件地址+ @ + 網域名稱，<br/>&emsp;例如：xxxx@qq.com。'
        // "請檢查輸入法是否切換為英文半形狀態； \r\n請檢查輸入帳號拼寫是否正確；\r\n電子郵件信箱需輸入完整的帳號，即電子郵件地址+ @ + 網域名稱，\r\n\t例如：xxxx@qq.com。"
        document.getElementById('container1_button_sendmail').disabled=false
        document.getElementById('container1_button_sendmail').classList.remove('button_disable')
    }
    else
    {
        fetch('http://20.187.74.2/api/Email/Send',{
            method:'POST',
            headers:
            {
                "Content-Type": "application/json;charset=utf-8"
            },
            body:JSON.stringify(
                {
                    'Email':document.getElementById('container1_input_email').value
                }
            )
        })
        .then(function (response) {
        return response.json();
        })
        .then(function (body) {
            console.log(body)
            if(body == '格式錯誤')
            {
                alert('Email 格式有誤')
                document.querySelector('.grid-container1_cell_5').innerHTML = '1.請檢查輸入法是否切換為英文半形狀態； <br/>2.請檢查輸入帳號拼寫是否正確；<br/>3.電子郵件信箱需輸入完整的帳號，即電子郵件地址+ @ + 網域名稱，<br/>&emsp;例如：xxxx@qq.com。'
            }
            else if(body == '已存在')
            {
                function_send_again()
                alert('Email格式正確，移至下一步')
                document.querySelector('.progress li:nth-child(2)').classList.add('active')
                function_next()
                document.querySelector('.grid-container2_input_email').value = document.getElementById('container1_input_email').value
                function_send_token()
                document.querySelector('.grid-container1_cell_5').innerHTML =''
            }
            else
            {
                alert('此帳號不存在')
            }

        })
        .then(function () {
            document.getElementById('container1_button_sendmail').disabled=false
            document.getElementById('container1_button_sendmail').classList.remove('button_disable')
        })
        .catch(function(err){
            document.getElementById('container1_button_sendmail').disabled=false
            document.getElementById('container1_button_sendmail').classList.remove('button_disable')
            console.log(err)
        })  
    }
})

// 2.Email驗證

//寄出驗證信
document.getElementById('send_token').addEventListener('click',function () 
{
    document.getElementById('send_token').disabled = true
    function_send_again()
    function_send_token()    
})

//重新輸入Email
// document.getElementById('return_email').addEventListener('click',function()
// {
//     if(confirm('確定要重新輸入Email？'))
//     {
//         document.querySelector('.progress li:nth-child(2)').classList.remove('active')
//         function_previous()
//     }
// })

//驗證驗證碼
document.getElementById('reg_token').addEventListener('click',function () 
{
    function_reg()    
})








//3.修改密碼

//密碼提示
document.getElementById('write_data_password').addEventListener('blur',function()
{
    if(password_reg.test(document.getElementById('write_data_password').value))
    {
        document.getElementById('write_data_keep_password').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
        if(document.getElementById('write_data_password').value == document.getElementById('write_data_password_2').value)
        {
            document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
        }
        else
        {
            document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">二次密碼輸入不一至</span>'
        }
    }
    else
    {
        document.getElementById('write_data_keep_password').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">至少6位，包括至少1個大寫字母，1個小寫字母，1個數字，1個特殊字符</span>'
        document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">二次密碼輸入不一至</span>'
    }
    
})
//二次密碼提示
document.getElementById('write_data_password_2').addEventListener('blur',function()
{
    if(password_reg.test(document.getElementById('write_data_password').value))
    {
        document.getElementById('write_data_keep_password').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
        if(document.getElementById('write_data_password').value == document.getElementById('write_data_password_2').value)
        {
            document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
        }
        else
        {
            document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">二次密碼輸入不一至</span>'
        }
    }
    else
    {
        document.getElementById('write_data_keep_password').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">至少6位，包括至少1個大寫字母，1個小寫字母 <br> ，1個數字，1個特殊字符</span>'
        document.getElementById('write_data_keep_password_2').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">二次密碼輸入不一至</span>'
    }
    
})

//送出新密碼
document.getElementById('send_new_password').addEventListener('click',function()
{
    console.log(document.getElementById('container1_input_email').value)
    console.log(document.querySelector('#write_data_password').value)
    if(password_reg.test(document.getElementById('write_data_password').value)&&document.getElementById('write_data_password').value == document.getElementById('write_data_password_2').value)
    {
        fetch('http://20.187.74.2/api/Email/Put_Forget',{
        method:'PUT',
        headers:
        {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify(
            {
                'Email':document.getElementById('container1_input_email').value,
                'Password':document.querySelector('#write_data_password').value
            }
        )
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (body) {
            console.log(body);
            if(body==1)
            {
                alert('密碼修改成功，將於5秒後轉跳首頁')
                function_next()
                document.querySelector('.progress li:nth-child(4)').classList.add('active')
                window.setTimeout("window.location='index.html'",5000);
            }
            else
            {
                alert('密碼格式有誤，請重新確認後再送出')
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }
    else
    {
        alert('密碼格式有誤，請重新確認後再送出')
    }
})

