import React from 'react'
import "./Bg-video.css"

export default function Bgvideo(props) {
  return (
    <div className="bg-video-wrap">
    <div className="brightness">
        <video autoPlay={true} loop={true} muted={true} src={props.url}>
        </video>
    </div>

    <div className="overlay">
    </div>
    <div className="center-div text-center">
        <div className="margin-top">
            <img src="/img/logo.png" width="150px" alt="" />
            <p className="pt-5">{props.title}</p>


        </div>
    </div>
</div>
)
}
