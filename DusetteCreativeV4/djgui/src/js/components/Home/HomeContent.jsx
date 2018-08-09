import React from 'react';


export const HomeContent = () => (
  <div id={"home-content-wrapper"}>
    <div className={"home-hero-wrapper d-flex align-items-center justify-content-center"} id="home-hero-wrapper">
        <div className={"home-hero-overlay"}/>
        <div className={"home-hero-text text-center pt-2"}>
            <h1 className={"text-light-white py-1 px-5"}>
                <strong>
                    Hi! I am Ronin Dusette. <br/> I make pictures and type interwebz.
                </strong>
            </h1>
        </div>
    </div>
    <div className={"container-fluid home-section-2-wrapper pb-5 position-relative"}>
        <div className={"grey-bg-texture"}/>
        <br/>
        <br/>
        <br/>
        <div className={"row px-5 mx-5"}>
            <div className={"col-12 col-md-4 px-5 text-center"} id={"home-what-i-do-box-1"}>
                <div className={"inner-what-i-do-container py-5"}>
                    <a href="#" className={"what-i-do-icon-link"}><i className={"fas fa-terminal fa-6x mb-5"}/></a>
                    <ul className="list-inline what-i-do">
                        <li><a href="#">Networking & IT</a></li>
                        <li><a href="#">Full-Stack development</a></li>
                        <li><a href="#">Linux Admin</a></li>
                    </ul>
                </div>
            </div>
            <div className={"col-12 col-md-4 px-5 text-center"} id={"home-what-i-do-box-2"}>
                <div className={"inner-what-i-do-container py-5"}>
                    <a href="#" className={"what-i-do-icon-link"}><i className={"fas fa-camera fa-6x mb-5"}/></a>
                    <ul className={"list-inline what-i-do"}>
                        <li><a href="#">Portraits</a></li>
                        <li><a href="#">Fine Art</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
            </div>
            <div className={"col-12 col-md-4 px-5 text-center"} id={"home-what-i-do-box-3"}>
                <div className={"inner-what-i-do-container py-5"}>
                    <a href="#" className={"what-i-do-icon-link"}><i className={"fas fa-video fa-6x mb-5"}/></a>
                    <ul className={"list-inline what-i-do"}>
                        <li><a href="#">Documentary</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Music</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className={"row mt-5 mb-3"}>
            <div className={"col-12 text-center"}>
                <a className={"button-dark-bg lets-create-cta"} href="/contact/">Let's Create</a>
            </div>
        </div>
    </div>
    <div className={"container-fluid home-section-3-container px-3 mx-0 w-100 position-relative"}>
        <div className={"grey-bg-texture-inverted"}/>
        <div className={"row"}>
            <div className={"col-12 text-center home-section-3-border"}>
                <div className={"home-section-3-text-wrapper"}>
                    <h4 className={"home-section-3-text mt-4"} id={"home-section-3-text-1"}>
                        my mind is always on technology...
                    </h4>
                    <h4 className={"home-section-3-text mt-4"} id={"home-section-3-text-2"}>
                        $ sudo apt install EVERYTHING
                    </h4>
                </div>
            </div>
        </div>
    </div>
  </div>
)