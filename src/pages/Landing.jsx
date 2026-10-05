import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, Mail, ThermometerSun, ShieldCheck, Leaf, ArrowRight, PlayCircle, CheckCircle2,
  Mountain, Blend, Gauge, Waves, PackageCheck, Menu, X, MessageCircle, Flame, Zap, Hammer, Recycle,
  LayoutDashboard, Receipt, Boxes as BoxesIcon, BarChart3
} from 'lucide-react'
import Logo from '../components/Logo.jsx'

const IMG = `${import.meta.env.BASE_URL}img/`

const nav = ['Home', 'Products', 'Manufacturing', 'Technology', 'Quality', 'Projects', 'Contact']

const products = [
  { id: 'standard', name: 'Standard Block', note: 'Interlocking', size: '400×200×200 mm', mpa: '7 MPa' },
  { id: 'half', name: 'Half Block', note: 'Interlocking', size: '200×200×200 mm', mpa: '7 MPa' },
  { id: 'corner', name: 'Corner Block', note: 'Interlocking', size: '400×200×200 mm', mpa: '7 MPa' },
  { id: 'ublock', name: 'U-Block', note: 'Beam / lintel', size: '400×200×200 mm', mpa: '10 MPa' },
  { id: 'custom', name: 'Custom Size', note: 'Made to order', size: 'On request', mpa: 'On request' },
  { id: 'accessories', name: 'Accessories', note: 'Rebar & fittings', size: 'Various', mpa: '—' },
]

const why = [
  'Superior Thermal Insulation', 'Energy Efficient', 'High Compressive Strength',
  'Fire Resistant', 'Fast & Easy Installation', 'Environmentally Friendly',
]

const steps = [
  { icon: Mountain, t: 'Raw Materials', d: 'Soil + Cement + Water' },
  { icon: Blend, t: 'Mixing', d: 'Automated process' },
  { icon: Gauge, t: 'Pressing', d: 'High-pressure machines' },
  { icon: Waves, t: 'Curing', d: 'Controlled environment' },
  { icon: PackageCheck, t: 'Finished Blocks', d: 'Ready for construction' },
]

const projects = [
  { n: 'Residential Villas — Phase 2', l: 'Johor Bahru', s: 'Completed', q: '48,000 blocks' },
  { n: 'Boundary & Retaining Walls', l: 'Selangor', s: 'Ongoing', q: '22,500 blocks' },
  { n: 'Warehouse Complex', l: 'Penang', s: 'Completed', q: '90,000 blocks' },
]

const erp = [
  { icon: LayoutDashboard, t: 'Live Dashboard', d: 'Sales, profit, cash, stock and production KPIs in one view.' },
  { icon: Receipt, t: 'Quotes to Invoices', d: 'Website inquiry to quotation, order, invoice and payment.' },
  { icon: BoxesIcon, t: 'Inventory & Production', d: 'Raw material usage, daily output and low-stock alerts.' },
  { icon: BarChart3, t: 'Accounting & Reports', d: 'Ledgers, P&L, balance sheet, cash flow and tax reports.' },
]

export default function Landing() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const go = id => { setOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <div className="landing">
      <div className="topbar">
        <span><Phone size={14} /> +60 123 456 789</span>
        <span><Mail size={14} /> info@earthblocksolutions.com</span>
        <span className="spacer" />
        <Link to="/login">Login</Link>
      </div>

      <header className="navbar">
        <Logo />
        <nav className={open ? 'open' : ''}>
          {nav.map(n => <a key={n} onClick={() => go(n)}>{n}</a>)}
          <Link to="/app" className="btn btn-green sm">ERP Dashboard</Link>
        </nav>
        <button className="hamburger" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <p className="eyebrow">Premium Concrete Blocks</p>
          <h1>STRONGER WALLS.<br /><em>LASTING VALUE.</em></h1>
          <p className="lead">High-quality interlocking concrete blocks made from soil, cement, water and advanced Malaysian engineering technology. Designed to control heat and cold, giving you comfort all year round.</p>
          <div className="hero-feats">
            <span><ThermometerSun /> Controls<br />Heat &amp; Cold</span>
            <span><ShieldCheck /> Durable &amp;<br />Long Lasting</span>
            <span><Leaf /> Eco Friendly<br />&amp; Sustainable</span>
          </div>
          <div className="row">
            <button className="btn btn-green" onClick={() => go('products')}>Explore Our Products <ArrowRight size={18} /></button>
            <button className="btn btn-ghost"><PlayCircle size={18} /> Watch Video</button>
          </div>
        </div>
      </section>

      <section id="products" className="section container">
        <h2>Our Products</h2>
        <div className="grid products">
          {products.map((p, i) => (
            <article className="card product" key={p.name}>
              <img className="block-thumb" src={`${IMG}p-${p.id}.jpg`} alt={p.name} loading="lazy" />
              <h4>{p.name}</h4>
              <small>{p.note}</small>
              <dl><dt>Size</dt><dd>{p.size}</dd><dt>Strength</dt><dd>{p.mpa}</dd></dl>
              <a className="link">View Details <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="container why-grid">
          <div>
            <h2>Why Choose EarthBlock?</h2>
            <ul className="checks">{why.map(w => <li key={w}><CheckCircle2 size={20} />{w}</li>)}</ul>
          </div>
          <div id="technology" className="tech-card">
            <h3>Malaysian Engineering<br />Now in Your Country</h3>
            <p>Imported technology, advanced machinery and strict quality control for the best concrete blocks.</p>
            <a className="btn btn-green sm">Learn More <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="process">
        <div className="container">
          <h2>From Raw Materials To Your Walls</h2>
          <p className="muted">A complete system for a stronger and sustainable future.</p>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={s.t}>
                <span className="circle"><s.icon size={30} /></span>
                <b>{s.t}</b><small>{s.d}</small>
                {i < steps.length - 1 && <ArrowRight className="arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="section container">
        <h2>Quality You Can Measure</h2>
        <div className="grid four">
          {[['7–10 MPa', 'Compressive strength'], ['4 hrs', 'Fire resistance rating'], ['−30%', 'Cooling energy use'], ['100%', 'Batch-tested before dispatch']].map(([a, b]) => (
            <div className="card stat" key={b}><strong>{a}</strong><span>{b}</span></div>
          ))}
        </div>
        <p className="muted small">Figures are illustrative demo values.</p>
      </section>

      <section id="projects" className="section container">
        <h2>Projects</h2>
        <div className="grid three">
          {projects.map(p => (
            <article className="card project" key={p.n}>
              <span className={`badge ${p.s === 'Completed' ? 'ok' : 'warn'}`}>{p.s}</span>
              <h4>{p.n}</h4><p className="muted">{p.l} · {p.q}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="erp-band">
        <div className="container">
          <h2>Build Better. Manage Smarter.</h2>
          <p className="light">Your complete solution for website + accounting system.</p>
          <div className="grid four">
            {erp.map(e => <div className="erp-card" key={e.t}><e.icon size={28} /><b>{e.t}</b><p>{e.d}</p></div>)}
          </div>
          <Link to="/app" className="btn btn-green">Open Live ERP Demo <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section id="contact" className="section container contact">
        <div>
          <h2>Request a Quote</h2>
          <p className="muted">Tell us about your project and we will send a PDF quotation. Inquiries flow straight into the ERP.</p>
          <a className="btn btn-whatsapp"><MessageCircle size={18} /> Chat on WhatsApp</a>
          <ul className="icons-list">
            <li><Flame size={18} /> Fire resistant</li><li><Zap size={18} /> Lower energy cost</li>
            <li><Hammer size={18} /> Fast installation</li><li><Recycle size={18} /> Eco friendly</li>
          </ul>
        </div>
        <form className="card form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
          {sent ? <p className="sent"><CheckCircle2 /> Thank you! Your inquiry was received (demo).</p> : <>
            <input required placeholder="Full name" />
            <input required type="email" placeholder="Email" />
            <input placeholder="Phone / WhatsApp" />
            <select defaultValue=""><option value="" disabled>Product of interest</option>{products.map(p => <option key={p.name}>{p.name}</option>)}</select>
            <textarea rows="3" placeholder="Quantity & project details" />
            <button className="btn btn-green">Get a Quote</button>
          </>}
        </form>
      </section>

      <footer className="footer">
        <Logo light />
        <nav>{nav.map(n => <a key={n} onClick={() => go(n)}>{n}</a>)}</nav>
        <small>© 2026 EarthBlock Solutions. All rights reserved.</small>
      </footer>
    </div>
  )
}
