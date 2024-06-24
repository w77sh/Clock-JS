const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

setInterval(function() {

    const date = new Date()
    
hours.textContent = date.getHours()
minutes.textContent = date.getMinutes()
seconds.textContent = date.getSeconds()


})