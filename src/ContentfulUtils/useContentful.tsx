import { getBlog, getBlogs } from "./apiClient";
import { useState, useEffect } from 'react';

interface Blog {
    fields: {
        title: string
        date: string
        slug: string
        markdownContent: string
    }
}

const useBlog = (slug: string): [Blog | null, boolean] => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const items = await getBlog(slug);
            setBlog(items[0]); // 0th element is what i need
            setLoading(false);
        })();

    }, [slug]);

    return [blog, isLoading];
}

const useBlogs = (): [Blog[] | null, boolean] => {
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const items = await getBlogs();
            setBlogs(items); // get array of blog 
            setLoading(false);
        })();
    }, []);

    return [blogs, isLoading];
}


export { useBlog, useBlogs };