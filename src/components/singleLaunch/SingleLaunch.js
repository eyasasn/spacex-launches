import './SingleLaunch.css'


function SingleLaunch({ missionName, missionPatch, launchDate, launchSite, onClick }) {

    return (
        <div onClick={onClick}>
            <div className="card" >
                <div className="card-body">
                    <div className="card-title">{missionName}</div>
                    <img className="card-img-top" src={missionPatch} alt="null" />
                    <div className='subtitles-launch'>
                        <div className="card-subtitle-launch">Launch Date: {launchDate}</div>
                        <div className="card-subtitle-launch"> Launch Site: {launchSite}</div>
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default SingleLaunch