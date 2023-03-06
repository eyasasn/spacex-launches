import './DetailsCard.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'


function DetailsCard({ flightNumber, missionName, rocketName, status, logo, video, flightDetails }) {
    return (
        <div className='container-fluid d-flex justify-content-center  mt-2'>
            <div className='container column pe-3 ps-3 '>
                <div className=' col-sm-8 offset-sm-2 col-12 mx-auto mb-3 mt-5' >
                    <ReactPlayer
                        className='video mx-auto'
                        width="100%"
                        height="400px"
                        url={video}
                        controls
                        muted
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }}
                    />
                </div>
                <div className=' container mt-4'>
                    <div className='d-flex flex-row  col-12 col-sm-8 offset-sm-2 '>
                        <div className='col-sm-2 pe-3 '>
                            <img className='mini-logo' src={logo} alt='logo' />
                        </div>
                        <div className='d-flex  flex-row row col-12  col-sm-10  '>
                            <div className='d-flex flex-column col-sm-6 '>
                                <div className='d-flex flex-row '  >
                                    <div className=' launch-details-titles'>Mission Name</div>
                                    <div className='  ps-2 launch-details-sub '>{missionName}</div>
                                </div>
                                <div className='d-flex flex-row   '>
                                    <div className='  launch-details-titles' >Flight Number</div>
                                    <div className=' ps-2 launch-details-sub'>{flightNumber}</div>
                                </div>

                            </div>
                            <div className='d-flex flex-column  col-sm-6'>
                                <div className='d-flex flex-row '>
                                    <div className=' pe-2 launch-details-titles '>Rocket Name</div>
                                    <div className=' ps-2 launch-details-sub'>{rocketName}</div>
                                </div>
                                <div className=' d-flex flex-row   '>
                                    <div className=' pe-2 launch-details-titles' >Status</div>
                                    <div className=' ms-5  col-sm-4 launch-details-sub'>{status}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='line mt-5 mb-5 col-sm-8 mx-auto'>
                        <div className=' d-flex flex-row mt-5 mb-1 col-12 col-sm-8 '>
                            <div className='detail-title'>Flight Detail</div>
                        </div>
                        <div className=' mb-5 d-flex flex-row col-12 col-sm-8'>
                            {flightDetails}
                        </div>
                        <div className=' mb-5 mt-5'>
                            <Link className='link' to="/">
                                <button className=' mb-5 btn button-color col-12 col-sm-2'>Go Back</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default DetailsCard









