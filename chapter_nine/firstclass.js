//First class js
function add(a,b)
{
    return a+b
}

//1.a function can be stored  in a variable
var sum =add
console.log(sum(5,6))
console.log(typeof(sum))
//2.a function can be stored  in a array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,6))
//3.a function can be stored  in a object
var obj  = {
    sum:add
}
console.log(obj)
console.log(obj.sum(7,99))


//4.a function can be stored  in a neeed
//5.a function can be stored  in a variablargumaents
//6.a function can be stored  in a antoher function
