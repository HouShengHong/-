// let date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/

function function_place_reg()
{
    if(document.querySelector('#Place').value == ''||document.querySelector('#choose_place').dataset.allregion_id == '0')
    {
        if(document.querySelector('#Place').value == ''&&document.querySelector('#choose_place').dataset.allregion_id == '0')
            $('#Place_keep').html('<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">請選擇縣市 及 填寫地點</span> ');
        else if(document.querySelector('#Place').value == '')
            $('#Place_keep').html('<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">請填寫地點</span> ');
        else
        $('#Place_keep').html('<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">請選擇縣市</span> ');
    }
    else
    {
        $('#Place_keep').html('<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>');
    } 
}
//生成偏好地區div
fetch('./json/AllRegion.json')
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    for(let i = 0;i<myJson.length;i++)
    {
        document.getElementById("dropdown_content").innerHTML +=
    `
    <div data-AllRegion_id="${myJson[i].AllRegion_id}">${myJson[i].Region1}</div>
    `
    }
})
.then(function() {
    //地區點擊
    $('#dropdown_content div').click(function (e) {
        e.preventDefault() 
        document.getElementById('choose_place').innerHTML =  this.innerHTML + '<i class="fa-solid fa-angle-down"></i>';
        document.getElementById('choose_place').dataset.allregion_id = this.dataset.allregion_id
        function_place_reg() 
        
    });
})
.catch(function(err){
    console.log(err)
})






//生成運動類別button
fetch('./json/Sport.json')
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    // document.getElementById("moreSearch_card_box_Sport").innerHTML = ''
    for(let i = 0;i<myJson.length;i++)
    {
        if(!(i==0))
        {
            document.getElementById("moreSearch_card_box_Sport").innerHTML +=
            `
            <button data-click="0" data-Sport_id="${myJson[i].Sport_id}">${myJson[i].Sport1}</button>
            `
        }
        else
        {
            document.getElementById("moreSearch_card_box_Sport").innerHTML +=
            `
            <button class="moreSearch_card_box_button_change" data-click="1" data-Sport_id="${myJson[i].Sport_id}">${myJson[i].Sport1}</button>
            `
        }
        
    }
})
.then(function() {
    // tag按鈕點擊效果
    // $('.moreSearch_card_box button').click(function (e) 
    // { 
    //     e.preventDefault()
    //     console.log('change')
    //     if(this.dataset.click==0)
    //     {
    //         this.classList.add('moreSearch_card_box_button_change')
    //         this.dataset.click=1
    //     }
    //     else
    //     {
    //         this.classList.remove('moreSearch_card_box_button_change')
    //         this.dataset.click=0
    //     }
    // })
})
.catch(function(err){
    console.log(err)
})


//生成需求button
fetch('./json/PersonalAsk.json')
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    for(let i = 0;i<myJson.length;i++)
    {
        if(!(i==0))
        {
            document.getElementById("moreSearch_card_PersonalAsk").innerHTML +=
            `
            <button data-click="0" data-PersonalAsk_id="${myJson[i].PersonalAsk_id}">${myJson[i].PersonalAsk1}</button>
            `
        }
        else
        {
            document.getElementById("moreSearch_card_PersonalAsk").innerHTML +=
            `
            <button class="moreSearch_card_box_button_change" data-click="1" data-PersonalAsk_id="${myJson[i].PersonalAsk_id}">${myJson[i].PersonalAsk1}</button>
            `
        }
        
    }
})
.then(function() 
{
    //tag按鈕點擊效果
    $('.moreSearch_card_box button').click(function (e) 
    { 
        e.preventDefault()
        $(`#${this.parentNode.id} button`).removeClass('moreSearch_card_box_button_change');
        document.querySelectorAll(`#${this.parentNode.id} button`).forEach(i => i.dataset.click = '0')
        this.classList.add('moreSearch_card_box_button_change')
        this.dataset.click = '1'
    })
})
.then(function() 
{
    //信息驗證

    //活動標題
    $('#Post_title').blur(function (e) { 
        e.preventDefault();
        if(document.querySelector('#Post_title').value == '')
        {
            $('#Post_title_keep').html('<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">活動標題不得為空白</span> ');
        }
        else
        {
            $('#Post_title_keep').html('<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>');
        }
        
    });

    //活動地點
    $('#Place').blur(function (e) { 
        e.preventDefault();
        // if(document.querySelector('#Place').value == ''||document.querySelector('#choose_place').dataset.allregion_id == '0')
        function_place_reg()
    });
    
    $('#PostActivity_content').blur(function (e) { 
        e.preventDefault();
        if(document.querySelector('#PostActivity_content').value == '')
        {
            $('#PostActivity_content_keep').html('<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">活動標題不得為空白</span> ');
        }
        else
        {
            $('#PostActivity_content_keep').html('<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>');
        }
        
    });

    //報名時間
    // $('#Start_time_End_time input').change(function (e) { 
    //     e.preventDefault();
    //     $('#Start_time_End_time_keep').html('change');
    //     console.log((new Date(document.querySelector('#Start_time').value)))
        
    // });
    // document.getElementById('End_time').addEventListener('input',function(e)
    // {
    //     e.preventDefault();
    //     $('#Start_time_End_time_keep').html('change');
    //     console.log((new Date(document.querySelector('#Start_time').value)))
    // })
    // document.getElementById('End_time').addEventListener('blur',function()
    // {
    //     document.querySelector('#layui-laydate1 laydate-btns-confirm').addEventListener('click',function()
    //     {
    //         $('#Start_time_End_time_keep').html('change');
    //     })
    // })
    

})
.then(function()
{
    //下方送出按鈕事件
    $('#post_activity_send_btn').click(function (e) { 
        e.preventDefault();
        console.log('Post_title ',document.querySelector('#Post_title').value)    //.value
        console.log('PostActivity_content  ',document.querySelector('#PostActivity_content').value)
        console.log('Start_time ',document.querySelector('#Start_time').value)
        console.log('End_time ',document.querySelector('#End_time').value)
        console.log('Place ',document.querySelector('#Place').value)
        console.log('Age_rangefirst ',$("#slider-range" ).slider( "values", 0 ))
        console.log('Age_rangeend ',$("#slider-range" ).slider( "values", 1 ))
        console.log('Sex',document.querySelector('input[name=flexRadioDefault]:checked').value)
        console.log('Activity_start_time ',document.querySelector('#Activity_start_time').value)
        console.log('Activity_end_time ',document.querySelector('#Activity_end_time').value)
        console.log('PersonalAsk_id',parseInt(document.querySelector('#moreSearch_card_PersonalAsk button[data-click = "1"]').dataset.personalask_id))
        console.log('Sport_id',parseInt(document.querySelector('#moreSearch_card_box_Sport button[data-click = "1"]').dataset.sport_id))
        console.log('allregion_id ',parseInt(document.querySelector('#choose_place').dataset.allregion_id))
        console.log('Poster_id ',parseInt(sessionStorage.getItem('Customer_id')))
        console.log('Need_people ',$("#slider-range-old" ).slider("value"))
        // Acticity_state bit 這個是啥啊
        if(sessionStorage.getItem('Customer_id')!=null)
        {
            if(document.querySelector('#Post_title').value!=''&&document.querySelector('#PostActivity_content').value!=''&&(new Date((document.getElementById('End_time').value)))<(new Date((document.getElementById('Activity_start_time').value)))&&document.querySelector('#Place').value!=''&&document.querySelector('#choose_place').dataset.allregion_id!='0')
            {
                fetch('http://20.187.74.2/api/Create_PostActicity',{
                    method:'POST',
                    headers:
                    {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body:JSON.stringify(
                        {
                            'Post_title':document.querySelector('#Post_title').value,
                            'PostActivity_content':document.querySelector('#PostActivity_content').value,
                            'Start_time':document.querySelector('#Start_time').value,
                            'End_time':document.querySelector('#End_time').value,
                            'Need_people':$("#slider-range-old" ).slider("value"),
                            'Place':document.querySelector('#Place').value,
                            'Age_rangefirst':$("#slider-range" ).slider( "values", 0 )==15&&$("#slider-range" ).slider( "values", 1 )==15?15:$("#slider-range" ).slider( "values", 0 ),
                            'Age_rangeend':$("#slider-range" ).slider( "values", 0 )==15&&$("#slider-range" ).slider( "values", 1 )==15?70:$("#slider-range" ).slider( "values", 1 ),
                            'Sex':document.querySelector('input[name=flexRadioDefault]:checked').value,
                            'Activity_start_time':document.querySelector('#Activity_start_time').value,
                            'Activity_end_time':document.querySelector('#Activity_end_time').value,
                            'PersonalAsk_id':parseInt(document.querySelector('#moreSearch_card_PersonalAsk button[data-click = "1"]').dataset.personalask_id),
                            'Sport_id':parseInt(document.querySelector('#moreSearch_card_box_Sport button[data-click = "1"]').dataset.sport_id),
                            'AllRegion_id':parseInt(document.querySelector('#choose_place').dataset.allregion_id),
                            'Poster_id':parseInt(sessionStorage.getItem('Customer_id')),
                            "Acticity_state":1  
                        }
                    )
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (body) {
                    console.log(body);
                    if(body == 1)
                    {
                        alert('發文成功，將轉跳回首頁')
                        window.location.href = 'index.html'
                    }
                    else
                    {
                        alert('哭哭，發文失敗')
                    }
                })
                .catch(function(err){
                    console.log(err)
                })
            }
            else
            {
                alert('無法送出：部分內容格式不符')
            }
        }
        else
        {
            alert('請先登入')
        }
        

    });
})
.catch(function(err){
    console.log(err)
})















