import { seedJobs } from '../data/jobs'

const read = (key, fallback) => { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback } catch { return fallback } }
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const getJobs = () => [...read('nimbus-posted-jobs', []), ...seedJobs]
export const addJob = (job) => { const jobs = read('nimbus-posted-jobs', []); write('nimbus-posted-jobs', [job, ...jobs]) }
export const getSaved = () => read('nimbus-saved-jobs', [])
export const toggleSaved = (id) => { const next = getSaved().includes(id) ? getSaved().filter((item) => item !== id) : [...getSaved(), id]; write('nimbus-saved-jobs', next); return next }
export const addApplication = (application) => { const all = read('nimbus-applications', []); write('nimbus-applications', [application, ...all]) }
