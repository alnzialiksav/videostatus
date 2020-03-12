import React from "react"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Pages from "../../component/Common/pages";
import { serchVideo } from "../../actions";
import { Loader } from "../../globalutilities/Loader";


class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            loading: false,
            videos: [],
            page: 1,
            totalVideos: 0,
            title:this.props.history.location.pathname.substring(1),
            pages: 0,
            pageSize: 10,
        }
    }

    componentDidMount() {
        console.log(this.state.title)
        this.fetchVideos();
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    handleScroll = (e) => {
        const window = e.currentTarget;
        if (this.prev < window.scrollY) {
            if (window.scrollY > 300) {
                this.setState({
                    pageSize: this.state.pageSize + 5
                }, () => {
                    this.fetchVideos();
                })
            }
        }
        this.prev = window.scrollY;
    };

    fetchVideos = async () => {
        const {page, pageSize,title} = this.state;
        this.setState({loading:true},async ()=>{
            const result = await serchVideo(title);
            if (result.success) {
                const {videos, page, totalVideos, pages} = result.payload;
                this.setState({
                    loading: false,
                    videos: videos || [],
                    page: page+1,
                    totalVideos: totalVideos,
                    pages: pages,
                })
            }
        });

    };

    render() {
        const {videos,title,loading} = this.state;
        return (
            <>
                <Header {...this.props}/>
                { loading ?  <Loader/>  : null }
                <Pages videos={videos} title={title}/>
                <Footer/>
            </>
        )
    }
}

export default Categories
