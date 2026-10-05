import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

export default function Login() {
  const nav = useNavigate()
  return (
    <div className="login">
      <form className="card" onSubmit={e => { e.preventDefault(); nav('/app') }}>
        <Logo />
        <h3>Sign in to ERP</h3>
        <input defaultValue="admin@earthblocksolutions.com" />
        <input type="password" defaultValue="demo1234" />
        <select defaultValue="Administrator">
          {['Administrator', 'Accountant', 'Sales Manager', 'Production Manager', 'Store / Inventory Manager'].map(r => <option key={r}>{r}</option>)}
        </select>
        <button className="btn btn-green">Login (demo)</button>
      </form>
    </div>
  )
}
