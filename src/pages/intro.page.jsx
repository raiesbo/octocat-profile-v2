import { useEffect, useState } from "react";
import "./intro.styles.css";

export default function Intro({ errorMessage }) {
    const [username, setUsername] = useState('');

    const handleClick = () => {
        if (username) window.location.assign(`/user/${username}`);
    }

    useEffect(() => {
        const handlerKeyPress = (event) => {
            if (event.key === 'Enter') {
                username && window.location.assign(`/user/${username}`);
            }
        }

        window.addEventListener("keydown", handlerKeyPress);
        return () => window.removeEventListener("keydown", handlerKeyPress);
    }, [username])

    return (
        <div className="intro-container">
            <div className="intro-main">
                <i className="fab fa-github fa-10x"></i>
                <div className="login-form">
                    <input
                        type="text"
                        placeholder="GITHUB USERNAME"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button onClick={handleClick}> SUBMIT </button>
                </div>
                <h5>{errorMessage && errorMessage}</h5>
            </div>
        </div>
    )
}
