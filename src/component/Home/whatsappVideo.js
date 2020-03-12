import React from "react"
import Languages from "../../layout/Languages";
import {getVideos, serchVideo} from "../../actions";
import {Loader} from "../../globalutilities/Loader";
import WhatsAppVideoStatus from "../Common/WhatsappVideoStatus";

class WhatsAppVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            videos: [],
            page: 1,
            totalVideos: 0,
            pages: 0,
            pageSize: 10,
            list: [],
            scrollLength:0
        }
    }

    async componentDidMount() {
        const search = this.props.location.search.split("=").pop()
        this.setState({loaded:true},async ()=>{
            this.fetchVideos();
            const result = await serchVideo(search);
            if(result && result.payload && result.payload.videos.length){
                this.setState({
                    list: result.payload && result.payload.videos || []
                })
            }
            this.prev = window.scrollY;
            window.addEventListener('scroll', e => this.handleScroll(e));

        })

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location.search !== this.props.location.search){
            const search = this.props.location.search.split("=").pop()
            this.fetchVideos();
            const result = await serchVideo(search)
            if(result && result.payload && result.payload.videos.length){
                this.setState({
                    list: result.payload && result.payload.videos || []
                })
            }
            this.prev = window.scrollY;
            window.addEventListener('scroll', e => this.handleScroll(e));
            this.setState({
                list: result.payload.videos || []
            })
        }
    }
    handleScroll = (e) => {
        const window = e.currentTarget;
        if (this.prev < window.scrollY) {
            if (window.scrollY > this.state.scrollLength) {
                this.setState({
                    scrollLength:window.scrollY,
                    pageSize: this.state.pageSize + 5
                }, () => {
                    this.fetchVideos();
                })
            }
        }
        this.prev = window.scrollY;
    };

    fetchVideos = () => {
        const {page, pageSize} = this.state;
        this.setState({loaded: true}, async () => {
            const result = await getVideos(page - 1, pageSize);
            if (result.success) {
                const {videos, page, totalVideos, pages} = result.payload;
                this.setState({
                    loaded: false,
                    videos: videos || [],
                    page: page + 1,
                    totalVideos: totalVideos,
                    pages: pages,
                })
            } else {
                this.setState({loaded: false})
            }
        })
    };

    render() {
        const {videos, loaded, list} = this.state;
        return (
            <>
                <Languages/>
                <h5>Daily New Video, Fast Download, Small Size, Trending Video, Quick Share, Smart Search, Video
                    Languages, Quotes Categories</h5>
                <div style={{textAlign: "justify"}}>
                    Check out our other status collections. we have added many different types of videos that you can
                    download on your mobile device. Fullscreen romantic status video is very popular other than that you
                    can suggest any categories or new videos. We are updating homepage videos daily so visit regular our
                    website for the latest status.
                </div>
                <hr/>
                {loaded ? <Loader/> : null}
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                                <div className="btn-group float-right right-action">
                                </div>
                                <h6>Best whatsapp video Status</h6>
                            </div>
                        </div>
                        {
                            list && list.length ? list.map((v, i) => (
                                <WhatsAppVideoStatus
                                    title={v.title}
                                    _id={v._id}
                                    path={v.path}
                                    language={v.language}
                                    download={v.download}
                                    date={v.date}
                                    thumbnail={v.thumbnail}
                                    bgImage={v.bgImage}
                                    i={i}
                                />
                                )
                            ) : (
                                <div>
                                    <h3 className='m-3'>No Whatsapp Video Status Found</h3>
                                    {/*<button type='button' onClick={this.onSubmit} className='btn btn-info btn-sm m-3'>Home</button>*/}
                                </div>
                            )
                        }
                        {
                            !list && !list.length && videos.map((v, i) => (
                                <WhatsAppVideoStatus
                                    title={v.title}
                                    _id={v._id}
                                    path={v.path}
                                    language={v.language}
                                    download={v.download}
                                    date={v.date}
                                    thumbnail={v.thumbnail}
                                    bgImage={v.bgImage}
                                    i={i}
                                />
                                )
                            )
                        }
                    </div>
                </div>
                <h1> Full Screen Video Status Best WhatsApp Status Video Download </h1>
                <br/>
                <div style={{textAlign: "justify"}}>
                    <p>Fullscreen video Status is a popular trend in Indian people. New full-screen WhatsApp status
                        video highlights loving animation and lyrical video that's the reason why Fullscreen status
                        loves so many people. Gone the time when you used to keep different video status apps for
                        different platforms. Now, you just need one a website and it's enough! Immediate status is your
                        all-in-one solution for Fullscreen HD video status for status sharing networks like WhatsApp,
                        Facebook, and Instagram</p>
                    <p>we are here with the Top class collection of Fullscreen WhatsApp status videos. We are building
                        the largest online source of WhatsApp video status and in that purpose, this is the important
                        step. We have collected some very beautiful status videos that are high-resolution full screen
                        30 second short videos.
                        We have contained various language videos of fullscreen size so you can enjoy videos on your
                        mother language. Some videos having rainy songs and romantic videos that will make your day full
                        of joy! if you are looking for Hindi or Tamil or any other Indian language you can select your
                        language from below and download video of that section in full-screen resolution. also, This
                        site is very responsive and fast load speed users can easy to use any network.
                        If you like our collection of fullscreen video status than please share our website with your
                        friends and family members. it will help us grow the website and motivate us to do even better
                        work than this.</p>
                </div>
            </>
        )
    }
}

export default WhatsAppVideo
