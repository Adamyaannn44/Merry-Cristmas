

let counteDate = new Date('dec 31, 2024 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = counteDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let a = Math.floor(gap / (days));
    let b = Math.floor((gap % (days)) / (hours));
    let c = Math.floor((gap % (hours)) / (minutes));
    let d = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = a;
    document.getElementById('hours').innerText = b;
    document.getElementById('minutes').innerText = c;
    document.getElementById('seconds').innerText = d;

}

setInterval(function(){
    countDown();
},1000)