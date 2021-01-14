import "./intro.styles.css";

const Intro = () => {
    return (
        <div className="intro-container">

            <div className="intro-main">


                <i class="fab fa-github fa-10x"></i>


                <form action="/user" method="get" className="login-form">
                    <input type="text" name="id" placeholder="GITHUB USERNAME"></input>
                    <button type="submit"> SUBMIT! </button>
                </form>
                


            </div>

        </div>
    )
}


export default Intro;