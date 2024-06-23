import './App.css'
import Navbar from './components/header/Navbar.tsx'
import Header from './components/header/Header.tsx'
import BuyCar from './components/buy-car/BuyCar.tsx'
import NewCars from './components/new-cars/NewCars.tsx'
import Ads from './components/ads/Ads.tsx'
import PopularOffers from './components/popular-offers/PopularOffers.tsx'
import Services from './components/services/Services.tsx'
import CarStore from './components/car-store/CarStore.tsx'
import SafeWay from './components/safe-way/SafeWay.tsx'
import Gallery from './components/gallery/Gallery.tsx'
import Footer from './components/footer/Footer.tsx'
import React from 'react'

export default function App() {
    return (
        <>
            <Navbar />
            <Header />
            <BuyCar />
            <NewCars />
            <Ads />
            <PopularOffers />
            <Services />
            <CarStore />
            <SafeWay />
            <Gallery />
            <Footer />
        </>
    )
}
