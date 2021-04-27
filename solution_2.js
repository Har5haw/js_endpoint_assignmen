//Solution using promise, async and await
//This solution is used when we feel the order of the console statements in the question is mandatory


function getData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 2000);
    })

}

async function main() {
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

main();