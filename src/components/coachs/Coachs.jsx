import React from 'react'
import "./Coachs.css"

export default function Coachs() {
  return (
    <div>
            
    <div className="section" id="trainer">
      <h2 className="primary mb">Nuestros entrenadores profesionales</h2>
      <div className="container flex pt-3">
        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
