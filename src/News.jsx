import ReactMarkdown from "react-markdown";

// props.isHome is a boolean, if true, only take first 3 most recent news items
export default function News(props) {

  // title: string
  // date: string
  // content: markdown string (include two spaces before \n for new line)
  // images: {url: string, caption: string}[]
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
    {
      title: "NSF Center CHORUS is up and running!",
      date: "August 2024",
      content: "The NSF Center CHORUS is up and running. The PIs got together to plan out the thrusts and the tasks within each. The thrust leads are:  \n Thrust 1: Modeling - Sam Coogan (Georgia Tech)  \nThrust 2: Proactive deployment - Shreyas Sundram (Purdue)  \nThrust 3: Runtime response - Saman Zonouz (Georgia Tech)  \nApplication: Connected and autonomous transportation systems (CATS) - Ramesh Govindan (University of Southern California)  \nEvaluation - Somali Chaterji (Purdue)",
      images: [{ url: "news_images/chorus_9_9_24.jpg", caption: "The Purdue PIs on the NSF CHORUS Center. Dated: August 31, 2024. From L to R: Carla Zoltowski, Shreyas Sundaram, Saurabh Bagchi, Timothy Cason, Aravind Machiry, Somali Chaterji" }],
    }
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
              <img key={image.url} src={image.url} alt={image.caption} className="object-cover w-full py-2" />
            ))}
          </div>
          <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
        </div>
      ))}
    </>
  )
}
