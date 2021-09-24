const day=document.getElementById("day");
const hours=document.getElementById("hours");
const minute=document.getElementById("minute");
const second=document.getElementById("second");
const newDate="27 Sep 2021";
function countDown()
{
    const newYearDate=new Date(newDate);
    console.log(newYearDate,"hello")
    const currentDate=new Date();
    const diff=(newYearDate-currentDate)/1000;
    console.log(diff);
    const Cdays=Math.floor(diff/(60*60*24));
    const Chours=Math.floor(diff/(60*60)%24)
    const Cmin=Math.floor(diff/(60)%60)
    const Csec=Math.floor(diff%60)
    console.log("Days",Cdays,);
    console.log("Days",Chours,);
    console.log("Days",Cmin,);
    console.log("Days",Csec,);
    day.innerHTML=check(Cdays),
    hours.innerHTML=check(Chours),
    minute.innerHTML=check(Cmin),
    second.innerHTML=check(Csec)
}
function check(num)
{
return (num<10) ? ('0'+num): num;
}
const audio=new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')
audio.play();
countDown();

setInterval(countDown,1000)
