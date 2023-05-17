import React from 'react'
import "./ComponentStart.css"

export default function ComponentStart() {
    return (
        <div className='bg-component'>
            <main className="gs_main">
             
                <div className="gs_round">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src="https://pngimg.com/uploads/fitness/fitness_PNG109.png" alt="" className="gs_hero_img" />
                <div className="gs_heading">
                    <h2>GYM</h2>
                    <h1>KNOCK OUT</h1>
                </div>
                <div className="gs_about">
                    <h1>El futuro del fitness está en tus manos.</h1>
                    <p>
                        <span>Gym</span> <span className='ko-text'>Knock Out</span>, un gimnasio versátil que llevará tu físico al siguiente nivel. Entonces, ¿estás listo para sudar y mutar?
                    </p>
                    <hr />
                    <div className="gs_button">
                        <button className='gs-btn'>Inscribirme</button>
                    </div>
                </div>
                <div className="gs_social">
                    <a href="https://twitter.com/iamutba" target="_blank">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVRIie3Wv0vVURjH8ZdKEojYD9ocHTTE1RYTIxAy3ARRaBcM+hfEWaJoaysaxEGJWhpadBSHEBx0KYWWCkJIM38N537hcvvec7/n3tuSfuDZzvm8z/OcH8/hUv+7WprkcxUPMYAzfMJ7HFaMa8dRnsFtXEuEjmC3BCyPzxjGDUzjAzqrmbzCamxAhe7gIAeaxRGOcYopkQpvliaso7sAeCMCzeIUy1jA42pG22UTvmEyAu0rAC2PJbRVM1vJmbCKB/4u03gC9CVaI0lEzb7gGSZK2Y4lgCdiULiC1wmGRWO4ElSZ/oZwGL7XWmGivtYa8E7zs90XHo6oRv8B+G0taKb5JoNnioLhEfaaAP2hyiuYd7daMYQt/E5ZbY6eC3tcWE80nu0erqeutAUvGoCe4F4qtFz3hVOZ1/ZiMdcINFMv1hKgTzXwwegQ7vQi/hQEHoq0vZiGhO/KjtDAU0r7Ef31QDN1YVb4CNSC/cQb3K0HFNuLWxhED24KneuXcE02hYZyXA/0UhdD5+q+K5z2ztKIAAAAAElFTkSuQmCC" />
                    </a>
                    <a href="https://www.linkedin.com/in/utba-zafar/" target="_blank">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA60lEQVRIie3TvUoDQRSG4UdBKwsrK0nuwKvRG/I6AmnsxAswBsROsLPUysYiBASjhWh2LXRhGXeyUScrwnxwijl/7/ycIesP1ccYTzhDryvwGGXNRl2BZwH4cRWQ9QbfZct6Zer7uN4ZTnX4xp1oLXG/XexhG1Nc4WHZ4rLBFsUH2MEJ5kHsFcPPjSQHH+M2UlfZheZB/hW4aIFWdlBv0rqLJVTNyQTnuInk7bc1+u6JSxxho5Zz2JBznRpc+PrXt/AW5N2nBt9F+oQD91IPpnjj2D99DtabqcHziL9YVJQC/CNlcAZnZf0/vQPUDH0N1iuvEAAAAABJRU5ErkJggg==" />
                    </a>
                    <a href="https://github.com/Uzafar90" target="_blank">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIidXVvU8UURQF8B+LFDQbChNDQWEpJgQT/wQTPjZEolhL6V9h+Eg0UlLSQSgtLKCgo6YlCqiNhR9QYGygYtdiZpLh8mZn2Y6T3GLePefc997c3Mddx0BNfhDTWMATjOWa3zjADj7hqp/iUzhBpya+o3Ub4wEso92DeRFtrKm/EbB6C+MYq3XmrSCYxDyOEmbHeIX7YX2myvye7D7L5KE818QEhvOYyNegkSg8JIH5xC4f1h0ZDxK6uSLZKBFfBuE3WTvW4R++hrXoBT6HXbzowbzA86A9TJHOAqmZIlWgGbTnRaJ8RQ39I/b/cMr0RyBVtlsCs+H7NEXacP2YP/GoB/Nx/ArajynijJvtdol3uUnEY7zPOVH3OlWgIfv7HbzFbkmwnuBvJYw7+KP0DyKeyUbvBUaxlwtGK06QKrBYZV5gKSd+qOHFEdHBZp15gRXZCP6C/S68svm2ihlUhSnZ4Or2WrXxF2/0+BZEDOJpl3wLI/0Y3x38BxO8nay6oORaAAAAAElFTkSuQmCC" />
                    </a>
                </div>
            </main>
        </div>
    )
}
