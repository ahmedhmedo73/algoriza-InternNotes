"use strict";
exports.__esModule = true;
//multiple data types
// let num :number | string = 2;
// num = "sss";
// console.log("hi");
//generic
//'T' to choose which datatype u want when u call this func
// function genericIdentity<t>(arg: t): t {
//     return arg;
// }
// const o4 = genericIdentity<boolean>(true);
// const o5 = genericIdentity<string>('myString');
//enum        
//is set of key and value     
//reverse map     num["one"] = 1   at the same time   num[1] = "one";
//keys and values are unique
// enum num { one=2, two , three }
// console.log(num.two);
// enum Color { red, green = 'green', blue = 'blue' }
// console.log(Color);
// let color: Color = Color.green;
// console.log(color); 
// Interface
// interface IPerson {
//     firstName: string;
//     lastName: string;
//     sayHi: () =>  string;
// }
// interface IInfo {
//     address:string;
// }
// interface IEmployee extends IPerson,IInfo{
//     salary:number;
// }
// let person2 : IEmployee = {
//     firstName: "ahmed",
//     lastName: "kamel",
//     sayHi: () => "hi",
//     salary: 2000,
//     address: "st"
// }
// console.log(person2);
//class && implements && extends && optional param
//optional param should not have un optional prev param
// enum Color{
//    red= "red",
//    green ="green",
//    blue ="blue",
// }
// interface IVehcile {
//     wheel : number;
// }
// class Brand {
//     brand:string;
//     constructor(wheel?:number){}
// }
// class Car extends Brand implements IVehcile{
//     color : Color;
//     constructor(color:Color){
//         super(4);
//     }
//     wheel: number;
//     getSpeed():number{
//         return 300;
//     }
// }
// const hundai: Car = new Car (Color.red);
// console.log(hundai.getSpeed());
