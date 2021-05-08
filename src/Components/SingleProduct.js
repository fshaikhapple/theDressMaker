import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation
} from "react-router-dom";
import { OurProducts } from "./OurProducts";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const SingleProduct = (props) => {
    const [updateQuantity, setUpdateQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Medium');
    const dispatch = useDispatch();
    const id = props?.match?.params?.id
    const posts = useSelector(state => state.firestoreReducer?.data?.posts?.ljFCVbsegYI1kBYCHDZ5?.mockDataPosts)
    const selectedValue = posts.filter((item) => item.id === id)

    const updateSelectedValue = (counter) => {
        if ((updateQuantity === 1 && counter === -1) || (updateQuantity === 5 && counter === +1)) {
            setUpdateQuantity(updateQuantity)
        }
        else {
            setUpdateQuantity(updateQuantity + counter)
        }
    }
    const makeProduct = () => {
        const product = {
            selectedSize: selectedSize,
            id: id,
            updateQuantity: updateQuantity,
            media_url: selectedValue[0].media_url,
            permalink: selectedValue[0].permalink,
            price: selectedValue[0]?.price || 120+(Math.ceil(Math.random() * 100)),
        }
        dispatch({ type: 'CART_ADD_PRODUCT', product })
        // props.history.push('/cart');
    }
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
                            {selectedValue[0]?.caption ? <p>{selectedValue[0].caption}</p> : <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>}
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <div class="form-group d-flex">
                                        <div class="select-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <select name="" id="" class="form-control" value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
                                                <option value="Small">Small</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                                <option value="Extra Large">Extra Large</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="input-group col-md-6 d-flex mb-3">
                                    <span class="input-group-btn mr-2">
                                        <button onClick={() => updateSelectedValue(-1)} type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i class="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value={updateQuantity} min="1" max="100" />
                                    <span class="input-group-btn ml-2">
                                        <button onClick={() => updateSelectedValue(+1)} type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i class="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <p><div onClick={makeProduct} class="btn btn-primary py-3 px-5">Add to Cart</div></p>
                        </div>
                    </div>
                </div>
            </section>
            <OurProducts />
        </div>
    )
}


