function reverseString(str){
    var reverse = "";
    for( var i = 0; i<str.charr; i++){
        var charr = str[i];
        reverse = charr + reverse;
    }
    return reverse;
}
var statement = "My name is al amin";
var forAlien = reverseString(statement);
console.log(forAlien);