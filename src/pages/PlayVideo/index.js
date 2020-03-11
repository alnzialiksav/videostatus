import React from "react"
import  Gallery  from "./gallery";
import  SelectVideo  from "./selectVideo";

export class PlayVideo extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div className="video-block section-padding">
                <div className="row">
                    <div className="col-md-8">
                        <SelectVideo {...this.props}/>
                    </div>
                    <div className="col-md-4">
                        <Gallery/>
                    </div>
                </div>
            </div>
        )
    }
}


