import ReactMarkdown from "react-markdown";

// props.isHome is a boolean, if true, only take first 3 most recent news items
export default function NewsArticles(props) {

  // title: string
  // date: string
  // content: markdown string
  // images: string[] of urls
  let news = [
    {
      title: "NSF Project Begins",
      date: "June 2024",
      content: "NSF project begins. We are en route on our bold journey to build resilient, large-scale Cyber-Physical Systems.",
      images: [],
    },
    {
      title: "Center kick-off event",
      date: "July 2024",
      content: "We will be organizing our Center kick-off event at Purdue in late September. This will be an intellectually invigorating event with participation by all our team members, NSF Program Officers, plus those from other federal agencies, all our industry partners, plus students and researchers from the Purdue community.",
      images: [],
    },
    {
      title: "Hiring Post-Docs for CHORUS",
      date: "July 2024",
      content: "We are hiring post-doctoral scholars for our CHORUS center. Here is how to apply. [[ DOC ]](https://docs.google.com/document/d/1ClUScynIkSB_V3qN9RVaTXjszN_c3FG9IAOFMgUdYO8/edit?usp=sharing)",
      images: [],
    },
  ];

  if (props.isHome) {
    // get last 3 items
    news = news.slice(news.length - 3);
  }

  return (
    <>
      {news.reverse().map((item) => (
        <div key={item.title} className="border border-slate-400 p-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p>{item.date}</p>
          <div className="flex flex-col">
            {item.images.map((image) => (
              <img key={image} src={image} alt={image} className="object-cover w-full py-2" />
            ))}
          </div>
          <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}
