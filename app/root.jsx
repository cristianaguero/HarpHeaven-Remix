import { useState } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    isRouteErrorResponse,
    useRouteError,
    Link
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

    const [cart, setCart] = useState([]);

    const addToCart = (harp) => {   
        if (cart.some(harpInState => harpInState.id === harp.id)) {

            const updatedCart = cart.map(harpInState => {
                if (harpInState.id === harp.id) {
                    harpInState.quantity = harp.quantity

                    return harpInState
                }
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, harp])
        }
    }

    const updateQuantity = (harp) => {
        const updatedCart = cart.map(harpInState => {
            if (harpInState.id === harp.id) {
                harpInState.quantity = harp.quantity

                return harpInState
            }
        })
        setCart(updatedCart)
    }

    return (
        <Document>
            <Outlet
                context={{
                    addToCart,
                    updateQuantity,
                    cart
                }} />
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

export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <h1>ERROR</h1>
                <p className='error'>{error.status} {error.statusText}</p>
                <Link className='error-link' to="/">Go Home</Link>
            </Document>
        )
    } else if (error instanceof Error) {
        return (
            <Document>
                <h1>ERROR</h1>
                {console.log(error)}
                <p className='error'>There seems to be a problem. Please, try again later.</p>
                <Link className='error-link' to="/">Go Home</Link>
            </Document>
        )
    } else {
        return (
            <Document>
                <h1>ERROR</h1>
                <p className='error'>Unknown error</p>
                <Link className='error-link' to="/">Go Home</Link>
            </Document>
        )
    }
}