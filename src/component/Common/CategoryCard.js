import React from "react"
import {Link} from "react-router-dom"

export const CategoryCard = ({data,type}) => (
    <div className="col-xl-3 col-sm-6 mb-3">
        <div className="channels-card">
            <div className="channels-card-image">
                <Link to={`/${data.tag.toLowerCase()}?type=${type}`}><img className="img-fluid" src={data.imgLink} alt=""/></Link>
            </div>
            <div className="channels-card-body">
                <div className="channels-title">
                    <Link to={`/${data.tag.toLowerCase()}?type=${type}`} >
                        <div className="channels-card-image-btn">
                            <button type="button"
                                    className="btn btn-outline-danger btn-sm">{data.tag}
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
