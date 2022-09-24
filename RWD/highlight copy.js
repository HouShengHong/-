

// var rwd_width=$(document.body).width();

// alert($(document.body).width());
// console.log(resiz_father_width);

// var resiz_father_width= $(window).resize(function(){
//     $(document.body).width();
//     });




    // window.addEventListener('load',function(){
        
        // $(document).ready(function() {

        
            function checkWidth() {
               
                // $(window).resize(function(){
                    var windowsize = $(window).width();

                    if (windowsize <= 500) {
                        
                        var prev=this.document.getElementById('prev'); 
                        var next=this.document.getElementById('next'); 
                        var highlight_card_out=this.document.getElementById('highlight_card_out')
                        console.log(highlight_card_out);
                    
                        // 滑鼠移入顯示左右按鈕
                        highlight_card_out.addEventListener("mouseenter",function() {
                      
                            next.style.display='block';
                            prev.style.display='block';
                            // 滑入站條自動播放
                            clearInterval(timer);
                            timer=null;
                            
                        })
                    
                        highlight_card_out.addEventListener('mouseleave',function() {
                            next.style.display='none';
                            prev.style.display='none';
                            // 移開自動播放
                            timer = setInterval(function(){
                                next.click();},2000 );
                            
                        })
                    
                    
                        // -------圓圈－－－－－－－－－－－－－－－-------
                        // 動態生成小圓
                        // var ul = highlight_card_out.querySelector('ul');
                        var ul = this.document.getElementById('highlight_list');
                        var ol = this.document.getElementById('circle')
                        //(圖片寬度) ul移動距離 圓圈索引號 ＊圖片寬度
                        var highlight_card_out_width=highlight_card_out.offsetWidth;
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
                    
                    
                                animate(ul,-index*highlight_card_out_width);
                            })
                            
                        }
                        // 給裡面被選中的小圓 加上class樣式
                        ol.children[0].className='current';
                        // 將第一張圖複製到最後
                        var first = ul.children[0].cloneNode(true);
                        ul.appendChild(first);
                    
                        var num=0;
                        // circle控制圓圈播放
                        var circle=0;
                        var ul_length=ul.children.length-1;
                        var ol_length=ol.children.length;
                        next.addEventListener('click',function(){
                            if(num == ul_length){
                                ul.style.left=0;
                                num =0;
                            }
                            num++;
                            // 如果circle==4 說明走到最後
                            animate(ul,-num*highlight_card_out_width);
                            
                            circle++;
                            
                            if(circle==ol_length){
                                circle=0;
                            }
                            circleChange();
                        })
                        // 左側按鈕
                        prev.addEventListener('click',function(){
                            if(num == 0){
                                ul.style.left=(-num)*highlight_card_out_width+'px';
                                num =ul.children.length-1;
                            }
                            num--;
                            // 如果circle==4 說明走到最後
                            animate(ul,-num*highlight_card_out_width);
                            
                            circle--;
                            
                            if(circle<0){
                                circle=ol_length-1;
                            }
                            circleChange();
                        })
                    
                            // 圓圈調用函數
                        function circleChange(){
                            for(var i =0; i<ol.children.length;i++){
                                ol.children[i].className='';
                            }
                            ol.children[circle].className='current';
                        }
                    
                        // 自動播放圖片
                        var timer = this.setInterval(function(){
                                next.click();
                    
                        },2000 )
                
                        }

                // })
                console.log('小魚啦！')
                // $(window).off("resize",checkWidth()); 
            }

            // function changetest(){
            //     var windowsize = $(window).width();
            //     if(windowsize<=500){
            //         console.log('小魚啦！')
            //     }
            //     console.log(windowsize)
            // }
            // checkWidth();
            // $(window).resize(checkWidth());
     
         

           $(window).resize(function(){
            checkWidth();
            });     
           
        // })


        	//jq的
  
            
        // 執行一次 一秒
        // var timer

        // $(window).resize(function(){
           
        //     window.clearTimeout(timer)
            
        //     timer = window.setTimeout(function() {
        //         checkWidth()//callback your coding
        //     }, 1000)
        // })

            
            
    
            // $(window).resize(checkWidth);
        
    // }

    // )
