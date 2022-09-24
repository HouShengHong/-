document.querySelector('.left').addEventListener('click',function()
{
    let element = document.querySelector('.box3'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width');
    if(!(document.querySelector('.box2').style.left==`${parseInt(width)*(-4)}px`))
    {
        document.querySelector('.box2').style.left = `${parseInt(document.querySelector('.box2').style.left)-parseInt(width)}px` 
    }
})

document.querySelector('.right').addEventListener('click',function()
{
    let element = document.querySelector('.box3'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width');
    
    if(!(document.querySelector('.box2').style.left=='0px'))
    {
        document.querySelector('.box2').style.left = `${parseInt(document.querySelector('.box2').style.left)+parseInt(width)}px` 
    }
})