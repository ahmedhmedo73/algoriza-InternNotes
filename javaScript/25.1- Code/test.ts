// import { IBase } from './interfaces/base.interface';
// import { Child2 } from './classes/child2.model';
// import { Child1 } from './classes/child1.model';
// import { Parent } from "./classes/parent.model";


// let p: Parent = new Parent();
// let c1: Child1 = new Child1();
// let c2: Child2 = new Child2();

// function printType(arg: IBase) {
//     console.log(arg.getType());
// }

// // printType(p); // Error
// printType(c1);
// printType(c2);

// console.log(c1.add()); // ==> 0
// console.log(c1.add(3, 5)); // ==> 8

// Static Methods
import { Utilities } from "./classes/utilities";
const utility: Utilities = new Utilities();
utility.prop1 = 10;
utility.getLengthPlusExtra([1, 5, 6]);

Utilities.getFirstElement([5, 3, 2]);