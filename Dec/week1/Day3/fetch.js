
// ! get request
let getData = async () => {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();

    let url = document.createElement("url");

    json.forEach(ele => {
        let li = document.createElement("li");
        li.innerText = ele.title;
        url.append(li);
        
    });
    document.body.append(url);
}

getData();


// ! post request
let createData = async () => {
     let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "qlith",
            desc:"this is the qlith innovation",
            age:20
    }),
    headers:  {
    'Content-type': 'application/json',
    },
    });
    let data = await res.json();
    console.log(data);
}
createData()


// ! put request

let updateData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: "PUT",
        body: JSON.stringify({
            title: "new title",
            desc: "this is updated description",
            age:40
        }),
        headers: {
            "Content-type": "application/json"
        }
    })

    let data = await res.json();
    console.log(data)
}

updateData()


// ! delete request

let deleteData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });

    let data = await res.json();
    console.log(data);
}
deleteData();



