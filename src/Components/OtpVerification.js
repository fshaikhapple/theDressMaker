import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const OtpVerification = (props) => {

    const submitHandler = () => {
        props.history.push('/userDetailsForm')
    }

    return (
        <>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">Verify OTP</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-6 cart-total">
                        <h3>Verify OTP</h3>
                        <div className="">
                            <div className="w-25 form-group d-flex ">
                                <input type="text" id='otp' className="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' className="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' className="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' className="form-control pl-2 w-100" placeholder="-" />
                                {/* <input type="submit" value="OTP" className="submit px-3" /> */}
                            </div>
                            <div className='subscribe-form'>
                                <div className='form-group w-25 '>
                                    <input onClick={() => submitHandler()} type="submit" value="Submit" className="submit w-100" />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 midLinks"> <a href="/termsofuse">Resend OTP</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OtpVerification;