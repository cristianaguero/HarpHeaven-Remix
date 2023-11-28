import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/controllers/posts.server"
import PostsList from "../components/PostsList";
import styles from '~/styles/blog.css'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export function meta() {
    return [{
        charset: "utf-8",
        title: "Harp Heaven - Blog",
        viewport: "width=device-width, initial-scale=1.0",
        description: "Harp Heaven - selection of harmonicas for purchase",
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

export async function loader() {
    const posts = await getPosts();
    
    return posts.data
}

function Blog() {

    const posts = useLoaderData();

    return (
        <main className="container">
            <PostsList posts={posts} />
        </main>
    )
}

export default Blog