import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const connString =
    'mongodb+srv://ayobami:meetdevs@cluster0.rv1ee3z.mongodb.net/sample_mflix?retryWrites=true&w=majority';

const movies = mongoose.connection.collection('movies');

const app = express();

const PORT: number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get
app.get('/', (req, res) => {
    res.json({ Test: 'Ok' });
});

// get movies from sample database
app.get('/movies', async (req, res) => {
    try {
        const moviesData = await movies.find().limit(3).toArray();
        res.json(moviesData);
    } catch (error) {
        console.log(error);
    }
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

mongoose
    .connect(connString, { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected');
        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// add some interfaces

interface dev {
    name: string;
    role: string;
}
