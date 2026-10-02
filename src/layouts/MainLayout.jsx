import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function MainLayout() {
  const location = useLocation()
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    window.history.replaceState({}, document.title)
  }, [location])
  return <div className="flex min-h-screen flex-col"><Navbar/><main className="flex-1 pt-[120px]"><Outlet/></main><Footer/></div>
}
