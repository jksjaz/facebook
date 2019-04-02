import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="input-group align-items-center">
                            <img src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="logo" className="search-control logo-control mr-2 align-content-center"/>
                            <input type="text" className="form-control search-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button className="btn btn-light search-control"><img className="searchicon" alt="search icon" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <button type="button" className="user-button">Create</button>
                                <span className="verticalbreak"></span>
                                <button type="button" className="user-button">Home</button>
                                <span className="verticalbreak"></span>
                                <button type="button" className="user-button">Jaskaran</button>
                            </div>
                            <div className="col">
                                <div className="user-interaction">
                                    <span className="verticalbreak"></span>
                                    <FontAwesomeIcon className="user-icons" icon={["fas", "user-friends"]}/>
                                    <FontAwesomeIcon className="user-icons" icon={["fas", "comment"]}/>
                                    <FontAwesomeIcon className="user-icons" icon={["fas", "bell"]}/>
                                    <span className="verticalbreak"></span>
                                    <FontAwesomeIcon className="user-icons" icon={["fas", "question-circle"]}/>
                                    <FontAwesomeIcon className="user-icons" icon={["fas", "caret-down"]}/>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header