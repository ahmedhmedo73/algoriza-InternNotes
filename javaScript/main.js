/* Console
    // console.log("%c error message", "color:black; background:black;");
    // console.error("lol");
*/ 
/* Falsy values 
 [0,false,null,undefined,emptyString ('' or "")] 
*/
/* Logical operators

    &&   "log last true value"    else     "fist false value"
    // console.log(8&&9&&10);
    // console.log(8&&9&&10&&0);
    // console.log(8&&9&&10&&0&&22);

    ||   "log first true value"   else     "last false value"
    // console.log(8||9||10);
    // console.log(""||0||""||null);
*/
/* Special perators
   comma operator ","    u can declare  mutiple identifier in same var    // var first , second ;
   typeof       //console.log(typeof test );      number
   ternary      //  (expression) ? true : false;
   delete       deletes a property from the object.
   new          creates an instance (object)
   void         it discards the expression's return value.
   yield        ?!!
   in           In Operator checks if object has the given property      //if ('make' in car){}   car = { make: 'Honda', model: 'Accord'}
   instanceof	checks if the object is an instance of given type
*/ 
/* Assignment Operators
   =   +=   -=   /=    *=   %= 
*/ 
/* Implicit coercion 
   forceing cast datatype
      
   number == string       //number => string
   bool > number          //bool  =>  number
   string + number        //number  => string
   string - number        //string  => number
   and so on

   === prevent coercion
*/ 
/* Explicit coercion 
   forceing cast datatype
        datatype(var)
*/ 
/* Conditional statements
   to prevent a lot of elseif   we do swtichCase 
*/ 
/* Dialog boxs
   //prompt   var response = prompt("message","initial value");
   //alert    alert("message");
   //confirm  var action = confirm("message");   true "ok" or false "cancel"
*/ 
/* Built-in functions
   parseInt("string");    "ahmed200"  =>   nan            "200ahmed"  => 200
   parseInt("string","type");    ("010","2")  =>  2     ("010","8")  =>  8     ("010","16")  =>  16
   parseFloat("string");    same as normal parseInt  plus      "200.02ahmed"  => 200.02 
   isFinite(value)    return true if value is numeric type     false for other
   isNaN()            opposite  isFinite()
*/ 
/* variable scope
    we should write "var" before variable name if we want to set scope for variable
            global scope   and   local scope "local means within functional scope"
    if we did'nt write "write"  variable will be global by default 
    if define the same var twice  in global and again in local scope   
        this called shadowing
            will ignore the global scope and work with the local one
*/ 
/* string
    //contructor              var myStr = new String("welcome!!");
    //string function         var myStr = String("welcome!!");
    //literal creation        var myStr = "sc welcome to javascript!!";
    
    myStr.charAt(1)           => 'c'
    myStr.indexOf('c')        => 3   if didn't find char will return -1
    myStr.indexOf("sc")       => 0
    myStr.lastIndexOf("sc")   => 18
    myStr.substring(3,10)     => "welcome"    note that myStr[10] not included
    myStr.split(" ")          => ["sc","welcome","to",....]
    myStr.slice(7,13)         => "ome to"  
    myStr.slice(7);           => from 7 to end  "ome to javascript!!"     
    myStr.slice(-12);         => counting from the end
    

*/ 
/* Array
   var myArr = [1,2,3,5];

   .shift & .unshift  work in arr[0]           pop & push work in arr[length-1]
   shift == pop       unshift ==  push
   myArr.join(",");   => 1,2,3,4,5        myArr.join("*");   => 1*2*3*4*5          Note: myArr will turn into string
   myArr.reverse();   =>5,4,3,2,1   
   myArr.sort(function comapr(a,b) {return a-b;});    sort number
*/ 
/* Functions
   
   //function statement   hoisted 
   or function declaration
   function fun1 (a,b){return a+b;}
 
   //anonymous function     not hoisted
   or function expression
   or literal function creation
   var myFun = function (a,b){return a+b;}

   //function constructor 
   var sum =new Function('a','b','return a+b;');

   //assign function into array
   var arr=[1,2,3,function (a,b){return a+b;} ,5,"lol"]
   arr[3]();  // to excute func

   //return function from another function
   funtion add(){
       return function(){
           return a+b;
       }
   }
   var res = add();
   res();     // to excute

*/ 
/* Object
   
   //factory method
   function employee(nm,dept,sal){
       return {
           empName:nm,
           empSalary:sal,
           empDept:dept,
           empInfo: function (){
                return this.empName + "work in dept" + this.empDept;
           }
       }
   }
   var emp = employee("ali","sd",4000);
   console.log(emp.empName);

   //constructor method
   function Employee(nm,dept,sal){
        this.empName=nm;
        this.empSalary = sal;
        this.empDept = dept;
   }
   var me = new Employee(nm,dept,sal);
   console.log(me.empDept);


*/ 
/* Object built-in methods
 
   //Instant methods     //require an object of the class
   me.hasOwnProperty("empName");    return bool;
   console.log(me.toString());    =>  [object Object]

   //static methods      //Static methods are associated with the class.
   console.log(Object.Keys(me));      keys of me object
   console.log(Object.values(me));      values of me object
   delete me.empName;     console.log(me.empName);   =>undefined
   
   //Object.seal(obj)    preventing adding new properties and marking all properties as non-configurable  and writable   
   //Object.isSealed(obj);    return bool;
   //Object.freeze(obj)    preventing adding new properties and marking all properties as non-configurable  and non writable
   //Object.isSealed(obj);    return bool;
*/ 
/* Object descriptor 
 
   //data descriptor
   var name="ahmed";    var obj={};
   Object.defineProperty(obj,"name",{
       value:name,                                          default undefined  
       writable: true,    //if can edit value or not        default  false
       configrable:true,   //can delete  property or not     default  false
       enumrable:true     //can loop on properties or not   default  false
   });
   Object.defineProperties(obj,{
       name:{value:"ahmed", writable:true, configrable:false, enumerable:true},
       age:{value:21, writable:true, configrable:false, enumerable:true},
   });



   //accessor descriptor
   Object.defineProperty(obj,"name",{
       get:function(){return name},          //access to show the value        
       set:function(val){name = val},         //access to set the value       
       configrable:true,   //can delete  property or not     default  false
       enumrable:true     //can loop on properties or not   default  false
   });
   Object.defineProperties(obj,{
       name:{get:function(){return name}, set:function(val){name = val}, configrable:false, enumerable:true},
       age:{get:function(){return age}, set:function(val){age = val}, configrable:false, enumerable:true},
       display:{get:function(){return function(){return this.name + "" + this.age}}}
   });

*/
/* IIFE   Immediatly Invoked Function Expression
  (function (){
    console.log(110); 
  })()
  you can't use outside this scope
*/ 
/* Function object properties
   
   //Arguments  collection recieve all parameter as array
   //arguments.length
   var fun = function(){
       var sum=0;
       for (var i=0;i<arguments.length;i++){
            sum+=arguments[i]; 
       }
       return sum;
   }
   
   fun(1,2,3,4);   => 10
*/ 
/* Function object methods
    [1,2,"jk"] 
    []
    var arr= [1,2,3,"abc"];
    var str = "this is javascript"
    
    //function borrowing using apply 
    console.log((arr.join.apply(str,["*"])));

    //function borrowing using call 
    console.log((arr.join.call(str,"*")));

    //binding
    var res= (arr.join.bind(str));   
    console.log(res("*"));
*/ 
/* Closure
   When you declare a variable in a function, you can only access it in the function.
   These variables are said to be scoped to the function. If you define any inner function within another function,
   this inner function is called a closure.
   
   function outerfun() {
        var arr=[];
        for (var index = 0; index < 3; index++) {
            arr.push((function (index) {
                return function () {
                    console.log(index);  0,1,2
                }
             })(index));
        
        }
        return arr;
    }
var res =outerfun();
res[0]();
res[1]();
res[2]();
*/ 
