//Solution using promise
//This solution is used the order of the console statements is not mandatory

function getData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 2000);
    })

}

console.log("start");
getData().then((email)=>console.log("Email id of the user id is: " + email));
console.log("end");


//if order of the console statements is mandatory then see the solution_2.js