
     

    // function changetest(){
    //      $(window).width();
    // }
   
    
    var windowsize=0;



window.addEventListener('load',function(){



        var prev_web=this.document.getElementById('prev_web'); 
        var next_web=this.document.getElementById('next_web'); 
        var highlight_card_out_web=this.document.getElementById('highlight_card_out_web')

        // 卡片尺寸 大螢幕用
        var highlight_card_web=this.document.getElementById('highlight_card_web')

        // console.log(highlight_card_out);
    
        // 滑鼠移入顯示左右按鈕
        highlight_card_out_web.addEventListener("mouseenter",function() {
      
            next_web.style.display='block';
            prev_web.style.display='block';
            // 滑入暫停自動播放
            clearInterval(timer);
            timer=null;
            
        })
    
        highlight_card_out_web.addEventListener('mouseleave',function() {
            next_web.style.display='none';
            prev_web.style.display='none';
            // 移開自動播放
            timer = setInterval(function(){
                next_web.click();},2500 );
            
        })
    
    
        // -------圓圈－－－－－－－－－－－－－－－-------
        // 動態生成小圓
        // var ul = highlight_card_out.querySelector('ul');
        var ul = this.document.getElementById('highlight_list_web');
        var ol = this.document.getElementById('circle_web')
        //(圖片寬度) ul移動距離 圓圈索引號 ＊圖片寬度
        var highlight_card_out_width_web=highlight_card_out_web.offsetWidth;

        // 卡片尺寸
        var highlight_card_width_web=highlight_card_web.offsetWidth;


        // console.log(ul.children.length);
        // 迴圈生成
        for(var i=0 ; i <ul.children.length;i++){
            // 創建小圓(創立節點)
            var li = this.document.createElement('li');
            // 記錄圓圈索引號
            li.setAttribute('index',i)
            // 插入動態小圓（節點中插入節點）
            ol.appendChild(li);
    
            // 當點擊圓變色
            li.addEventListener('click',function(){
                //全部除掉樣式
                for(var i=0 ; i <ol.children.length;i++){
                     ol.children[i].className='';
                    }
                // 留下被選中的加入樣式
                this.className='current';
    
                // 點擊圓圈，移動圖片
    
                // 被點選圓圈索引
                 // ul移動距離 圓圈索引號 ＊圖片寬度
                var index = this.getAttribute('index'); 
                 num=index;
                 circle=index;
                console.log(index);
    
    
                animate(ul,-index*highlight_card_width_web);
            })
            
        }
        // 給裡面被選中的小圓 加上class樣式
        ol.children[0].className='current';
        // 將第一張圖複製到最後
        // var first = ul.children[0].cloneNode(true);
        // ul.appendChild(first);
    
        var num=0;
        // circle控制圓圈播放
        var circle=0;
        var ul_length=ul.children.length-1;
        var ol_length=ol.children.length;
        
        
        // 右側按鈕
        next_web.addEventListener('click',function(){
            if(num == ul_length-2){
                ul.style.left=0;
                num =0;
            }
            num++;

            // 如果circle==4 說明走到最後
            
            // if(windowsize>500){
            //     animate(ul,-num*(highlight_card_width+16));
            //     console.log(windowsize);
            // }

            animate(ul,-num*(highlight_card_width_web+16));
            
            circle++;
            
            if(circle==ol_length){
                circle=0;
            }
            circleChange();
        })


        // 左側按鈕
        prev_web.addEventListener('click',function(){

            if(num == 0){
                // 偵測尺寸
                
                ul.style.left=(-num)*highlight_card_width_web+'px';
                num =ul.children.length;
            }
            num--;
            // 如果circle==4 說明走到最後
            animate(ul,-num*(highlight_card_width_web+16));
            
            circle--;
            
            if(circle<0){
                circle=ol_length-1;
            }
            circleChange();
        })
    
            // 圓圈調用函數 選中加樣式 沒選其他都刪除樣式
        function circleChange(){
            for(var i =0; i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[circle].className='current';
        }
    
        // 自動播放圖片
        var timer = this.setInterval(function(){
                next_web.click();
    
        },2500 )
})
// }





// 螢幕拉縮，重新整理
$(window).resize(function(){
    
    windowsize=$(window).width();
    window.location.reload();   
    });