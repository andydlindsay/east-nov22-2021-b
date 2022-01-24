import {useState, useEffect} from 'react';
import AnimalListItem from './AnimalListItem';
import axios from 'axios';

// const animalsArr = [
//   {
//     id: 1,
//     name: 'Bubbles',
//     species: 'goldfish',
//     age: 0
//   },
//   {
//     id: 2,
//     name: 'Molly',
//     species: 'cat',
//     age: 2
//   },
// ];

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('/animals')
      .then((res) => {
        // setAnimals([...animals, ...res.data]);
        setAnimals((prevAnimals) => {
          return [...prevAnimals, ...res.data];
        });
      });
  }, []);

  // const data = useFetchData('http://localhost:')

  // const arrOfJsx = [];
  // for (const animal of animals) {
  //   const jsx = <AnimalListItem {...animal} />
  //   // const jsx = <AnimalListItem name={animal.name} age={animal.age}/>
  //   arrOfJsx.push(jsx);
  // }

  // const arrOfJsx = animals.map((animal) => {
  //   return <AnimalListItem {...animal} />
  // });

  const arrOfJsx = animals.map((animal) => <AnimalListItem key={animal.id} {...animal} />);

  return (
    <div>
      <h2>This is the AnimalList</h2>
      {/* { loading && <h2>Loading...</h2> } */}
      { arrOfJsx }
    </div>
  );
};

export default AnimalList;
