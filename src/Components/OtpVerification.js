import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const OtpVerification = (props) => {

    const submitHandler = () => {
        props.history.push('/userDetailsForm')
    }

    return (
        <>
            <div class="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div class="container p-4">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 class="mb-0 bread">Verify OTP</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row d-flex justify-content-center mt-5">
                    <div class="col-md-6 cart-total">
                        <h3>Verify OTP</h3>
                        <div class="">
                            <div class="w-25 form-group d-flex ">
                                <input type="text" id='otp' class="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' class="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' class="form-control pl-2 w-100" placeholder="-" />
                                <input type="text" id='otp' class="form-control pl-2 w-100" placeholder="-" />
                                {/* <input type="submit" value="OTP" class="submit px-3" /> */}
                            </div>
                            <div className='subscribe-form'>
                                <div className='form-group w-25 '>
                                    <input onClick={() => submitHandler()} type="submit" value="Submit" class="submit w-100" />
                                </div>
                            </div>
                        </div>
                        <div class=" mt-5 midLinks"> <a href="/termsofuse">Resend OTP</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OtpVerification;