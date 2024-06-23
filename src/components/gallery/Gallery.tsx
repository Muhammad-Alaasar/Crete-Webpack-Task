import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Gallery.css'
import leftArrow from '../../assets/images/left-arrow.png'
import fiatLogo from '../../assets/images/fiat-logo.png'
import CarInGallery from './CarInGallery.tsx'
import React from 'react'

export default function Gallery() {
    return (
        <section className="gallery">
            <div className="container d-flex justify-content-between mb-3">
                <h2 className="fw-bold">السيارات المعروضه بواسطة فهمي</h2>
                <h2 className="fw-bold">
                    عرض الكل
                    <img className="pe-3" src={leftArrow} alt="عرض الكل" />
                </h2>
            </div>
            <div className="gallery-items d-flex justify-content-center gap-3 mt-4">
                <div className="gallery-item d-flex align-items-center gap-2">
                    <img src={fiatLogo} alt="Fiat" />
                    <h5 className="semibold">فيات 500 اكس ٢٠٢٣ </h5>
                </div>
                <div className="gallery-item d-flex align-items-center gap-2">
                    <img src={fiatLogo} alt="Fiat" />
                    <h5 className="semibold">فيات 500 اكس ٢٠٢٣ </h5>
                </div>
                <div className="gallery-item d-flex align-items-center gap-2">
                    <img src={fiatLogo} alt="Fiat" />
                    <h5 className="semibold">فيات 500 اكس ٢٠٢٣ </h5>
                </div>
                <div className="gallery-item d-flex align-items-center gap-2">
                    <img src={fiatLogo} alt="Fiat" />
                    <h5 className="semibold">فيات 500 اكس ٢٠٢٣ </h5>
                </div>
                <div className="gallery-item d-flex align-items-center gap-2">
                    <img src={fiatLogo} alt="Fiat" />
                    <h5 className="semibold">فيات 500 اكس ٢٠٢٣ </h5>
                </div>
            </div>
            <div className="container">
                <OwlCarousel
                    dir="ltr"
                    className="owl-theme"
                    margin={30}
                    nav
                    loop
                    navElement={'div'}
                    dotsEach={true}
                    autoplay
                >
                    <CarInGallery />
                    <CarInGallery />
                    <CarInGallery />
                    <CarInGallery />
                    <CarInGallery />
                    <CarInGallery />
                </OwlCarousel>
            </div>
        </section>
    )
}
