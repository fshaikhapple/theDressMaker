import React from "react";

export const LeStyle = (props) => {
    return (
        <div className="hero-wrap js-fullheight" >
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{ height: '100vh' }}>
                    <h3 className="v">TDM - Modest wear</h3>
                    <h3 className="vr">Since - 1985</h3>
                    <div className="col-md-11  text-center">
                        <h1 style={{ color: 'rgba(0, 0, 0, 0.3)' }}>The_Dress_Maker</h1>
                        <h2><span style={{ color: 'rgba(0, 0, 0, 0.2)' }}>Modest Wear</span></h2>
                    </div>
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}