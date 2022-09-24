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


//生成運動類別button    //於moreSearch_place中
fetch('./json/Sport.json')
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    // document.getElementById("moreSearch_card_box_Sport").innerHTML = ''
    for(let i = 0;i<myJson.length;i++)
    {
        document.getElementById("moreSearch_card_box_Sport").innerHTML +=
    `
    <button data-click="0" data-Sport_id="${myJson[i].Sport_id}">${myJson[i].Sport1}</button>
    `
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


//生成需求button //於moreSearch_place中
fetch('./json/PersonalAsk.json')
.then(function(response) {
    return response.json()
})
.then(function(myJson) {
    for(let i = 0;i<myJson.length;i++)
    {
        document.getElementById("moreSearch_card_PersonalAsk").innerHTML +=
    `
    <button data-click="0" data-PersonalAsk_id="${myJson[i].PersonalAsk_id}">${myJson[i].PersonalAsk1}</button>
    `
    }
})
.then(function() {
    //tag按鈕點擊效果
    $('.moreSearch_card_box button').click(function (e) 
    { 
        e.preventDefault()
        console.log('change')
        if(this.dataset.click==0)
        {
            this.classList.add('moreSearch_card_box_button_change')
            this.dataset.click=1
        }
        else
        {
            this.classList.remove('moreSearch_card_box_button_change')
            this.dataset.click=0
        }
    })
})
.catch(function(err){
    console.log(err)
})

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
    });
})
.catch(function(err){
    console.log(err)
})

// 進階搜尋向右拉出
let card_bool=true
$('#moreSearch_button').click(function (e) 
{ 
    e.preventDefault();
    if(card_bool)
    {
    $('#moreSearch_card').animate({width:"30%",padding:'2rem 5rem 2rem 2rem',minWidth:'432px'},500,'swing')
    $('#moreSearch_button').animate({left:"30%"},500,'swing')
    card_bool=false 
    }
    else
    {
        $('#moreSearch_card').animate({width:"0px",padding:'0px',minWidth:'0px'},500,'swing')
        $('#moreSearch_button').animate({left:"0px"},500,'swing')
    card_bool=true 
    }
})

$('#receive').click(function (e) 
{ 
    e.preventDefault();
  
        $('#moreSearch_card').animate({width:"0px",padding:'0px',minWidth:'0px'},500,'swing')
        $('#moreSearch_button').animate({left:"0px"},500,'swing')
    card_bool=true 
  
})


//點擊清除按鈕
$('#moreSearch_card_clear').click(function (e) { 
    e.preventDefault();
    $('.moreSearch_card_box button').removeClass('moreSearch_card_box_button_change');
    document.getElementById('choose_place').innerHTML = '偏好地區<i class="fa-solid fa-angle-down"></i>'
    not_limited.checked = true
    // console.log($( "#slider-range" ).slider( "values", 0 ))
    $( "#slider-range" ).slider( "values", 0 ,'15')
    $( "#slider-range" ).slider( "values", 1 ,'15')
    $( "#amount" ).html("不限年齡" )
    $( "#slider-range-old" ).slider( "values", 0 ,'1')
    $( "#slider-range-old" ).slider( "values", 1 ,'1')
    $( "#amount_old" ).html("不限人數" )
    for(let i=0;i<document.querySelectorAll('.moreSearch_card_box button').length;i++)
    {
        document.querySelectorAll('.moreSearch_card_box button')[i].dataset.click=0
    }
});



