import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { IoIosArrowBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import news_articles from "./news_articles";

// This file is the standalone page for a single news article
function NewsArticle() {
  const { slug } = useParams();
  let navigate = useNavigate();

  const item = news_articles.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="lg:w-2/3 mx-auto my-10">
      <div className="flex flex-row gap-2">
        <button onClick={() => navigate(-1)} className="text-sky-600 hover:text-sky-800">
          <IoIosArrowBack size={24} />
        </button>
        <h1 className="text-3xl font-bold">{item.title}</h1>
      </div>
      <h2 className="text-sm font-light">{item.date}</h2>
      <div className="flex flex-col gap-2 my-4">
        {item.images.map((image) => (
          <div key={image.caption}>
            <img src={image.url} alt={image.caption} className="object-cover w-full py-2" />
            <p className="font-light text-gray-600">{image.caption}</p>
          </div>
        ))}
      </div>
      <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
    </div>
  );
}

export default NewsArticle;
