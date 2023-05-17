import React, { useEffect } from 'react'
import "./Slider.css"

export default function Slider() {



    return (
        <div className='body'>
            <input type="radio" name="x" id="x1" className="hidden"/>
            <input type="radio" name="x" id="x2" className="hidden" />
            <input type="radio" name="x" id="x3" className="hidden" />
            <input type="radio" name="x" id="x4" className="hidden" />
            <nav className="nav">
                <label for="x1" className="button">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                    </span>
                    <span className="icon-text">Fire up!</span>
                </label>
                <label for="x2" className="button">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6 5L6 11 6 13 6 19 9 19 9 13 15 13 15 19 18 19 18 5 15 5 15 11 9 11 9 5zM3 15c0 .553.447 1 1 1h1V8H4C3.447 8 3 8.447 3 9v2H2v2h1V15zM21 9c0-.553-.447-1-1-1h-1v8h1c.553 0 1-.447 1-1v-2h1v-2h-1V9z"></path>
                        </svg>
                    </span>
                    <span className="icon-text">Train hard</span>
                </label>
                <label for="x3" className="button">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17.168,8H13l0.806-4.835C13.907,2.555,13.438,2,12.819,2H7.667C7.178,2,6.761,2.354,6.681,2.835l-1.667,10 C4.912,13.445,5.382,14,6,14h4v8l8.01-12.459C18.438,8.875,17.96,8,17.168,8z"></path>
                        </svg>
                    </span>
                    <span className="icon-text">More Power</span>
                </label>
                <label for="x4" className="button">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                            <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M15.293,16.707L11,12.414V6h2v5.586l3.707,3.707 L15.293,16.707z"></path>
                        </svg>
                    </span>
                    <span className="icon-text">Schedule</span>
                </label>
            </nav>
            <main className="main">
                <div className="slides">
                    <div className="slide">
                        <div className="slide__content">
                            <h2 className="title">Fire up your energy</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Eligendi, veniam magnam nostrum maiores tenetur possimus magni omnis, itaque corrupti corporis.</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide__content">
                            <h2 className="title">Train like never</h2>
                            <p className="subtitle">Praesentium, sequi hic nesciunt velit ea? Cupiditate sunt, mollitia dicta.</p>
                            <p>Sit quos itaque alias illo, ea. Ipsa voluptates iusto molestias et nisi delectus magnam totam, perspiciatis natus, magni quasi ad?</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide__content">
                            <h2 className="title">Empower your body</h2>
                            <p className="subtitle">Omnis, eligendi ex eius eum, incidunt repellendus architecto hic quasi!</p>
                            <p>Ipsa molestiae voluptatibus ducimus dicta ullam sit maxime dolorum, quidem temporibus eligendi laudantium officia, necessitatibus magni voluptate cum. Necessitatibus, laborum?</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide__content">
                            <h2 className="title">Schedule your time</h2>
                            <p className="subtitle">Vero repellendus nihil dolorem, molestiae culpa assumenda!</p>
                            <p>Placeat illum explicabo rem odio quisquam ducimus, veniam, quis tempora ullam et, dignissimos dolor culpa, eum voluptate! Temporibus, nam, sequi!</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
