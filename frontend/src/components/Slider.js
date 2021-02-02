import React, { Fragment } from 'react'

const Slider = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-12">
                    <div id="slides" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#slides" data-slide-to="0" className="active"></li>
                            <li data-target="#slides" data-slide-to="1"></li>
                            <li data-target="#slides" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner" style={{ maxHeight: '740px' }}>
                            <div className="carousel-item active">
                                <img
                                    className="img-fluid"
                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612187712/dsstreet/slider1_twnhbv.jpg"
                                    alt=""
                                    style={{ minHeight: '366px', objectFit: "cover" }}
                                />

                            </div>
                            <div className="carousel-item ">
                                <img
                                    className="img-fluid"
                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612187701/dsstreet/slider2_vgvrf6.webp" alt=""
                                    style={{ minHeight: '366px', objectFit: "cover" }}
                                />

                            </div>
                            <div className="carousel-item">
                                <img
                                    className="img-fluid"
                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612187717/dsstreet/slider3_ixymp4.jpg" alt=""
                                    style={{ minHeight: '366px', objectFit: "cover" }}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-lg-none d-md-block col-md-3">


                    <img
                        src="https://res.cloudinary.com/mckrus/image/upload/v1612188339/dsstreet/slider4_gp3yry.jpg"
                        alt=""
                        style={{ maxHeight: '366px' }}
                    />
                </div>
                <div className="d-lg-none d-md-block col-md-3">
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612188341/dsstreet/slider5_unrlm1.jpg" alt=""
                        style={{ maxHeight: '366px' }}
                    />
                </div>
            </div>
           
        </>
    )
}

export default Slider
