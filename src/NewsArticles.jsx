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
    {
      title: "Argus: A Framework for Staged Static Taint Analysis of GitHub Workflows and Actions",
      date: "July 2024 - Aravind Machiry",
      content: "ARGUS is a groundbreaking static taint analysis system specifically designed to identify code injection vulnerabilities in GitHub Actions. It is the first of its kind, offering a unique approach to securing Continuous Integration/Continuous Deployment (CI/CD) pipelines. [[ WWW ]](https://secureci.org/) [[ PDF ]](https://www.usenix.org/system/files/usenixsecurity23-muralee.pdf)",
      images: ["/news_images/ARGUS.png"],
    },
    {
      title: "AAAI'23 - Distinguished Paper Award - SimFair: A Unified Framework for Fairness-Aware Multi-Label Classification",
      date: "July 2024 - Jing Gao",
      content: "In recent years, concerns about unfair decisions made by machine learning algorithms have increased, leading to the development of various fairness-aware methods, though most focus only on single-label classification. This paper addresses the gap in fairness for multi-label classification by extending Demographic Parity (DP) and Equalized Opportunity (EOp) to these scenarios. The authors propose a new framework, Similarity s-induced Fairness (sγ -SimFair), which improves fairness estimation by utilizing data with similar labels and demonstrates superior performance in both theoretical analysis and experimental results on real-world datasets. [[ PDF ]](https://ojs.aaai.org/index.php/AAAI/article/download/26677/26449)",
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
