import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Attitude = () => {
    const list = [
        {   title:"Firse Machayenge",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Firse-Machayenge/10271",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/hbwhioa0jh_video_firse_machayenge_tifb.jpg)",
            language:"Hindi",
            download:"71",
            date:"15 February 2020",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/hbwhioa0jh_video_firse_machayenge_tifb.jpg"
        },
        {   title:"Aaja Tu",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Aaja-Tu/10178",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/lx2g96zhwb_video_aaja_tu_3kju.jpg)",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/lx2g96zhwb_video_aaja_tu_3kju.jpg",
            language:"Hindi",
            download:"67",
            date:"13 February 2020 "},
        {   title:"Sidhi Shadi",
            path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Sidhi-Shadi/10157",
            src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/txxmyxvs3n_video_sidhi_shadi_k7hd.jpg",
            bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/txxmyxvs3n_video_sidhi_shadi_k7hd.jpg)",
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
            <div className="video-block section-padding">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title">
                            <div className="btn-group float-right right-action">
                            </div>
                            <h6>Attitude Status Hindi</h6>
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
                        <li className="page-item active"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/16">16</a></li>
                        <li className="page-item"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/15">15</a></li>
                        <li className="page-item"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/14">14</a></li>
                        <li className="page-item"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/13">13</a></li>
                        <li className="page-item"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/12">12</a></li>
                        <li className="page-item"><a className="page-link">...</a></li>
                        <li className="page-item"><a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/1">1</a></li>
                        <li className="page-item">
                            <a className="page-link" href="https://www.fullscreenvideostatus.com/attitude-status-hindi/15">Next</a>
                        </li>
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

export default Attitude
