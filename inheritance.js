// Have to learn OOP concept -> Interview question
//Which method will you call to call the parent class constructor? -> super

class Parent { 
    constructor(){ 
        this.fatherName ="Shone Micheal";
    }
}

class Child extends Parent{  // class declare korle tar nam shuru hoy upper case diye.
    constructor(name){ 
        super(); // atake dewa mane parent er constructor k call kore dewa.
        this.name=name;
    }
    getFullName() { 
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Anty");
const baby2 = new Child("Jerry");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());