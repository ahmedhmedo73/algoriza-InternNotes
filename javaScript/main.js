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
    // console.log(8&&9&&10);         => 10
    // console.log(8&&9&&10&&0);      => 0
    // console.log(8&&9&&10&&0&&22);  => 0

    ||   "log first true value"   else     "last false value"
    // console.log(8||9||10);         => 8
    // console.log(""||0||""||null);  => null
*/
/* Assignment Operators
   =   +=   -=   /=    *=   %= 
*/ 
/* Special perators

   1_000_000  ==  1000000  ==  1e6  == 10**6  //syntax sugar
   +"100" converts string to number
   !! convert any var to bool datatype
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
/* Function object methods    **need to study
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

   ===========
    var me = {}
    function Employee(nm,dept,sal){
       me.empName=nm;
       me.empSalary = sal;
       me.empDept = dept;
    }
   Employee(nm,dept,sal);
   console.log(me.empDept);

   ===============
   //constructor method            // new keyword take  'me'  and put it in 'this' in the constructor
   function Employee(nm,dept,sal){
        this.empName=nm;
        this.empSalary = sal;
        this.empDept = dept;
   }
   var me = new Employee(nm,dept,sal);
   console.log(me.empDept);

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
/* IIFE   Immediatly Invoked Function Expression
  (function (){
    console.log(110); 
  })()
  you can't use outside this scope
*/ 
/* Closure
   When you declare a variable in a function, you can only access it in the function.
   These variables are said to be scoped to the function. 
   
   If you define any inner function within another function,
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
  - should initiate while declaring and cant change the value
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
   block scope   {};
   lexical scope    //A lexical scope in JavaScript means that a variable defined outside 
                      a function can be accessible inside another function defined after the variable declaration. 
                      But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
*/
/* BOM 
 
    //scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100)   // > 100px from top - show div
        else                               // <= 100px from top - hide div
    });

    //window object
    var win = open("childWin.html","","width=150,height=150");     //open new window
    win.close();
    win.document.bgColor = "red";
    win.focus();         // make this window to be in the first to see it 
    win.moveBy(50,50);   // foreach click move win to his coordinates +  50,50   ||   according to position of win
    win.moveto(50,50);   // foreach click move win to coordinates 50,50          ||   according to fixed coordinates

    //window timer
    var timer = setTimeout (fn , duration)     run one time after duration
        clearTimeout(timer);   //to stop timeout
    var timer = setInterval(fn , duration)     foreach duration  run this func
        clearInterval(timer);  //to stop interval
    
    //History object
    history.length;     num of pages in history
    history.forward();
    history.back();
    history.go();    //take positive and negative values    num of pages to go forward or back

    //location object
    properties
        href,protocol,host
        .search   //return string of string query in url
    .replace(newUrl)    //remove curr url from window.history and visit newUrl
    .assign(newUrl)     //leave history same and visit newUrl
    .reload()

    //Navigator object
       carry info about browser that i'm using
    .userAgent      //type of browser, os
    .language 
    .cookieEnabled
*/ 
/* DOM
   
   //Accessing DOM Nodes
   1) node relation 
      document.body.children[0].nextElementSibling
   2) id
      document.getElementById("id");
   3) class
      document.getElementByClassName("id");
   4) tagName
      document.getElementByTagName("div");
   5) querySelector
      document.querySelector("css selecetor");   //fisrt match this selector 
      document.querySelectorAll("css selecetor");   //all elements match this selector and return array

    
    //Modifying Node’s content
    document.getElementById("id").innerHTML ="<p>hi</p>";    set html code in this element     
        // u can type '+=' instead of '=' if u want to add to innerhtml 
    document.getElementById("id").innerText ="<p>hi</p>";    set plain text in this element
    document.getElementById("id").style.color ="red";    modify style

    
    //Node’s Class Attribute
    document.getElementById("id").className                 //return classes name
    document.getElementById("id").classList.add("p1")       //add class name "p1"
    document.getElementById("id").classList.remove("p1")    //remove class name "p1"
    getComputedStyle(document.getElementById("id")).color   //get color "style" after run all style code 


    //Create new DOM Nodes
    const e = document.createElement('tag name');       
    var textElem = document.createTextNode("this is simple text");
    var div = document.getElementById("div");
    document.body.insertBefore(textElem,div);    //insert textElem before div
    document.body.appendChild(textElem);
    div.appendChild(textElem);


    //Remove nodes
    element.removeChild(element.firstChild);
    removeAllChildren(document.body)
    replaceChild(newChild, oldChild);

    //Accessing DOM collection
       //collectionn types  =>  images,forms,links,anchors
    document.collectionName[0]
    document.forms[0].elements[0]

*/ 
/* Cookies
       txt file has info about the user like username
    types => session/non-presistent cookie    //expiry date gone and will be deleted when the browsing session ends
             presistent cookie                //Has expiry Date    by clicking remember me like facebook
    
    //Create and Read cookie
    var date = new Date();        date.setMonth(date.getMonth()+3);
    var val = document.getElementById("usrnm").value;
    document.cookie = "usernameCookie =" + val + ";expires=" + date;
    console.log(document.cookie);

    //Display key value pairs of cookies
    var cookievals  = document.cookie;
    var cookieStart = cookievals.indexOf("usernameCookie");
    var cookieEnd   = cookievals.indexOf(";",cookieStart);
        cookieEnd   = cookieEnd == -1 ? cookievals.length : cookieEnd;
    var username    = cookievals.substring(cookieStart,cookieEnd).split('=')[1];

    //Delete
    document.cookie = "cookieName" + "=;expires=9-9-2009"
*/ 
/* Events
    //Keyboards 
        onKeyDown     //the user is pressing a key (on the keyboard)
        onKeyUP       //the user releases a key (on the keyboard)
        onPress       //Same as onkyup but is not fired for all keys (e.g. ALT, CTRL, SHIFT, ESC)

    //Mouse
        onClick
        ondblclick
        onmouseenter  //the mouse pointer is moved onto an element
        onmousedown   //user presses a mouse button over an element
        onmouseup     //user releases a mouse button over an element
        onmouseleave  //the mouse pointer is moved out of an element
        onmousemove   //the pointer is moving while it is over an element

    //Forms
        onsubmit      //when a form is submitted
        onreset       //when a form is resetted

    //Other
        onfocus       //when an element gets focus.
        onblur        //when an object loses focus     is most often used when the user leaves a form field
        onerror       //occurs on error
        onload        //when an object has been loaded   onload is most often used within the <body> element 
                            to execute a script once a web page has completely loaded all content 
                            (including images, script files, CSS files, etc.)
        onunload      //once a page has unloaded (or the browser window has been closed).
        onscroll      //when an element's scrollbar is being scrolled
    

    //Prevent events default behavior
    <a href="" onclick="alert('hi');return false;"></a> 
    <a href="" onclick="resetCheck(event)"></a>
    resetcheck(evt) {do something    evt.preventDefault()}

    //offsetx and clientx
    offsetx  return coordinate from element 
    clientx  return coordinate from body

    //Capturing & Bubbling Phases
    check the img
    Capturing & stoppropagation    fire parent func then stop 
    bubbling  & stoppropagation    fire grandchild func then stop 
*/ 
/* AJAX  & XHR
    ajax  => Asynchronous JavaScript And XML
    xhr   => xml http request
    check img

    var xhr = new XMLHttpRequest();
    var txt="";
    xhr.open("method","url");
               ^
        GET,POST,PUT,DELETE
    xhr.send("");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4)
           if(xhr.status == 200 || xhr.statusText == "ok")
              txt = xhr.responseText;
    }
  
    //JSON   => javascript object notation
    JSON.parse(xhr.responseText());   //convert json string  =>  object;
    JSON.stringify();                 //convert object => json string ;
*/ 
/* Object oreinted
   //Instantiation Patterns
   https://dev.to/mconner89/a-quick-guide-to-instantiation-in-javascript-6n

   //Polymorphism
   check img

   //privileged methods   ==   closure
     method called outside constructor and access variables in the constructor
*/
/* errors
  EvalError
    Creates an instance representing an error that occurs regarding the global function eval().
  RangeError
    Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
  ReferenceError
    Creates an instance representing an error that occurs when de-referencing an invalid reference.
  SyntaxError
    Creates an instance representing a syntax error.
  TypeError
    Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
  URIError
    Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameter
*/  
/* ECS 6
*/
/* Spread operator
   //copy arr1 in arr2
   var arr1 =["mango","apple"];
   var arr2 =["banana",...arr1];

   //copy obj1 in obj2
   var obj1 ={fruit1:"mango",fruit2:"apple"};
   var obj2 ={...obj1};
*/ 
/* REST Parameter

  //but remaining argumanets in arr
  function displayNames(p1,...arr){
      for(let i in arr)    console.log(arr[i]);
  }
  var fruits = ["apple","banana"];
  displayNames(10,fruits);
*/
/* Array & object  Destructuring
  Destructuring = decomposing structure

  var arr =[1,,2,3,4,5,6,7,8];
  var [x,b=7,,y,,z,...w] = arr;
  console.log(x,b,y,z,w);  =>  1 7 3 5 [6,7,8]      
  //if b == undefined then take defaut value
  //take remaining indexes into array w

  var obj ={name:"ES6",main:"javascript",born :2015};
  var {name:x,name:a,main:y,born,instructor=5} = obj;
  console.log(x);            es6
  console.log(a);            es6
  console.log(y);            javascript
  console.log(born);         2015
  console.log(instructor);   5
  //you can do multiple destructor
*/
/* Arrow function
   ||fat arrow
   ||lambda expression

   //intro
   var fun = (x,y) =>{ return x+y;}
   var fun = x => { return x;}
   var fun = x => x;

   //lexical binding
   var obj = {
       usrnm:"ali",
       disp:funciton (){
           
           //old
           var _self=this;
           setTimeout(funciton(){
               console.log(_self.usrnm);
           },3000);

           //new
           setTimeout(()=>{
               console.log(this.usrnm);
           },3000);
       }
   }

   //arrow func dont have 'this' so 'this' belong to its parent || lexical scope
*/
/* String 
  
   //literal creation var myStr = "   welcome to JavaScript World!!   "; 
   //constructor     var newStr = new String("JavaScript String Object");
        console.log(myStr.trim());               =>"welcome to JavaScript World!!"
        console.log(myStr.trimRight());          =>"   welcome to JavaScript World!!"
        console.log(myStr.trimLeft());            =>"welcome to JavaScript World!!   "
        console.log(newStr.startswith("Ja"));    =>true
        console.log(newStr.endsWith("t"));       =>false
        console.log(newStr.includes("ing"));     =>true
        console.log(newStr.repeat (3));          =>newStr + newStr + newStr
    
    //String template   || template lieral
      str = `line1
                line2  ${var}`;
    
    //string.raw
      ///ignore skiping character
      let userName = "ahmed";
      let str = String.raw`hello \n \t ${userName}`;
      console.log(str);    =>   hello \n \t ahmed

    //Tagged Template 
    function fun(strings, ...values) { 
        let str = "";
        for (let i=e;i<strings.length;i++){ 
            str+=strings[i]; 
            if(values[i])   str+=vatues [i]; 
        }
        return str;
    }
    let x 10, y 20;
    var result = fun `this is $(x) and $(y) the sum is $(x+y)`;
    console.Log (result);   =>   this is 10 and 20 the sum is 30
*/
/* Array 
   
   //some and every are func that iterate to every element of the array 
        and check that elem make the func true or false 
   //some return true if he find any elem achieve the func      work as ||
   //every return true if he find every elem achieve the func   work as &&

   var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
   console.log(fruits.some(function(val, idx, arr) { return val [0] === "a" }));    =>   true
   console.log(fruits.every(function(val, idx, arr) { return val [0] === "a" }));   =>   false

   //map
   var newFruits = fruits.map( (val) => {return 'i tike ${val}'; });
   console.log(newFruits); => ["i like apple","i like apple","i like apple","i like apple","i like apple"]

   //foreach
   fruits.forEach((val) =>{console.log(val)} );

   //find
   console.log(fruits.find( (val) => {return val == "apple" }));     => apple 
       if didn't find it return undefined

   //filter
   console.log(fruits.filter( (val) => {return val[0] === "a" || val[0] === "b" }));     => ["apple","banana"]
*/ 
/* Object new shorthand creation

   //old 
   var Employee = function (empName, salary, dept, empID) { 
       return {
           empName : empName, 
           dept : dept, 
           salary : salary,
           empID : empID ,
           displayInfo : function () {
               return `this is emp ${this.compID} his name is ${this.empName}; 
            }
        }
    }

    //new
    delete second empName    and    : function
    var Employee = function (empName, salary, dept, empID) { 
       return {
           empName , 
           dept, 
           salary,
           empID ,
           displayInfo() {
               return `this is emp ${this.compID} his name is ${this.empName}; 
            }
        }
    }
*/ 
/* Option objects
   
   //object.assign
   function CourseDetails(msg = "Greetings",option = {}){
        let courseDefaultInfo = { 
            courseName: "ES6",
            courseDuration: "3Days", 
            supervisor: "Anonymous" 
        }

        let settingObj = Object.assign({}, courseDefaultInfo, option); 

        return `${msg} this is course ${settingObj.courseName} its duration is ${settingObj.courseDuration}
                under supervision of ${settingObj.supervisor}`;
    }

    var course = {name:"js", duration: "7Days", supervisor:"Ali"}
    CourseDetails("hello",course);

    ====================

    //Destructuring and named arguments
    function CourseDetails({msg = "Greetings",
            courseName = "ES6",
            courseDuration = "3Days", 
            supervisor = "Anonymous"} = {}){

        return `${msg} this is course ${courseName} its duration is ${courseDuration}
                under supervision of ${supervisor}`;
    }

    var course = {name:"js", duration: "7Days", supervisor:"Ali"}
    CourseDetails({msg:"hello"});
*/ 
/* Proxy 
   proxy == validation   means  that if you want to set or get etc   you can change their implementation 
   handler = {
        set (obj, prop, val) { 

            if (obj.hasOwnProperty (prop))     obj[prop] = val; 
            else throw prop ${prop} is not allowed in this object`;
            
            if(prop=="a"){
                if(val<15)   obj[prop]=val;
                else         throw "age shouldn't exceed 15";}
            
            if(prop==name){
                if(typeof val=3="string") obj[prop]=val; 
                else throw "type mismatched";
            }
        },
        get(obj, prop){
            if (prop == "name") return `my name is ${obj[prop]}`;
            else  return "new val";     ||    throw "creating new prop is not allowed";
        }
   }
   target = {name: "abc",age:10};
   var p = new Proxy(target,handler);
*/ 
/* Set
        //values are unique
   var sets = new set(["1",11,"abc"]);
   sets.size;      =>3
   sets.add(2);
   sets.delete(2);
   sets.has(2);    =>false
   sets.clear();   =>empty set

   //iterator methods
        .entries()  == .values()  ==  .keys()
    sets.entries()    => {"1" => "1", 11 => 11, "abc" => "abc"};
    sets.keys()       => {"1" , 11 , "abc"};
    sets.values()     => {"1" , 11 , "abc"};
*/ 
/* Map
    ******map are pairs of key and value && keys are unique
    
    var myMap = new Map ([ ["a",1] , [2,10] , ["my",9]]);
    console.log(myMap);   =>{"a" => 1, 2 => 10, "my" => 9}

    //methods
    mayMap.set(key,val);
    mayMap.get(key);
    mayMap.delete(key);
    mayMap.has(key);
    mayMap.clear();

    //properties
    myMap.size

    //iterator methods
    myMap.entries()    => {"a" => 1, 2 => 10, "my" => 9}
    myMap.keys()       => {"a" , 2 , "my"};
    myMap.values()     => {1 , 10 , 9}; 
*/
/* loop
   //for    of    loop values
   //for    in    loop indexes

   //map work with    for of     but not      for in
    var myMap = new Map ([ ["a",1] , [2,10] , ["my",9]]);
    for(i of myMap) console.log(i);               => ["a" => 1], [2 => 10], ["my" => 9]
    for(i of myMap.keys()) console.log(i);        => a, 2, "my"
    for(i of myMap.values()) console.log(i);      => 1, 10, 9
    for([k,i] of myMap) console.log(k +","+ i);   => "a",1  2,10  "my",9
*/ 
/* Iterable object  
   **that have iterator object == [Symbol.iterator]() == @@iterator method
   
    var arr = [1,2,3,4,5]
    var iter = arr[Symbol.iterator]()
    console.log(iter.next()); {value: 1,done: false}
    console.log(iter.next()); {value: 2,done: false}
    console.log(iter.next()); {value: 3,done: false}
    console.log(iter.next()); {value: 4,done: false}
    console.log(iter.next()); {value: 5,done: false}
    console.log(iter.next()); {value: undefined,done: true}
    console.log(iter.next()); {value: undefined,done: true}
*/ 
/* object object to iterable object
   
   function * gen(){
        yield 10;
        console.log("hi");            => hi
        yield 15;
        var x = 10+20;
        console.log(x);               =>30
        yield *[11,13,12];
        yield *"abc";
        yield 50*5;
    }
    for (const iterator of gen()) {
        console.log(iterator);        =>10, 15, 11, 13, 12, a, b, c, 250
    }

    var iter = gen();
    iter.next();      //will iterate with yeild
*/ 
/* Symbol
  
  var x =symbol("10");
  var y =symbol("10");
  x == y                  =>  false

  var xx =symbol.for("10");
  var yy =symbol.for("10");
  xx == yy                  =>  true
  
  Symbol.keyFor(xx)    =>  10
  Symbol.keyFor(yy)    =>  10
  Symbol.keyFor(y)     =>  undefined

  "this is a javascript string".replace(/i/,"_");    =>   "th_s is a javascript string"
  "this is a javascript string".replace(/i/g,"_");    =>   "th_s _s a javascr_pt string"

  var str = "this is a javascript string";
  var obj = {
      nm:"abc",
      [Symbol.replace](str,idx){   return str.substring(0,idx)+" test";   }
  }
  console.log(str.replace(obj, 7));     => this is test

  //watch third video later   
*/ 
/* Class
  
  //u have to implement get and set  to be able to change or read properties
  class Person {
      _addr = "123 st.";

      constructor(pname ="ali", page = 10){
        this._personName = pname; 
        this._personAge = page; 
      }
      get prnName(){
          return this._personName;
      }
      set prnName(val){
          this._personName = val;
      }
      
  }
  var me = new Person();
  
  =========================
  //Inheritance

  ////extends  keeyword to inherit from Prson
  class User extends Person {
      constructor (name,age,job,title,salary){
          ///to use parent constructor
          super(name,age);
          this._job = job;
          this._title = title;
          this._salary = salary;
      }
      toString(){
          ///to use parent methods
          return `${super.toString()} working as ${this._job}`;
      }
  }

  ===============
  //watch 4th video ch7 later    its unusful

  ==============
  //'_' keyword its just convention for programmers that is private 
    but u can access it outside the class anyway
  this._id = 3;

  ===============
  //private
    //can't access directly but u can access by getter and setter
    #id =10;
    #fun = function (){return "this is private member"}

  ===============
  //static 
  //only parent can access static props and methods
    static id = 0;
    static display = () => {
      return 'this is a static prop  ur id is ${this.id}';
    }
    ////'this'  refere to class not the object;
*/ 
/* Module
   //some of code or class u want to use it in another file

   ===================
   //named  export
    // u can do multiple export class in one file 
      //export class classname{}
      //export function funcName{}

    ===================
   //default export
    //u must have one module in some file  
      //export default class classname{}
      //export default function funcName{}

    ===================
    //where to import
    //statement in file.html always been hoisted so u have to
      <script type="module">
        import
      </script>
    //or
      //in html
      <script type="module" src="main.js"></script>
      //in main.js
        import
        
    ===================
    //import
      import {name of module}  from  "file.js";   or
      import {add as addNum}  from  "file.js";   or
            //        ^ alias name u can it instead of add
      import * as mod  from  "file.js";   // mod.moduleName
*/ 
/* Promise
   
    var x=11;
    new Promise((then,Catch) =>{
        setTimeout(()=>{
            if (x>10) then("number within range");
            else     Catch("number out of range");
        },2000);
    }).then((info)=>{
        console.log(info);
        return new Promise ((then, Catch) => {
            setTimeout(()=>{
                if (x<20) then("number within range");
                else     Catch("number out of range");
            },2000);
        });
    }).then((info)=>{
        console.log(info);
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("promise is done");
    });


    //ajax
    new Promise((then,Catch) =>{
        var xhr = new XMLHttpRequest();
        xhr.open("GET","./img/json.json");        
        xhr.send("");
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 )
                if (xhr.status == 200)
                    then(xhr.responseText);
                else
                    Catch(xhr.statusText);
        }
    }).then((info)=>{
        console.log(info);
    }).catch((error)=>{
        console.log(error);
    });


    //promise methods
    var promise1 = new Promise((then,Catch) =>{
        setTimeout(()=>{
            then("promise1  ")
        },2000);
    });
    var promise2 = new Promise((then,Catch) =>{
        setTimeout(()=>{
            then("promise2  ")
        },3000);
    });
    var promise3 = new Promise((then,Catch) =>{
        setTimeout(()=>{
            Catch("promise3  ")
            //then("promise3  ")
        },1000);
    });

    //return all  if all resolved    or   the promise that rejected
    Promise.all([promise1,promise2,promise3])
           .then(console.log).catch(console.log);

    //return first respnose  even resolved  or  rejected
    Promise.race([promise1,promise2,promise3])
            .then(console.log).catch(console.log);
*/ 
/* Async & await
   js => es8 

   async function promFun() {
    var promise1 = await new Promise((then,Catch) =>{
        setTimeout(()=>{
             then("promise1  ")
        },2000);
    }).then(console.log).catch(console.log);
    var promise2 = await new Promise((then,Catch) =>{
        setTimeout(()=>{
             then("promise2  ")
        },3000);
    }).then(console.log).catch(console.log);
    var promise3 = await new Promise((then,Catch) =>{
        setTimeout(()=>{
             Catch("promise3  ")
        },1000);
    }).then(console.log).catch(console.log);
    }

    promFun();

    //without async   => promise3, promise1, promise2
    //with async      => promise1, promise2, promise3
*/
/* Transpiler
     Translate / compiler
    //trnslate   es6 and beyond js    to      es5 or vanilla.js
    Examples: babel - traceur ...etc
*/ 
/* Js versions
   
  //es7
  array.includes            >>>>    [1,2,3].includes(2)    => true
  Exponential operator      >>>>    2**3                   => 8

  //es8
     Object.values
     Object.entries
     Object.getOwnPrpertyDestructor(const)
     String.padStart(10,"**")       String.padEnd(10,"**")
        size of new string     fill with
    
  //es9
  Symbol.description
  promise.finally
  ///flatMap 
    var arr = [1, 2, 3, 4];
    arr.flatMap(x => [x, x * 2]);   => [1,1,2,4,3,6,4,8]
  ///flat array
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());   =>    [0,1,2,3,4]

  //es2020
  BigInt       let num = BigInt(10);   or  = 10n;
  //nullish Coalescing   or  nullish  operator
     ?? same as ||     all values are true except  null or undefined

  //chaining operator  
    var obj = {name:"ahmed"};
    obj?.age
    //if obj has "age"  return age else return undefined
    //optional
   
  //globalThis    refer to global scope
*/ 