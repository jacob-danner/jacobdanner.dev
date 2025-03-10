import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    date: string;
    slug: string;
    externalUrl?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug, externalUrl }) => {
    const CardContent = () => (
        <>
            <h1 className="text-lg font-semibold text-neutral-700 flex items-center gap-2">
                {title}
                {externalUrl && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                )}
            </h1>
            <p className="text-xs text-right mt-2">{date}</p>
        </>
    );

    if (externalUrl) {
        return (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <div className="bg-neutral-50 w-full my-4 p-4 rounded-lg shadow-xl hover:shadow-2xl">
                    <CardContent />
                </div>
            </a>
        );
    }

    return (
        <Link to={`/blog/${slug}`}>
            <div className="bg-neutral-50 w-full my-4 p-4 rounded-lg shadow-xl hover:shadow-2xl">
                <CardContent />
            </div>
        </Link>
    );
}

export { BlogCard };