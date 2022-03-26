/* Console
    // console.log("%c error message", "color:black; background:black;");
    // console.error("lol");
    // console.table(["ahmed","kamel","ahmed"]);
*/ 
/* Falsy values 
 [0,false,null,undefined,emptyString ('' or "")] 
*/
/* Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]

  ** Exponentiation (ES7)
*/
/* Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
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
/* Assignment Operators
   =   +=   -=   /=    *=   %= 
*/ 
/* Special perators

   1_000_000  ==  1000000  ==  1e6  == 10**6  //syntax sugar
   +"100" converts string to number
   !! convert any var to bool datatype
   //nullish Coalescing
   ?? same as ||      but for first parameter   all values are true except  null 
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
/* string
    //contructor              var str = new String("welcome!!");
    //string function         var str2 = String("  ahmed   ");
    //literal creation        var str = "sc welcome to javascript!!";
    
    str.includes("welcome") => true     [ecs7]
    str.charAt(1)           => 'c'
    str.indexOf('c')        => 2                      //if didn't find char will return -1
    str.indexOf("sc",8)     => 18                     //start search at index 8  
    str.lastIndexOf("sc")   => 18                     //index of last "sc" in str
    str.trim("")            => "ahmed"                //delete whitespace from the left and the right

    str.substring(3,10)     => "welcome"              //str[10] not included
    str.substr(3,10)        => "welcome to"              //return  10 char  from 3rd index 

    str.split(" ")          => ["sc","welcome",...]   //return array  to the end
    str.split(" ",2)        => ["sc","welcome"]       //return array  first two indexs
   
    str.slice(7);           => "ome to javascript!!"  //from 7 to end   
    str.slice(7,13)         => "ome to"               //start = 7    end = 13
    str.slice(-12);         => "javascript!!"         //counting from the end

    [ecs6]
    str2.repeat(2);         => "  ahmed     ahmed   "
*/ 
/* Array
   var myArr = [1,2,3,5];      // if you want to copy array by value   =>    new = old.slice();

   //if myArr.length = 4     and arr has 5 element    the 5th element will be deleted


   .shift & .unshift  work in arr[0]           pop & push work in arr[length-1]
   shift == pop       unshift ==  push    
   myArr.join(",");   => 1,2,3,4,5        myArr.join("*");   => 1*2*3*4*5          Note: myArr will turn into string
   myArr.reverse();   =>5,4,3,2,1   
   myArr.sort(function compare(a,b) {return a-b;});    sort number
   Array.isArray(myArr);  =>   true;
   myArr = arr.concat(arr1,arr2);
   myArr.splice(start,count, "element to add at index start");   //delete and replace

*/ 
/* Loop

   let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
   let colors = ["Red", "Green", "Black"];

   mainLoop: for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        nestedLoop: for (let j = 0; j < colors.length; j++) {
            console.log(`- ${colors[j]}`);
            if (colors[j] === "Green") {
             break mainLoop;
            }
        }
    }
    //use label to determine  wich loop you want to break or continue
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
   var res = add();      res();     // to excute
   
   //Higher Order Functions
   ---> is a function that accepts functions as parameters and/or returns a function.
*/
/* Function object properties

  //Arguments     collection recieve all parameter as array
  - Rest Parameters   ==  arguments
  - Only One Allowed
  - Must Be Last Element   (x,y,...arguments)
    function sum (x,y){return x+y}      sum(1,2);            //x ,y   called parameters        //1,2     called arguments  

   //arguments.length
   var fun = function(...arguments){    //you can change the name to whatever you want  // you can leave it empty and default = arguments  
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
/* Object
   
   //Dot notation        employee.nm="ahmed";
   //Braket notation     employee[nm] ="ahmed";

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
/* Pro tips
   null,array and functions   are object type
   stopPropegation     run  child func and prevent func of parent to run
*/ 
/* Variables
  //scope
    we should write "var" before variable name if we want to set scope for variable
            global scope   and   local scope "local means within functional scope"
    if we did'nt write "write"  variable will be global by default 
    if define the same var twice  in global and again in local scope   
        this called shadowing
            will ignore the global scope and work with the local one
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined) hoisted

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error) not hoisted

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)  not hoisted
*/
/* Number Methods
  //call   Number.method()     method()       100..method
  - MAX_SAFE_INTEGER     MAX_VALUE  
  - toString()   convert to string 
  - toFixed(2)   100.756467485   =>   100.75
  - parseInt("string");    "ahmed200"  =>   nan            "200ahmed"  => 200
  - parseInt("string","type");    ("010","2")  =>  2     ("010","8")  =>  8     ("010","16")  =>  16
  - parseFloat("string");    same as normal parseInt  plus      "200.02ahmed"  => 200.02 
  - isFinite(value)    return true if value is numeric type     false for other
  - isNaN()     opposite     isFinite()
  - isInteger() [ES6]
*/ 
/* Scope
   functional scope      function(){};
   block scope   if(){}   or   for(){};
   lexical scope    //A lexical scope in JavaScript means that a variable defined outside 
                      a function can be accessible inside another function defined after the variable declaration. 
                      But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
*/
/* Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

    let addSelf = myNums.map(function (element, index, arr) {
         return element + element;
    }, 10);
*/ 
