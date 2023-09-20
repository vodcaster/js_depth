const arr = [1,2,3,4,5,6]
for (const num of arr) {// forof loop
    // console.log(num)
}

const user = "Shivam Singh"
for (const use of user){// forof loop
   // console.log(use)
}

//Maps
const  map = new Map()
map.set("UP","Uttar Pradesh")
map.set("RJ","Rajasthan")
map.set("KA","Karnataka")
 for (const [key,value] of map){// forof loop
    // console.log(`${key} -> ${value}`)
 }//objects are not iteratable in similar way we have other ways for iterating through objects



 //forin loop
 const myObj = {
    username : "vodacster",
    email: "shivam@boltavenue.in",
    designation: "SDE"
 }
 for (const key in myObj) {
   // console.log(`${key} :- ${myObj[key]}`)
 }