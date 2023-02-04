import "./profile.styles.css";

const Profile = ({ userData }) => {
    const { login, name, html_url, avatar_url, followers, following, public_repos, created_at, location } = userData

    return (
        <div className="profile-container">

            <div className="profile-main">

                {avatar_url && <img src={avatar_url} alt="avatar" className="avatar-img" />}

                {name && <h1 className="name">{name/*.toUpperCase()*/}</h1>}

                <h2 className="login"><a href={html_url} default="_blanck">@{login}</a></h2>

                <div className="dates">
                    {location && <h3><i className="fas fa-map-marker-alt"></i> {location}</h3>}
                    <h3> <i className="far fa-calendar-check"></i> {new Date(created_at).toDateString()}</h3>
                </div>

                <div className="social-stats">

                    <div className="box box1">
                        <h4>{public_repos}</h4>
                        <h5>Repositories</h5>
                    </div>
                    <div className="box box2">
                        <h4>{followers}</h4>
                        <h5>Followers</h5>
                    </div>
                    <div className="box box3">
                        <h4>{following}</h4>
                        <h5>Following</h5>
                    </div>

                </div>


            </div>


        </div>

    )
}


export default Profile;