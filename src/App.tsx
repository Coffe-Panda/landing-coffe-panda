import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar"
import { AreaServicios } from './components/area-servicios/AreaServicios';
import { Home } from "./components/home/Home"
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <main className='main-router-container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<AreaServicios/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
