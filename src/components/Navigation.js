import React from "react"

const Navigation = () => {
    return (
        <div>
            <ul>
                <li className="nav-icon-config">
                    <i className="icon-standard icon-news-feed"></i>
                    <div>News Feed</div>
                </li>
                <li className="nav-icon-config">
                    <i className="icon-standard icon-messenger-feed"></i>
                    <div>Messenger</div>
                </li>
                <li className="nav-icon-config">
                    <i className="icon-standard icon-watch-feed"></i>
                    <div>Watch</div>
                </li>
                <li className="nav-icon-config">
                    <i className="icon-standard icon-market-feed"></i>
                    <div>Marketplace</div>
                </li>
            </ul>
        </div>
    )
}

export default Navigation