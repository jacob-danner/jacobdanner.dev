import { getBlog, getBlogs, getProject, getProjects } from "./apiClient";
import { useState, useEffect } from 'react';

interface Blog {
    fields: {
        title: string
        date: string
        slug: string
        markdownContent: string
        category: string[]
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

interface Project {
    fields: {
        title: string
        slug: string
        markdownContent: string
    }
}

const useProject = (slug: string): [Project | null, boolean] => {
    const [project, setProject] = useState<Blog | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const items = await getProject(slug);
            setProject(items[0]); // 0th element is what i need
            setLoading(false);
        })();

    }, [slug]);
    console.log('here')
    console.log(project)

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