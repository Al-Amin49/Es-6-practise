//GS -> Javascript three dots.
const ages =[12, 14,16,13,17];
const ages2 =[15,16,12];
const ages3 =[19,12,34,56,44];
const allAges = ages.concat(ages2).concat(ages3);
//const allAges2 =[ages, ages2, ages3];// aktar bitore arekta duke gese
const allAges2 =[...ages, ...ages2,5,10, ...ages3];// spread operator er jonno e tiktak ashce.
console.log(allAges);
console.log(allAges2);

const business = 650;
const minister =450;
const sochib = 250;
const takaPoisa =[850,450,220,100];
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);