import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug }) => {
    return (
        <div id={slug} className="bg-neutral-100 border border-sky-700 w-2/3 mx-auto my-2 p-4 rounded-xl shadow-xl hover:shadow-2xl">
            <h1 className="text-lg font-bold">{title}</h1>
            <div className="flex justify-between items-center">
                <p className="text-xs">{date}</p>
                <Link to={`/blog/${slug}`} className="text-blue-500 underline">read</Link>
            </div>
        </div>
    );
}

export { BlogCard };