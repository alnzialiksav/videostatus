import React,{Component} from "react"
import {Link} from "react-router-dom"
import {MobileSearch} from './TopMobileSearch'

class Pages  extends Component{

    render() {
        const { videos,title } = this.props;
        return(
            <>
                <div  id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid pb-0">
                            <MobileSearch/>
                            <div className="video-block section-padding">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title">
                                            <div className="btn-group float-right right-action">
                                            </div>
                                            <h6>{title.toUpperCase()}</h6>
                                        </div>
                                    </div>
                                    {
                                        videos.map ((v,i) => (
                                            <div key={i} className="col-xl-2 col-sm-6 mb-3">
                                                <div title={v.title} className="video-card">
                                                    <div className="video-card-image">
                                                        <Link to ={`/watch/${v._id}`} className="play-icon">
                                                            <i className="fas fa-play-circle"/>
                                                        </Link>
                                                        <Link to ={`/watch/${v._id}`} >
                                                            <img
                                                                style={{height: '100%', objectFit: 'contain',
                                                                        // background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1)) no-repeat, ${v.bgImage}`,
                                                                        backgroundSize: 'auto 25em'
                                                                       }}
                                                                className="img-fluid"
                                                                src={v.thumbnail} alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="video-card-body">
                                                        <div className="video-title">
                                                            <Link to ={`/watch/${v._id}`} style={{color:"white"}}>{v.title}</Link>
                                                        </div>
                                                        <div className="video-page text-success">
                                                            {v.language}
                                                                    <a  data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified">
                                                                <i className="fas fa-check-circle text-success" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        )
                                    }
                                </div>
                                {/*<nav aria-label="Page navigation example">*/}
                                {/*    <ul className="pagination justify-content-center pagination-sm mb-0">*/}
                                {/*        <li className="page-item active"><a className="page-link" href="https://www.fullscreenvideostatus.com/Jennifer-Winget/1">1</a></li>*/}
                                {/*    </ul>*/}
                                {/*    <br />*/}
                                {/*</nav>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Pages
