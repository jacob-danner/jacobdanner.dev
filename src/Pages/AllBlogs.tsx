import { useState } from "react";
import { useBlogs } from "../ContentfulUtils/useContentful";
import { BlogCard } from "./AllBlogs/BlogCard";

const CATEGORIES = [
  'All', 'Machine Learning', 'Python', 'Natural Language', 'Other'
]

const AllBlogs: React.FC = () => {
  const [blogs, isLoading] = useBlogs();
  const [filterWord, setFilterWord] = useState('All')

  if (isLoading) return <p className="LoadingScreen">Loading...</p>

  const filtered = blogs?.filter(el => {
    if(el.fields && el.fields.category) {
      const cateogories: string[] = el.fields.category
      if (filterWord !== 'All')
        return cateogories.includes(filterWord)
      else return true
    }
    else {
      return false
    }
  })

  return (
    <>
      <div id="main-wrapper" className="w-9/12 h-full mx-auto mb-4 p-4 bg-neutral-100 border border-neutral-300 shadow-xl flex-col">
        <select className="border border-sky-700"
          onChange={e => setFilterWord(e.currentTarget.value)}>
          {CATEGORIES.map((cat: string, index: number) =>( 
            <option key={index} value={cat}>
            {cat}
          </option>
          ))}
        </select>

        <div id="blog-wrapper" className="grid grid-cols-3 gap-3">

          {filtered!.map(el => {
            return <BlogCard title={el.fields.title} date={el.fields.date} slug={el.fields.slug} key={el.fields.slug} />
          })}
        </div>

      </div>
    </>
  )
}


export { AllBlogs }