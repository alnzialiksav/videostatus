import React from "react"
import {Link} from "react-router-dom"

class WhatsAppVideoStatus  extends React.Component {
    render() {
        const {title, _id, path, language, download, date, thumbnail, bgImage, i} = this.props
        return(
            <div key={i} className="col-xl-2 col-sm-6 mb-3">
                <div title={title} className="video-card">
                    <div className="video-card-image">
                        <Link to={`/watch/${_id}`} className="play-icon" href={path}>
                            <i className="fas fa-play-circle"/>
                        </Link>
                        <Link to={`/watch/${_id}`}>
                            <img
                                style={{
                                    height: '100%', objectFit: 'contain',
                                    background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,1)) no-repeat, ${bgImage}`,
                                    backgroundSize: 'auto 25em'
                                }}
                                className="img-fluid"
                                src={thumbnail} alt=""
                            />
                        </Link>
                    </div>
                    <div className="video-card-body">
                        <div className="video-title">
                            <a href={path}>{title}</a>
                        </div>
                        <div className="video-page text-success">
                            {language}
                            <a data-placement="top" data-toggle="tooltip" href="#"
                               data-original-title="Verified">
                                <i className="fas fa-check-circle text-success"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatsAppVideoStatus
