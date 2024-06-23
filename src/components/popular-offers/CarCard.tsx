import './PopularOffers.css'
import carLogo from '../../assets/images/car-logo.png'
import favoriteIcon from '../../assets/images/favorite.png'
import compareIcon from '../../assets/images/compare.png'
import Car from '../../assets/images/car.png'

export default function CarCard() {
    return (
        <div className="car-card position-relative d-flex flex-column justify-content-end align-items-start p-3">
            <div className="top-part d-flex justify-content-between align-items-end w-100">
                <img src={Car} alt="Car Image" className="d-block car-image" />
                <div className="price text-center">
                    <h4>820,000 ج.م</h4>
                    <h5>890,000 ج.م</h5>
                </div>
            </div>
            <img src={carLogo} alt="Car Logo" className="d-block my-2" />
            <div className="bottom-part d-flex justify-content-between w-100">
                <h4 className="fw-semibold">
                    لادا جرانتا سبورت درايف
                    <span className="pe-2 fs-6 text-secondary">2021</span>
                </h4>
                <div className="action d-flex gap-2">
                    <span className="icon d-flex justify-content-center align-items-center text-center">
                        <img src={favoriteIcon} alt="Favorite Icon" />
                    </span>
                    <span className="icon d-flex justify-content-center align-items-center text-center">
                        <img src={compareIcon} alt="Compare Icon" />
                    </span>
                </div>
            </div>
        </div>
    )
}
