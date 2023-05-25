import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Gym.css"
import Bgvideo from '../bg-video/Bg-video';

export default function Gym() {

  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);
  const arrowIconsRef = useRef([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstImg = firstImgRef.current;
    const arrowIcons = arrowIconsRef.current;

    let isDragStart = false;
    let isDragging = false;
    let prevPageX;
    let prevScrollLeft;
    let positionDiff;

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
      });
    });

    const autoSlide = () => {
      if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth)
        return;

      positionDiff = Math.abs(positionDiff);
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - positionDiff;

      if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
          positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
      }

      carousel.scrollLeft -=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    };

    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add("dragging");
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");

      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("touchstart", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("touchmove", dragging);
      carousel.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("mouseleave", dragStop);
      carousel.removeEventListener("touchend", dragStop);
    };
  }, []);


    return (
        <>

        <Navbar />
        <Bgvideo title="GYM" url="/video/gym4.mp4"/>
        <div className="body-gym d-flex flex-column">
        <div className='tittle'>
            <h2>Gym Knock Out</h2>
        </div>
            <div className="wrapper pt-5">
                <div
                    ref={carouselRef}
                    className="carousel"
                >
                    <img
                        ref={firstImgRef}
                        src="/img/imgGym/1.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/2.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/3.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/4.jpg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/5.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/6.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/7.jpeg"
                        alt=""
                        draggable="false"
                    />
                    <img
                        src="/img/imgGym/8.jpeg"
                        alt=""
                        draggable="false"
                    />
                </div>
                <div className="arrows">
                    <i
                        ref={(el) => (arrowIconsRef.current[0] = el)}
                        id="left"
                        className="fa-solid fa-angle-left"
                    ></i>
                    <i
                        ref={(el) => (arrowIconsRef.current[1] = el)}
                        id="right"
                        className="fa-solid fa-angle-right"
                    ></i>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
