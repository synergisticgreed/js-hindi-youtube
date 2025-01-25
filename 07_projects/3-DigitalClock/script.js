const clock=document.querySelector('#clock')
//Time is showing after every seconds
setInterval(function(){
    let date=new Date
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString()
},1000)
