// function doubleIt(num){ 
//     return num*2;
// }

const doubleIt = function myFun(num){ 
    return num*2;
}
const result = doubleIt(5);
console.log(result);

//Arrow function has 3 different type
// 1) One parameter 2)More than one parameter 3)Null parameter;
//Function is more easy to us by ES6
//1
 const doubleIt2 = num2 => num2*2;//Arrow function
const result2 = doubleIt2(10);
console.log(result2);
//2
const add = (x,y) => x+y;//Arrow function// akadik parameter hole bracket dite hobe.
const result3 = add(10,90);
console.log(result3);
//3
const give5 =() =>5;
const result4 = give5();
console.log(result4);

//expand arrow function
const doMath =(x,y) =>{ 
    const sum =x+y;
    const diff =x-y;
    const total =sum*diff;
    return total;
}
const result5 = doMath(8,6);
console.log(result5);


