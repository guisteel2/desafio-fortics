import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src="https://static.wixstatic.com/media/c63776_65884874f0cd4b19ad0f2ecc8e880140~mv2.png/v1/fill/w_1358,h_310,al_c,q_90,usm_0.66_1.00_0.01/c63776_65884874f0cd4b19ad0f2ecc8e880140~mv2.webp" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>    
            </ul>
        </div>
    </nav>
)