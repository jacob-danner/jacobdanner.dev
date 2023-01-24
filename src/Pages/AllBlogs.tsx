import { useBlogs } from "../ContentfulUtils/useContentful";
import { BlogCard } from "./AllBlogs/BlogCard";

const AllBlogs: React.FC = () => {
  const [blogs, isLoading] = useBlogs();

  const buildHTML = () => {
    if (isLoading) return <p className="LoadingScreen">Loading...</p>

    return (
      <div className="BlogsWrapper">
        {blogs!.map(el => {
          return <BlogCard title={el.fields.title} date={el.fields.date} slug={el.fields.slug} key={el.fields.slug} />
        })}
      </div>
    )
  }

  return (
    <>
      {buildHTML()}
    </>
  )
}

export { AllBlogs }