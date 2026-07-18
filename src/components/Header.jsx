import { BriefcaseBusiness, Heart, Menu, Moon, Plus, Sun, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><div className="shell nav-row">
    <Link className="brand" to="/" onClick={close}><span><BriefcaseBusiness size={19}/></span>nimbus</Link>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      <NavLink to="/" end onClick={close}>Explore jobs</NavLink>
      <NavLink to="/saved" onClick={close}><Heart size={15}/> Saved jobs</NavLink>
    </nav>
    <div className="nav-actions"><button className="icon-button" onClick={onToggleDark} aria-label="Toggle theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><Link className="post-link desktop-post" to="/post"><Plus size={16}/> Post a job</Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X/> : <Menu/>}</button></div>
  </div></header>
}
