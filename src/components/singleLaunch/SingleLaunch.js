import './SingleLaunch.css'


function SingleLaunch({ missionName, missionPatch, launchDate, launchSite }) {

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-title">{missionName}</p>
                <img className="card-img-top" src={missionPatch} alt="Card image cap" />
                <div className='subtitles'>
                    <p className="card-subtitle">Launch Date: {launchDate}</p>
                    <p className="card-subtitle"> Launch Site: {launchSite}</p>
                </div>
            </div>
        </div >
    )
}

export default SingleLaunch