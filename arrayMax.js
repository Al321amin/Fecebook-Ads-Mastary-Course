var marks = [ 23, 43, 65, 78, 98];
var marks = [0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Hights value is: ", max);