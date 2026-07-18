import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import JobCard from '../components/JobCard'
import FilterPanel from '../components/FilterPanel'

export default function Home({ jobs, savedIds, onSave }) {
  const [filters, setFilters] = useState({ query: '', category: '', type: '', level: '', location: '' })
  const [sort, setSort] = useState('newest')
  const [mobileOpen, setMobileOpen] = useState(false)
  const filtered = useMemo(() => jobs.filter((job) => {
    const q = filters.query.toLowerCase()
    const searchable = `${job.title} ${job.company} ${job.description} ${job.tags?.join(' ')}`.toLowerCase()
    return (!q || searchable.includes(q)) && (!filters.category || job.category === filters.category) && (!filters.type || job.type === filters.type) && (!filters.level || job.level === filters.level) && (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase()))
  }).sort((a, b) => sort === 'newest' ? new Date(b.date) - new Date(a.date) : b.salary.localeCompare(a.salary)), [jobs, filters, sort])
  const reset = () => setFilters({ query: '', category: '', type: '', level: '', location: '' })
  return <main><section className="hero"><div className="shell hero-content"><p className="eyebrow">CURATED OPPORTUNITIES · JULY 2026</p><h1>Work that feels<br/><em>like your next move.</em></h1><p>Find thoughtful teams, meaningful work, and a role with room to grow.</p></div></section><section className="shell jobs-section"><FilterPanel filters={filters} setFilters={setFilters} resultCount={filtered.length} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/><div className="feed"><div className="feed-top"><div><p className="eyebrow">OPEN ROLES</p><h2>{filtered.length} opportunities, picked for you</h2></div><label className="sort"><SlidersHorizontal size={16}/><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="newest">Newest first</option><option value="salary">Salary range</option></select></label></div>{filtered.length ? <div className="job-grid">{filtered.map((job) => <JobCard key={job.id} job={job} saved={savedIds.includes(job.id)} onSave={onSave}/>)}</div> : <div className="empty-state"><span>⌕</span><h3>No roles match that search</h3><p>Try widening your filters or exploring a different keyword.</p><button onClick={reset}>Clear filters</button></div>}</div></section></main>
}
