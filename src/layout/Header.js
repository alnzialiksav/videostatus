import React from "react"
import {serchVideo} from '../actions'
import {Redirect} from 'react-router-dom'
const queryString = require('query-string');


const categories = [
    "Popular category's",
    "Top Singer",
    "Top Actors & Actresses"
];
const BottomNav = [
    {path:"/",icon:"fas fa-home",name:"Home"},
    {path:"/",icon:"fas fa-clock",name:"New"},
    {path:"/",icon:"fas fa-fire",name:"Popular"},
    {path:"/",icon:"fas fa-th-large",name:"Category"}
];



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            redirect:false
        }
    }

    componentDidMount() {
        const search = queryString.parse(( this.props &&  this.props.history && this.props.history.location.search) || '');
        this.setState({
            tag: search.tag
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEnter = async(event) => {
        const {tag} = this.state;
        if(event.charCode === 13) {
            const result = await serchVideo(tag);
            this.setState({redirect:true});
            this.props.history.push(`/?tag=${tag}`);
        }
    };

    render() {
        const {tag} = this.state
        const path =  this.props.location && this.props.location.pathname.split("/")[2];

        return (

            <>
                <div className="mobile-menu" style={{display: "block"}}>
                    <ul className="bottom-navbar-nav" style={{backgroundColor:"black"}}>
                        {
                            BottomNav.map((value,index)=>(
                                <li key={index} className="bottom-nav-item active">
                                    <a href={value.path} className="bottom-nav-link">
                                        <i className={value.icon} style={{color:"white"}}/>
                                        <span style={{color:"white"}}>{value.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                < nav className="navbar navbar-expand navbar-light   static-top osahan-nav sticky-top"
                      style={{color:"white",backgroundColor:"black"}}>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;&nbsp;
                    <a className="navbar-brand mr-1" href="/">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://askbootstrap.com/preview/vidoe-v1-2/theme-six/img/logo.png"
                        />
                    </a>
                    <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a
                                className="nav-link dropdown-toggle"
                                id="alertsDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{background:"transparent",color:"white", borderRadius: "19px"}}
                            >
                                {
                                    path  === "Popular category's"
                                        ? "Popular category's"  :  path === "Top Singer"
                                        ? "Top Singer"  :  path === "Top Actors & Actresses"
                                        ? "Top Actors & Actresses" : "Categories"
                                }
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="alertsDropdown"
                                style={{backgroundColor:"black"}}
                            >
                                {
                                    categories.map((item,index) => (
                                        <a
                                            key={index}
                                            href={`/category/${item}`}
                                            className="dropdown-item"
                                            style={{color:"white"}}
                                        >
                                            &nbsp; {item}
                                        </a>
                                    ))
                                }
                            </div>
                        </li>
                    </ul>
                    <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
                        <div className="input-group" style={{color:'white'}}>
                        <input
                            type="text"
                            style={{background:"",border: "solid 1px white", borderRadius: "19px"}}
                            className="form-control"
                            name="tag"
                            value={tag}
                            placeholder="Search for..."
                            onKeyPress={this.onEnter}
                            onChange={this.handleChange}
                        />
                        </div>
                    </div>
                </nav>
            </>
        )
    }




};

export default Header
