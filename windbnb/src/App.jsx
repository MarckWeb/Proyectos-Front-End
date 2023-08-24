import { useEffect, useState } from 'react'
import './App.scss'
import DataContext from './components/DataContext/DataContext'
import Header from './components/Header/Header'
import Properties from './components/Properties/Properties'

function App() {
  const [data, setData] = useState('')

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className='container'>
        <Header />
        <Properties />
        <footer className='container__footer'>
          <p className='container__footer-text'>created by <b>MarckWeb</b> - devChallenges.io</p>
        </footer>
      </div>
    </DataContext.Provider>
  )
}

export default App
