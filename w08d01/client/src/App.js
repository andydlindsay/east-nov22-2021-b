import './App.css';
import AnimalList from './components/AnimalList';
import NewAnimalForm from './components/NewAnimalForm';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to our site!</h2>
      <AnimalList />
      <NewAnimalForm />
    </div>
  );
};

export default App;
