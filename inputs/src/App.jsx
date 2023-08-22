import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Menu from './components/Menu/Menu'
import Inputs from './components/Inputs/Inputs'

function App() {

  return (
    <div className='container'>
      <Menu />
      <Inputs />
    </div>
  )
}

export default App
