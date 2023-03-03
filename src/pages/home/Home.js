import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../logo/spacex-logo.svg'
import Footer from '../../components/footer/Footer'
import SingleLaunch from '../../components/singleLaunch/SingleLaunch'
import moment from 'moment'


function Home() {
    const [launches, setLaunches] = useState([])

    const getMyLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(response => setLaunches(response.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getMyLaunches()
    }, [])

    return (
        <div className='background'>
            <div className='title-center'>
                <div className='background-title'>
                    <img className='spacex-logo' src={logo} alt='logo' />
                    <p className='title'>Future dream for humankind at the universe</p>
                </div>
            </div>
            <div className='all-cards'>
                {launches.map((launch, key) => (
                    <SingleLaunch
                        key={key}
                        missionName={launch.mission_name}
                        missionPatch={launch.links.mission_patch_small}
                        launchDate={moment(launch.launch_date_local).format("MMM D YYYY")}
                        launchSite={launch.launch_site.site_name}
                    />
                ))}
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home