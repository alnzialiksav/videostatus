import React from "react"
import {getVideos} from "../../actions";
import {Loader} from "../../globalutilities/Loader";


class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loading: false,
            videos: [],
            page: 1,
            totalVideos: 0,
            pages: 0,
            pageSize: 10,
        }
    }

    componentDidMount() {
        this.fetchVideos();
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    handleScroll = (e) => {
        const window = e.currentTarget;
        if (this.prev < window.scrollY) {
            if (window.scrollY > 700) {
                this.setState({
                    pageSize: this.state.pageSize + 3
                }, () => {
                    this.fetchVideos();
                })
            }
        }
        this.prev = window.scrollY;
    };

    fetchVideos =  () => {
        const {page, pageSize} = this.state;
        this.setState({loading:true},async ()=>{
            const result = await getVideos(page-1, pageSize);
            if (result.success) {
                const {videos, page, totalVideos, pages} = result.payload
                this.setState({
                    loading: false,
                    videos: videos || [],
                    page: page+1,
                    totalVideos: totalVideos,
                    pages: pages,
                })
            }else{
                this.setState({loading:false})
            }
        })
    };

    render() {
        const { videos,loading }  = this.state;
        return(
            <div className="single-video-right">
                { loading ?  <Loader/>  : null }
                <div className="row">
                    <div className="col-md-12">
                        <div className="adblock">
                            <div className="img">
                                Google AdSense<br/>
                                336 x 280
                            </div>
                        </div>
                        <div className="main-title">
                            <div className="btn-group float-right right-action">
                            </div>
                            <h6>Up Next</h6>
                        </div>
                    </div>
                    <div className="col-md-12">
                        {
                            videos.map((v,i) =>(
                                <div key={i} className="video-card video-card-list">
                                    <div className="video-card-image">
                                        <a href ={`/watch/${v._id}`} className="play-icon">
                                            <i className="fas fa-play-circle"/>
                                        </a>
                                        <a href ={`/watch/${v._id}`} >
                                            <img
                                                style={{
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    // background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1)) no-repeat, ${v.bgImage}`,
                                                    backgroundSize: 'auto 25em'
                                                }} className="img-fluid"
                                                src={v.thumbnail}
                                                alt=""
                                            />
                                        </a>
                                        <div className="time"/>
                                    </div>
                                    <div className="video-card-body">
                                        <div className="btn-group float-right right-action">
                                        </div>
                                        <div className="video-title">
                                            <a href ={`/watch/${v._id}`}>
                                                {v.title}
                                            </a>
                                        </div>
                                        <div className="video-page text-success">
                                            {v.language}
                                            <a  data-placement="top"
                                                data-toggle="tooltip" href="#"
                                                data-original-title="Verified">
                                                <i className="fas fa-check-circle text-success"/>
                                            </a>
                                        </div>
                                        <div className="video-view">
                                            {v.download} Download &nbsp;<i
                                            className="fas fa-calendar-alt"/> {v.date}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="adblock mt-0">
                            <div className="img">
                                Google AdSense<br/>
                                336 x 280
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery

