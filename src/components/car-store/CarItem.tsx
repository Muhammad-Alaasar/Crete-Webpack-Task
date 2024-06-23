import './CarStore.css'
import carItem from '../../assets/images/car-item.png'
import favoriteIcon from '../../assets/images/favorite.png'
import compareIcon from '../../assets/images/compare.png'
import kiaLogo from '../../assets/images/kia.png'
import groupIcon from '../../assets/images/group.png'
import waitIcon from '../../assets/images/wait.png'
import moneyBagIcon from '../../assets/images/money-bag.png'

export default function CarItem() {
    return (
        <div className="car-item position-relative mb-3" dir="rtl">
            <img src={carItem} alt="سيارة جديدة" width="100%" className="item-image" />
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
            <div className="item-name d-flex align-items-center gap-2 mt-3 px-3">
                <img src={kiaLogo} alt="Kia Logo" />
                <h6 className="mb-0 fw-semibold">كيا سبورتاج فيس ليفت ٢٠٢٣</h6>
            </div>
            <hr className="mt-2" />
            <div className="item-specifications row row-gap-3 px-3 pb-3">
                <div className="description col-6 d-flex align-items-center gap-2">
                    <img src={groupIcon} alt="Group" />
                    <h6 className="mb-0">420,000 كم</h6>
                </div>
                <div className="description col-6 d-flex align-items-center gap-2">
                    <img src={waitIcon} alt="Group" />
                    <h6 className="mb-0">من يوم</h6>
                </div>
                <div className="description col-6 d-flex align-items-center gap-2">
                    <img src={moneyBagIcon} alt="Group" />
                    <h6 className="mb-0">كاش</h6>
                </div>
                <div className="description col-6 d-flex align-items-center gap-2">
                    <h4 className="fw-bolder">980,000 ج.م</h4>
                </div>
            </div>
        </div>
    )
}
