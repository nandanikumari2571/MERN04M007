// let getData = function (value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("value", value);
//             reject("some error")
//             // resolve("successfullly data fetched")
//         }, 2000);
//     })
// }
// getData(1).then((res) => {
//     getData(2).then(() => {
//         getData(3)
//     })
// }).catch((res) => {
//     console.log(res)
// })


// fetch method

// asyns keyword is used for the creating a asynchronous block
// await


let getData = async function () {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    // data.then((res) => {
    //     let result = res.json()
    //     result.then((res) => {
    //         console.log(res)
    //     })
    // })

let objData = await data.json();
    console.log(objData)
}
getData()


