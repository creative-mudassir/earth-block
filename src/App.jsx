import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import ErpLayout from './pages/ErpLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Module from './pages/Module.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<ErpLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":module" element={<Module />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
