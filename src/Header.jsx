import { Link } from "react-router-dom"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <>
      <div className="flex flex-row gap-4 p-4 bg-gradient-to-r from-lime-300 to-sky-400">
        <Link to="/" className="w-48 md:w-1/5 object-contain">
          <img src="/CHORUS-color.png" alt="CHORUS logo" />
        </Link>
        <h1 className="hidden md:block md:text-xl lg:text-3xl font-bold text-center m-auto">Resilient Distributed CPS through Rational and Dynamic Decision-Making Among Multiple Stakeholders</h1>
      </div>
      <Navbar />
    </>
  )
}