function add(num1, num2){ 
    if(num2==undefined){ 
        num2=0;
    }
    return num1+num2;
}
// const total = add(15,17); jodi akta parameter na dewa take
const total = add(15);
console.log(total);
//output-> 15 hobe jodi 0 na hoye 10 hoy tahole 25 hobe


function add(num1, num2){ 
   num2= num2|| 0;
    return num1+num2;
}
// const total = add(15,17); jodi akta parameter na dewa take
const total2 = add(15);
console.log(total2);

//output-> 15 hobe jodi 0 na hoye 10 hoy tahole 25 hobe

function add(num1, num2=20){ 
   
    return num1+num2;
}

// const total = add(15,17); jodi akta parameter na dewa take
const total3 = add(15);
console.log(total3);
//output-> 35


function add(num1, num2=20){ 
   
    return num1+num2;
}

// const total = add(15,17); jodi akta parameter na dewa take
const total4 = add(15, 1);// jjodi duita parameter take tahole num2=20 r kaj korbe na. 
console.log(total4);
//output-> 16