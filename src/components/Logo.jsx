import { Boxes } from 'lucide-react'

export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <Boxes size={34} strokeWidth={1.6} />
      <span>
        <b>EARTHBLOCK</b>
        <small>SOLUTIONS</small>
      </span>
    </span>
  )
}
