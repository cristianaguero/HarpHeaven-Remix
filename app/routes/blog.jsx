import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/controllers/posts.server"
import Post from "~/components/Post";
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
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map(post => (
                    <Post key={post.id} post={post.attributes} />   
                ))}

            </div>
        </main>
    )
}

export default Blog