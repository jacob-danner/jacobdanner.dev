import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import { useProject } from '../../ContentfulUtils/useContentful';
import '../SingleBlog/markdown.css'

export const SingleProject: React.FC = () => {

    const { slug } = useParams<{slug:string}>() // pull parameters from url to get the slug identifier
    const [project, isLoading] = useProject(slug!)
    console.log(project)
    
    const buildHTML = () => {
        if (isLoading) return <p className="LoadingScreen">Loading...</p>

        return (
           <div id="main-wrapper" className="mt-20 mb-10 w-9/12 mx-auto p-4 px-20 bg-neutral-50 rounded-md h-full overflow-auto shadow-2xl"> 
                <ReactMarkdown className='markdown'>
                    {project!.fields.markdownContent}
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