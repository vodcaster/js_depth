const numbers = [1,2,3,4,5,6,7,8,9,10]
const res = numbers.filter( (val) => {
    return val > 2 && val < 7
})
// console.log(res);

const bookList = [
    {
        bookname:"YDKJS",
        year:2007,
        edition:2021
    },
    {
        bookname:"Web hackers handbook",
        year:2001,
        edition:2022
    },
    {
        bookname:"Bug Bounty 101",
        year:2003,
        edition:2023
    },
    {
        bookname:"DSA",
        year:2009,
        edition:2020
    },
]

const search =  bookList.filter( (book) => {
        return book.year > 2004 && book.edition >= 2020
} )

console.log(search);