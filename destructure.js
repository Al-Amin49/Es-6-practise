//What is destructure? (InQ)
//kuno akta bishal array ba bishal object k akta ba duita variable a rakar shortcut upay

// const person ={  name: 'Jacky', age:23, job:'Doctor', wifeName:'Harrek', phone:988888, address:'California USA', Hometown:'England', Child: 3};

// const wifeName = person.wifeName;
// const phone = person.phone;
// const age = person.age;
// const {job} =person;// ababe o leka jay  //destruture

// const {  address, Hometown, Child} = person;//destructure

// console.log(wifeName, phone, age, job);
// console.log( address, Hometown, Child);

//Array destructure
const friends =['Ahmed', 'Ajgor', 'Rehman', 'Buiya', 'Nilu'];
const [chotoFriend]= friends;
console.log(chotoFriend);


const friends2 =['Ali', 'Ajgor', 'Rehman', 'Buiya', 'Nilu'];
const [firstfriend, secondFriend, ...remainingFriend]=friends2;
//console.log(firstfriend);
//console.log(secondFriend);
console.log(remainingFriend);

//complexObject

const complexObject={ 
    names:'abc',
    info:{ 
        address1:'kolabagan',
        leader:"tiger"
    }
}
const {leader}=complexObject.info;
console.log(leader);

