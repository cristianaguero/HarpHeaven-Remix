import { useLoaderData } from "@remix-run/react";
import { getHarps } from "~/controllers/harps.server"
import styles from '~/styles/harps.css'
import HarpsList from "../components/HarpsList";

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
        title: "Harp Heaven - Shop",
        viewport: "width=device-width, initial-scale=1.0",
        description: "Harp Heaven - selection of harmonicas for purchase",
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

export async function loader() {
    const harps = await getHarps();
    return harps.data
}

function Shop() {

    const harps = useLoaderData();

    return (
        <main className="container">
            <HarpsList harps={harps} />
        </main>
    )
}

export default Shop