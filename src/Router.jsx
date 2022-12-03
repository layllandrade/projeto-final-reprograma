import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'

export function Router() {
  return(
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
    </BrowserRouter>
  )
}