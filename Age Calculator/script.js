
var totalDays = document.querySelector("#day-slot");
var totalMonths = document.querySelector("#month-slot");
var totalYears = document.querySelector("#year-slot");
var form = document.querySelector("form");
var inputField = document.querySelectorAll("input");
var today = new Date();
var count;

function validate(variable,variableName){
    var selector = "."+ variableName + "-error-message";
    var error = document.querySelector(selector);
    error.textContent="";
   if(variable ==""){
        error.innerHTML = "This field is required";
        error.classList.remove("hidden");   
        count++;
        if(variableName== "day"){
            inputField[0].classList.add("error");
        }
        if(variableName== "month"){
            inputField[1].classList.add("error");
        }
        if(variableName== "year"){
            inputField[2].classList.add("error");
        }
    } 
}

function validCorrect(dayVariable, dayVariableName, monthVariable, monthVariableName){
  if(dayVariable > 31 ){
        var selector = "."+ dayVariableName +"-error-message";
        error = document.querySelector(selector);
        error.classList.remove("hidden");    
        error.innerHTML = "Must be a valid day"
        count++;
    }
    if(monthVariable > 12){
        var selector = "."+monthVariableName + "-error-message"
        error = document.querySelector(selector);
        error.classList.remove("hidden");    
        error.innerHTML = "Must be a valid month"
        count++;
    } 
}

function yearValid(yearVariable,yearVariableName, todayYear){
    var error = document.querySelector("."+ yearVariableName +"-error-message"); 
   if(yearVariable > todayYear ){
        error.textContent="";
        error.innerHTML = "Must be in the past"
        error.classList.remove("hidden");  
        count++;
    }    
}


form.addEventListener("submit",function(e){
    count=0;
    var day = document.querySelector("#date").value.trim();
    var month = (document.querySelector("#month").value.trim());
    var year = document.querySelector("#year").value.trim();
    var diffYear,diffMonth,diffDays;

    validate(year,"year");
    validate(month,"month");
    validate(day,"day");
    validCorrect(day,"day",month,"month");
    yearValid(year,"year", today.getFullYear());

  

    if(count> 0){
        e.preventDefault();
    }
    else{

        diffYear= Math.abs(year -today.getFullYear());
        diffMonth= (today.getMonth() - (month))+1;
        if(diffMonth<0){
            diffYear--;
            diffMonth=diffMonth+12;
        }

        diffDays= today.getDate()-day;
        if(diffDays<0){
            diffMonth--;
            diffDays+=30;
        }

        totalYears.innerHTML = diffYear;
        totalMonths.innerHTML = diffMonth;
        totalDays.innerHTML = diffDays;
    }
        
    })

