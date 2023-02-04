import "./footer.styles.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="icons">
                    <a href="https://github.com/raiesbo" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github fa-lg"></i></a>
                    <a href="https://codepen.io/raiesbo" target="_blank" rel="noreferrer" title="CodePen"><i className="fab fa-codepen fa-lg"></i></a>
                    <a href="https://www.freecodecamp.org/raiesbo" target="_blank" rel="noreferrer" title="freeCodeCamp"><i className="fab fa-free-code-camp fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/raiesbo/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in fa-lg"></i></a>
                    <a href="https://archive.raimonespasa.com/" target="_blank" rel="noreferrer" title="Archive"><i className="fas fa-archive"></i></a>
                    <a href="https://raimonespasa.com/" target="_blank" rel="noreferrer" title="Portfolio"><i className="far fa-file fa-lg"></i></a>
                </div>
                <h5>
                    Built and Designed with <span className="enfas">React, react-router, D3.js, Node & Expess</span> by <br />
                    <a href="https://raimonespasa.com/" title="personal website" target="_blank" rel="noreferrer"><span className="enfas">Raimon Espasa Bou</span></a>
                </h5>
            </div>
        </div>
    )
}
