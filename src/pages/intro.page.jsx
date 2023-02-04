import "./intro.styles.css";

export default function Intro({ errorMessage }) {
    return (
        <div className="intro-container">
            <div className="intro-main">
                <i className="fab fa-github fa-10x"></i>
                <form action="/user" method="get" className="login-form">
                    <input type="text" name="id" placeholder="GITHUB USERNAME"></input>
                    <button type="submit"> SUBMIT! </button>
                </form>
                <h5>{errorMessage && errorMessage}</h5>
            </div>
        </div>
    )
}
