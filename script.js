const secondHand = document.querySelector(`.second`);
const minHand = document.querySelector(`.min`);
const hourHand = document.querySelector(`.hour`);


function setTime(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegree = ((second/60) *360 + 90);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = (((min / 60) * 360) + ((second/60)*6) + 90);
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setTime, 1000);
setTime();
