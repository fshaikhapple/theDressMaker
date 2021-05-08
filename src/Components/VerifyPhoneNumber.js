import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";


const VerifyPhoneNumber = (props) => {
    const [showOtp, setShowOtp] = useState(false)

    const onSubmitHandler=(e)=>{
        props.history.push('/otpVerification')
        console.log(props);
    }

    return (
        <>
            <div class="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div class="container p-4">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 class="mb-0 bread">Login or Sign up</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row d-flex justify-content-center mt-5">
                    <div class="col-md-6 cart-total">
                        <h3>Login or Signup</h3>
                        <div  class="subscribe-form">
                            <div class="form-group d-flex">
                                <input type="text" id='mobile' class="form-control" placeholder="+91 phone number" />
                                <input onClick={()=>onSubmitHandler()} type="submit" value="Send OTP" class="submit px-3" />
                            </div>
                            <div class=" mt-5 midLinks">By continuing, I agree to the <a href="/termsofuse">Terms of Use</a> &amp; <a href="/privacypolicy">Privacy Policy</a></div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyPhoneNumber;