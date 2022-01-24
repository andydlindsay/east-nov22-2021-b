const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 54321;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // name=alice&age=42
// app.use(cors());

const animals = [
  {
    id: 1,
    name: 'Mona',
    species: 'cat',
    age: 6
  },
  {
    id: 2,
    name: 'Dmitri',
    species: 'cat',
    age: 3
  },
  {
    id: 3,
    name: 'Justin',
    species: 'parrot',
    age: 58
  },
  {
    id: 4,
    name: 'Nick Rusin',
    species: 'unknown',
    age: 31
  },
];

app.get('/', (req, res) => {
  res.send('hello world');
});

// GET /animals
app.get('/animals', (req, res) => {
  res.json(animals);
});

// GET /animals/:id
app.get('/animals/:id', (req, res) => {
  const { id } = req.params;
  // const id = req.params.id;

  const animal = animals.find((animal) => animal.id === Number(id)); // 5 === '5'
  res.json(animal);
});

// POST /animals
app.post('/animals', (req, res) => {
  const {name, species, age} = req.body;

  const id = animals.length + 1;

  const newAnimal = {
    id,
    name,
    species,
    age
  };

  animals.push(newAnimal);

  res.status(201).json(newAnimal); // .json
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
