import { getBlog, getBlogs, getProject, getProjects } from "./apiClient";
import { useState, useEffect } from 'react';

interface Blog {
    fields: {
        title: string
        date: string
        slug?: string             // external blogs won't have this
        markdownContent?: string  // external blogs won't have this
        category: string[]
        externalUrl?: string      // indicate if external blogs
    }
}

const EXTERNAL_BLOGS: Blog[] = [
    {
        fields: {
            title: "Retrieval Augmented Classification — LLMs as Classifiers",
            date: "2024-09-28",
            category: ['Machine Learning', 'Natural Language'],
            externalUrl: "https://medium.com/the-quantastic-journal/retrieval-augmented-classification-llms-as-classifiers-c28d40391738"
        }
    }
];

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
            const allBlogs = [...items, ...EXTERNAL_BLOGS];
            
            // Sort blogs by date in descending order (newest first)
            const sortedBlogs = allBlogs.sort((a, b) => 
                new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()
            );
            
            setBlogs(sortedBlogs);
            setLoading(false);
        })();
    }, []);

    return [blogs, isLoading];
}

interface Project {
    fields: {
        title: string
        slug: string
        markdownContent: string
    }
}

const useProject = (slug: string): [Project | null, boolean] => {
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const items = await getProject(slug);
            setProject(items[0]); // 0th element is what i need
            setLoading(false);
        })();

    }, [slug]);

    return [project, isLoading];
}

const useProjects = (): [Project[] | null, boolean] => {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const items = await getProjects()
            setProjects(items); // get array of blog 
            setLoading(false);
        })();
    }, []);
    console.log(projects)

    return [projects, isLoading];
}

export { useBlog, useBlogs, useProject, useProjects };