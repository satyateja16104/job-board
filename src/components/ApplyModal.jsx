import { CheckCircle2, X } from 'lucide-react'
import { useState } from 'react'

export default function ApplyModal({ job, onClose, onApply }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', resume: '', note: '' })
  const update = (key, value) => setForm({ ...form, [key]: value })
  const submit = (event) => { event.preventDefault(); onApply({ ...form, jobId: job.id, submittedAt: new Date().toISOString() }); setSubmitted(true) }
  return <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="modal"><button className="modal-close" onClick={onClose}><X/></button>{submitted ? <div className="confirmation"><CheckCircle2 size={48}/><h2>Application sent!</h2><p>Your application for <strong>{job.title}</strong> at {job.company} is safely saved. Good luck — we’re rooting for you.</p><button className="primary-button" onClick={onClose}>Back to job</button></div> : <><p className="eyebrow">Apply to {job.company}</p><h2>{job.title}</h2><form onSubmit={submit} className="apply-form"><label>Full name<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name"/></label><label>Email address<input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com"/></label><label>Resume / portfolio link<input required type="url" value={form.resume} onChange={(e) => update('resume', e.target.value)} placeholder="https://..."/></label><label>Note <em>(optional)</em><textarea value={form.note} onChange={(e) => update('note', e.target.value)} placeholder="A short note to the hiring team" rows="3"/></label><button className="primary-button" type="submit">Send application</button></form></>}</div></div>
}
