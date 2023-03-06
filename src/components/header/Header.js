import './Header.css'
import logo from '../../logo/spacex-logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='border-line'>
            <div className='d-flex justify-content-center flex-column '>
                <Link to={"/"} className='mx-auto' >
                    < img className='img mt-5 mb-2 col-12 col-sm-12 logo ' src={logo} alt='logo' />
                </Link >
                <div className='mx-auto text'>
                    <div className=' col-12 col-sm-12 mx-auto mb-5 '>Future dream for humankind at the universe</div>
                </div>
            </div >
        </div >
    )
}

export default Header
