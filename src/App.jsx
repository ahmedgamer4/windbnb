import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import stays from '../stays.json'
import { useState, useEffect, useReducer } from 'react'

function App() {
  const [locations, setLocations] = useState(stays)
  const [filter, setFilter] = useState({
    city: 'Helsinki',
    children: 0,
    adults: 0,
  })
  const [search, setSearch] = useState(0)

  useEffect(() => {
    if (search === 1) {
      console.log('updated')
      setLocations(stays.filter((l) => l.city.toLowerCase() === filter.city.toLowerCase() && l.maxGuests >= filter.children + filter.adults))
      console.log(locations)
      console.log(filter)
      setSearch(0)
    }
  }, [filter.adults, filter.children, filter.city, search])
  

  return (
    <div className='min-h-screen bg-white flex flex-col w-11/12 py-5 mx-auto items-center pb-40'>
      <Header filter={filter} setFilter={setFilter} setSearch={setSearch} />
      <Main locations={locations} />
    </div>
  )
}

export default App
