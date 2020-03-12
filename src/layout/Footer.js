import React from "react"

const Footer = () => {
    return (
        <>
            <footer className="sticky-footer" style={{backgroundColor:"black"}}>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mt-1 mb-0">&copy; Copyright 2020 <strong
                                className="text-dark">Vidoe</strong>. All Rights Reserved<br/>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <div className="app">
                                <a href="/">
                                    <img alt="logo" src="https://www.videostatusmarket.com/static/images/google.png"/>
                                </a>&nbsp;
                                <a href="/">
                                    <img alt="apple logo" src="https://askbootstrap.com/preview/vidoe-v1-2/theme-six/img/apple.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a className="scroll-to-top rounded" id="scrollToTop">
                <i className="fas fa-angle-up"/>
            </a>
        </>
    )
};

export default Footer
