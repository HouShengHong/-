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




// bool 控制發文者資訊小卡之顯示
// let hover_user_out_display = false














//生成主頁中的簡易卡片
fetch('http://20.187.74.2/api/Home',{
    // method:'POST',
    // headers:
    // {
    //     "Content-Type": "application/json;charset=utf-8"
    // },
    // body:JSON.stringify(
    //     {
    //         'a':'123',
    //         'b':'456'
    //     }
    // )
})
.then(function(response) {
    console.log(response);
    return response.json()
})
.then(function(myJson) {
    console.log(myJson)
    for(let i = 0;i<myJson.length;i++)
    {
        document.getElementById("activity_card_out").innerHTML +=
    `
    <div class="activity_card_box"  data-postactivity_id = '${myJson[i].PostActivity_id}'>
        <div class="activity_card">
            <div class="activity_card_img">
                <img src="${'http://20.187.74.2/FileUpload/'+myJson[i].Customer_img}">   
            </div>
            <div class="activity_card_content">
                <div class="col">
                    <div class="row-1">
                        <p>${myJson[i].Customer_name}</p>
                        <div class="row-1_right">
                            ${(new Date(myJson[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                            <div class="mycard-icon">
                                <i class="fa-solid fa-heart"></i>
                                <p>${myJson[i].Like_count}</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="mycard-title">${myJson[i].Post_title}</h3>
                    <div class="row-2">
                        <div class="mycard-icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>${myJson[i].AllRegion_id}</p> &emsp;
                            <p>${myJson[i].Place}</p>
                        </div>

                        <div class="mycard-icon">
                            <i class="fa-regular fa-clock"></i>
                            <p>${myJson[i].Activity_start_time.substring(0,4)}/${myJson[i].Activity_start_time.substring(5,7)}/${myJson[i].Activity_start_time.substring(8,10)} 至${myJson[i].Activity_end_time.substring(0,4)}/${myJson[i].Activity_end_time.substring(5,7)}/${myJson[i].Activity_end_time.substring(8,10)}</p>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="keyword-box">
                            <a  class="keyword">${myJson[i].Sport_id}</a>
                            <a  class="keyword">${myJson[i].PersonalAsk_id}</a>
                            ${myJson[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[i].Sex}</a>`}
                        </div>
                        <div class="msg-num-box">
                            <div class="mycard-icon rwd_display">
                                <i class="fa-solid fa-comment-dots"></i>
                                <p>${myJson[i].Comment_count}</p>
                            </div>
                            <div class="mycard-icon num-people rwd_display">
                                <i class="fa-solid fa-user"></i>
                                <p>${myJson[i].Join_count}</p>
                                <p>/</p>
                                <p>${myJson[i].Need_people}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
})
.then(function(){
    // 點擊簡易卡片後會生成卡片詳細內容
    $('.activity_card_box').click(function (e) 
    { 
        e.preventDefault();
        function function_for_card_detail(){

        }
        
        fetch('http://20.187.74.2/api/Home',{
            method:'POST',
            headers:
            {
                "Content-Type": "application/json;charset=utf-8"
            },
            body:JSON.stringify(
                {
                    'PostActivity_id':this.dataset.postactivity_id
                }
            )
        })
        .then(function(response) {
            
            return response.json()
        })
        .then(function(myJson) {
            //生成報名者
            function function_Attend_data()
            {
                let str = ''
                if(myJson[0].Attend_data==[])
                {
                    return str
                }
               else
               {
                    for(let i =0;i<myJson[0].Attend_data.length;i++)
                    {
                        str +=
                        `
                        <!-- 下面的路徑要改 -->
                        <div class="activity_add_person_img for_hover_user_out" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Joiner_img});${myJson[0].Attend_data[i].Attend_state==true?'border:3px solid #21CD24':'border:none'}" date-customer_id="${myJson[0].Attend_data[i].Joiner_id}">
                            <!-- 滑過觀看使用者資料 -->
                            <div class="hover_user_out" id="hover_user_out">
                                <!-- 頭貼／姓名／年齡/mail -->
                                <div class="row_left">
                                    <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Joiner_img});">
                                        <div class="male_icon">
                                            <p>${myJson[0].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                        </div>
                                    </div>
                                    <div class="add_person_content_box">
                                        <!--   姓名 年齡 -->
                                        <div class="add_person_content">
                                            <p class="add_add_person_name">
                                                ${myJson[0].Attend_data[i].Joiner_name}
                                            </p>
                                            <p class="add_add_person_old">
                                                ${myJson[0].Attend_data[i].Joiner_age}
                                            </p>

                                        </div>
                                        <!-- email -->
                                        <div class="my_icon">
                                            <i class="fa-regular fa-envelope"></i>
                                            <p class="add_add_person_Email">
                                                ${myJson[0].Attend_data[i].Joiner_email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover_user_about_me">
                                    <p>${myJson[0].Attend_data[i].Joiner_aboutme}</p>
                                </div>

                                <div class="post_activity_num">
                                    <a href="./user_personal.html?id=${myJson[0].Attend_data[i].Joiner_id}" target="view_window">詳細資料</a>
                                </div>
                            </div>
                        </div>
                        `
                    }
                return str
               }
                
            }
            //生成留言
            function function_Comment_data()
            {
                let str = ''
                if(myJson[0].Comment_data==[])
                {
                    return ''
                }
                else
                {
                    for(let i =0;i<myJson[0].Comment_data.length;i++)
                    {
                        str +=
                        `
                        <div class="activity__message_detail_out">
                            <div class="activity__message_detail">
                                <!-- 留言者照片 -->
                                <div class="activity__questioner_row">
                                    <div class="activity__questioner_img for_hover_user_out" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Comment_data[i].Comment_img});" date-customer_id="${myJson[0].Comment_data[i].Commenter_id}">
                                        <!-- 滑過觀看使用者資料 -->
                                        <div class="hover_user_out" id="hover_user_out">
                                            <!-- 頭貼／姓名／年齡/mail -->
                                            <div class="row_left">
                                                <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Comment_data[i].Comment_img});">
                                                    <div class="male_icon">
                                                        <p>${myJson[0].Comment_data[i].Comment_sex.substr(0,1)}</p>
                                                    </div>
                                                </div>
                                                <div class="add_person_content_box">
                                                    <!--   姓名 年齡 -->
                                                    <div class="add_person_content">
                                                        <p class="add_add_person_name">
                                                            ${myJson[0].Comment_data[i].Comment_name}
                                                        </p>
                                                        <p class="add_add_person_old">
                                                            ${myJson[0].Comment_data[i].Comment_age}
                                                        </p>

                                                    </div>
                                                    <!-- email -->
                                                    <div class="my_icon">
                                                        <i class="fa-regular fa-envelope"></i>
                                                        <p class="add_add_person_Email">
                                                            ${myJson[0].Comment_data[i].Comment_email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hover_user_about_me">
                                                <p>${myJson[0].Comment_data[i].Comment_aboutme}</p>
                                            </div>

                                            <div class="post_activity_num">
                                                <a href="./user_personal.html?id=${myJson[0].Comment_data[i].Comment_id}" target="view_window">詳細資料</a>
                                            </div>

                                        </div>
                                    </div>
                                    <!-- 留言者名稱內容 -->
                                    <div class="activity__questioner_clo">
                                        <p class="activity__questioner_name">${myJson[0].Comment_data[i].Comment_name}</p>
                                        <p class="activity__questioner_content">${myJson[0].Comment_data[i].Comment_content}</p>
                                    </div>
                                </div>

                                <div class="activity__question_time">${myJson[0].Comment_data[i].Comment_time.replace('T',' ')}</div>

                            </div>

                        </div>
                        `
                    }
                    return str
                }
                
            }
            //生成檢視報名者資料
            function function_add_person_out()
            {
                let str = ''
                if(myJson[0].Attend_data==[])
                {
                    return str
                }
               else
               {
                    console.log(sessionStorage.getItem('Customer_id'))
                    console.log(myJson[0].PostActicicy_data[0].Poster_id)
                    console.log(myJson[0].PostActicicy_data[0].Poster_id == sessionStorage.getItem('Customer_id'))
                    for(let i =0;i<myJson[0].Attend_data.length;i++)
                    {
                        str +=
                        `
                        <!-- 報名者名單卡片１ -->
                        <div class="add_person_card">
                            <!-- 卡片左邊 -->
                            <div class="row_left">
                                <div class="activity_author_img for_hover_user_out" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Joiner_img});${myJson[0].Attend_data[i].Attend_state==true?'border:3px solid #21CD24;':'border:;'}">
                                    <div class="male_icon">
                                        <p>${myJson[0].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                    </div>
                                    <!-- 滑過觀看使用者資料 -->
                                    <div class="hover_user_out" id="hover_user_out">
                                        <!-- 頭貼／姓名／年齡/mail -->
                                        <div class="row_left">
                                            <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Joiner_img});">
                                                <div class="male_icon">
                                                    <p>${myJson[0].Attend_data[i].Joiner_sex.substr(0,1)}</p>
                                                </div>
                                            </div>
                                            <div class="add_person_content_box">
                                                <!--   姓名 年齡 -->
                                                <div class="add_person_content">
                                                    <p class="add_add_person_name">
                                                        ${myJson[0].Attend_data[i].Joiner_name}
                                                    </p>
                                                    <p class="add_add_person_old">
                                                        ${myJson[0].Attend_data[i].Joiner_age}
                                                    </p>

                                                </div>
                                                <!-- email -->
                                                <div class="my_icon">
                                                    <i class="fa-regular fa-envelope"></i>
                                                    <p class="add_add_person_Email">
                                                        ${myJson[0].Attend_data[i].Joiner_email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hover_user_about_me">
                                            <p>${myJson[0].Attend_data[i].Joiner_aboutme}</p>
                                        </div>

                                        <div class="post_activity_num">
                                            <a href="./user_personal.html?id=${myJson[0].Attend_data[i].Joiner_id}" target="view_window">詳細資料</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="add_person_content_box">
                                    <!--   姓名 年齡 -->
                                    <div class="add_person_content">
                                        <p class="add_add_person_name">
                                            ${myJson[0].Attend_data[i].Joiner_name}
                                        </p>
                                        <p class="add_add_person_old">
                                            ${myJson[0].Attend_data[i].Joiner_age}
                                        </p>

                                    </div>
                                    <!-- email -->
                                    <div class="my_icon">
                                        <i class="fa-regular fa-envelope"></i>
                                        <p class="add_add_person_Email">
                                            ${myJson[0].Attend_data[i].Joiner_email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            ${sessionStorage.getItem('Customer_id')==document.getElementById('activity_content_out').dataset.poster_id?(myJson[0].Attend_data[i].Attend_state==true?`<div class="agree_btn_out"><div class="attend_btn"><p>已參加</p></div></div>`:`<div class="agree_btn_out"><div class="yes_btn" data-joiner_name="${myJson[0].Attend_data[i].Joiner_name.toString()}" data-joiner_id="${myJson[0].Attend_data[i].Joiner_id.toString()}" data-attend_id="${myJson[0].Attend_data[i].Attend_id.toString()}"><p>同意</p></div></div>`):''}
                            </div>
                        `
                    }
                return str
               }
                
            }
            document.querySelector('#activity_display').innerHTML=
            `
            <div class="activity_content_out" id="activity_content_out" data-postactivity_id="${myJson[0].PostActicicy_data[0].PostActivity_id.toString()}" data-poster_id="${myJson[0].PostActicicy_data[0].Poster_id.toString()}">
            <div class="activity_img border_bottom_gray">
                <!-- 關閉此頁按鈕 -->
                <div class="activity_display_close" id="activity_display_close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            
            <!-- 發文者資訊 -->
            <div class="activity_author">
           
                <!-- 點選觀看個人介紹 -->
                <div class="activity_author_img for_hover_user_out" id="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].PostActicicy_data[0].Poster_img})" date-customer_id="${myJson[0].PostActicicy_data[0].Poster_id.toString()}">
                    <!-- 滑過觀看使用者資料 -->
                    <div class="hover_user_out" id="hover_user_out">
                        <!-- 頭貼／姓名／年齡/mail -->
                        <div class="row_left">
                            <div class="activity_author_img" style="background-image: url(${'http://20.187.74.2/FileUpload/'+myJson[0].PostActicicy_data[0].Poster_img});">
                                <div class="male_icon">
                                    <p>${myJson[0].PostActicicy_data[0].Poster_sex.substr(0,1)}</p>
                                </div>
                            </div>
                            <div class="add_person_content_box">
                                <!--   姓名 年齡 -->
                                <div class="add_person_content">
                                    <p class="add_add_person_name">
                                        ${myJson[0].PostActicicy_data[0].Poster_name}
                                    </p>
                                    <p class="add_add_person_old">
                                        ${myJson[0].PostActicicy_data[0].Poster_age}
                                    </p>

                                </div>
                                <!-- email -->
                                <div class="my_icon">
                                    <i class="fa-regular fa-envelope"></i>
                                    <p class="add_add_person_Email">
                                        ${myJson[0].PostActicicy_data[0].Poster_email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="hover_user_about_me">
                            <p>${myJson[0].PostActicicy_data[0].Poster_aboutme}</p>
                        </div>

                        <div class="post_activity_num">
                            <a href="./user_personal.html?id=${myJson[0].PostActicicy_data[0].PostActicicy_id}">詳細資料</a>
                        </div>

                    </div>

                </div>

                <div class="activity_author_detail">
                    <p>${myJson[0].PostActicicy_data[0].Poster_name}</p>
                    <p>${myJson[0].PostActicicy_data[0].Poster_email}</p>
                </div>
            </div>


            <div class="activity_content_box">

                <!-- 標題 -->
                <div class="activity_title_box">
                    <div class="activity_title">
                        <h3>${myJson[0].PostActicicy_data[0].Post_title}</h3>
                        <div class="my_icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>${myJson[0].PostActicicy_data[0].AllRegion_id}</p>&emsp;
                            <p>${myJson[0].PostActicicy_data[0].Place}</p>
                        </div>

                    </div>
                    <!-- ${(new Date(myJson[0].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now() && (new Date(myJson[0].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()<Date.now() && myJson[0].PostActicicy_data[0].Poster_id == sessionStorage.getItem('Customer_id')?'<div class="add_activity"><i class="fa-solid fa-plus"></i>我要報名</div>':''} -->
                </div>

                <!--關鍵字 -->
                <div class="activity_tag ">
                    <a  class="keyword">${myJson[0].PostActicicy_data[0].Sport_id}</a>
                    <a  class="keyword">${myJson[0].PostActicicy_data[0].PersonalAsk_id}</a>
                    ${myJson[0].PostActicicy_data[0].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].PostActicicy_data[0].Sex}</a>`}
                    <a  class="keyword_old">${myJson[0].PostActicicy_data[0].Age_rangefirst}歳至${myJson[0].PostActicicy_data[0].Age_rangeend}歳</a>
                    ${(new Date(myJson[0].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="keyword_startline">未開始報名</a>':''):'<a  class="keyword_deadline">已截止</a>'} 
                    
                </div>
                <!-- 內文 -->
                <div class="activity_content">
                    ${myJson[0].PostActicicy_data[0].PostActivity_content}
                </div>

                <!-- 報名和活動時間．報名者 -->
                <section class="activity_content_box_out">
                    <!-- 報名時間 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>報名期間</p>
                        </div>
                        <div class="activity_add_date">
                            <p class="activity_add_start_date">${myJson[0].PostActicicy_data[0].Start_time.replace('T',' ')}</p>
                            <p>至</p>
                            <p class="activity_add_end_date">${myJson[0].PostActicicy_data[0].End_time.replace('T',' ')}</p>
                        </div>
                    </div>

                    <!-- 活動時間 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>活動時間</p>
                        </div>
                        <div class="activity_date">
                            <p class="activity_tart_date">${myJson[0].PostActicicy_data[0].Activity_start_time.replace('T',' ')}</p>
                            <p>至</p>
                            <p class="activity_end_date">${myJson[0].PostActicicy_data[0].Activity_end_time.replace('T',' ')}</p>
                        </div>
                    </div>

                    <!-- 報名者 -->
                    <div class="activity_detail_box">
                        <div class="my_icon">
                            <span class="line_icon"></span>
                            <p>報名者</p>
                        </div>

                        <div class="activity_add_person">
                            <i class="fa-solid fa-user-group"></i>
                            <p>目前報名人數</p>
                            <p class="activity_add_person_num">${myJson[0].PostActicicy_data[0].accept_join_count}</p>
                            <p>/</p>
                            <p class="activity_mix_person_num">${myJson[0].PostActicicy_data[0].Need_people}</p>
                        </div>
                        <div class="activity_add_person_img_box">
                            ${
                                function_Attend_data()
                            }
                        </div>

                    </div>

                </section>

                <!-- 發文者使用區（要隱藏） -->
                <div class="activity_author_can_see">
                ${(new Date(myJson[0].PostActicicy_data[0].End_time.replace('T',' '))).getTime()>Date.now()&&(new Date(myJson[0].PostActicicy_data[0].Start_time.replace('T',' '))).getTime()<Date.now()&&sessionStorage.getItem('Customer_id') != myJson[0].PostActicicy_data[0].Poster_id?'<div class="add_activity"><i class="fa-solid fa-plus"></i>我要報名</div>':''}
                ${sessionStorage.getItem('Customer_id') == myJson[0].PostActicicy_data[0].Poster_id?
                `
                    <button class="view_activity_add_person" id="view_activity_add_person">檢視報名者資料</button>
                    `:''}
                    
                </div>





                <!-- 我要報名按鈕 -->
                <!-- <div class="add_activity">
                    <button>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <div>
                        我要報名
                    </div>
                </div> -->
            </div>

            <!-- 留言區 -->
            <section class="activity_message height_232px_overflow_hidden" id="activity_message">
                <div class="my_icon">
                    <i class="fa-solid fa-message"></i>
                    <p>留言區</p>
                </div>
                ${
                    function_Comment_data()
                }
            </section>
            <div class="see_all_message_box">
                    <p class="see_all_message">查看全部留言</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>

            <!--留言區 -->
            <div class="activity_user_message">
                <input type="text" class="message_box" placeholder="留言"></input>
                <i class="fa-regular fa-paper-plane"></i>
                <!-- <i class="fa-solid fa-star"></i> -->
                <!-- <i class="fa-solid fa-circle-plus"></i> -->
            </div>

        </div>
            `
            document.getElementById('add_person_out').innerHTML = function_add_person_out()


            document.getElementById('activity_display').classList.remove("display_none")
            document.body.style.overflow = 'hidden'

        })
        .then(function() {
            // 關閉活動詳細
            document.getElementById('activity_display_close').addEventListener('click',function()
            {
                document.getElementById('activity_display').classList.add("display_none")
                document.body.style.overflow = 'scroll'
            })
            

            // 當點擊檢視報名者，拿掉display none ,顯示報名者資訊頁-----
            $("#view_activity_add_person").click(function()
            {
                $("#activity_add_personal_display").removeClass("display_none")
            })
              
              // 報名者資訊頁面關閉
            $('#view_activity_add_person_close').click(function()
            {
                $('#activity_add_personal_display').addClass("display_none")
            })
            // // 當點擊頭像，拿掉display none ,顯示觀看他人介紹-----
            // $(".activity_card_img>img").click(function()
            // {
            //     $("#view_personal_display").removeClass("display_none")
            // })
                
            // // 觀看他人介紹關閉
            // $('#view_personal_close').click(function()
            // {
            //     $('#view_personal_display').addClass("display_none")
            // })


            //個人詳細資料連結
            // $('post_activity_num a').click(function (e) { 
            //     e.preventDefault();
            //     window.op
            // });

            let bool_see_all_message_box = false

            // 打開所有留言是否顯示
            if(document.querySelectorAll('.activity__message_detail_out').length<3)
            {
                $('.see_all_message_box').css('display', 'none');
            }


            // 打開所有留言
            $('.see_all_message_box').click(function (e) {
                e.preventDefault();
                if(bool_see_all_message_box == false)
                {   
                    $('.activity__message_detail_out').addClass('activity__message_detail_out_block');
                    $('.see_all_message').html('收合留言')
                    $('.see_all_message_box>i').css('transform', 'rotate(180deg)');
                    bool_see_all_message_box = true
                }
                else
                {
                    $('.activity__message_detail_out').removeClass('activity__message_detail_out_block');
                    $('.see_all_message').html('查看全部留言')
                    $('.see_all_message_box>i').css('transform', 'rotate(0deg)');
                    bool_see_all_message_box = false
                }
                
                
            });
            //檢視報名者資料之同意按鈕
            $('.yes_btn').click(function (e) { 
                e.preventDefault();
                const this_yes_btn = this
                //console.log(document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people p`).innerHTML)
                //console.log(document.getElementById('activity_content_out').dataset.poster_id)
                //console.log(this.parentNode.parentNode.childNodes[3].childNodes[1])
                
                if(confirm(`您確定讓 "${this.dataset.joiner_name}" 參加活動？`) == true)
                {
                    fetch('http://20.187.74.2/api/Attend_count',{
                        method:'PATCH',
                        headers:
                        {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body:JSON.stringify(
                            {
                                'Attend_count_id':parseInt(this.dataset.attend_id),
                                'Customer_id':parseInt(document.getElementById('activity_content_out').dataset.poster_id)
                            }
                        )
                        })
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (body) {
                            if(body == 1)
                            {
                                alert('參加成功')
                                this_yes_btn.parentNode.parentNode.childNodes[3].childNodes[1].style.border = '3px solid #21CD24'
                                this_yes_btn.innerHTML = '已參加'
                                this_yes_btn.classList.add('attend_btn')
                                this_yes_btn.classList.remove('yes_btn')
                                document.querySelector(`.activity_add_person_img[date-customer_id="${this_yes_btn.dataset.joiner_id}"]`).style.border = '3px solid #21CD24'
                                document.querySelector('.activity_add_person_num').innerHTML = parseInt(document.querySelector('.activity_add_person_num').innerHTML)+1
                                document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people`).childNodes[3].innerHTML = parseInt(document.querySelector(`.activity_card_box[data-postactivity_id="${document.querySelector('.activity_content_out').dataset.postactivity_id}"] .num-people`).childNodes[3].innerHTML)+1
                            }
                            else
                            {
                                alert('參加失敗，超過報名人數')
                            }
                        })
                        .catch(function(err){
                            console.log(err)
                        })
                }
                
            });
        })
        .catch(function(err){
            console.log(err)
        })
    });
})
.catch(function(err){
    console.log(err)
})







