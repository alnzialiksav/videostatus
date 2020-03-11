import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const List = [
    {path:"https://www.fullscreenvideostatus.com/hindi-status-video-song",img:"",type:"हिंदी",english:"Hindi"},
    {path:"https://www.fullscreenvideostatus.com/punjabi-video-status-for-whatsapp",img:"",type:"ਪੰਜਾਬੀ",english:"Punjabi"},
    {path:"https://www.fullscreenvideostatus.com/gujarati-status-video-download",img:"",type:"ગુજરાતી",english:"Gujarati"},
    {path:"https://www.fullscreenvideostatus.com/marathi-status-video-song-download",img:"",type:"मराठी",english:"Marathi"},
    {path:"https://www.fullscreenvideostatus.com/tamil-status-videos-download",img:"",type:"தமிழ்",english:"Tamil"},
    {path:"https://www.fullscreenvideostatus.com/kannada-status-videos",img:"",type:"ಕನ್ನಡ",english:"Kannada"},
    {path:"https://www.fullscreenvideostatus.com/telugu-whatsapp-status-videos",img:"",type:"తెలుగు",english:"Telugu"},
    {path:"https://www.fullscreenvideostatus.com/bhojpuri-status-videos-download",img:"",type:"भोजपुरी",english:"Bhojpuri"},
    {path:"https://www.fullscreenvideostatus.com/haryanvi-whatsapp-video",img:"",type:"हरयाणवी",english:"Haryanvi"},
];

class Languages extends React.Component {
   render() {
       const setting = {
           infinite: true,
           autoplay:true,
           autoplaySpeed:1500,
           speed: 800,
           slidesToShow: 8,
           responsive: [
               {
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: true
                   }
               },
               {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }
           ]

       }
       return(
           <div className="top-category section-padding mb-4">
               <div className="row">
                   <div className="col-md-12">
                       <div className="main-title">
                           <h6>Language</h6>
                       </div>
                   </div>
                   <div className="col-md-12">
                       <div  className="slider responsive">
                           <Slider {...setting}>
                               {
                                   List.map((v,i)=>(
                                       <div key={i} className="item">
                                           <div className="category-item">
                                               <a href={v.path}>
                                                   {/*<img className="img-fluid" src={v.img} alt=""/>*/}
                                                   <h6>{v.type}</h6>
                                                   <p>{v.english}</p>
                                               </a>
                                           </div>
                                       </div>
                                   ))
                               }
                           </Slider>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}

export default Languages
