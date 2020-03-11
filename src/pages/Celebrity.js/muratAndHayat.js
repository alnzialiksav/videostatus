import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Pages from "../../component/Common/pages";

const MuratAndHayat = () => {
    const list = [
        {type:"Murat And Hayat",data:[
                {title:"Tujhe Yaad Na Meri Aayee",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Tujhe-Yaad-Na-Meri-Aayee/5922",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    language:"Hindi",download:"1,521",date:"23 March 2019",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg"
                },
                {title:"Rooh",path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Rooh/5727",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    language:"Punjabi",download:"947",date:"8 March 2019"},
                {title:"Bepanah Mere Dil Ko Tere Dil Ki Zaroorat Hai",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bepanah-Mere-Dil-Ko-Tere-Dil-Ki-Zaroorat-Hai/4107",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    language:"Hindi",download:"7,402",date:"27 February 2019 "},
                {title:"Very Emotional Full ",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Very-Emotional-Full/5008",
                    bgbgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    language:"Hindi",download:"1,223",date:"16 February 2019"},
                {title:"Bepanaah",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bepanaah/1935",
                    language:"Hindi",download:"120",date:"16 February 2019 "},
                {title:"By God",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/By-God/4640",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    language:"Hindi",download:"1,950",date:"29 January 2019 "},
                {title:"Wafa Ne Bewafai",path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Wafa-Ne-Bewafai/4721",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    url:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",
                    language:"Hindi",download:"3,911",date:"27 January 2019 "},
                {title:"Zara Si Dil Mein De Jagah Tu ",
                    path:"Zhttps://www.fullscreenvideostatus.com/fullscreen-status-download/ ara-Si-Dil-Mein-De-Jagah-Tu/1555",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg)",language:"Hindi",download:"18,880",date:"23 January 2019"},
            ]}

    ]
    return(
        <>
            <Header/>
            <Pages list={list}/>
            <Footer/>
        </>
    )
}

export default MuratAndHayat
