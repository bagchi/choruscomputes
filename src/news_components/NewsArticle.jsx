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
    <div className="lg:w-2/3 mx-auto mb-10">
      <button onClick={() => navigate(-1)} className="text-sky-600 hover:text-sky-800 flex mb-2">
        <IoIosArrowBack size={24}  />Back
      </button>
      <h1 className="text-3xl font-bold text-center">{item.title}</h1>
      <h2 className="text-sm font-light text-center">{item.date}</h2>
      <div className="flex flex-col gap-2 my-4">
        {item.images.map((image) => (
          <div key={image.caption || image.url} className="flex flex-col items-center">
            <img
              src={image.url}
              alt={image.caption}
              style={{ width: image.size ? `${image.size * 100}%` : '100%' }}
              className="py-2"
            />
            <p className="font-light text-gray-600">{image.caption}</p>
          </div>
        ))}
      </div>
      <ReactMarkdown className="reactMarkDown">{item.content}</ReactMarkdown>
    </div>
  );
}

export default NewsArticle;
