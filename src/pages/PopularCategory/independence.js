import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Independence  = () => {
    const list = [
        {   title:"Tujhe Yaad Na Meri Aayee",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Tujhe-Yaad-Na-Meri-Aayee/5922",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            language:"Hindi",
            download:"1,521",
            date:"23 March 2019",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg"
        },
        {   title:"Rooh",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Rooh/5727",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            language:"Punjabi",
            download:"947",
            date:"8 March 2019"},
        {   title:"Bepanah Mere Dil Ko Tere Dil Ki Zaroorat Hai",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bepanah-Mere-Dil-Ko-Tere-Dil-Ki-Zaroorat-Hai/4107",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            language:"Hindi",
            download:"7,402",
            date:"27 February 2019 "
        },
    ]
    return(
        <>
            <Header/>
            <div id="wrapper">
                <div id="content-wrapper">
                    <div className="container-fluid pb-0">
                        <div className="top-mobile-search">
                            <div className="row">
                                <div className="col-md-12">
                                    <form action="https://www.fullscreenvideostatus.com/results" method="get"
                                          className="mobile-search">
                                        <div className="input-group">
                                            <input type="text" name="tag" placeholder="Search for..." className="form-control"
                                                   required/>
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-dark"><i
                                                    className="fas fa-search"/></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Independence
