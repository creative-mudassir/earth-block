import { useParams } from 'react-router-dom'
import { Plus, Search } from 'lucide-react'
import { modules } from './ErpLayout.jsx'

const S = {
  Paid: 'ok', Pending: 'warn', Overdue: 'bad', Draft: 'gray', 'In Stock': 'ok', Low: 'warn', Critical: 'bad',
  Done: 'ok', Running: 'warn', Planned: 'gray', Approved: 'ok', Sent: 'warn',
}

const data = {
  sales: { cols: ['Order', 'Customer', 'Product', 'Qty', 'Amount', 'Status'], rows: [
    ['SO-0231', 'Al-Noor Builders', 'Standard Block', '12,000', '$6,000', 'Paid'],
    ['SO-0232', 'Hamza Traders', 'Corner Block', '3,500', '$2,100', 'Pending'],
    ['SO-0233', 'Metro Constructions', 'U-Block', '5,200', '$3,640', 'Overdue'],
    ['SO-0234', 'Green Valley Homes', 'Half Block', '8,000', '$3,200', 'Paid'] ] },
  invoicing: { cols: ['Invoice', 'Customer', 'Date', 'Total (incl. VAT)', 'Status'], rows: [
    ['INV-0148', 'Metro Constructions', '18 Apr', '$3,857', 'Overdue'],
    ['INV-0149', 'Al-Noor Builders', '20 Apr', '$6,360', 'Paid'],
    ['INV-0150', 'Hamza Traders', '24 Apr', '$2,226', 'Pending'],
    ['INV-0151', 'Green Valley Homes', '27 Apr', '$3,392', 'Draft'] ] },
  quotations: { cols: ['Quote', 'Customer', 'Source', 'Amount', 'Status'], rows: [
    ['QT-0061', 'Skyline Developers', 'Website inquiry', '$12,400', 'Sent'],
    ['QT-0062', 'Rahim & Sons', 'WhatsApp', '$4,800', 'Approved'],
    ['QT-0063', 'City Homes', 'Website inquiry', '$9,150', 'Draft'] ] },
  purchases: { cols: ['PO', 'Supplier', 'Material', 'Qty', 'Amount', 'Status'], rows: [
    ['PO-0112', 'Lucky Cement', 'Cement', '2,000 bags', '$14,000', 'Paid'],
    ['PO-0113', 'Sand Supply Co.', 'Sand', '40 tons', '$1,200', 'Pending'],
    ['PO-0114', 'Rock Quarry Ltd', 'Gravel', '60 tons', '$2,100', 'Pending'] ] },
  inventory: { cols: ['Item', 'Type', 'Current Stock', 'Reorder Level', 'Status'], rows: [
    ['Standard Block', 'Finished', '12,500 pcs', '5,000', 'In Stock'],
    ['Half Block', 'Finished', '8,330 pcs', '3,000', 'In Stock'],
    ['Corner Block', 'Finished', '4,860 pcs', '2,000', 'In Stock'],
    ['U-Block', 'Finished', '2,150 pcs', '2,000', 'Low'],
    ['Cement', 'Raw material', '1,200 bags', '1,500', 'Critical'],
    ['Sand', 'Raw material', '120,000 kg', '50,000', 'In Stock'],
    ['Gravel', 'Raw material', '85,000 kg', '40,000', 'In Stock'] ] },
  production: { cols: ['Batch', 'Product', 'Planned', 'Produced', 'Wastage', 'Status'], rows: [
    ['B-0412', 'Standard Block', '5,000', '4,920', '1.6%', 'Done'],
    ['B-0413', 'Half Block', '2,500', '2,480', '0.8%', 'Done'],
    ['B-0414', 'Corner Block', '1,500', '1,000', '—', 'Running'],
    ['B-0415', 'U-Block', '2,000', '0', '—', 'Planned'] ] },
  receivable: { cols: ['Customer', '0–30 days', '31–60 days', '60+ days', 'Total'], rows: [
    ['Metro Constructions', '$0', '$3,857', '$0', '$3,857'],
    ['Hamza Traders', '$2,226', '$0', '$0', '$2,226'],
    ['Skyline Developers', '$12,400', '$5,967', '$4,000', '$22,367'] ] },
  payable: { cols: ['Supplier', 'Bill', 'Due', 'Amount', 'Status'], rows: [
    ['Sand Supply Co.', 'BL-088', '05 May', '$1,200', 'Pending'],
    ['Rock Quarry Ltd', 'BL-089', '10 May', '$2,100', 'Pending'],
    ['Lucky Cement', 'BL-087', '28 Apr', '$14,000', 'Paid'] ] },
  expenses: { cols: ['Date', 'Category', 'Description', 'Amount'], rows: [
    ['02 Apr', 'Utilities', 'Factory electricity', '$3,200'],
    ['09 Apr', 'Transport', 'Fuel — delivery trucks', '$1,450'],
    ['15 Apr', 'Maintenance', 'Press machine service', '$980'] ] },
  payroll: { cols: ['Employee', 'Role', 'Basis', 'Amount', 'Status'], rows: [
    ['Ali Khan', 'Press Operator', 'Per-block', '$640', 'Paid'],
    ['Usman Raza', 'Driver', 'Per-trip', '$520', 'Pending'],
    ['Sara Ahmed', 'Accountant', 'Monthly', '$1,100', 'Paid'] ] },
  tax: { cols: ['Period', 'Output VAT', 'Input VAT', 'Payable', 'Status'], rows: [
    ['Mar 2025', '$7,120', '$4,910', '$2,210', 'Paid'],
    ['Apr 2025', '$9,980', '$3,770', '$6,210', 'Pending'] ] },
  bank: { cols: ['Account', 'Type', 'Balance'], rows: [
    ['Main Operating Account', 'Bank', '$41,280'],
    ['Reserve Account', 'Bank', '$9,400'],
    ['Petty Cash', 'Cash', '$2,000'] ] },
  reports: { cols: ['Report', 'Description', 'Format'], rows: [
    ['Sales Report', 'Sales by customer, product, period', 'PDF / Excel'],
    ['Stock Report', 'Raw and finished stock valuation', 'PDF / Excel'],
    ['Production Report', 'Daily output, wastage and costing', 'PDF / Excel'],
    ['Profit & Loss', 'Income and expense summary', 'PDF'],
    ['Balance Sheet', 'Assets, liabilities and equity', 'PDF'],
    ['Tax Report', 'VAT collected and payable', 'PDF'] ] },
  settings: { cols: ['Role', 'Typical Access'], rows: [
    ['Administrator', 'Full system access, settings and user permissions'],
    ['Accountant', 'Invoices, payments, ledgers, expenses and financial reports'],
    ['Sales Manager', 'Customers, quotations, sales orders and sales reports'],
    ['Production Manager', 'Production plans, material usage and records'],
    ['Store / Inventory Manager', 'Raw materials, finished stock and warehouse operations'] ] },
}

export default function Module() {
  const { module } = useParams()
  const label = modules.find(m => m[0] === module)?.[1]
  const d = data[module]
  if (!d) return <h1>Not found</h1>
  return (
    <>
      <div className="page-head">
        <h1>{label}</h1>
        {!['reports', 'settings'].includes(module) && <button className="btn btn-green sm"><Plus size={16} /> New</button>}
      </div>
      <div className="card">
        <div className="search"><Search size={16} /><input placeholder={`Search ${label.toLowerCase()}…`} /></div>
        <div className="table-wrap">
          <table>
            <thead><tr>{d.cols.map(c => <th key={c}>{c}</th>)}</tr></thead>
            <tbody>
              {d.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}>{S[c] ? <span className={`badge ${S[c]}`}>{c}</span> : c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
