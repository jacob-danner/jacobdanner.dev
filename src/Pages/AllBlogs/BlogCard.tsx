import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug }) => {
    return (
        <div id={slug} className="BlogCard">
            <h1>{title}</h1>
            <div className="BlogCardSub">
                <p>{date}</p>
                <Link to={`/blog/${slug}`}>read</Link>
            </div>
        </div>
    );
}

export { BlogCard };