import { useLoaderData } from "@remix-run/react"
import { getHarp } from "~/controllers/harps.server"
import { moneyFormat } from "~/helpers"
import styles from '~/styles/harps.css'

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export async function loader({ params }) {
    const { harpUrl } = params
    const harp = await getHarp(harpUrl)

    if (harp.data.length === 0) {
        throw new Response("Harp not found",
            {
                status: 404,
                statusText: "Harp not found"
            })
    }

    return harp.data[0].attributes
}

export function meta({ data }) {

    if(!data) {
        return [{
            charset: "utf-8",
            title: `Harp Heaven - Harp Not Found`,
            viewport: "width=device-width, initial-scale=1.0",
            description: `Harp Heaven - description for the harmonica ${data.name}`,
            keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
        }]
    }

    return [{
        charset: "utf-8",
        title: `Harp Heaven - ${data.name}`,
        viewport: "width=device-width, initial-scale=1.0",
        description: `Harp Heaven - description for the harmonica ${data.name}`,
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

function HarpUrl() {

    const harp = useLoaderData()

    const { name, price, image, description } = harp;

    const imageSrc = image.data.attributes.formats.medium.url;

    return (
        <main className="container harp">
            <img className="image" src={imageSrc} alt={`harmonica ${name} image`} />
            <div className="content">
                <h3>{name}</h3>
                <p>{description}</p>
                <p className='price'>{moneyFormat(price)}</p>
            </div>
        </main>
    )
}

export default HarpUrl