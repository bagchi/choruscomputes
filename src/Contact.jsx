
// Contact page
export default function Contact() {
  return (
    <div className="grid h-full gap-8">
      <h1 className="text-3xl font-bold text-sky-600">Contact</h1>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Director</h2>
        <p>Dr. Saurabh Bagchi</p>
        <a href="mailto:sbagchi@purdue.edu" className="text-blue-600 hover:text-blue-800">sbagchi@purdue.edu</a>
        <p>765-494-1741</p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold">Project Manager</h2>
        <p>Joshua McKerracher</p>
        <a href="mailto:jmckerra@purdue.edu" className="text-blue-600 hover:text-blue-800">jmckerra@purdue.edu</a>
        <p>765-494-3365</p>
      </div>
    </div>
  )
}
