import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
  AreaChart, Area
} from 'recharts'
import {
  TrendingUp, TrendingDown, FileText, Wallet, ShoppingBag, Factory, ClipboardList, Users, ShieldCheck,
  ArrowDownLeft, ArrowUpRight, Landmark, AlertTriangle
} from 'lucide-react'

const sales = [38, 52, 41, 60, 47, 55, 44, 63, 51, 58, 49, 66, 54, 61, 57]
const purchases = [24, 31, 27, 36, 29, 33, 30, 38, 32, 35, 28, 40, 34, 37, 33]
const weekly = sales.map((s, i) => ({ d: `Apr ${i * 2 + 1}`, sales: s, purchases: purchases[i] }))

const stock = [
  { name: 'Cement', value: 42, color: '#14532d' },
  { name: 'Sand', value: 28, color: '#2563eb' },
  { name: 'Gravel', value: 18, color: '#16a34a' },
  { name: 'Other', value: 12, color: '#9ca3af' },
]
const profit = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m, i) => ({ m, p: [9, 11, 10, 14, 13, 17, 18.7][i] }))

const kpis = [
  { l: 'Total Sales', v: '$124,850', c: '12%', up: true, I: Wallet },
  { l: 'Total Purchases', v: '$82,430', c: '8%', up: false, I: ShoppingBag },
  { l: 'Net Profit', v: '$18,670', c: '15%', up: true, I: TrendingUp },
]

const small = [
  [FileText, 'Open Invoices', '12'], [ArrowDownLeft, 'Outstanding AR', '$28,450'],
  [ArrowUpRight, 'Outstanding AP', '$19,230'], [Landmark, 'Cash & Bank', '$52,680'],
  [Factory, 'Production Today', '8,400 blocks'], [ClipboardList, 'Pending Quotations', '6'],
  [Users, 'Employees', '24'], [ShieldCheck, 'VAT / Tax', '$6,210'],
]

const alerts = [
  ['Cement below reorder level (1,200 bags left)', 'warn'],
  ['Invoice INV-0148 overdue by 12 days', 'bad'],
  ['New website inquiry: 20,000 Standard Blocks', 'ok'],
]

export default function Dashboard() {
  return (
    <>
      <div className="page-head">
        <h1>Dashboard</h1>
        <span className="chip">Apr 1, 2025 – Apr 30, 2025</span>
      </div>

      <div className="grid three">
        {kpis.map(({ l, v, c, up, I }) => (
          <div className="card kpi" key={l}>
            <span className="kpi-l"><I size={18} /> {l}</span>
            <strong>{v}</strong>
            <small className={up ? 'up' : 'down'}>{up ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {c} vs. last month</small>
          </div>
        ))}
      </div>

      <div className="grid charts">
        <div className="card">
          <h4>Sales vs Purchases</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={weekly}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="d" tick={{ fontSize: 11 }} interval={2} />
              <YAxis tick={{ fontSize: 11 }} unit="k" />
              <Tooltip formatter={v => `$${v}k`} />
              <Legend />
              <Bar dataKey="sales" name="Sales" fill="#15803d" radius={[3, 3, 0, 0]} />
              <Bar dataKey="purchases" name="Purchases" fill="#2563eb" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h4>Inventory Status</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={stock} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={2}>
                {stock.map(s => <Cell key={s.name} fill={s.color} />)}
              </Pie>
              <Tooltip formatter={v => `${v}%`} />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid four">
        {small.map(([I, l, v]) => (
          <div className="card mini" key={l}><I size={22} /><small>{l}</small><b>{v}</b></div>
        ))}
      </div>

      <div className="grid charts">
        <div className="card">
          <h4>Monthly Profit ($k)</h4>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={profit}>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#16a34a" stopOpacity={0.4} />
                  <stop offset="1" stopColor="#16a34a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="m" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Area dataKey="p" stroke="#15803d" strokeWidth={2} fill="url(#g)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h4>Alerts &amp; Activity</h4>
          <ul className="alerts">
            {alerts.map(([t, k]) => <li key={t} className={k}><AlertTriangle size={16} />{t}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
