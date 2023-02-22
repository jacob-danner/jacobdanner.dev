import { Link } from "react-router-dom";

interface ProjectCardProps {
    title: string;
    slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, slug }) => {
    return (
        <Link to={`/projects/${slug}`}>

            <div id={slug} className="bg-neutral-50 w-full my-4 p-4 rounded-lg shadow-xl hover:shadow-2xl">
                <h1 className="text-lg font-semibold text-neutral-700 text-center">{title}</h1>
            </div>

        </Link>
    );
}

export { ProjectCard };