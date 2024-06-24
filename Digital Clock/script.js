const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

setInterval(function() {

    const date = new Date()
    
hours.textContent = date.getHours()
minutes.textContent = date.getMinutes()
seconds.textContent = date.getSeconds()


})

/*const timeElement = document.getElementById("clock");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000); */