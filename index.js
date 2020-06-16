//introduction

// let x;
// console.log(x);
// x=4;

// console.log(x);
// x=12.896485;
// console.log(x);

// x="hello";
// console.log(x);

// const y;
// console.log(y);
// y=7;
// console.log(y);

// x=4.232;
// console.log(typeof x );




//why not to use var
// var x=7;
// console.log(x);


// var x=9;
// console.log(x);




/***************************************************************************/


//Math

// let x = 3;
// let y = 10;

// //addition
// let result = (x + y);
// console.log( "addition",result)

// // multiplication
// result = x * y
// console.log("multiplication " , result)

// // division
// result = x / y
// console.log("division " , result)


//math library
// console.log(Math.sqrt(25));

/***************************************************************************/


//conditional statements

// let grade =85;
// let evaluation;

// if (grade > 85) 
// {
//   evaluation = "A"
// }

// console.log("evaluation ",evaluation)




// if (grade >= 85) {
//   evaluation = "A"
// }
// else if (grade >=70){
// evaluation = "B"
// }
// else evaluation = "C"

// console.log("evaluation ",evaluation)



/***************************************************************************/
//loops


// for (let counter = 1; counter < 5; counter++) {
//    console.log('Inside the loop:' , counter);
//  }

// let count = 0;
// while (count < 10) {
// console.log("count",count); 
// count +=2;
// }

/***************************************************************************/


//string functions

// let str1 = "Hello "
// let str2 = "There!"
// let str3;
// str3 = str1.concat(str2)
// console.log(str3)
// str3 = str1.toLowerCase()
// console.log(str3)
// str3 = str1.toUpperCase()
// console.log(str3)

// let x= 5
// console.log(typeof(x));
// let y=x.toString()
// console.log(typeof(x));
// console.log(typeof(y));

// str1.replace("ll","vv")
// console.log(str1)
// str1.slice(1, 3)
// console.log(str1)

// let sentence = "hello there everyone , how have you been ?"
// let words = sentence.split(",")
// console.log(words)



/***************************************************************************/


//functions

// function multiplication(p1, p2){ 		 
//   return p1 * p2;   		
//   }
//  multiplication(5,7)


// const addition =(a,b)=>{
// return a+b
// }
//  addition(5,7)

/***************************************************************************/


//arrays
// let array_original = ['Apple',1.257, 15,"Banana",2] 
// console.log(array_original)

//reverse
// array_original.reverse()
// console.log("array",array_original)

//pop
// let poped=array_original.pop()
// console.log("array",array_original)
// console.log("poped",poped)

//push
// let pushed = array_original.push("hey")
// console.log("array",array_original)
// console.log("pushed",pushed)


//concat
// let concated = array_original.concat("hey")
// console.log("array",array_original)
// console.log("concated",concated)

//filter
// let array_numbers = array_original.filter((element)=>{return element>=2})
// console.log(array_numbers)

// let string_array = array_original.filter((element)=>{return typeof(element)=="string"})
// console.log(string_array)

//map
// let array2 = array_numbers.map((element)=>{return element*2})
// console.log(array2)

//forEach
// let text="";
// let array2 = array_original.forEach((element)=>{ text= text.concat(element)})
// console.log(array_original)
// console.log(array2)
// console.log(text)
