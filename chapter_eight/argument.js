// function add(a,b){
//     var result = a+b
//     console.log(result)
// }

// add(44,55)


var arr1 =[1,2,3]
var arr2 = [2,4,55]
var arr3 = [66,66,66]

// var sum =0
// for(var i=0;i<arr1.length;i++){
//     sum+= arr1[i]
// }
// console.log(sum)

function sumOfArray(arr){
    var sum =0;
    for(var i= 0;i<arr.length;i++)
    {
        sum+=arr[i]

    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)