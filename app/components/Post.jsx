import { Link } from '@remix-run/react';

function Post({ post }) {

    const { title, content, url, image, publishedAt } = post;

    const imageSrc = image.data.attributes.formats.small.url;

    return (
        <article className='post'>
            <img src={imageSrc} alt={`image of post title: ${title}`} className="image" />

            <div className="content">
                <h3>{title}</h3>
                <p className='date'>{publishedAt}</p>
                <p className='resume'>{content}</p>
                
                <Link className='link' to={`/posts/${url}`}>Read more</Link>
            </div>
        </article>
    )
}

export default Post