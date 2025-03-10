import { useState } from "react";
import { useBlogs } from "../../ContentfulUtils/useContentful";
import { BlogCard } from "./BlogCard";

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
      <div id="main-wrapper" className="mt-20 mb-10 w-9/12 mx-auto p-4 bg-neutral-100 flex flex-col items-center rounded-md h-full overflow-auto shadow-2xl">


        <div id="blog-wrapper" className="flex-col justify-center items-center w-full lg:w-5/12 md:w-2/3 sm:w-full mb-10">

          <div id="select-wrapper" className="flex justify-end">
            <select className="bg-neutral-50 rounded-md text-center text-sm h-8 w-1/2 shadow-xl focus:ring ring-sky-700 outline-none "
              onChange={e => setFilterWord(e.currentTarget.value)}>
              {CATEGORIES.map((cat: string, index: number) =>( 
                <option key={index} value={cat}>
                {cat}
              </option>
              ))}
            </select>
          </div>

          {filtered!.map(el => {
            return <BlogCard 
              title={el.fields.title} 
              date={el.fields.date} 
              slug={el.fields.slug || ''} 
              externalUrl={el.fields.externalUrl}
              key={el.fields.slug || el.fields.externalUrl} 
            />
          })}
        </div>

      </div>
    </>
  )
}


export { AllBlogs }