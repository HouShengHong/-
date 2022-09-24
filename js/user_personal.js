// 預設一載入顯示我發起過的團
$(this).load(function(){
    $('.my_activity_card').addClass('display_block')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').addClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// 我發起過的團
$('#my_activity').click(function(){
    $('.my_activity_card').removeClass('display_none')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').addClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// 我報名的團
$('#my_join').click(function(){
    $('.my_activity_card').addClass('display_none')
    $('.my_join_card').removeClass('display_none')
    $('.my_like_card').addClass('display_none')

    $('#my_activity > label').removeClass('label_hover')
    $('#my_like > label').removeClass('label_hover')
    $('#my_join > label').addClass('label_hover')
})


// 我的最愛
$('#my_like').click(function(){
    $('.my_activity_card').addClass('display_none')
    $('.my_join_card').addClass('display_none')
    $('.my_like_card').removeClass('display_none')

    $('#my_activity > label').removeClass('label_hover')
    $('#my_like > label').addClass('label_hover')
    $('#my_join > label').removeClass('label_hover')
})

// 我發起過的團 動態生成－－－－－－－－－－－－－－－－－－
console.log(location.href.substring(44))

fetch(`http://20.187.74.2/api/Customer_center`,{
    method:'POST',
    headers:
    {
        "Content-Type": "application/json;charset=utf-8"
    },
    body:JSON.stringify(
        {
            // 'Local_customer_id':8
            'Local_customer_id':location.href.substring(44)
        }
    )
})
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    console.log(myJson)
    console.log(myJson[0].Attend_data)
    // 我的最愛
    console.log(myJson[0].Like_data)
    console.log(myJson[0].Like_data.length == 0)

    let str = ''
    if(myJson[0].Post_data.length==[])
    {
        document.getElementById("my_activity_card").innerHTML +=
        `<div class="like_nothing my_activity_card ">
        <p>目前沒有發起任何文章，發文發起來！</p>
        </div>`
        return str
    }

    else{
    
        for(let i = 0;i<myJson[0].Post_data.length;i++)
         {
        document.getElementById("my_activity_card").innerHTML +=
    `
    <div class="grid-container3 my_activity_card" data-postactivity_id = '${myJson[0].Post_data[i].PostActivity_id}'>
        <div class="activity_card_box cardleft" id="activity_detail_display_1">
            <div class="activity_card">
                <div class="activity_card_img">
                    <!-- 點選觀看個人介紹 -->
                    <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Post_data[i].Customer_img}">   
                </div>
                <!-- 卡片１ -->
                <div class="activity_card_content">
                    <div class="col">
                        <div class="row-1">
                            <p>${myJson[0].Post_data[i].Customer_name}</p>
                            <div class="row-1_right">
                               
                                ${(new Date(myJson[0].Post_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Post_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
                                <div class="mycard-icon " id="like">
                                    <i class="fa-solid fa-heart"></i>
                                    <p>${myJson[0].Post_data[i].Like_count}</p>
                                </div>
                            </div>


                        </div>
                        <h3 class="mycard-title">${myJson[0].Post_data[i].Post_title}</h3>

                        <div class="row-2">
                            <div class="mycard-icon" id="address">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>${myJson[0].Post_data[i].AllRegion_id}</p> &emsp;
                                <p>${myJson[0].Post_data[i].Place}</p>
                            </div>

                            <div class="mycard-icon" id="date">
                                <i class="fa-regular fa-clock"></i>
                                <p>${myJson[0].Post_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Post_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Post_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Post_data[i].Activity_end_time.substring(8,10)}</p>
                            </div>
                        </div>



                        <div class="row-3">
                            <div class="keyword-box">
                            <a  class="keyword">${myJson[0].Post_data[i].Sport_id}</a>
                            <a  class="keyword">${myJson[0].Post_data[i].PersonalAsk_id}</a>
                            ${myJson[0].Post_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Post_data[i].Sex}</a>`}

                            </div>

                            <div class="msg-num-box">
                                <div class="mycard-icon rwd_display" id="msg">
                                    <i class="fa-solid fa-comment-dots"></i>
                                    <p>${myJson[0].Post_data[i].Comment_count}</p>
                                </div>
                                <div class="mycard-icon num-people rwd_display">
                                    <i class="fa-solid fa-user"></i>
                                    <p>${myJson[0].Post_data[i].Join_count}</p>
                                <p>/</p>
                                <p>${myJson[0].Post_data[i].Need_people}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
    </div>
    
</div>
    `
    }
    }
    
})




// 我參加過的團 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
fetch(`http://20.187.74.2/api/Customer_center`,{
    method:'POST',
    headers:
    {
        "Content-Type": "application/json;charset=utf-8"
    },
    body:JSON.stringify(
        {
            // 'Local_customer_id':8
            'Local_customer_id':location.href.substring(44)
        }
    )
})
.then(function(response) {
    return response.json()
})
.then(function(myJson) {

    console.log(myJson[0].Attend_data)
    let str = ''
    if(myJson[0].Attend_data.length==[])
    {
        document.getElementById("my_join_card").innerHTML +=
        `<div class="like_nothing my_join_card ">
        <p>目前沒有參加任何活動，快去加入他人的活動吧！</p>
        </div>`
        return str
        
    }

    else{
    
        for(let i = 0;i<myJson[0].Attend_data.length;i++)
         {
            // console.log(myJson[0].Attend_data[i].Customer_img);
        document.getElementById("my_join_card").innerHTML +=
    `
    <div class="grid-container3 my_join_card" data-postactivity_id = '${myJson[0].Attend_data[i].PostActivity_id}'>
    
        <div class="activity_card_box cardleft" id="activity_detail_display_1">
            <div class="activity_card">
                <div class="activity_card_img">
                    <!-- 點選觀看個人介紹 -->
                    <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Attend_data[i].Customer_img}">   
                </div>
                <!-- 卡片１ -->
                <div class="activity_card_content">
                    <div class="col">
                        <div class="row-1">
                            <p>${myJson[0].Attend_data[i].Customer_name}</p>
                            <div class="row-1_right">
                               
                                ${(new Date(myJson[0].Attend_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Attend_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
                                <div class="mycard-icon " id="like">
                                    <i class="fa-solid fa-heart"></i>
                                    <p>${myJson[0].Attend_data[i].Like_count}</p>
                                </div>
                            </div>


                        </div>
                        <h3 class="mycard-title">${myJson[0].Attend_data[i].Post_title}</h3>

                        <div class="row-2">
                            <div class="mycard-icon" id="address">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>${myJson[0].Attend_data[i].AllRegion_id}</p> &emsp;
                                <p>${myJson[0].Attend_data[i].Place}</p>
                            </div>

                            <div class="mycard-icon" id="date">
                                <i class="fa-regular fa-clock"></i>
                                <p>${myJson[0].Attend_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Attend_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Attend_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Attend_data[i].Activity_end_time.substring(8,10)}</p>
                            </div>
                        </div>



                        <div class="row-3">
                            <div class="keyword-box">
                            <a  class="keyword">${myJson[0].Attend_data[i].Sport_id}</a>
                            <a  class="keyword">${myJson[0].Attend_data[i].PersonalAsk_id}</a>
                            ${myJson[0].Attend_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Attend_data[i].Sex}</a>`}

                            </div>

                            <div class="msg-num-box">
                                <div class="mycard-icon rwd_display" id="msg">
                                    <i class="fa-solid fa-comment-dots"></i>
                                    <p>${myJson[0].Attend_data[i].Comment_count}</p>
                                </div>
                                <div class="mycard-icon num-people rwd_display">
                                    <i class="fa-solid fa-user"></i>
                                    <p>${myJson[0].Attend_data[i].Join_count}</p>
                                <p>/</p>
                                <p>${myJson[0].Attend_data[i].Need_people}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
    </div>
    
    </div>
    `
    }
    }
    
})


// 會員資料 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
fetch(`http://20.187.74.2/api/Customer_center`,{
    method:'POST',
    headers:
    {
        "Content-Type": "application/json;charset=utf-8"
    },
    body:JSON.stringify(
        {
            // 'Local_customer_id':8
            'Local_customer_id':location.href.substring(44)
        }
    )
})
.then(function(response) {
    return response.json()
})
.then(function(myJson) {

    console.log(myJson[0].Like_data)
    let str = ''
    if(myJson[0].Like_data.length ==[])
    {
        // console.log('我在這裡');
        document.getElementById("my_like_card").innerHTML +=
        `<div class="like_nothing my_like_card ">
        <p>目前沒有任何按讚紀錄，快去尋找你感興趣的文章！</p>
        </div>`
            return str
    }
    
    else{
    
        for(let i = 0;i<myJson[0].Like_data.length;i++)
         {
            // console.log(myJson[0].Attend_data[i].Customer_img);
        document.getElementById("my_like_card").innerHTML +=
    `
    <div class="grid-container3 my_join_card" data-postactivity_id = '${myJson[0].Like_data[i].PostActivity_id}'>
    
        <div class="activity_card_box cardleft" id="activity_detail_display_1">
            <div class="activity_card">
                <div class="activity_card_img">
                    <!-- 點選觀看個人介紹 -->
                    <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Like_data[i].Customer_img}">   
                </div>
                <!-- 卡片１ -->
                <div class="activity_card_content">
                    <div class="col">
                        <div class="row-1">
                            <p>${myJson[0].Like_data[i].Customer_name}</p>
                            <div class="row-1_right">
                               
                                ${(new Date(myJson[0].Like_data[i].End_time.replace('T',' '))).getTime()>Date.now()?((new Date(myJson[0].Like_data[i].Start_time.replace('T',' '))).getTime()>Date.now()?'<a  class="activity_card_startline">未開始報名</a>':''):'<a  class="activity_card_deadline">已截止</a>'}
                              
                                <div class="mycard-icon " id="like">
                                    <i class="fa-solid fa-heart"></i>
                                    <p>${myJson[0].Like_data[i].Like_count}</p>
                                </div>
                            </div>


                        </div>
                        <h3 class="mycard-title">${myJson[0].Like_data[i].Post_title}</h3>

                        <div class="row-2">
                            <div class="mycard-icon" id="address">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>${myJson[0].Like_data[i].AllRegion_id}</p> &emsp;
                                <p>${myJson[0].Like_data[i].Place}</p>
                            </div>

                            <div class="mycard-icon" id="date">
                                <i class="fa-regular fa-clock"></i>
                                <p>${myJson[0].Like_data[i].Activity_start_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_start_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_start_time.substring(8,10)} 至${myJson[0].Like_data[i].Activity_end_time.substring(0,4)}/${myJson[0].Like_data[i].Activity_end_time.substring(5,7)}/${myJson[0].Like_data[i].Activity_end_time.substring(8,10)}</p>
                            </div>
                        </div>



                        <div class="row-3">
                            <div class="keyword-box">
                            <a  class="keyword">${myJson[0].Like_data[i].Sport_id}</a>
                            <a  class="keyword">${myJson[0].Like_data[i].PersonalAsk_id}</a>
                            ${myJson[0].Like_data[i].Sex=='皆可'?'':`<a  class="keyword_male">限${myJson[0].Like_data[i].Sex}</a>`}

                            </div>

                            <div class="msg-num-box">
                                <div class="mycard-icon rwd_display" id="msg">
                                    <i class="fa-solid fa-comment-dots"></i>
                                    <p>${myJson[0].Like_data[i].Comment_count}</p>
                                </div>
                                <div class="mycard-icon num-people rwd_display">
                                    <i class="fa-solid fa-user"></i>
                                    <p>${myJson[0].Like_data[i].Join_count}</p>
                                <p>/</p>
                                <p>${myJson[0].Like_data[i].Need_people}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
    </div>
    
    </div>
    `
    }
        }
    
})




// 會員資料 動態生成 －－－－－－－－－－－－－－－－－－－－－－－－－－
fetch(`http://20.187.74.2/api/Customer_center`,{
    method:'POST',
    headers:
    {
        "Content-Type": "application/json;charset=utf-8"
    },
    body:JSON.stringify(
        {
            // 'Local_customer_id':8
            'Local_customer_id':location.href.substring(44)
        }
    )
})
.then(function(response) {
    return response.json()
})
.then(function(myJson) {

    console.log(myJson[0].Customer_data)
    // let str = ''
    // if(myJson[0].Customer_data.length ==[])
    // {
    //     // console.log('我在這裡');
    //     document.getElementById("my_like_card").innerHTML +=
    //     `<div class="like_nothing my_like_card ">
    //     <p>目前沒有任何按讚紀錄，快去尋找你感興趣的文章！</p>
    //     </div>`
    //         return str
    // }
    
    // for(let i = 0;i<myJson[0].Attend_data.length;i++)
    //      {
        document.getElementById("grid-container").innerHTML +=
    `
    <!-- 簡略會員中心 -->

    

        <div class="place1">
            <img src="${'http://20.187.74.2/FileUpload/'+myJson[0].Customer_data[0].Images}" class="circular--square" alt="大頭貼" width="80" height="80">
        </div>

        <div class="place2">
       
            <label>${myJson[0].Customer_data[0].Name} | ${ ((new Date()).getFullYear())- myJson[0].Customer_data[0].Birthday.substring(0,4)}</label>
        </div>

        <div class="place3">
            <img src="./img/gmail.png" alt="" width="26" height="26">

        </div>

        <div class="place4">
            <label>${myJson[0].Customer_data[0].Email}</label>
        </div>

        <div class="place5">
            <label for="">關於我</label>
        </div>

        <div class="place6">
            <label>${myJson[0].Customer_data[0].About_me}</label>
        </div>

        <div class="place7">
            <input class="button_edit" type="button" value="編 輯">
        </div>



    `

    document.getElementById("grid-container2").innerHTML +=
    `

        <div class="place_1">
            <div>
                <label class="box2_lable4">姓名</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[0].Customer_data[0].Name}</label>
            </div>
            <br>
            <hr>
        </div>

        <div class="place_2">
            <div>
                <label class="box2_lable4">生日</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[0].Customer_data[0].Birthday.substring(0,4)}/${myJson[0].Customer_data[0].Birthday.substring(5,7)}/${myJson[0].Customer_data[0].Birthday.substring(8,10)}</label>
            </div>
            <br>
            <hr>
        </div>

        <div class="place_3">
            <div>
                <label class="box2_lable4">帳號</label>
            </div>
            <br>
            <div>
                <label class="personal_information">${myJson[0].Customer_data[0].Email}</label>
            </div>
            <br>
            <hr>
        </div>


        <!-- 卡片區 -->


    `

    
    // }
    
})



