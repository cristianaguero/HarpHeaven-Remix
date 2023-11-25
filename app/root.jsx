import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'

import favicon from '../public/img/favicon.ico'
import styles from '~/styles/index.css'

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export function meta() {
    return [{
        charset: "utf-8",
        title: "Harp Heaven - Remix",
        viewport: "width=device-width, initial-scale=1.0",
        description: "Harp Heaven - a harmonica hub with seamless navigation, offering a curated selection of harmonicas for purchase, engaging blogs for enthusiasts, and comprehensive courses for skill development.",
        keywords: "harmonica, harmonicas, harp, harps, harmonica hub, harmonica store, harmonica shop, harmonica blogs, harmonica courses, harmonica lessons, harmonica learning, harmonica education, harmonica development, harmonica skill development, harmonica skill, harmonica skills, harmonica skill development, harmonica skill development, harmonica"
    }];
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "icon",
            href: favicon,
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
            rel: "stylesheet"
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html>
            <head lang="en">
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}