import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import {
  Home, ShoppingCart, ShoppingBag, Warehouse, Factory, CircleDollarSign, Wallet,
  FileText, Users, Landmark, Banknote, Receipt, FileSpreadsheet, FileBarChart, Settings, Menu, Bell, ChevronDown
} from 'lucide-react'
import Logo from '../components/Logo.jsx'

export const modules = [
  ['', 'Dashboard', Home], ['sales', 'Sales', ShoppingCart], ['purchases', 'Purchases', ShoppingBag],
  ['inventory', 'Inventory / Raw Materials', Warehouse], ['production', 'Production', Factory],
  ['receivable', 'Accounts Receivable', CircleDollarSign], ['payable', 'Accounts Payable', Wallet],
  ['expenses', 'Expenses', FileText], ['payroll', 'Payroll', Users], ['tax', 'Tax / VAT', Landmark],
  ['bank', 'Cash / Bank', Banknote], ['invoicing', 'Invoicing', Receipt],
  ['quotations', 'Quotations', FileSpreadsheet], ['reports', 'Reports', FileBarChart], ['settings', 'Settings', Settings],
]

export default function ErpLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`erp ${open ? 'side-open' : ''}`}>
      <aside className="sidebar">
        <Link to="/"><Logo light /></Link>
        {modules.map(([to, label, Icon]) => (
          <NavLink key={to} to={to ? `/app/${to}` : '/app'} end onClick={() => setOpen(false)}>
            <Icon size={18} />{label}
          </NavLink>
        ))}
      </aside>
      <div className="erp-main">
        <header className="erp-top">
          <button className="icon-btn" onClick={() => setOpen(!open)}><Menu /></button>
          <span className="spacer" />
          <span className="bell"><Bell size={20} /><i>2</i></span>
          <div className="user"><span className="avatar">A</span><span><b>Admin</b><small>Factory Manager</small></span><ChevronDown size={16} /></div>
        </header>
        <main className="erp-content"><Outlet /></main>
      </div>
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
    </div>
  )
}
