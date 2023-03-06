import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import SingleLaunch from '../../components/singleLaunch/SingleLaunch'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'



function Home() {
    const [launches, setLaunches] = useState([])
    const navigate = useNavigate()
    const toLaunchDetails = (id) => {
        navigate('/launchDetails', { state: { id: id } })
    }
    // API Call Request
    const getMyLaunches = async () => {
        await axios.get('https://api.spacexdata.com/v3/launches')
            .then(response => setLaunches(response.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getMyLaunches()
    }, [])

    return (
        <div className='container-fluid background'>
            <Header />
            <div className='all-cards'>
                {launches.map((launch, key) => (
                    <SingleLaunch
                        key={key}
                        missionName={launch.mission_name}
                        missionPatch={launch.links.mission_patch_small}
                        launchDate={moment(launch.launch_date_local).format("MMM D YYYY")}
                        launchSite={launch.launch_site.site_name}
                        onClick={() => toLaunchDetails(launch.flight_number)}
                    />
                ))}

            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div >
    )
}

export default Home