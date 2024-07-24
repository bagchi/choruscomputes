import { useEffect } from "react"
import NewsArticles from "./NewsArticles";

export default function News() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <h1 className="text-3xl font-bold text-sky-600">News & Events</h1>
      <div className="grid my-8 h-full gap-8 place-items-center">
        <div className="grid gap-4 lg:w-1/2">
          <NewsArticles />
        </div>
      </div>
    </>
  )
}