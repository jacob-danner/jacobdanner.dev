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
      <select onChange={e => setFilterWord(e.currentTarget.value)}>
        {CATEGORIES.map((cat: string, index: number) =>( 
          <option key={index} value={cat}>
          {cat}
        </option>
        ))}
      </select>

      <div >
        {filtered!.map(el => {
          return <BlogCard title={el.fields.title} date={el.fields.date} slug={el.fields.slug} key={el.fields.slug} />
        })}
      </div>
    </>
  )
}


export { AllBlogs }