import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Doe } from './pages/Doe'
import { ReceberDoacao } from './pages/ReceberDoacao'
import { Contato } from './pages/Contato'
import { Footer } from './components/Footer'

export function ApplicationRoutes() {
  return(
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/doe" element={<Doe />} />
          <Route path="/receberdoacao" element={<ReceberDoacao />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}