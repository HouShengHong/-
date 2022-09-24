// let date_reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)$/

laydate.render({
    elem: '#write_data_birthday',
    max: 0,
    done: function(value, date)
        {
            // console.log(value)
            // console.log(date_reg.test(value.slice(0,19)))
            // console.log(value.slice(22))
            // console.log(date_reg.test(value.slice(22)))
            // console.log((new Date(value.slice(22))))
            // console.log(((document.getElementById('Activity_start_time').value)))
            // console.log((new Date((document.getElementById('Activity_start_time').value))))
            //console.log((new Date(value.slice(document.getElementById('Activity_start_time').value))))
            if(date_reg.test(value + ' 00:00:00'))
            {
                document.getElementById('write_data_keep_time').innerHTML = '<img src="./img/post_keep_true.png" alt="" height="16" width="16" style> <span  style="color: rgb(34, 198, 0);">格式正確</span>'
            }
            else
            {
                document.getElementById('write_data_keep_time').innerHTML = '<img src="./img/post_keep_false.png" alt="" height="16" width="16" style> <span  style="color: rgb(216, 11, 11);">時間格式錯誤</span> '
            }
        }
  });