import image from '../../public/img/hero.webp'
import icon from '../../public/img/icon.png'

function Hero() {
    return (
        <>
            <style jsx='true'>{`
                .hero {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            `}</style>

            <div className="container">
                <div className="content">

                    <h2 className="heading">Harp Heaven</h2>

                    <p className="slogan">Breathe Music, Live Harmony.</p>
                </div>
            </div>
        </>
    )
}

export default Hero