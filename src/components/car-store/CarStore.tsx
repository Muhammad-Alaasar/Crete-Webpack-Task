import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import leftArrow from '../../assets/images/left-arrow.png'
import CarItem from './CarItem.tsx'
import './CarStore.css'
import React from 'react'

export default function CarStore() {
    return (
        <section className="car-store container">
            <div className="d-flex justify-content-between mb-3">
                <h2 className="fw-bold">سوق السيــــــــــارات</h2>
                <h2 className="fw-bold">
                    عرض الكل
                    <img className="pe-3" src={leftArrow} alt="عرض الكل" />
                </h2>
            </div>
            <OwlCarousel dir="ltr" className="owl-theme" margin={30} loop dotsEach={true} autoplay>
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
            </OwlCarousel>
        </section>
    )
}
