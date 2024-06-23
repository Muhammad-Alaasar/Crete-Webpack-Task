import './Services.css'
import sell from '../../assets/images/sell.png'

export default function Services() {
    return (
        <section className="services container">
            <div className="row">
                <div className="col-4 px-3">
                    <div className="service px-4 pt-4 pb-2 d-flex flex-column justify-content-center">
                        <div className="service-icon d-flex justify-content-center align-items-center gap-3">
                            <img src={sell} alt="بيع" />
                            <h2>هاتهالي</h2>
                        </div>
                        <p className="mt-3">
                            بتقدر من خلالها تشتري عربيتك من اي مكان سواء (معرض - موقع علي النت -
                            جارك أو صديق ليك)
                        </p>
                    </div>
                </div>
                <div className="col-4 px-3">
                    <div className="service px-4 pt-4 pb-2 d-flex flex-column justify-content-center">
                        <div className="service-icon d-flex justify-content-center align-items-center gap-3">
                            <img src={sell} alt="بيع" />
                            <h2>هاتهالي</h2>
                        </div>
                        <p className="mt-3">
                            بتقدر من خلالها تشتري عربيتك من اي مكان سواء (معرض - موقع علي النت -
                            جارك أو صديق ليك)
                        </p>
                    </div>
                </div>
                <div className="col-4 px-3">
                    <div className="service px-4 pt-4 pb-2 d-flex flex-column justify-content-center">
                        <div className="service-icon d-flex justify-content-center align-items-center gap-3">
                            <img src={sell} alt="بيع" />
                            <h2>هاتهالي</h2>
                        </div>
                        <p className="mt-3">
                            بتقدر من خلالها تشتري عربيتك من اي مكان سواء (معرض - موقع علي النت -
                            جارك أو صديق ليك)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
