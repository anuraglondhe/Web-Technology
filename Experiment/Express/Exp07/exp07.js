const express = require('express')
const app = express()
const port = 3000

users = [
    {Name : "Ram", RollNo: "101", Div: "A-div"},
    {Name : "Sham", RollNo: "102", Div: "A-div"},
    {Name : "Soham", RollNo: "103", Div: "B-div"},
    {Name : "Kuamr", RollNo: "104", Div: "B-div"},
];

app.get('/user', (req, res) => {
    res.json(users);
})

app.get('/user/:id', (req, res) => {
    let userId = req.params.id;

    let user = users.find(u => u.RollNo === userId);

    if(user)
        res.json(user);
    else    
        res.sendStatus(404).statusMessage("User not found");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
