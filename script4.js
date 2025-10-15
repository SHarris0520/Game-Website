const scoreSpan = document.querySelector('.result6');

let score = 0;

function scoreUpdate(){
  score++;
  scoreSpan.textContent = "Score: " + score + "/5";
};


function correctAnswerA(a,b,c){
let AnswerA = document.getElementById(a);
AnswerA.addEventListener("click", function(){
let x = "You chose the right answer: 6";
document.querySelector('.result5').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;
scoreUpdate();
});

let AnswerB = document.getElementById(b);
AnswerB.addEventListener("click", function(){
let x = "You chose the wrong answer. The correct answer is 6.";
document.querySelector('.result5').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

let AnswerC = document.getElementById(c);
AnswerC.addEventListener("click", function(){
let x = "You chose the wrong answer. The correct answer is 6.";
document.querySelector('.result5').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

}



function correctAnswerB(a,b,c,d,e,f){
let AnswerA = document.getElementById(a);
AnswerA.addEventListener("click", function(){
let x = d;
document.querySelector(f).innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

let AnswerB = document.getElementById(b);
AnswerB.addEventListener("click", function(){
let x = e;
document.querySelector(f).innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;
scoreUpdate();
});

let AnswerC = document.getElementById(c);
AnswerC.addEventListener("click", function(){
let x = d;
document.querySelector(f).innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

}

function correctAnswerC(a,b,c){
let AnswerA = document.getElementById(a);
AnswerA.addEventListener("click", function(){
let x = "You chose the wrong answer. The correct answer is 'Meredith, I am so sorry.'";
document.querySelector('.result2').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

let AnswerB = document.getElementById(b);
AnswerB.addEventListener("click", function(){
let x = "You chose the wrong answer. The correct answer is 'Meredith, I am so sorry.'";
document.querySelector('.result2').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;

});

let AnswerC = document.getElementById(c);
AnswerC.addEventListener("click", function(){
let x = "You chose the right answer: 'Meredith, I am so sorry.'";
document.querySelector('.result2').innerHTML = x;
document.getElementById(a).disabled = true;
document.getElementById(b).disabled = true;
document.getElementById(c).disabled = true;
scoreUpdate();
});

}


correctAnswerB("myBtn1","myBtn2","myBtn3","You chose the wrong answer. The correct answer is Colin Marlow.","You chose the right answer: Colin Marlow",".result1");

correctAnswerC("myBtn4","myBtn5","myBtn6");

correctAnswerB("myBtn7","myBtn8","myBtn9","You chose the wrong answer. The correct answer is Third Grade.","You chose the right answer: Third Grade",".result3");

correctAnswerB("myBtn10","myBtn11","myBtn12","You chose the wrong answer. The correct answer is 'He traces '007' in her hand.'","You chose the right answer: 'He traces '007' in her hand.'",".result4");

correctAnswerA("myBtn13","myBtn14","myBtn15");
