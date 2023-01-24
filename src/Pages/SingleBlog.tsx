import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import { useBlog } from '../ContentfulUtils/useContentful';

const SingleBlog: React.FC = () => {
    const { slug } = useParams<{slug:string}>() // pull parameters from url to get the slug identifier
    const [blog, isLoading] = useBlog(slug!)
    
    const buildHTML = () => {
        if (isLoading) return <p className="LoadingScreen">Loading...</p>

        return (
            <div className="BlogWrapper">
                <ReactMarkdown>
                    {blog!.fields.markdownContent}
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