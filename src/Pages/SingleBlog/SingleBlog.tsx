import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import { useBlog } from '../../ContentfulUtils/useContentful';
import './markdown.css'

const SingleBlog: React.FC = () => {
    const { slug } = useParams<{slug:string}>() // pull parameters from url to get the slug identifier
    const [blog, isLoading] = useBlog(slug!)
    
    const buildHTML = () => {
        if (isLoading) return <p className="LoadingScreen">Loading...</p>
        if (!blog?.fields?.markdownContent) return <p>No content found</p>

        return (
           <div id="main-wrapper" className="mt-20 mb-10 w-9/12 mx-auto p-4 px-20 bg-neutral-50 rounded-md h-full overflow-auto shadow-2xl"> 
                <ReactMarkdown className='markdown'>
                    {blog.fields.markdownContent}
                </ReactMarkdown>
            </div>
        )
    }

    return (
        <>
            {buildHTML()}
        </>
    )
}

export { SingleBlog }