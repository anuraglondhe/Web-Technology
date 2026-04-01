const express = require('express');
const app = express();
const port = 3000;

const array = [
  { id: 1, name: "Yash", age: 20 },
  { id: 2, name: "Omkar", age: 30 },
  { id: 3, name: "Ganesh", age: 40 }
];

app.get('/', (req, res) => {
  res.json(array);
});

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = array.find(item => item.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});