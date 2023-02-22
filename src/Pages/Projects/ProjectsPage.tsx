import { useProjects } from "../../ContentfulUtils/useContentful"
import { ProjectCard } from "./ProjectCard"


export const ProjectsPage: React.FC = () => {
    const [projects, isLoading] = useProjects()
    
    if (isLoading) return <p className="LoadingScreen">Loading...</p>

    return (
     <div id="wrapper" className="h-full w-9/12 mx-auto mt-20 mb-10 p-4 bg-neutral-100 shadow-2xl rounded-md flex flex-col justify-center items-center">

        <div id="blog-wrapper" className="flex-col justify-center items-center w-full lg:w-5/12 md:w-2/3 sm:w-full mb-10">


            {projects!.map(el => {
              return <ProjectCard title={el.fields.title} slug={el.fields.slug} />
            })}
          </div>
      </div>
    )
}