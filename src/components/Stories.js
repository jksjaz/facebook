import React from "react"

const Stories = () => {
    return (
        <div className="stories-container">
            <div className="stories-header">
                <a href="/" role="button" data-toggle="tooltip" data-placement="bottom" title="Stories are photos and videos that are visible for 24 hours. When someone adds to a story, it'll show up here.">
                    <span className="element-header-title">Stories</span>
                </a>
                <div>
                    <a
                        href="https://www.facebook.com/jks.jaz/archive"
                        data-onclick="[
                            {&quot;mod&quot;:&quot;FBStoriesQPLUtils&quot;,&quot;meth&quot;:&quot;start&quot;,&quot;a&quot;:[{&quot;qplMarker&quot;:22347782,&quot;navigationStart&quot;:false}]}]">
                        <i className="stories-icons stories-archive-clock"></i>
                        Archive
                    </a>
                    <span> &nbsp;·&nbsp; </span>
                    <a href="/" role="button"
                        data-onclick="[
                            {&quot;mod&quot;:&quot;FBStoriesMutedBucketOwnersViewer&quot;,&quot;meth&quot;:&quot;openInstance&quot;,&quot;a&quot;:[&quot;muted_settings_tab&quot;,{&quot;__elem&quot;:1}]}]">
                        Settings
                    </a>
                </div>
            </div>

            {/* STORIES BELOW */}
            <div>
                <div className="stories-body">
                    <div className="stories-story-config">
                        <div className="stories-story-button">
                            <div className="stories-story-button-container">
                                <i className="stories-icons stories-add-button"></i>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Add to Your Story</span>
                                <div>
                                    <span>Share a photo, video or write something</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories