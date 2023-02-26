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



