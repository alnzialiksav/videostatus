import React from "react";
import { findVideoById } from "../../actions"
import { Player } from 'video-react';
class SelectVideo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tag : [],
            videoId:"",
            _id:"",
            videoData:{},
            type:""
        }
    }
    componentDidMount() {
        const path = this.props.location.pathname.split("/");
        this.setState({_id:path[2]},async()=>{
            await this.fetVideo()
        })
    }
    fetVideo =  async () => {
        const { _id } = this.state;
        const res = await findVideoById(_id);
        if(res && res.success && res.payload && res.payload.videos){
            const data = res.payload.videos[0];
            const videourl = data.url;
            const array = videourl.split(".");
            const extension = array[array.length - 1];
            if(extension === "mp4"){
                this.setState({type:"mp4"})
            }
            this.setState({
                videoData:data,
                tag:data.tags,
                videoId:data.url
            })
        }
    };
    render() {
        const { tag, videoData, videoId, type } = this.state;
        {console.log(videoId)}
        return(
            <div className="single-video-left">
                <div className="single-video">
                    { type === "mp4"
                        ? <Player
                            // playsInline
                            width={850}
                            height={360}
                            fluid = {false}
                            poster={videoData.thumbnail}
                            src={videoId}
                            preload={false}
                        />
                        :
                        <iframe
                            width="850"
                            height="360"
                            src={`${videoId}`}
                            allowFullScreen
                            allowTransparency
                            allow="autoplay"
                        />
                    }
                </div>
                <div className="single-video-title box mb-3">
                    <h2>{videoData.title}</h2><br/>
                    <button className="btn btn btn-outline-danger" type="button">
                        <i className="fas fa-download">Download</i>
                    </button>
                </div>
                <div className="single-video-author box mb-3">
                    <div className="adblock">
                        <div className="img">
                            Google AdSense<br/>
                            336 x 280
                        </div>
                    </div>
                </div>
                <div className="single-video-info-content box mb-3">
                    <h6>Upload Date :</h6>
                    <p>19 February 2020</p>
                    <h6>Category :</h6>
                    <p> { tag.map((v,i) =>(
                        <span key={i}>
                            <a href={v.path}>{v}</a>,&nbsp;
                          </span>
                    ))}</p>
                    <h6>About :</h6>
                    <p dangerouslySetInnerHTML={{__html: videoData.description}}/>
                    {/*<p>{videoData.description}</p>*/}
                    <h6>Tags :</h6>
                    <p className="tags mb-0">
                        { tag.map((v,i) =>(
                            <span key={i}>
                            <a href={v.path}>{v}</a>&nbsp;
                          </span>
                        ))}
                    </p>
                </div>
            </div>
        )
    }
}
export default SelectVideo;