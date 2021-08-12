let marriage = "13 Dec 2021";

const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minsEle = document.getElementById('mins');
const secondsEle = document.getElementById('seconds');


function countdown(){
    const marriageDate = new Date(marriage);
    const currentDate = new Date();

    const Totalseconds = (marriageDate-currentDate) / 1000;
    const days = Math.floor(Totalseconds / 3600 / 24)
    const hours = Math.floor(Totalseconds/3600) % 24 ;
    const minutes = Math.floor(Totalseconds/60) %60 ;
    const seconds =  Math.floor(Totalseconds%60) ;


    daysEle.innerHTML = days;
    hoursEle.innerHTML = formatTime(hours);
    minsEle.innerHTML = formatTime(minutes);
    secondsEle.innerHTML = formatTime(seconds);

    console.log(days,hours,minutes,seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);
countdown();