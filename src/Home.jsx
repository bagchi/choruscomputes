import { useEffect } from "react"
import { Link } from "react-router-dom"

import News from "./news_components/News"

// Main page
export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold text-sky-600">NSF Frontier Project - CHORUS</h1>
        <h2 className="text-sm text-sky-600 mb-4">Funded by NSF awards 2333487, 2333488, 2333489, 2333491; 2024-29.</h2>
        <p className="grid place-items-center">
          Cyber-Physical Systems (CPS) are typically composed of interconnected hardware and software components, which individually may not be inherently highly reliable or secure. However, several CPS applications demand a high degree of safety, security, and reliability. Thus, the fundamental problem is constructing highly dependable CPS applications from building blocks that are, in themselves, not inherently reliable.
          <br /> <br />
          Chorus will develop rigorous, scientific mechanisms to enable CPS resilience against a large universe of perturbations. Our application domain is Connected and Autonomous Transportation Systems (CATS) and thus, the benefits of CHORUS will be demonstrated through improvements in safety and security in this domain.
          <br /> <br />
          We will achieve goals of CHORUS through three interacting intellectually challenging thrusts in the project.
          <br /> <br />
          <img src="/overview.png" alt="Diagram overview of Chorus" className="md:w-2/3" />
          <br /> <br />
          In terms of broader impact, the greatest impact will be that CPS owners will gain a higher degree of trust in the operation of the CPS and policy-makers will understand what level of cooperation among multiple stakeholders in a CPS to incentivize. We will create compelling demonstrations of CHORUS on a connected vehicle testbed distributed between our academic institutions and our industrial partner GM. We will also organize an annual student security competition and develop two MOOCS, both having foundational material on resilient CPS and one focusing more on the CATS application domain.

        </p>
      </div>

      <div className="md:w-1/4 my-12">
        <h1 className="text-2xl font-bold text-sky-600">Recent News</h1>
        <div className="flex flex-col h-full gap-2">
          <div className="grid gap-4">
            <News isHome={true} />
          </div>
          <Link to="/news" className="text-sky-600 hover:text-sky-800 w-full text-right">All News and Events {'>>'}</Link>
        </div>
      </div>
    </div>
  )
}