import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { reduxFirestore, getFirestore } from 'redux-firestore'
import moment from "moment";

const UserDetailsForm = (props) => {
    const cartProducts =  useSelector(state => state?.cartReducer?.products) || []
    const totalPayable =  useSelector(state => state?.cartReducer?.totalPayable) || 0
    const dispatch = useDispatch();

    // const dispatch = useDispatch();
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
        const userDetails = formToJSON(elements)
        // console.log(formToJSON(elements));
        // dispatch({ type: 'ORDER_MAKE_REQUEST_TO_FIREBASE' ,elements})
        // firebase.add()
        const orderDetails = {
            userDetails : userDetails,
            productDetails : cartProducts,
            totalPayable : totalPayable,
            Created: new Date().getTime(),
            Customer : userDetails.firstName + ' ' + userDetails.lastName,
            Endtime:  new Date().getTime(),
            paymentMode : 'cod',
            orderStatus : 'PENDING'
        }
        console.log("Order placed s",orderDetails);
        const firestore = getFirestore();
        console.log("firestore", firestore);
        firestore.collection('tdmOrders').add({orderDetails}).then(() => {
            console.log("done");
            dispatch({ type: 'CART_EMPTY_PRODUCT' });
            props.history.push('/orderPlaced')
        })
    }

    return (
        <>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">User Details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-8 ftco-animate fadeInUp ftco-animated">
                    <form onSubmit={handleFormSubmit} id="contact-form" className="billing-form bg-light p-3 p-md-5">
                        <h3 className="mb-4 billing-heading">Billing Details</h3>
                        <div className="row align-items-end">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id='firstName' placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id='lastName' placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="country">State / Country</label>
                                    <div className="select-wrap">
                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                        <select name="" id="country" className="form-control">
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
                            <div className="w-100"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="streetaddress">Street Address</label>
                                    <input type="text" id='street' className="form-control" placeholder="House number and street name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="appartment">Appartment</label>
                                    <input type="text" className="form-control" id='appartment' placeholder="Appartment, suite, unit etc: (optional)" />
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="towncity">Town / City</label>
                                    <input type="text" id='city' className="form-control" placeholder="City" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                    <input type="text" id='zip' className="form-control" placeholder="ZIP" />
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input id='mobile' type="text" className="form-control" placeholder="Mobile" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="emailaddress">Email Address</label>
                                    <input type="text" id='email' className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-12">
                                <div className="form-group mt-4">
                                    <div className="radio">
                                        <label className="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                                        <label><input type="radio" name="optradio" /> Ship to different address</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary py-3 px-4 submit">Place order</button>

                    </form>
                    <div className="row mt-5 pt-3 d-flex mb-5">
                        <div className="col-md-6">
                            <div className="cart-detail bg-light p-3 p-md-4">
                                <h3 className="billing-heading mb-4">Payment Method</h3>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="radio">
                                            <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="" className="mr-2" /> I have read and accept the terms and conditions</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <p>
                                    <a href="#" className="btn btn-primary py-3 px-4">Place an order</a>
                                </p> */}
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="cart-detail cart-total bg-light p-3 p-md-4">
                                <h3 className="billing-heading mb-4">Cart Total</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
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