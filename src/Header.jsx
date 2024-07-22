import { Link } from "react-router-dom"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-lime-300 to-sky-400">
      <div className="flex flex-row gap-4 p-4 ">
        <Link to="/" className="w-48 md:w-1/5 object-contain">
          <img src="/CHORUS-color.png" alt="CHORUS logo" />
        </Link>
        <h1 className="hidden md:block md:text-xl lg:text-3xl font-bold text-center m-auto">Resilient Distributed CPS through Rational and Dynamic Decision-Making Among Multiple Stakeholders</h1>
      </div>
      <div className="grid grid-flow-col w-full justify-evenly">
        <img className="w-24 self-center" src="/universities/purdue.png" />
        <img className="w-24 self-center" src="/universities/georgiatech.png" />
        <img className="w-36 self-center" src="/universities/usc.png" />
        <img className="w-24 self-center" src="/universities/wisconsin.png" />
      </div>
      <Navbar />
    </div>
  )
}
