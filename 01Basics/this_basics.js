const user = {
    username: "Shivam",
    age: 24,
    qualification: "B.E.CSE",
    func: function() {
        // console.log(this.username)
        // console.log(this)
    }
}
user.func();
// console.log(this);
const thisFunction = function() {
    let username = "Shivam"
    // console.log(this.username)
}
thisFunction()

const arrowFunc = () => {
    // console.log(this)
}
arrowFunc()


//+++++++++++++++++++++++++++++++++more about arrow functions++++++++++++++++++++++++++++++++++++++

// implicit and explicit return

const sum = (num1,num2) => {
    return num1+num2   //explicit return
}

const add = (num1,num2) => num1+num2 //implicit return
const addTwo = (num1,num2) => (num1+num2 ) //implicit return
// console.log(sum(2,4))
// console.log(add(4,6))
// console.log(addTwo(6,8))