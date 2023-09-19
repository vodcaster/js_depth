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