import './SafeWay.css'
import replaceCar from '../../assets/images/replace.png'
import password from '../../assets/images/password.png'

export default function SafeWay() {
    return (
        <section className="safe-way bg-white">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-4">
                        <h3 className="fw-bold mb-5">عايز تشتري عربيتك وانت مطمن ؟</h3>
                        <h5 className="fw-bold mb-3">محمد فهمي هيضمنلك عربيتك ب 90 يوم ضمان</h5>
                        <h5 className="mb-3">وكمان بتسهيلات التقسيط المباشر</h5>
                        <ul>
                            <li>دون مصاريف إدارية</li>
                            <li>بدون تعقيدات بنكية</li>
                            <li>بدون تأمين اجباري</li>
                            <li>وأول قسط بعد 60 يوم</li>
                        </ul>
                        <button className="discover-btn mt-5 btn mb-5">اكتشف سوق السيارات</button>
                    </div>
                    <div className="col-4 replace-car">
                        <h2 className="fw-bold text-center">90 يوم</h2>
                        <img src={replaceCar} alt="استبدل سيارتك" />
                    </div>
                    <div className="col-4 password">
                        <img src={password} alt="هاتهالى كلمة السر" />
                    </div>
                </div>
            </div>
        </section>
    )
}
