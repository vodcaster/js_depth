//---------------------Immediately invoked fuction expression----------

(function connect(){ //name iife
    console.log("Connected to DB")
})();

((name) => { //
    console.log(`${name} Connected to server`)
})("Shivam")