var nam = [2, 3, 4, 3, 2, 7, 5, 6, 7, 8, 9,];
var uniqueName = [];
for(var i = 0; i<nam.length; i ++){
    var element = nam[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);