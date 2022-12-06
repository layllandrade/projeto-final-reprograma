import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Doe } from './pages/Doe'
import { Doacao } from './pages/Doacao'
import { Contato } from './pages/Contato'

export function ApplicationRoutes() {
  return(
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/doe" element={<Doe />} />
          <Route path="/queroreceber" element={<Doacao />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
  )
}