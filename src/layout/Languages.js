import React from "react"
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const List = [
    {path:"/hindi",img:"",type:"हिंदी",english:"Hindi"},
    {path:"/punjabi",img:"",type:"ਪੰਜਾਬੀ",english:"Punjabi"},
    {path:"/",img:"",type:"ગુજરાતી",english:"Gujarati"},
    {path:"/",img:"",type:"मराठी",english:"Marathi"},
    {path:"/",img:"",type:"தமிழ்",english:"Tamil"},
    {path:"/",img:"",type:"ಕನ್ನಡ",english:"Kannada"},
    {path:"/",img:"",type:"తెలుగు",english:"Telugu"},
    {path:"/",img:"",type:"भोजपुरी",english:"Bhojpuri"},
    {path:"/",img:"",type:"हरयाणवी",english:"Haryanvi"},
];

class Languages extends React.Component {
   render() {
       const setting = {
           infinite: true,
           autoplay:true,
           autoplaySpeed:1500,
           speed: 1000,
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

       };
       return(
           <div className="top-category section-padding mb-4">
               <div className="row">
                   <div className="col-md-12">
                       <div className="main-title customColor">
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
                                               <Link to={v.path}>
                                                   {/*<img className="img-fluid" src={v.img} alt=""/>*/}
                                                   <h6 style={{color:"black"}}>{v.type}</h6>
                                                   <p>{v.english}</p>
                                               </Link>
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
