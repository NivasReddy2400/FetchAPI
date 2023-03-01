const textbtn = document.querySelector('#getText');
textbtn.addEventListener('click',getData)
const usrbtn = document.querySelector('#getUsers');
usrbtn.addEventListener('click',getUsers);
const apibtn = document.querySelector('#getPosts');
apibtn.addEventListener('click',getPosts);
const submit = document.querySelector('#addPost');
submit.addEventListener('submit',addPost);

function getData(){
fetch('sample.txt').then(function(res){
    return res.text();
}).then(function(data){
    document.getElementById('textId').innerHTML = data;
}).catch((err) => console.log(err));
}

function getUsers(){
    fetch('users.json').then(function(res){
        return res.json();
    }).then((data) => {
        let output = "<h2>Users</h2>";
        data.forEach(user => {
            output += `<ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>`;
        });
        document.getElementById('output').innerHTML = output;
    })

}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
        return res.json();
    }).then((data) => {
        let output = "<h2>Post</h2>"
        data.forEach((post) => {
            output += `<div>
            <h3>${post.title}</h3>
            <post>${post.body}</p>
            </div>`;
        });
        document.getElementById('output2').innerHTML = output;
    })
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title');
    let body = document.getElementById('body');
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    }).then((res) => {
        return res.json();
    }).then((data) => {
        data.title = title.value; 
        data.body = body.value;
        console.log(data);
        
    })
}



const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

function dostuff(){
    console.log('dostuff1')
    return first()
    .then(fres => {
        console.log('dostuff2')
        console.log(fres);
        return second(fres);

    })
}



dostuff().then(res => {
    console.log('0dostuff')
    console.log(res);
})

let que = fetch("https://opentdb.com/api.php?amount=10").then((res) => {
    return res.json()
}).then((data) => {
    //console.log(data.results.question);
    return Promise.all(data.results.map((result) => {
        return result.question}));
}).catch(err => console.log(err))

function display(data){
    console.log(data);
}

let fetchdata = fetch("https://opentdb.com/api.php?amount=20")
.then(response => response.json())
.then(data => data.results)
//.then(Promise.all.map(question => question))
.then(display);
const giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=xZ4G36lV0Diu4E0XKiYieDM9QNqpYv9v&q=small&limit=1&offset=0&rating=g&lang=en";
const opentriviaAPI = "https://opentdb.com/api.php?amount=10"

let futuredata = fetch(giphyAPI);
//console.log(futuredata);
futuredata.then(res => res.json())
.then((data) => {
    //console.log(data.results);
    return data;
}).then(display)

function display(values){
console.log(values);
 values.results.forEach(value => {
     console.log(value.question);
     console.log(value.correct_answer)
});
}

function display(value){
console.log(value.data[0]);
    document.querySelector('#gifdiv').innerHTML = "<img src='" + value.data[0].embed_url + "' class='container-image' />"
     values.results.forEach(value => {
         console.log(value.question);
         console.log(value.url)
         
    });
   }


let num = Math.random()*10;

fun(num)
.then(console.log('hello'))
.catch((error) => {
    console.log(error)
})

function fun(num){
    return new Promise((resolve,reject) => {
        if(num>3){
            reject('errorrrrrr')
        }
        else{
            resolve(num) 
        }
    })
}
console.log(fun(num));



const promiseA = new Promise((resolve, reject) => {
    resolve('hello');
  });
  // At this point, "promiseA" is already settled.
  promiseA.then(display);
  function display(){
    console.log(promiseA)
  }
  promiseA.then((data) => console.log("asynchronous logging has val:", data));
  console.log("immediate logging");


const promise1 = (20);
const promise2 = Promise.resolve(20);
const promise3 = Promise.reject("rejected");
const promise4 = new Promise((resolve,reject) => {
  let num = Math.random()*10
  resolve(num)  
 });
console.log(promise1)
console.log(promise2)
console.log(promise3)
console.log(promise4)

Promise.any([promise1,promise2,promise3,promise4]).then(values => 
  console.log(values))




















