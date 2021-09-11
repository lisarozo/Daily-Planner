var currentTime = moment().format('MMM Do YYYY')
var timeEl = document.getElementById("currentDay")
var currentHour = parseInt(moment().format('HH'))
// var currentHour = 10

timeEl.textContent = currentTime;
// console.log(currentTime, currentHour)

for(i=9; i<=17; i++){
    var textareaEl = document.getElementById(i)

    if(i<currentHour){
        textareaEl.setAttribute("class", "col-8 past")
    }else if(i == currentHour) {
        textareaEl.setAttribute("class", "col-8 present")
    }else{
        textareaEl.setAttribute("class", "col-8 future")
    }

    var buttonEl = document.getElementById("btn-" + i)
    buttonEl.addEventListener("click", saveToLocalStorage)
    console.log(textareaEl)
}

function saveToLocalStorage(event) {
    event.preventDefault()
    console.log(event.target)
}