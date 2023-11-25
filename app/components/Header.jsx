import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

import Nav from './Nav'


function Header() {

    return (
        <header className="header">
            <div className="container bar">
                <Link to={'/'} className="logo">
                    <img src={logo} className='logo' alt='logo image' />
                </Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header