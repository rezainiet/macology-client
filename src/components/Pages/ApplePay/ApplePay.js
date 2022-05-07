import React from 'react';
import applepay from '../../../images/applePay.png'
import './ApplePay.css'

const ApplePay = () => {
    return (
        <>
            <div className="container py-5 px-2">
                <div className="row">
                    <div className="col-12d=flex align-items-center justify-content-center">
                        <h1 className="card-title">Get 3% Daily Cash <br />
                            back with Apple Card.</h1>
                        <p className="card-subtitle">And pay for your new Mac over 12 months,
                            interest‑free when you choose to check out
                            with Apple Card Monthly Installments.*</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div className="col-12w-100">
                        <img src={applepay} className="img-fluid w-100" alt="applepay" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplePay;