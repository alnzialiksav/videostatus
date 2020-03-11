import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Pages from "../../component/Common/pages";

const KartikAndNaira = () => {
    const list = [
        { type:"Kartik And Naira",
          data:[
                {title:"Bekhayali",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Bekhayali/10240",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/v9nu2mvez5_video_yaara_song_dg2k.jpg)",
                    language:"Hindi",download:"15",date:"18 February 2020"},
                {title:"Haye O Meri Jaan",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Haye-O-Meri-Jaan/10275",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/v9nu2mvez5_video_yaara_song_dg2k.jpg)",
                    language:"Punjabi",download:"8",date:"18 February 2020"},
                {title:"Meri Baari",path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Meri-Baari/10241",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/duniya_se_tujhko_churake_6764_a1cw.jpg)",
                    language:"Hindi",download:"7,402",date:"27 February 2019 "},
                {title:"Maula ",
                    path:"https://www.fullscreenvideostatus.com/fullscreen-status-download/Maula/10239",
                    src:"https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/new_girls_sad_full_screen_whani51.jpg",
                    bgurl:"url(https://www.fullscreenvideostatus.com/fullscreenvideostatus/thumb_main/duniya_se_tujhko_churake_6764_a1cw.jpg)",
                    language:"Hindi",download:"1,223",date:"16 February 2019"},
            ]
        }

    ]
    return(
        <>
            <Header/>
            <Pages list={list}/>
            <Footer/>
        </>
    )
}

export default KartikAndNaira
