var billPrice = document.getElementById("Bill");
var numPple = document.getElementById("n-pple");
var button = document.getElementsByClassName("percentage");
var tipValue = document.getElementById("price-amount");
var total = document.getElementById("total-amount");
var errorText= document.getElementById("error-text");
var tipPercent;
var customText = document.getElementById("customt");
var count=false;
var previousi;

function handleCustomText(){
  tipPercent = customText.value.trim();
    console.log(tipPercent);

}

for(let i=0;i<5;i++){
    button[i].addEventListener("click",function(){   
      if(count === true){
        button[previousi].classList.remove("bg-colour");     
      }
      previousi = i;
      button[i].classList.add("bg-colour");
      tipPercent = button[i].innerText;
      count= true;
        
    })
}

numPple.addEventListener("input", function(e) {
    var inputValue = numPple.value.trim();
    if (inputValue === "0" || inputValue === "") {
      e.preventDefault();
      errorText.classList.remove("hidden");
    } else {
      console.log("Else has run");
      errorText.classList.add("hidden");
      tipValue.innerText = (parseFloat("0." + tipPercent) * parseFloat(billPrice.value)).toFixed(2);
      total.innerText =  "$"+ parseInt(inputValue) * parseFloat(tipValue.innerText);
    }
  });

  var resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click",function(){
    tipValue.innerText = "$0.00";
    total.innerText = "$0.00";

  })


