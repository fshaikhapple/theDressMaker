import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { top100data } from "../../topPosts";
import AdminTabs from "./AdminTabs";

const Orders = (props) => {
    const tabs = ["Inventory", "Orders", "Notifications", "Sales"];
    const [selectedItemid, setSelectedItem] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);

    let result = [];
    const map = new Map();
    for (const item of top100data) {
        if (!map.has(item.id)) {
            map.set(item.id, true);    // set any value to Map
            result.push({
                id: item.id,
                media_url: item.media_url
            });
        }
    }
    result = result.splice(0, 5);

    return (
        <div class="container-fluid">
            <AdminTabs />
            <div class="row">
                <div class="col-md-12 p-0 ftco-animate fadeInUp ftco-animated">
                    <div class="cart-list">
                        <table class="table">
                            <thead class="thead-primary">
                                <tr class="text-center">
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((item, i) => {
                                    return (
                                        <tr class="text-center">
                                            <td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>
                                            <td class="image-prod">
                                                <div class="img">
                                                    <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                                </div>
                                            </td>
                                            <td class="product-name">
                                                <h3>Young Woman Wearing Dress</h3>
                                                <p>Far far away, behind the word mountains, far from the countries</p>
                                            </td>
                                            <td class="price">$4.90</td>
                                            <td class="quantity">
                                                <div class="input-group mb-3">
                                                    <input type="text" name="quantity" class="quantity form-control input-number" value="1" min="1" max="100" />
                                                </div>
                                            </td>
                                            <td class="total">$4.90</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                    <div class="cart-total mb-3">
                        <h3>Cart Totals</h3>
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
                    </div>
                    <p class="text-center"><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                </div>
            </div>
        </div>
    )
}

export default Orders;