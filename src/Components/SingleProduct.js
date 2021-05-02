import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation
} from "react-router-dom";
import { top100data } from "../topPosts";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const SingleProduct = (props) => {
    // let query = useQuery();
    const id = props?.match?.params?.id
    const posts1 = useSelector(state => state)
    const posts = useSelector(state => state.firestoreReducer?.data?.TDMposts?.aqLE1ykqKcJ4orw4voeW?.mockDataPosts)

    console.log("id", posts1);
    // const media_url = query.get("url")
    // console.log("media_url", media_url);
    const selectedValue = posts.filter((item) => item.id === id)

    console.log("selectedValue", selectedValue);
    return (
        <div>
            <section class="ftco-section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                            <a className="img-prod">
                                <img className="img-fluid" src={selectedValue[0]?.media_url} alt="Colorlib Template" />
                            </a>
                        </div>
                        <div class="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                            <h3>Young Woman Wearing Dress</h3>
                            <p class="price"><span>$120.00</span></p>
                            {selectedValue[0]?.caption? <p>{selectedValue[0].caption}</p>:<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>}
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <div class="form-group d-flex">
                                        <div class="select-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <select name="" id="" class="form-control">
                                                <option value="">Small</option>
                                                <option value="">Medium</option>
                                                <option value="">Large</option>
                                                <option value="">Extra Large</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="input-group col-md-6 d-flex mb-3">
                                    <span class="input-group-btn mr-2">
                                        <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i class="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                    <span class="input-group-btn ml-2">
                                        <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i class="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <p><a href="cart.html" class="btn btn-primary py-3 px-5">Add to Cart</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


