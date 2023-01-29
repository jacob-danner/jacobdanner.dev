import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug }) => {
    return (
        // <div id={slug} className="bg-neutral-100 border border-sky-700 w-2/3 mx-auto my-2 p-4 rounded-xl shadow-xl hover:shadow-2xl">
        //     <h1 className="text-lg font-bold">{title}</h1>
        //     <div className="flex justify-between items-center">
        //         <p className="text-xs">{date}</p>
        //         <Link to={`/blog/${slug}`} className="text-blue-500 underline">read</Link>
        //     </div>
        // </div>

        <div id={`outer-${slug}`} className="bg-neutral-700 h-36 max-h-36 rounded-lg shadow-xl hover:shadow-2xl flex-col">
            <div id="top" className="h-5/6 p-2">
                <h1>{title}</h1>
                <Link to={`/blog/${slug}`} className="text-blue-500 underline">read</Link>
            </div>
            <div id="other" className=" bg-blue-500 h-1/6 rounded-b-lg flex px-3 justify-end text-sm">{date}</div>
        </div>
    );
}

export { BlogCard };