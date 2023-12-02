import { getHarps } from '~/controllers/harps.server';
import { getPosts } from '~/controllers/posts.server';
import { getCourse } from '~/controllers/course.server';

import { useLoaderData } from '@remix-run/react';

import HarpsList from '../components/HarpsList';
import PostsList from '../components/PostsList';
import Course from '../components/Course';
import Hero from '~/components/Hero';

import styleHarps from '~/styles/harps.css';
import styleBlog from '~/styles/blog.css';
import styleCourse from '~/styles/course.css';
import styleHero from '~/styles/hero.css';


export function meta() {
    return [{
        charset: "utf-8",
        title: "Harp Heaven - Home",
        viewport: "width=device-width, initial-scale=1.0",
        description: "Harp Heaven - a harmonica hub with seamless navigation, offering a curated selection of harmonicas for purchase, engaging blogs for enthusiasts, and comprehensive courses for skill development.",
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
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
        },
        {
            rel: "stylesheet",
            href: styleHero
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

            <header className='hero'>
                <Hero />
            </header>

            <main className="container center">
                <PostsList posts={posts} />
            </main>
            <section className='course'>
                <Course course={course.attributes} />
            </section>

            <section className="container">
                <HarpsList harps={harps} />
            </section>
        </div>
    )
}

export default Index