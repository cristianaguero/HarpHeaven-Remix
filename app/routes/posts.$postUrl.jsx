import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/controllers/posts.server"
import { dateFormat } from "~/helpers"
import styles from '~/styles/blog.css'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response("Post not found",
            {
                status: 404,
                statusText: "Post not found"
            })
    }

    return post?.data[0]?.attributes
}

export function meta({ data }) {

    if (!data) {
        return [{
            charset: "utf-8",
            title: `Harp Heaven - Post Not Found`,
            viewport: "width=device-width, initial-scale=1.0",
            description: `Harp Heaven - description for the post ${data.title}`,
            keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
        }]
    }

    return [{
        charset: "utf-8",
        title: `Harp Heaven - ${data.title}`,
        viewport: "width=device-width, initial-scale=1.0",
        description: `Harp Heaven - description for the post ${data.title}`,
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

function PostUrl() {

    const post = useLoaderData()

    const { title, content, publishedAt, image } = post;

    const imageSrc = image.data.attributes.formats.medium.url;

    return (
        <article className="container post">
            <img src={imageSrc} alt={`image of post title: ${title}`} />

            <div className="content">
                <h3>{title}</h3>
                <p className='date'>{dateFormat(publishedAt)}</p>
                <p className="text">{content}</p>

            </div>
        </article>
    )
}

export default PostUrl