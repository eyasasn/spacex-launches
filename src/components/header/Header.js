import './Header.css'
import logo from '../../logo/spacex-logo.svg'

function Header() {
    return (
        <div >
            <div className='title-center-launch-page'>
                <div className='background-title-launch-page'>
                    <img className='spacex-logo-launch-page' src={logo} alt='logo' />
                    <p className='title-launch-page'>Future dream for humankind at the universe</p>
                </div>
            </div>
        </div>
    )
}

export default Header