import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const JenniferWinget = () => {
    const list = [
        {title:"Tujhe Yaad Na Meri Aayee",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Tujhe-Yaad-Na-Meri-Aayee/5922",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            language:"Hindi",download:"1,521",date:"23 March 2019",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg"
        },
        {title:"Rooh",path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Rooh/5727",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            language:"Punjabi",download:"947",date:"8 March 2019"},
        {title:"Bepanah Mere Dil Ko Tere Dil Ki Zaroorat Hai",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bepanah-Mere-Dil-Ko-Tere-Dil-Ki-Zaroorat-Hai/4107",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            language:"Hindi",download:"7,402",date:"27 February 2019 "},
        {title:"Very Emotional Full ",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Very-Emotional-Full/5008",
            bgbgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            language:"Hindi",download:"1,223",date:"16 February 2019"},
        {title:"Bepanaah",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bepanaah/1935",
            language:"Hindi",download:"120",date:"16 February 2019 "},
        {title:"By God",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/By-God/4640",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            language:"Hindi",download:"1,950",date:"29 January 2019 "},
        {title:"Wafa Ne Bewafai",path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Wafa-Ne-Bewafai/4721",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            url:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
            language:"Hindi",download:"3,911",date:"27 January 2019 "},
        {title:"Zara Si Dil Mein De Jagah Tu ",
            path:"Zhttps://www.fullscreenvideostatus.com/fullscreen-status-download/ ara-Si-Dil-Mein-De-Jagah-Tu/1555",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",language:"Hindi",download:"18,880",date:"23 January 2019"},
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
                        <div className="video-block section-padding">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title">
                                        <div className="btn-group float-right right-action">
                                        </div>
                                        <h6>Jennifer Winget</h6>
                                    </div>
                                </div>
                                {
                                    list.map((v,i)=>(
                                            <div key={i} className="col-xl-3 col-sm-6 mb-3">
                                                <div title={v.title} className="video-card">
                                                    <div className="video-card-image">
                                                        <a className="play-icon" href={v.path}><i className="fas fa-play-circle" /></a>
                                                        <a href={v.path}>
                                                            <img
                                                                style={{height: '100%', objectFit: 'contain',
                                                                    background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1)) no-repeat, ${v.bgurl}`,
                                                                    backgroundSize: 'auto 25em'}}
                                                                className="img-fluid"
                                                                src={v.src} alt="" /></a>
                                                    </div>
                                                    <div className="video-card-body">
                                                        <div className="video-title">
                                                            <a href={v.path}>{v.title}</a>
                                                        </div>
                                                        <div className="video-page text-success">
                                                            {v.language}<a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                                                        </div>
                                                        <div className="video-view">
                                                            <i className="fa fa-download" aria-hidden="true" />&nbsp;{v.download}&nbsp;&nbsp;&nbsp;<i className="fas fa-calendar-alt" />&nbsp;{v.date}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center pagination-sm mb-0">
                                    <li className="page-item active"><a className="page-link" href="https://www.fullscreenvideostatus.com/Jennifer-Winget/1">1</a></li>
                                </ul>
                                <br />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default JenniferWinget
