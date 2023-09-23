import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './page/Home/Home';
import Description from './layout/Description/Description';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

const URL = import.meta.env.VITE_API_ADZUNA;
const APP_ID = import.meta.env.VITE_APP_ID;
const API_KEY = import.meta.env.VITE_APP_KEY;

function App() {
  const [data, setData] = useState('');
  const [showJobs, setShowJobs] = useState(null)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [job, setJob] = useState('')
  const [page, setPage] = useState('')

  const showLocationPermissionNotification = () => {
    toast.info("Si no seleccionas un pais por defecto mostrara trabajos en españa. Para buscar trabajos en otros paises debes buscar trabajos en su propio idioma. ejemplo: England, London, Developer", { autoClose: 10000, });
  }

  const callApi = async () => {
    const res = await fetch(`${URL}${country || 'es'}/search/${page || '1'}?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=5&what=${job || 'developer'}&where=${city || 'madrid'}`)
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    showLocationPermissionNotification()
    callApi()
  }, [])

  return (
    <BrowserRouter>
      <div className='container' >
        <Header />
        <Routes>
          <Route path="/" element={<Home
            data={data}
            setData={setData}
            showJobs={showJobs}
            setShowJobs={setShowJobs}
            city={city}
            setCity={setCity}
            country={country}
            setCountry={setCountry}
            job={job}
            setJob={setJob}
            callApi={callApi}
            setPage={setPage}
            page={page} />} />
          <Route path="/description" element={<Description showJobs={showJobs} />} />
        </Routes>
      </div>

      <ToastContainer />
      <Footer />

    </BrowserRouter>
  )
}

export default App
