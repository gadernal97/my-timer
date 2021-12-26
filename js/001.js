var sec=0
var min=0
var hr=0
var i;
function twoDigits(element){
    if(element<10){
        return '0'+(element)
    }else{
        return (element)
    }
}
function star(){
    starTimer()
    i=setInterval(starTimer,1000)
}
function pause(){
    clearInterval(i)
}
function stop(){
    let time=document.getElementsByTagName('h1')[0]
    clearInterval(i)
    sec++
    min++
    hr++
    time.innerHTML="00:00:00"
}
function starTimer(){
    let time=document.getElementsByTagName('h1')[0]
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            hr++
            min=0
        }
    }
    time.innerHTML=twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec)
}