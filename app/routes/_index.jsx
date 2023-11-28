import { getHarps } from '~/controllers/harps.server';
import { getPosts } from '~/controllers/posts.server';
import { getCourse } from '~/controllers/course.server';

import { useLoaderData } from '@remix-run/react';

import HarpsList from '../components/HarpsList';
import PostsList from '../components/PostsList';
import Course from '../components/Course';

import styleHarps from '~/styles/harps.css';
import styleBlog from '~/styles/blog.css';
import styleCourse from '~/styles/course.css';

export function meta() {

}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styleHarps
        },
        {
            rel: "stylesheet",
            href: styleBlog
        },
        {
            rel: "stylesheet",
            href: styleCourse
        }
    ]
}

export async function loader() {
    const [harps, posts, course] = await Promise.all([
        getHarps(),
        getPosts(),
        getCourse()
    ]);

    return {
        harps: harps.data,
        posts: posts.data,
        course: course.data
    }
}

function Index() {

    const { harps, posts, course } = useLoaderData();

    return (
        <div className="home">
            <main className="container">
                <PostsList posts={posts} />
            </main>
                <Course course={course.attributes} />
            <section className="container">
                <HarpsList harps={harps} />
            </section>
        </div>
    )
}

export default Index