import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ApplyModal from './components/ApplyModal'
import Home from './pages/Home'
import JobDetail from './pages/JobDetail'
import SavedJobs from './pages/SavedJobs'
import PostJob from './pages/PostJob'
import { addApplication, addJob, getJobs, getSaved, toggleSaved } from './lib/storage'

export default function App() { const [jobs, setJobs] = useState(getJobs); const [savedIds, setSavedIds] = useState(getSaved); const [applyJob, setApplyJob] = useState(null); const [dark, setDark] = useState(() => localStorage.getItem('nimbus-theme') !== 'light'); useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('nimbus-theme', dark ? 'dark' : 'light') }, [dark]); const save = (id) => setSavedIds(toggleSaved(id)); const post = (job) => { addJob(job); setJobs(getJobs()) }; return <><Header dark={dark} onToggleDark={() => setDark(!dark)}/><Routes><Route path="/" element={<Home jobs={jobs} savedIds={savedIds} onSave={save}/>}/><Route path="/jobs/:id" element={<JobDetail jobs={jobs} savedIds={savedIds} onSave={save} onApply={setApplyJob}/>}/><Route path="/saved" element={<SavedJobs jobs={jobs} savedIds={savedIds} onSave={save}/>}/><Route path="/post" element={<PostJob onPost={post}/>}/></Routes>{applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} onApply={addApplication}/>}</> }
