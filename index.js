    // 1. Ways to print in JS
    // console.log("Hello World");
    // document.write("Hello World");
    // alert("Hello World");

    // 2. JS console API
    // console.log("Hello", 4+6, "Another log");
    // console.warn("this is warning");
    // console.error("this is error");
    // console.info("this is info");

    // 3. JS Variables
    // What are variables - Contaimers to store data values
    // var number1 = 34;
    // var number2 = 56;
    // console.log(number1 + number2);

    // 4. Data types in JS
    // Numbers
    // var num1 = 455;
    // var num2 = 56.76;
    
    //  String
    // var str1 = "This is string";
    // var str2 = 'This is also a string';

    // Objects
    // var marks = {
    //     ravi: 34,
    //     shubham: 78,
    //     harry: 99.977
    // }
    // console.log(marks);

    // Booleans
    // var bool1 = true;
    // var bool2 = false;
    // console.log(bool1 , bool2);

    // var und;
    // console.log(und);

    // var n = null;
    // console.log(n);

    // arr
    // var arr = [1,2,3,"Hello",true];
    // console.log(arr[4]);
    // console.log(arr);

    // Operators in JS
    //  Arithmetic operators
    // var a  = 10;
    // var b = 5;
    // console.log("Addition : ",a + b );
    // console.log("Subtraction : ",a - b);
    // console.log("Multiplication : ",a * b);
    // console.log("Division : ", a / b);

    // Assignment Operators
    // var c = b;
    // c += 2;
    // console.log(c);

    // Comparison Operators
    // console.log(a == c);
    // console.log(a >= b);

    // Logical Operators
    // console.log(true && false);
    // console.log(false || true);
    // console.log(!true);

    // Functions in JS
    // function avg(a, b){
    //     return (a + b)/2;
    // }

    // c1 = avg(4, 6);
    // c2 = avg(14, 16);
    // console.log(c1, c2);

    // Conditionals in JS
    // var age = 24;
    // if(age < 18) {
    //   console.log('You are a minor');
    // } else if(age == 18) {
    //   console.log('You are an adult');
    // } else {
    //   console.log('You are a senior citizen');
    // }

    // function rasna(a){
    //     if (a>=18)
    //     {
    //         console.log("You can drink rasna");
    //     }
    //     else
    //     {
    //         console.log("you can not drink rasna");
    //     }
    //     }
        
    //     let age=prompt("Enter your age: ");
    //     age=Number(age);
        
    //     rasna(age);

    // Loops in JS
    // var arr = [1,2,3,4,5,6,7,8,9];
    // console.log(arr);
    // for(var i=0 ;i<arr.length;i++){
    //     console.log(arr[i]);
    // }

    // arr.forEach(function(element){
    //     console.log(element*2);
    // });

    // let j=0;
    // while(j<arr.length){
    //     console.log(arr[j]);
    //     j++;
    // }

    // do{
    //     console.log(arr[j]);
    //     j++;
    // }while(j<arr.length); 

    // for(var i=0 ;i<arr.length;i++){
    //     if(i == 2){
    //         break;
    //         continue;
    //     }       
    //     console.log(arr[i]);
    // }

    // let myArr = ["Fan","Camera",34,null,true];
    // Array  Methods
    // console.log(myArr.length);
    // console.log(myArr.toString());
    // myArr.pop();
    // console.log(myArr);
    // myArr.push("Laptop");
    // console.log(myArr);
    // myArr.shift();
    // console.log(myArr);
    // myArr.unshift("Sameer");
    // console.log(myArr);

    // String method in JS
    // let str ="Hello World";
    // console.log(str.length);
    // console.log(str.toUpperCase());
    // console.log(str.indexOf("World"));
    // console.log(str.lastIndexOf("o"));
    // console.log(str.slice(1,8));
    // d = str.replace("Hello", "Sameer");
    // console.log(d, str);

    // let myDate = new Date();
    // console.log(myDate.getTime());
    // console.log(myDate.getFullYear());
    // console.log(myDate.getDay());
    // console.log(myDate.getMinutes());
    // console.log(myDate.getHours());

    // DOM Manipulation
    // let elem = document.getElementById('click');
    // console.log(elem);

    // let elemClass = document.getElementsByClassName("container");
    // console.log(elemClass);
    // elemClass[0].style.background = "yellow";
    // elemClass[0].classList.add("bg-primary");
    // elemClass[0].classList.add("text-success");

    // console.log(elem.innerHTML);
    // console.log(elem.innerText);
    // console.log(elemClass[0].innerHTML);
    // console.log(elemClass[0].innerText);

    // tn = document.getElementsByTagName('div');
    // console.log(tn);
    // createdElement = document.createElement('p');
    // createdElement.innerText = "This is a created para";
    // tn[0].appendChild(createdElement);

    // createdElement2 = document.createElement('b');
    // createdElement2.innerText = "This is a created Bold";
    // tn[0].replaceChild(createdElement2, createdElement);

    // Selecting using Query
    // sel = document.querySelector('.container');
    // console.log(sel);
    // sel = document.querySelectorAll('.container');
    // console.log(sel);

    // Events in JS

    // function clicked(){
    //     console.log('The button was clicked');
    // }

    // window.onload = function(){
    //     console.log('document was loaded');
    // }

    // firstContainer.addEventListener('click',function(){
    //     console.log("click hogaya");
    // })
    // let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
    // firstContainer.addEventListener('mouseover',function(){
    //     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    //     console.log("Mouse on the container");
    // })

    // firstContainer.addEventListener('mouseout',function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
    //     console.log("Mouse out of the container");
    // })
    // mouseup and mousedown are also there

    // arrow function
    // function sum(a, b){
    //     return a+b;
    // }
    // sum = (a,b)=>{
    //     return a+b;
    // }

    // logKaro = ()=>{
    //     document.querySelectorAll('.container')[1].innerHTML = "set interval fired";
    //     console.log("I am ur log");
    // }

    // SetTimeout and SetInterval

    // setTimeout(logKaro, 5000);
    // clr = setInterval(logKaro, 2000);
    // use clearInterval(clr)/clearTimeout(clr) to stop it

// JSON
// obj = {name: "harry", length: 1, a: {this: 'tha\"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse({name: "harry", length: 1, a: {this: 'that'}})
// console.log(parsed)

// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`);