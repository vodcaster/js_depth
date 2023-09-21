const numberArr = [1,2,3,4,5,6,7,8,9]
const total = numberArr.reduce( (acc, currval)=>{
  return acc + currval
},0)
// console.log(total)

const cartList = [
    {
        item:"Monitor",
        price:12999,
    },
    {
        item:"Keyboard and Mouse",
        price:2999,
    },
    {
        item:"Iphone 14",
        price:74999,
    },
    {
        item:"Apple care",
        price:14999,
    },

]
const netPrice = cartList.reduce((acc,currval)=> {
        return acc + currval.price
},0)

// console.log(netPrice)