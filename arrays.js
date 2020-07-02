var Array = [1,2,3,4];

function printReverse(arr){ //Reverses arrays
    let newArray = [];
    for(let i = Array.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

var stuff = [1,2,3,4];
var other = [1,1,1,1];

function isUniform(x){ //Takes an array and checks if all elements are the same
    let newarr = x[0];
    for(let i = 0; i < x.length; i++){
        if(newarr !== x[i]){
            return false;
        } 
    }
    return true;
}

var num = [1,2,3];
var another = [10,3,10,4];
var neg = [-5,100];

function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function max(arr){ //Finds the maximum number of the element in the array.
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        if(min < arr[i]){
            min = arr[i];
        }
    }
    return min;
}


let nums = [45,65,77,34];

nums.forEach(function(num){
    console.log(num);
})

function myForEach(arr, func){
    //loop through array
    for(let i = 0; i < arr.length; i++){
         //call func for each item in array
        func(arr[i]);
    }

}