import "./profile.styles.css";


const Profile = ({ userData }) => {
    const { login, name, html_url, avatar_url, blog, followers, following, public_repos, created_at } = userData
    console.log("hololo", userData )
    return (
        <div className="profile-container">


        <div className="profile-main">


            <h1>{ login }</h1>

            <p>
                {name}
                {blog}
                {html_url}

            </p>


        </div>


        </div> 
        
    )
}


export default Profile;