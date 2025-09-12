// Education & Outreach
export default function Education() {

  return (
    <>
      <h1 className="text-3xl font-bold text-sky-600">Education & Outreach</h1>

      <div className="flex flex-col gap-8 my-8">
        <p>
          We have developed a short 10-hour course module on the topic of big data reliability and security. The following is the structure of the module. This can be taken by someone who has a basic background in computing (akin to the first 3 years of a competitive CS/CE program).
        </p>
        <p>
          Target audience: Someone wanting to understand the tools and techniques available for increasing system reliability and security through ML. There are two hands-on exercises with real-world datasets and attack scripts.
        </p>
        <table className="border border-gray-300">
          <thead>
            <tr>
              <th className="w-[80%]">Topic</th>
              <th className="w-[20%]">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction: Motivation, System view of dependable, design, Terminology</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                Big data for reliability
                <ul>
                  <li>Approximate computing</li>
                  <li>Performance and failure analysis from resource usage data</li>
                  <li>Latency guarantees in Microsoft Azure cloud</li>
                  <li>Optional programming assignment: Data center clusters</li>
                </ul>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                Big data for security
                <ul>
                  <li>Fooling ML models</li>
                  <li>Adversarial examples</li>
                  <li>Improving model robustness through Adversarial Training</li>
                  <li>Optional programming assignment: Adversarial ML</li>
                </ul>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                Security of distributed Machine Learning
                <ul>
                  <li>Byzantine robust Federated Learning (FL)</li>
                  <li>Privacy in FL</li>
                  <li>Peer-to-peer and Hub-and-Spokes Learning</li>
                </ul>
              </td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
