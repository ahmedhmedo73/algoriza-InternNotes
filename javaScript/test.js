var nm="ahmed",dept="Is",sal="3000$";


// function employee(nm,dept,sal){
//     return {
//         empName:nm,
//         empSalary:sal,
//         empDept:dept,
//         empInfo: function (){
//              return this.empName + "work in dept" + this.empDept;
//         }
//     }
// }
// var emp = employee("ali","sd",4000);
// console.log(emp.empName);


// var me = {}
// function Employee(nm,dept,sal){
//     me.empName=nm;
//     me.empSalary = sal;
//     me.empDept = dept;
// }
// Employee(nm,dept,sal);
// console.log(me.empDept);



// function Employee(nm,dept,sal){
//     this.empName=nm;
//     this.empSalary = sal;
//     this.empDept = dept;
// }
// var me = new Employee(nm,dept,sal);
// console.log(me.empDept);



// const personPrototype = {
//     greet() {
//       console.log(`hello, my name is ${this.name}!`);
//     }
//   }
// function Person(name) {
//   this.name = name;
// }

// console.log(Person);
// console.log(Person.prototype);
// console.log(Person.__proto__);
// console.log(Person.__proto__.__proto__);
// console.log(Person.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);

// Person.prototype = personPrototype;

// console.log(Person.__proto__);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);

// Person.prototype.constructor = Person;

// console.log(Person.__proto__);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);
 


// function Employee(nm,dept,sal){
//     this.empName=nm;
//     this.empSalary = sal;
//     this.empDept = dept;
// }
// function manager(nm,dept,sal){
//     this.empName=nm;
//     this.empSalary = sal;
//     this.empDept = dept;
// }
// var me = new Employee(nm,dept,sal);
// console.log(me.empDept);
// console.log(Employee.prototype.constructor);
// Employee.prototype.constructor = manager;
// console.log(Employee.prototype.constructor);
// Employee.prototype.constructor ;

// var old = {one:1,two:2,three:3};
// const newo = Object.create(old);
// Object.create(old , newo);
// console.log(newo);
