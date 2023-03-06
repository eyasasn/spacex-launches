import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './LaunchDetails.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useCallback, useEffect, useState } from 'react'
import DetailsCard from '../../components/detailsCard/DetailsCard'


function LaunchDetails() {
    const [launchDetails, setLaunchDetails] = useState()
    const location = useLocation()

    const getLaunchDetails = useCallback(async () => {
        await axios.get(`https://api.spacexdata.com/v3/launches/${location.state.id}`)
            .then(response => setLaunchDetails(response.data))
            .catch(error => console.log(error))
    }, [location.state.id]);

    useEffect(() => {
        getLaunchDetails();
    }, [getLaunchDetails]);

    return (
        <div className='background-launch-page'>
            <div>
                <Header />
            </div>
            <div >
                <DetailsCard
                    flightNumber={launchDetails ? launchDetails.flight_number : null}
                    missionName={launchDetails ? launchDetails.mission_name : null}
                    rocketName={launchDetails ? launchDetails.rocket.rocket_name : null}
                    status={launchDetails && launchDetails.launch_success ? 'Succeed' : 'Failed'}
                    logo={launchDetails ? launchDetails.links.mission_patch_small : null}
                    video={launchDetails ? launchDetails.links.video_link : null}
                    flightDetails={launchDetails ? launchDetails.details : null}
                />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LaunchDetails