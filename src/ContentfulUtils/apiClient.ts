import * as contentful from "contentful";

const client = contentful.createClient({
  space: "h0y78uotgtrt",
  accessToken: "RhU3BzsC6N7EeahtH2Uyh7gClfH_6hJiG_5Dfiyg5CA"
});

const getBlogs = async (): Promise<contentful.Entry<any>[]> => {
    const response = await client.getEntries({'order': '-sys.createdAt',  content_type: 'blogPost'});
    return response.items;
}

const getBlog = async (slug: string): Promise<contentful.Entry<any>[]> => {
    const response = await client.getEntries({'fields.slug': slug, content_type: 'blogPost'});
    return response.items;
}

const getProjects = async (): Promise<contentful.Entry<any>[]> => {
    const response = await client.getEntries({'order': '-sys.createdAt',  content_type: 'project'});
    console.log(response)
    return response.items;
}

const getProject = async (slug: string): Promise<contentful.Entry<any>[]> => {
    const response = await client.getEntries({'fields.slug': slug, content_type: 'project'});
    console.log(response)
    return response.items;
}

export { getBlogs, getBlog, getProject, getProjects };