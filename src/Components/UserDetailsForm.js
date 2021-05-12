import React from "react";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";

const UserDetailsForm = (props) => {
	const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const elements = document.querySelectorAll(".form-control")
        // var formLengthlength = document.getElementsByClassName("form-control").length;
        const formToJSON = (elements) =>
            [].reduce.call(
                elements,
                (data, element) => {
                    data[element.id] = element.value;
                    return data;
                },
                {},
            );
        console.log(formToJSON(elements));
        dispatch({ type: 'ORDER_MAKE_REQUEST_TO_FIREBASE' ,elements})
        // firebase.add()
    }
    return (
        <>
            <div class="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div class="container p-4">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 class="mb-0 bread">User Details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8 ftco-animate fadeInUp ftco-animated">
                    <form onSubmit={handleFormSubmit} id="contact-form" class="billing-form bg-light p-3 p-md-5">
                        <h3 class="mb-4 billing-heading">Billing Details</h3>
                        <div class="row align-items-end">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" class="form-control" id='firstName' placeholder="First Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" class="form-control" id='lastName' placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="country">State / Country</label>
                                    <div class="select-wrap">
                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                        <select name="" id="country" class="form-control">
                                            <option value="UAE">France</option>
                                            <option value="">Italy</option>
                                            <option value="">Philippines</option>
                                            <option value="">South Korea</option>
                                            <option value="">Hongkong</option>
                                            <option value="">Japan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="streetaddress">Street Address</label>
                                    <input type="text" id='street' class="form-control" placeholder="House number and street name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="appartment">Appartment</label>
                                    <input type="text" class="form-control" id='appartment' placeholder="Appartment, suite, unit etc: (optional)" />
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="towncity">Town / City</label>
                                    <input type="text" id='city' class="form-control" placeholder="City" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="postcodezip">Postcode / ZIP *</label>
                                    <input type="text" id='zip' class="form-control" placeholder="ZIP" />
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input id='mobile' type="text" class="form-control" placeholder="Mobile" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="emailaddress">Email Address</label>
                                    <input type="text" id='email' class="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-md-12">
                                <div class="form-group mt-4">
                                    <div class="radio">
                                        <label class="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                                        <label><input type="radio" name="optradio" /> Ship to different address</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary py-3 px-4 submit">Place order</button>

                    </form>
                    <div class="row mt-5 pt-3 d-flex mb-5">
                        <div class="col-md-6">
                            <div class="cart-detail bg-light p-3 p-md-4">
                                <h3 class="billing-heading mb-4">Payment Method</h3>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <label><input type="radio" name="optradio" class="mr-2" /> Direct Bank Tranfer</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <label><input type="radio" name="optradio" class="mr-2" /> Check Payment</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <label><input type="radio" name="optradio" class="mr-2" /> Paypal</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="" class="mr-2" /> I have read and accept the terms and conditions</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p>
                                    <a href="#" class="btn btn-primary py-3 px-4">Place an order</a>
                                </p> */}
                            </div>
                        </div>
                        <div class="col-md-6 d-flex">
                            <div class="cart-detail cart-total bg-light p-3 p-md-4">
                                <h3 class="billing-heading mb-4">Cart Total</h3>
                                <p class="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p class="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p class="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p class="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                                <p>
                                    <button className="btn btn-primary py-3 px-4 submit">Place order</button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailsForm;