let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#30a13f";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");


btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "2";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "3";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "4";
        tg.MainButton.show();
    }
});
btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "5";
        tg.MainButton.show();
    }
});
btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "6";
        tg.MainButton.show();
    }
});
btn7.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "7";
        tg.MainButton.show();
    }
});
btn8.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "8";
        tg.MainButton.show();
    }
});
btn9.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "9";
        tg.MainButton.show();
    }
});
btn10.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Перейти к оплате");
        item = "10";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});