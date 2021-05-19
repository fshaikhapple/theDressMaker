import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { top100data } from "../../topPosts";
import AdminTabs from "./AdminTabs";

const Orders = (props) => {
    const tabs = ["Inventory", "Orders", "Notifications", "Sales"];
    const [selectedItemid, setSelectedItem] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const tdmOrders = useSelector(state => state?.firestore?.data?.tdmOrders) || []

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
    const orders = []
    Object.keys(tdmOrders).map(i => orders.push({ order: tdmOrders[i], ref: i }));
    console.log("orders", orders);
    result = result.splice(0, 5);
    return (
        <div className="container-fluid">
            <div className="row ">
                <AdminTabs />
            </div>
            <div className="row m-0">
                <div className="col-lg-12 ftco-animate fadeInUp ftco-animated">
                    <div className='row'>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label forhtml="userName">User Name</label> */}
                                <input type="text" id='userName' className="form-control" placeholder="Search by any order parameter" onChange={(e) => { }} />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label for="country">State / Country</label> */}
                                <div className="select-wrap">
                                    {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
                                    <select name="" id="country" className="form-control">
                                        <option value="UAE">Date range</option>
                                        <option value="">Italy</option>
                                        <option value="">Philippines</option>
                                        <option value="">South Korea</option>
                                        <option value="">Hongkong</option>
                                        <option value="">Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label for="country">State / Country</label> */}
                                <div className="select-wrap">
                                    {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
                                    <select name="" id="country" className="form-control">
                                        <option value="UAE">Status</option>
                                        <option value="">Italy</option>
                                        <option value="">Philippines</option>
                                        <option value="">South Korea</option>
                                        <option value="">Hongkong</option>
                                        <option value="">Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label for="country">State / Country</label> */}
                                <div className="select-wrap">
                                    {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
                                    <select name="" id="country" className="form-control">
                                        <option value="UAE">Department</option>
                                        <option value="">Italy</option>
                                        <option value="">Philippines</option>
                                        <option value="">South Korea</option>
                                        <option value="">Hongkong</option>
                                        <option value="">Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label for="country">State / Country</label> */}
                                <div className="select-wrap">
                                    {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
                                    <select name="" id="country" className="form-control">
                                        <option value="UAE">Saved Filters</option>
                                        <option value="">Italy</option>
                                        <option value="">Philippines</option>
                                        <option value="">South Korea</option>
                                        <option value="">Hongkong</option>
                                        <option value="">Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <label for="country">State / Country</label> */}
                                <div className="select-wrap">
                                    {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
                                    <select name="" id="country" className="form-control">
                                        <option value="UAE">More Filters</option>
                                        <option value="">Italy</option>
                                        <option value="">Philippines</option>
                                        <option value="">South Korea</option>
                                        <option value="">Hongkong</option>
                                        <option value="">Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 p-0 ftco-animate fadeInUp ftco-animated ">
                    <div className='row'>
                        <div className="col-lg-12 d-flex ">
                            <h5 className='pl-3'>All (39)</h5>
                            <h5 className='pl-3'>Pending (9)</h5>

                            <h5 className='pl-3'>In Progress (29)</h5>

                            <h5 className='pl-3'>Return (2)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 p-0 ftco-animate fadeInUp ftco-animated">
                    <div className="cart-list">
                        <table className="table">
                            <thead className="thead-primary">
                                <tr className="text-center">
                                    <th>
                                        <input type="checkbox" value="" className="" />
                                        <a href="#">Ref</a>
                                    </th>

                                    <th><p>Created</p> </th>
                                    <th>Customer</th>
                                    <th>Price</th>
                                    <th>Start time</th>
                                    <th>End time</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Change Status</th>
                                    {/* <th>&nbsp;</th>
                                    <th>Total</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((item, i) => {
                                    console.log("item", item);
                                    return (
                                        <tr className="text-center">
                                            <td className="d-flex">
                                                <div className="checkbox">
                                                    <input type="checkbox" value="" className="mr-2" />
                                                </div>
                                                <a href="#">Ref ID {item.ref.slice(0, 5)}</a>
                                            </td>
                                            <td className="">
                                                <p>{item?.order?.orderDetails?.Created}</p>
                                            </td>
                                            <td className="">
                                                <p>{item?.order?.orderDetails?.Customer || ''}</p>
                                            </td>
                                            <td className="">
                                                <p> $ {item?.order?.orderDetails?.totalPayable}</p>
                                            </td>
                                            <td className="">
                                            <p>{item?.order?.orderDetails?.Created}</p>
                                            </td>
                                            <td className="">
                                            <p>{item?.order?.orderDetails?.Created}</p>
                                            </td>
                                            <td className="">
                                                <p className='color-orange'> Pending</p>
                                            </td>
                                            <td className="">
                                                <p className='color-orange'> low</p>
                                            </td>
                                            <td className="">
                                                <p className=''> move status to </p>
                                            </td>
                                            {/* <td className="image-prod">
                                                <div className="img">
                                                    <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                                </div>
                                            </td> */}
                                            {/* <td className="product-name">
                                                <h3>Young Woman Wearing Dress</h3>
                                                <p>Far far away, behind the word mountains, far from the countries</p>
                                            </td>
                                            <td className="price">$4.90</td>
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100" />
                                                </div>
                                            </td>
                                            <td className="total">$4.90</td> */}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Orders;