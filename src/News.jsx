import ReactMarkdown from "react-markdown";

export default function News() {

  // title: string
  // date: string
  // content: markdown string
  const news = [
    {
      title: "NSF Project Begins",
      date: "unknown",
      content: "NSF project begins. We are en route on our bold journey to build resilient, large-scale Cyber-Physical Systems.",
    },
    {
      title: "Center kick-off event",
      date: "unknown",
      content: "We will be organizing our Center kick-off event at Purdue in late September. This will be an intellectually invigorating event with participation by all our team members, NSF Program Officers, plus those from other federal agencies, all our industry partners, plus students and researchers from the Purdue community.",
    },
    {
      title: "Hiring Post-Docs for CHORUS",
      date: "unknown",
      content: "We are hiring post-doctoral scholars for our CHORUS center. Here is how to apply. [[ DOC ]](https://docs.google.com/document/d/1ClUScynIkSB_V3qN9RVaTXjszN_c3FG9IAOFMgUdYO8/edit?usp=sharing)",
    },
  ];


  return (
    <>
      <h1 className="text-3xl font-bold text-sky-600">News & Events</h1>
      <div className="grid mt-8 h-full gap-8 place-items-center">
        <div className="grid gap-4 lg:w-1/2">
          {news.map((item) => (
            <div key={item.title} className="border border-slate-400 p-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p>{item.date}</p>
              <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}