import { ChevronDown, Filter, Search, X } from 'lucide-react'
import { categories, levels, types } from '../data/jobs'

const Select = ({ label, value, onChange, options }) => <label className="select-field"><span>{label}</span><div><select value={value} onChange={(e) => onChange(e.target.value)}><option value="">All {label.toLowerCase()}s</option>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15}/></div></label>

export default function FilterPanel({ filters, setFilters, resultCount, mobileOpen, setMobileOpen }) {
  const update = (key, value) => setFilters({ ...filters, [key]: value })
  const clear = () => setFilters({ query: '', category: '', type: '', level: '', location: '' })
  const content = <><div className="filter-heading"><span><Filter size={17}/> Filters</span><button onClick={clear}>Clear all</button></div><Select label="Category" value={filters.category} onChange={(v) => update('category', v)} options={categories}/><Select label="Job type" value={filters.type} onChange={(v) => update('type', v)} options={types}/><Select label="Experience" value={filters.level} onChange={(v) => update('level', v)} options={levels}/><label className="select-field"><span>Location</span><div className="location-input"><input placeholder="City or region" value={filters.location} onChange={(e) => update('location', e.target.value)} /></div></label></>
  return <><div className="search-wrap"><Search size={19}/><input value={filters.query} onChange={(e) => update('query', e.target.value)} placeholder="Search roles, companies, or skills…"/><span>{resultCount} roles</span></div><button className="mobile-filter" onClick={() => setMobileOpen(true)}><Filter size={17}/> Filters</button><aside className="filters desktop-filters">{content}</aside>{mobileOpen && <div className="filter-overlay"><aside className="filters mobile-filters"><button className="close-filter" onClick={() => setMobileOpen(false)}><X/></button>{content}<button className="apply-filter" onClick={() => setMobileOpen(false)}>Show {resultCount} jobs</button></aside></div>}</>
}
