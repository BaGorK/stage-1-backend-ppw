const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World from Edmealem Kassahun',
    usage: {
      name: '/name',
      hobby: '/hobby',
      dream: '/dream',
    },
  });
});

app.get('/name', (req, res) => {
  res.status(200).send('Edmealem Kassahun');
});

app.get('/hobby', (req, res) => {
  res
    .status(200)
    .send('Watching Movie, Reading Books, Playing Video Games, Traveling');
});

app.get('/dream', (req, res) => {
  res
    .status(200)
    .send(
      'My dream is to become a successful software engineer and help my family and community.'
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}...`);
});
