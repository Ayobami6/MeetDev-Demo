import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT: number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get
app.get('/', (req, res) => {
  res.json({ Test: 'Ok' });
});

// test post
app.post('/test', (req, res) => {
  const requestBody: string = JSON.stringify(req.body);
  res.send(`This is the post request body ${requestBody}`);
});

// get dev
app.get('/dev', (req, res) => {
  const developer: dev = {
    name: 'Ayo',
    role: 'Backend',
  };
  res.json(developer);
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

// add some interfaces

interface dev {
  name: string;
  role: string;
}
