import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import news_articles from "./news_articles";

// This component is used to display all news items in the news tab, or the first 3 news items on the home page
// props.isHome is a boolean, if true, only take first 3 most recent news items
export default function News(props) {

  let news = news_articles;

  if (props.isHome) {
    // get first 3 items
    news = news.slice(0, 3);
  }

  return (
    <>
      {news.map((item) => (
        <span key={item.title}>
          <Link to={{ pathname: `/news/${item.slug}`, state: { item } }}>
            <div className="border border-slate-400 p-4 hover:scale-[1.01] hover:cursor-pointer transition">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-sm font-light">{item.date}</p>
              <div className="flex flex-col items-center">
                {item.images.map((image) => (
                  <img
                    key={image.url}
                    src={image.url}
                    alt={image.caption}
                    style={{ width: image.size ? `${image.size * 100}%` : '100%' }}
                    className="py-2"
                  />
                ))}
              </div>
              <a onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}>
                <ReactMarkdown className="reactMarkDown line-clamp-6">{item.content}</ReactMarkdown>
              </a>
            </div>
          </Link>
        </span>
      ))}
    </>
  )
}
