// const AnimalListItem = ({name, species, age, id}) => {
const AnimalListItem = (props) => {
  // const {animal} = props;
  const {name, species, age, id} = props;

  return (
    <div>
      <h2>This is {name} ({id})</h2>
      <h3>Species: {species}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default AnimalListItem;
