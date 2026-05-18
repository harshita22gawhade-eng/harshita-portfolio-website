import React from "react";
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Harshita</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                </ul>
                <div className="footer_social">
                <a href="https://www.linkedin.com/in/harshita-gawhade-9bb005221/" className="footer_social-link" rel="noreferrer" target="_blank" ><i class="uil uil-linkedin"></i></a>
            <a href="https://dribbble.com/" className="footer_social-link" rel="noreferrer" target="_blank"><i class="uil uil-dribbble"></i></a>
            <a href="https://github.com/" className="footer_social-link" rel="noreferrer" target="_blank"><i class="uil uil-github-alt"></i></a>
                </div>
                <span className="footer_copy">
                    &#169; All rights reserved 2025
                </span>
            </div>
        </footer>
    )
}

export default Footer;