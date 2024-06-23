import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './BuyCar.css'
import NewCar from './NewCar.tsx'
import React from 'react'

export default function BuyCar() {
    return (
        <section className="container buy-car" dir="rtl">
            <Tabs defaultActiveKey="newCar" id="uncontrolled-tab-example">
                <Tab eventKey="newCar" title="سيارة جديدة">
                    <NewCar />
                </Tab>
                <Tab eventKey="usedCar" title="سيارة مستعملة">
                    <NewCar />
                </Tab>
            </Tabs>
        </section>
    )
}
