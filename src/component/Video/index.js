import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import {MobileSearch} from "../../component/Common/TopMobileSearch";
import {PlayVideo} from "../../pages/PlayVideo";

const Video = (props) => (
    <>
        <Header {...props}/>
            <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid pb-0">
                        <MobileSearch/>
                        <PlayVideo {...props}/>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
);

export default Video

