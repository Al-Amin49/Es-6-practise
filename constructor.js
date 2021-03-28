// class

//What method name is used inside the class so that you can create an object from the class? ->constructor
class Student { 
    constructor(){ 
        this.id=1;
        this.name='Al-Amin'
    }
}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);


class Student2 { 
    constructor(sId2, sName2){ 
        this.id=sId2;
        this.name=sName2;
        this.varsity= "NEUB";// default vave add hoye jabe jodio atake pass kora hoy ni.
    }
    }
const studentOne = new Student2(02, 'Al-Amin');
const studentTwo = new Student2(06, 'Nila');
console.log(studentOne, studentTwo);
