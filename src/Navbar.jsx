import { Link } from "react-router-dom"

// Navbar component, at top of every page, links to all other pages
export default function Navbar() {
  return (
    <>
      <div className="flex flex-row border-y border-slate-400 overflow-auto">
        <Link to="/who-we-are" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">Who We Are</Link>
        <Link to="/" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">What We Do</Link>
        <Link to="/news" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">News & Events</Link>
        <Link to="/" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">Education & Outreach</Link>
        <Link to="/" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">Software & Datasets</Link>
        <Link to="/contact" className="text-sky-600 bg-white hover:text-white hover:bg-sky-600 p-2 w-full text-center whitespace-nowrap">Contact</Link>
      </div>
    </>
  )
}