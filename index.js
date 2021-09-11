var currentTime = moment().format('MMM Do YYYY')
var timeEl = document.getElementById("currentDay")
var currentHour = parseInt(moment().format('HH'))
// var currentHour = 10
var local9 = localStorage.getItem('9AM')
console.log(local9)
timeEl.textContent = currentTime;
// console.log(currentTime, currentHour)
var textarea = document.getElementById(9)
textarea.value = local9;
// textarea.addEventListener('input', updateValue);

function updateValue(e) {
  var textContent = e.target.value;
  console.log(textContent)} 
for(i=9; i<=17; i++){
    var textareaEl = document.getElementById(i)
    if(textareaEl != null ){
        
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
}

function saveToLocalStorage(event) {
    event.preventDefault()
    console.log(event.target)
    // localStorage.setItem('9AM', textareaEl.value);
    // localStorage.setItem('10AM', textarea.value);
    // localStorage.setItem('11AM', textarea.value);
    // localStorage.setItem('12PM', textarea.value);
    // localStorage.setItem('13PM', textarea.value);
    // localStorage.setItem('14PM', textarea.value);
    // localStorage.setItem('15PM', textarea.value);
    // localStorage.setItem('16PM', textarea.value);
    // localStorage.setItem('17PM', textarea.value);
    // console.log(textarea.value)
}
