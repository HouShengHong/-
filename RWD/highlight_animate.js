 // 開定時器
        // 封裝函數 obj 目標對象;target目標位置
        function animate(obj, target ,callback){
            //  obj.timer給不同的元素指定不同的定時器
            // 先清除以前的 在保留當前的 
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
            // 步長值定時器
            // var step =Math.ceil((target-obj.offsetLeft)/10);
            var step =(target-obj.offsetLeft)/10;
            // 如果step正數用cel 反之floor
            step = step > 0 ? Math.ceil(step):Math.floor(step);

                
            if(obj.offsetLeft == target){
            
            // 停止定時器
            clearInterval(obj.timer); 
            if(callback){
                callback();
            }
            }

            obj.style.left =obj.offsetLeft + step +'px';
        },15)
        }
 
   