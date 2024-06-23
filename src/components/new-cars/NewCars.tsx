import './NewCars.css'
import leftArrow from '../../assets/images/left-arrow.png'
import mgLogo from '../../assets/images/mg_logo.png'

export default function NewCars() {
    return (
        <section className="container new-cars">
            <div className="d-flex justify-content-between">
                <h2 className="fw-bold">السيارات الجديــــدة</h2>
                <h2 className="fw-bold">
                    عرض الكل
                    <img className="pe-3" src={leftArrow} alt="عرض الكل" />
                </h2>
            </div>
            <ul className="car-models list-unstyled d-flex justify-content-around mt-4 p-4">
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={mgLogo} alt="Car Logo" />
                    <h6 className="fw-bold">ام جي</h6>
                </li>
            </ul>
        </section>
    )
}
