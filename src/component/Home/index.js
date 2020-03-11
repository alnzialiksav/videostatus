import React, {Component} from "react"
import Header from "../../layout/Header"
import {MobileSearch} from "../../component/Common/TopMobileSearch"
import  WhatsAppVideo  from './whatsappVideo'
import Footer from "../../layout/Footer";

class Home extends Component{
    render() {
        return(
            <div>
                <Header {...this.props}/>
                <div id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid pb-0">
                            <MobileSearch/>
                            <WhatsAppVideo {...this.props}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }

}

export default Home

