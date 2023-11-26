import image from '../../public/img/about.jpg'
import styles from '~/styles/about.css'

export function meta() {
    return [{
        title: 'Harp Heaven - About us',
        description: 'About page description',
        keywords: 'about, page, description',
    }]
}

export function links() {
    return [{
        rel: 'stylesheet',
        href: styles,
    },
{
    rel: 'preload',
    href: image,
    as: 'image'
}]
}


function About() {
    return (
        <main className='container about'>
            <h2 className='heading'>About Us</h2>

            <div className='content'>
                <img src={image} alt="image about us" />

                <div>
                    <p>Welcome to Harp Heaven, where the enchanting world of harmonicas unfolds before you like a melodic symphony. At Harp Heaven, we are not just a website; we are a passionate community of harmonica enthusiasts dedicated to sharing the love for this soulful instrument. Our journey began with a simple desire—to create a harmonica haven where individuals, whether beginners or seasoned players, could immerse themselves in the rich culture of harmonicas. With an unwavering commitment to quality, we carefully curate a diverse selection of harmonicas, ensuring that every note resonates with excellence.</p>

                    <p>

                        As advocates for the harmonica community, we go beyond being a marketplace. Harp Heaven is a hub for knowledge, featuring insightful blogs penned by seasoned players, offering tips, tricks, and stories that echo the harmonious journey of fellow enthusiasts. Moreover, we believe in the transformative power of education. That's why Harp Heaven hosts comprehensive courses tailored for all skill levels, empowering individuals to unlock the full potential of their harmonica prowess. Join us on this musical odyssey at Harp Heaven, where every click opens a door to a world where harmonicas sing and dreams harmonize.</p>
                </div>
            </div>
        </main>
    )
}

export default About