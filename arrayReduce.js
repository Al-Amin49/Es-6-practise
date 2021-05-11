const nums = [12,25, 37, 29];
const result1 = nums.map(num => num*2);
const result2 = nums.filter(num => num>20);
const result3 = nums.find(num=>num>23);
console.log(result1, result2, result3);

const total = nums.reduce( (sum, num) => sum+num, 0);
console.log('sum =',total);

// multiline er ketre return na dile kaj korbe na 

const total2 = nums.reduce( (sum, num) => {  

    console.log(sum, num)
    return sum+num ;


}, 0);
console.log('sum2 =',total2);

// Reduce for object
const friends= [  
    {name:'Alom', age:12},
    {name:'Al-Amin', age:21},
    {name:'Antor', age:34},
    {name:'Ali', age:91}
] 
const total3 = friends.reduce((sum, friends)=>{
    console.log(sum, friends)
    
    return sum+friends.age;


}, 0 )
console.log(total3);