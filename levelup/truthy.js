const email = "shivam@boltavenue.in"
const emaillist = []; // empty array is truthy value
if (email){
    //  console.log("got the email");
}
else {
    // console.log("email not found")
}

if (emaillist){
    // console.log("got the emaillist");
}

// falsy values
// false , 0 ,-0 , BigInt-> 0n, Nan, "", null, undefined
// rest all are considerd as a truthy values
//truthy -> "0", 'false' , " " (sapce b/w quotes) ,[],{}, function(){}

// how to check array and object if it is empty

if (emaillist.length === 0){
    // console.log("Array is empty")
}

const emailObj = {}
if (Object.keys(emailObj).length === 0){
  //  console.log("object is empty")
}

// Nullish coalescing opeartor (??) 
 //   mainly used for null and undefined
let num = 5 ?? 10 
//  console.log(num) output 5
let num1 = null ?? 10
//  console.log(num1) output 10


//Ternary opeartor
// num>num1?console.log("num"):console.log("num1")