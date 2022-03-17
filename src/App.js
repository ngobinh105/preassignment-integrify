import React from 'react'
import { useState, useEffect } from 'react'
import BreweryList from './components/BreweryList'
import axios from 'axios'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BreweryDetail from './components/BreweryDetail'

function App() {
  const [breweries, setBreweries] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
    const getAllBreweries = () => {
      axios
        .get('https://api.openbrewerydb.org/breweries')
        .then((res) => {
          setBreweries(res.data)
        })
        .catch((err) => console.log('error', err))
    }
    getAllBreweries()
  }, [])
  console.log('breweries', breweries)
  return (
    <Router>
      <NavBar text={text} setText={setText} />
      <Routes>
        <Route
          exact
          path='/:id'
          element={<BreweryDetail breweries={breweries}></BreweryDetail>}
        ></Route>
        <Route
          exact
          path='/'
          element={<BreweryList breweries={breweries} text={text} />}
        ></Route>
      </Routes>
    </Router>
  )
}

export default App
