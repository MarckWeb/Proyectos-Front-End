import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import ButtonRandom from './components/ButtonRandom/ButtonRandom';
import Cite from './components/Cite/Cite';
import AuthorCite from './components/AuthorCite/AuthorCite';

function App() {
  const [data, setData] = useState('')
  const [author, setAutor] = useState('')

  const callApiQuoteGarden = async () => {
    const responde = await fetch(`https://quote-garden.onrender.com/api/v3/quotes/random`)
    const dataApi = await responde.json()
    setAutor(dataApi.data[0].quoteAuthor)
    setData(dataApi.data)
  }

  useEffect(() => {
    callApiQuoteGarden()
  }, [])

  return (
    <BrowserRouter>
      <div className='container'>
        <ButtonRandom callApiQuoteGarden={callApiQuoteGarden} />
        <Routes>
          <Route path="/" element={<Cite data={data} />} />
          <Route path='/:author' element={<AuthorCite author={author} />} />
        </Routes>
        <p className='container__bio'>created by <b>MarckWeb</b> - devChallenges.io</p>
      </div>
    </BrowserRouter>

  )
}

export default App
