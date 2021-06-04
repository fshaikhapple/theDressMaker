import React, { useEffect, useState} from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import OTPInput, { ResendOTP } from "otp-input-react";
import firebase from "../config/fbConfig";

const VerifyPhoneNumber = (props) => {
    const dispatch = useDispatch();
    const [showOtp, setShowOtp] = useState(false)
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false)
    const [OTP, setOTP] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+91");

    // const onSubmitHandler = (e) => {
    //     props.history.push('/otpVerification')
    //     console.log(props);
    // }

    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    onSignInSubmit();
                },
                // defaultCountry: "IN",
            }
        );
    };

    const onSignInSubmit = () => {
        // if (phoneNumber.length == 12) {
        setIsPhoneNumberValid(true)

        setUpRecaptcha();
        let phoneNumb = ""+phoneNumber+'' ;
        let appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumb, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("confirmationResult otp sent",confirmationResult);
            })
            .catch(function (error) {
                console.log("error1", error);
            });
        // }
    };

    const onSubmitOtp = (e) => {
        // e.preventDefault();
        let otpInput = ''+OTP+'';
        let optConfirm = window.confirmationResult;
        optConfirm
            .confirm(otpInput)
            .then(function (result) {
                // User signed in successfully.
                let user = result;
                console.log("Result " ,user);
                if (result?.user?.uid) {
                    console.log("Result " + JSON.stringify(user));
                    dispatch({ type: 'CUSTOMER_DETAILS', user })
                    props.history.push('/userDetailsForm')
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Incorrect OTP");
            });
    };

    const mobileInputHandler = (e) => {
        setPhoneNumber(e.target.value)
        // props.history.push('/userDetailsForm')
    }

    return (
        <>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">Login or Sign up</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-primary' onClick={onSignInSubmit} >First</button>
            <button onClick={onSubmitOtp} className='btn btn-primary'   >click here to get the otp</button> */}
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-6 cart-total">
                        <h3>Login or Signup</h3>
                        <div className="subscribe-form">
                            <div className="form-group d-flex">
                                <input type="text" id='mobile' onChange={mobileInputHandler} value={phoneNumber} className="form-control" placeholder="+91 phone number" />
                                <input onClick={onSignInSubmit} type="submit" value="Send OTP" className="submit px-3" />
                            </div>
                            <div className=" mt-5 midLinks">By continuing, I agree to the <a href="/termsofuse">Terms of Use</a> &amp; <a href="/privacypolicy">Privacy Policy</a></div>
                        </div>
                        {true && <form>
                            <div className="col-md-12 cart-total  fadeInUp">
                                <h3>OTP</h3>
                                <OTPInput
                                    value={OTP}
                                    onChange={setOTP}
                                    autoFocus
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    secure={false}
                                />
                                <ResendOTP
                                    maxTime={60}
                                    className="mt-5 midLinks" onResendClick={() => console.log("Resend clicked")} />
                            </div>

                            <div className='subscribe-form'>
                                <div className='form-group w-25 '>
                                    <button id={'recaptcha-container'} type="submit" onClick={onSubmitOtp} className="submit w-100" >Submitt</button>
                                </div>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyPhoneNumber;