let date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/

//日期范围
laydate.render
(
    {
        elem: '#Start_time_End_time',
        type: 'datetime',
        range: ['#Start_time', '#End_time'],
        min:0,
        done: function(value, date)
        {
            // console.log(value.slice(0,19))
            // console.log(date_reg.test(value.slice(0,19)))
            // console.log(value.slice(22))
            // console.log(date_reg.test(value.slice(22)))
            // console.log((new Date(value.slice(22))))
            // console.log(((document.getElementById('Activity_start_time').value)))
            // console.log((new Date((document.getElementById('Activity_start_time').value))))
            //console.log((new Date(value.slice(document.getElementById('Activity_start_time').value))))
            if((new Date(value.slice(22)))<(new Date((document.getElementById('Activity_start_time').value))))
            {
                document.getElementById('time_keep').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
            }
            else
            {
                document.getElementById('time_keep').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">活動開始時間必需大於報名結束時間</span> '
            }
        }
    }
); 
laydate.render
(
    {
        elem: '#Activity_start_time_Activity_end_time',
        type: 'datetime',
        range: ['#Activity_start_time', '#Activity_end_time'],
        min:0,
        done: function(value, date)
        {
            // console.log(value.slice(0,19))
            // console.log(date_reg.test(value.slice(0,19)))
            // console.log(value.slice(22))
            // console.log(date_reg.test(value.slice(22)))
            if((new Date((document.getElementById('End_time').value)))<(new Date(value.slice(0,19))))
            {
                document.getElementById('time_keep').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
            }
            else
            {
                document.getElementById('time_keep').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">活動開始時間必需大於報名結束時間</span> '
            }
        }
    }
);  



