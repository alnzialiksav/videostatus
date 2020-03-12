import React from "react"
import {CategoryCard} from './CategoryCard'
import category from "../../globalutilities/db/category";
import {MobileSearch} from "./TopMobileSearch";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

class VideoBlog extends React.Component{
    state = {
        list:[]
    };

    componentDidMount() {
        if(this.props.history && this.props.history.location.pathname){
            const path = this.props.history.location.pathname.split("/") || "";
            if(path[2] === "all"){
                this.setState({list:category})
            }else {
                const findCategory = category.filter(v=>v.title === path[2]);
                this.setState({list:findCategory})
            }

        }
    }

    render() {
        const { list } = this.state;
        return(
            <>
            <Header {...this.props}/>
                <div id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid pb-0">
                            <MobileSearch/>
                            {
                                list.map((value, index) => (
                                    <div key={index} className="video-block section-padding">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="main-title">
                                                    <h6 className="customColor">{value.title}</h6>
                                                </div>
                                            </div>
                                            { value.data.map(v => (
                                                <CategoryCard key={v.tag} data={v} type={value.title}/>
                                            ))}
                                        </div>
                                    </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            <Footer/>
                </>
        )
    }
}
export default VideoBlog


