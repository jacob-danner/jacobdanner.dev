import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug }) => {
    return (
        <Link to={`/blog/${slug}`}>
            <div id={slug} className="bg-neutral-50 w-full my-4 p-4 rounded-lg shadow-xl hover:shadow-2xl">
                <h1 className="text-lg font-semibold text-neutral-700">{title}</h1>
                <p className="text-xs text-right mt-2">{date}</p>
            </div>
        </Link>
    );
}

export { BlogCard };