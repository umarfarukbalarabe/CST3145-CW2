var express = require("express");
var app = express();

let lessons = [
    {'topic': 'chemistry','location':'Sharjah','price':'100'},
    {'topic': 'chemistry','location':'Abu Dhabi','price':'90'},
    {'topic': 'chemistry','location':'Dubai','price':'80'},
    {'topic': 'chemistry','location':'Dubai','price':'150'},
];

let user = [
    {'email': 'user@email.com','password':'mypassword'}
]

app.get('/lessons', (request, response) => {
    response.json(lessons);
});

app.get('/user', (request, response) => {
    response.json(user);
});

app.use(express.static("./"));

app.listen(3000, () => {
    console.log("App started on 3000")
});