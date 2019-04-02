import React from "react"

import Header from "./components/Header"
import Navigation  from "./components/Navigation"
import CreatePost from "./components/CreatePost"
import Stories from "./components/Stories"
export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Navigation/>
                        </div>
                        <div className="col-6">
                            <CreatePost/>
                        </div>
                        <div className="col-4">
                            <Stories/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}