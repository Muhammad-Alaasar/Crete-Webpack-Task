import hyundaiLogo from '../../assets/images/hyundai-logo.png'
import hyundaiCar from '../../assets/images/2025-hyundai.png'
import mfFlag from '../../assets/images/mf-flag.png'
import waitIcon from '../../assets/images/wait.png'
import favoriteIcon from '../../assets/images/favorite.png'
import compareIcon from '../../assets/images/compare.png'
import groupIcon from '../../assets/images/group.png'
import moneyBagIcon from '../../assets/images/money-bag.png'
import './Gallery.css'

export default function CarInGallery() {
    return (
        <div className="car-in-gallery mt-5 p-3 bg-white" dir="rtl">
            <div className="car-model d-flex align-items-center justify-content-between">
                <div className="car-name d-flex align-items-center gap-2">
                    <img src={hyundaiLogo} alt="Hyundai Logo" />
                    <h6 className="fw-bold">هيونداي توسان 2022</h6>
                </div>
                <div className="time-waiting d-flex align-items-center gap-2">
                    <img src={waitIcon} alt="Wait Icon" />
                    <h6>من 12 يوم</h6>
                </div>
            </div>
            <div className="car-picture position-relative">
                <img className="picture-view my-3" src={hyundaiCar} alt="Car" width="100%" />

                <div className="item-icons position-absolute">
                    <div className="d-flex align-items-start gap-2 flex-column">
                        <div className="favorite-icon d-flex justify-content-center align-items-center">
                            <img src={favoriteIcon} alt="Favorite Icon" />
                        </div>
                        <div className="compare-icon d-flex justify-content-center align-items-center">
                            <img src={compareIcon} alt="Compare Icon" />
                        </div>
                    </div>
                </div>
                <div className="mf-flag position-absolute">
                    <img src={mfFlag} alt="Flag Icon" />
                </div>

                <div className="item-specifications row row-gap-3 px-3">
                    <div className="description col-6 d-flex align-items-center gap-2">
                        <img src={groupIcon} alt="Group" />
                        <h6 className="mb-0">90,000 كم</h6>
                    </div>
                    <div className="description col-6 d-flex align-items-center gap-2">
                        <h6 className="mb-0">السعر المعروض</h6>
                    </div>
                    <div className="description col-6 d-flex align-items-center gap-2">
                        <img src={moneyBagIcon} alt="Group" />
                        <h6 className="mb-0">كاش فقط</h6>
                    </div>
                    <div className="description col-6 d-flex align-items-center gap-2">
                        <h4 className="fw-bolder">1,420,000 ج.م</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
