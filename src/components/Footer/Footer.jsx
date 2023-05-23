import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>

    <footer>

        <div className="row wh">
          
            <div className="col-lg-4">
                <div className="con-img pb-3">
                    <h2>Gym Knock Out</h2>
                </div>

                <p>Un gimnasio versátil que llevará tu físico al siguiente nivel.

</p>

            </div>

            <div className="col-lg-4 pb-5">
                <img src="/img/logo.png" className='imgLogo' width={120} alt="" />
            </div>

            <div className="col-lg-4">

                <h4>Connect with Us</h4>

                <div className="redes">
                <a href="https://www.facebook.com/profile.php?id=100092163859160" target="_blank"> <i
                            className="fa-brands fa-square-facebook redes cursor"></i></a>
                    <a href="https://instagram.com/binascode?igshid=YmMyMTA2M2Y=" target="_blank"> <i
                            className="fa-brands fa-square-instagram redes cursor"></i></a>
                    <a href="https://www.tiktok.com/@binascode?fbclid=IwAR0Xlxvp_I5Dyzg5Jwo52MOD20On5llop9ZHz-rsarmrL7CMzedJVbR3WOQ" target="_blank"> <i
                            className="fa-brands fa-tiktok redes cursor"></i></a>
                </div>

            </div>

        </div>

        <p className="copyright">© 2023 All Rights Reserved</p>

    </footer>

</div>
  )
}
