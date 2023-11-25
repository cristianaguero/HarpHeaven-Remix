import {
    Meta
} from '@remix-run/react'

export function meta() {
    return [{
        title: 'Harp Heaven - About us',
        description: 'About page description',
        keywords: 'about, page, description',
    }]
}

function About() {
  return (
    <html>
        <head>
            <Meta />
        </head>
        <body>
            About
        </body>
    </html>
  )
}

export default About