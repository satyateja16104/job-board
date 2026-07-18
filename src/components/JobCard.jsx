import { Bookmark, MapPin, ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function JobCard({ job, saved, onSave }) {
  return <article className="job-card"><div className="job-card-top"><div className={`company-logo ${job.logoColor || 'bg-teal-100 text-teal-700'}`}>{job.logo || job.company?.slice(0, 2).toUpperCase()}</div><button onClick={() => onSave(job.id)} className={saved ? 'save-button saved' : 'save-button'} aria-label="Save job"><Bookmark size={18} fill={saved ? 'currentColor' : 'none'}/></button></div>
    <Link to={`/jobs/${job.id}`} className="job-card-link"><h3>{job.title}<ArrowUpRight size={17}/></h3><p className="company-name">{job.company}</p></Link>
    <div className="metadata"><span><MapPin size={14}/>{job.location}</span><span>{job.type}</span><span>{job.level}</span></div>
    <div className="tags">{job.tags?.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
    <footer><strong>{job.salary}</strong><span><Clock3 size={13}/>{job.posted}</span></footer>
  </article>
}
