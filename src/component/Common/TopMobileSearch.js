import React from "react"

export const MobileSearch =()=>(
    <>
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
    </>
)
