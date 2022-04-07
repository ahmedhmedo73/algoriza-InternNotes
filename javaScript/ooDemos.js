/* Creating an instance using Factory pattern
  
var student = function (nm, age) {
    var nm = nm ? nm: "abc";
     var age = (age !== undefined) ? age : 10; 
     return { 
         name: nm, 
         age: age 
     }
}
var me = student("ali", 0);
console.log (me.name);
console.log (me.age); 
console.log (me.address); //undefined
//console.log (me.getName ());
*/
/* Creating an instance using constructor pattern
   
   var Employee = function (nm, sal, dept, id) { 

        this.empName = nm; 
        this.dept = dept; 
        this.salary = sal;
        this.empID = id ? id: "SD-SA-0101";
        this.displayInfo = function () {
            return `this is emp ${this.compID} his name is ${this.empName}; 
        }
    }
    var empl = new Employee("kareem", 2000, "SD");
*/ 
/* Functional shared pattern & prototype property

   var fun = function (){
        return `this is emp ${this.compID} his name is ${this.empName}; 
   }
   var Employee = function (nm, sal, dept, id) { 

        this.empName = nm; 
        this.dept = dept; 
        this.salary = sal;
        this.empID = id ? id: "SD-SA-0101";
    }
    Employee.prototype.displayInfo = function () { 
        this is emp ${this.empID} his name is return $(this.empName; }; 
    };
    Employee.prototype.getEmpName = function () { return this.empName:
        var empl = new Employee("kareem", 2000, "SD");
    }
    fun()
*/
/* Prototype chaining & Overriding
   //overriding 
   Employee.prototype.toString = function(){ 
       return "i'm ${this.empName} working in ${this.dept}-my ID is $(this.empID} and my salary is ${this.salary};
*/
/* Constructor overloading
   var Employee = function (nm, sal, dept, id) { 

        this.empName = nm ? nm:"nour"; 
        this.dept = dept ? dept : "sd"; 
        this.salary = sal ? sal : 5000;
        this.empID = id ? id: "SD-SA-0101";
    }
*/ 
/* Private member & privileged method
   
   var Employee = function (nm, sal, dept, id) { 

        this.empName = nm ? nm:"nour"; 
        this.dept = dept ? dept : "sd"; 
        this.salary = sal ? sal : 5000;
        this.empID = id ? id: "SD-SA-0101";
        //private member
        var yearborn = yrbrn ? yrbrn  : "1990";
        //privileged Method 
        his.getYearBorn = function () {
             return yearborn; : "1990";
        }
    }
*/ 
/* Private member setter
  
  var Employee = function (nm, sal, dept, id) { 

        this.empName = nm ? nm:"nour"; 
        this.dept = dept ? dept : "sd"; 
        this.salary = sal ? sal : 5000;
        this.empID = id ? id: "SD-SA-0101";
        //private member
        var yearborn = yrbrn ? yrbrn  : "1990";
        //privileged Method 
        his.getYearBorn = function () {
             return yearborn; : "1990";
        }
        this.setYearBorn= function(val){
            if(typeof val!=="string")
                  throw "improper string format ";
            yearborn = val.toString();
        }
    }
*/ 
