import Nav from './Nav'
import icon from '../../public/img/icon.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container content'>
                <img src={icon} alt="icon harp" className='icon' />

                <Nav />

                <p className='copyright'>All rights reserved {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}

export default Footer