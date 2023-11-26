import './App.css';
import { useState } from 'react';
import { Card } from './components/cards';
import { Input } from './components/input';
import { ButtonSearch } from './components/buttonSearch';


const marvel = [{ name: 'Железный человек' },
{ id: 0, name: 'Невероятный Халк' },
{ id: 1, name: 'Железный человек 2' },
{ id: 2, name: 'Тор' },
{ id: 3, name: 'Первый мститель' },
{ id: 4, name: 'Мстители' },
{ id: 5, name: 'Железный человек 3' },
{ id: 6, name: 'Тор 2: Царство тьмы' }
]

function App() {


  const [list, setList] = useState(marvel)
  const [query, setQuery] = useState('')

  const handleFilterOnclick = () => {
    setList(list.filter(person => person.name === query))
    setQuery('')
  }
  const addNewFilm = (e) => {
    e.preventDefault()
    const newFilm = {
      id: Date.now(),
      name: query
    }
    setList(prevList => [...prevList, newFilm]);
    setQuery('');
  }
  console.log(list);


  return (
    <div className="App">
      <Input value={query} setValue={setQuery} />
      <div className='button__elemnts'>
        <ButtonSearch onClick={handleFilterOnclick} title='Search' />
        <ButtonSearch onClick={addNewFilm} title='Add' />
      </div>


      {list.map(movie => {
        return <Card name={movie.name} key={movie.id} />
      })}


    </div>
  );
}

export default App;