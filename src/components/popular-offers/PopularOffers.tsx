import leftArrow from '../../assets/images/left-arrow.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import CarCard from './CarCard.tsx'
import './PopularOffers.css'
import React from 'react'

export default function PopularOffers() {
    return (
        <section className="container popular-offers">
            <div className="d-flex justify-content-between mb-3">
                <h2 className="fw-bold">أشهر العروض</h2>
                <h2 className="fw-bold">
                    عرض الكل
                    <img className="pe-3" src={leftArrow} alt="عرض الكل" />
                </h2>
            </div>
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
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </OwlCarousel>
        </section>
    )
}
