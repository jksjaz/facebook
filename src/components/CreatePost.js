import React from "react"

const CreatePost = () => {
    return (
        <div className="card">
            <div className="card-header element-header-title">
            Create Post
            </div>
            <div className="card-body">
                <textarea placeholder="What's on your mind, Jaskaran?"></textarea>
                <hr/>
                <ul>
                    <li className="create-post-buttons">
                        <a href="/" role="button">
                            <div className="breadcrum-button">
                                <i className="icon-standard breadcrum-photo-image"></i>
                                <div className="">Photo/Video</div>
                            </div>
                        </a>
                    </li>
                    <li className="create-post-buttons">
                        <a href="/" role="button">
                            <div className="breadcrum-button">
                                <i className="icon-standard breadcrum-tag-image"></i>
                                <div>Tag Friends</div>
                            </div>
                        </a>
                    </li>
                    <li className="create-post-buttons">
                        <a href="/" role="button">
                            <div className="breadcrum-button">
                                <i className="icon-standard breadcrum-feel-image"></i>
                                <div>Feeling/Activity</div>
                            </div>
                        </a>
                    </li>
                    <li className="create-post-buttons">
                        <a href="/" role="button">
                            <div className="breadcrum-button">
                                <i className="icon-standard breadcrum-extra-image"></i>
                                <div></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CreatePost