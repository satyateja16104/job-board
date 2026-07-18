import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'

export default function SavedJobs({ jobs, savedIds, onSave }) { const saved = jobs.filter((job) => savedIds.includes(job.id)); return <main className="shell saved-page"><p className="eyebrow">YOUR SHORTLIST</p><h1>Saved jobs</h1><p className="page-intro">Keep the roles worth returning to in one calm place.</p>{saved.length ? <div className="job-grid">{saved.map((job) => <JobCard key={job.id} job={job} saved onSave={onSave}/>)}</div> : <div className="empty-state saved-empty"><Heart size={36}/><h3>Your shortlist is open</h3><p>Save a job to come back to it when the time feels right.</p><Link className="primary-button" to="/">Explore opportunities</Link></div>}</main> }
