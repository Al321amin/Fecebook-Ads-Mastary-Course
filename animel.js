var defth = 15;
var animel = 0;
if(defth<=10){
    animel = defth * 50;
}
else if (defth <= 20) {
    var firstPart = 10 * 50;
    var remaining = defth - 10
    var sacebdPart = remaining * 100;
    animel = firstPart + sacebdPart;
}
else{
    var firstPart = 10*50;
    var sacebdPart = 10*100;
    var remaining = defth - 20;
    var thirtPart = remaining * 300;
    animel = firstPart + sacebdPart + thirtPart;
}
console.log(animel);