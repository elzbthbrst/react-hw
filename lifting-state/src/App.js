
import './App.css';

import { useState } from 'react'


function App() {
  const [animal, setAnimal] = useState('')

  return (
    <form>
      <Name  />
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      <Display  animal={animal} />
    </form>
  )
}

function Name() {
  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

function FavoriteAnimal({ animal, onAnimalChange }) {

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

function Display({animal}) {
  
  return <div>{`Ваше любимое животное: ${animal}!`}</div>
}


export default App;
