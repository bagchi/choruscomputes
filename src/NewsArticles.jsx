import ReactMarkdown from "react-markdown";

// props.isHome is a boolean, if true, only take first 3 news items
export default function NewsArticles(props) {

  // title: string
  // date: string
  // content: markdown string
  let news = [
    {
      title: "NSF Project Begins",
      date: "",
      content: "NSF project begins. We are en route on our bold journey to build resilient, large-scale Cyber-Physical Systems.",
    },
    {
      title: "Center kick-off event",
      date: "",
      content: "We will be organizing our Center kick-off event at Purdue in late September. This will be an intellectually invigorating event with participation by all our team members, NSF Program Officers, plus those from other federal agencies, all our industry partners, plus students and researchers from the Purdue community.",
    },
    {
      title: "Hiring Post-Docs for CHORUS",
      date: "",
      content: "We are hiring post-doctoral scholars for our CHORUS center. Here is how to apply. [[ DOC ]](https://docs.google.com/document/d/1ClUScynIkSB_V3qN9RVaTXjszN_c3FG9IAOFMgUdYO8/edit?usp=sharing)",
    },
  ];

  if (props.isHome) {
    news = news.slice(0, 3);
  }

  return (
    <>
      {news.map((item) => (
        <div key={item.title} className="border border-slate-400 p-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p>{item.date}</p>
          <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}
