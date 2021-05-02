import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import '../../App.css'
import { top100data } from "../../topPosts";
// const images = top100data.map(i => i.media_url)
// function uniq(a) {
//     return Array.from(new Set(a));
// }

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
// console.log(result)

const onEditMode = (item) => {

    console.log("clicked", item);
}
const tabs = ["Products", "Orders", "Quantity", "Total"]
export const AdminPanel = (props) => {
    const [selectedItemid, setSelectedItem] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    console.log("selectedTab", selectedTab);
    return (
        <div>
            <div className="hero-wrap hero-bread-small" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-1 bread">ADMIN PANEL</h1>
                            <div className="container-fluid">
                                <div className="row">
                                    {tabs.map((item, i) => {
                                        return (
                                            <div className="col-lg-3" onClick={() => setSelectedTab(i)}>
                                                <div className="text-center">
                                                    <p className='nav-item nav-link h5'>{item}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className={selectedTab === 0 ? '' : 'd-none'}>
                    <div className="row">
                        {result.map((item, i) => {
                            return <div className="col-sm-2 col-md-2 col-sm-2 col-lg-2 ftco-animate fadeInUp ftco-animated">
                                <div className='product' onClick={() => setSelectedItem(item.id)}>
                                    <div className="text py-3 px-3">
                                        <a className='img-prod'>
                                            <div className={false ? 'overlay-edit' : ''}>
                                            </div>
                                            <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                        </a>
                                        {selectedItemid === item.id ? <input type='text' className='w-100 mt-2 mb-2' placeholder="Password" value='Young Woman Wearing Dress' /> :
                                            <a className="mt-2">
                                                <h3>Young Woman Wearing Dress  </h3>
                                            </a>}
                                        <div className="d-flex">
                                            <div className="pricing">
                                                <p className="price">
                                                    {selectedItemid === item.id ? <input type="text" className="w-100" placeholder="Password" value='$120.00' /> : <span>$120.00</span>}
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className="bottom-area d-flex">
                                            <label><input type="checkbox" value="" className="mr-2" /> Make visible on listing</label>
                                        </p>
                                        <p className="bottom-area d-flex">
                                            <label><input type="checkbox" value="" className="mr-2" /> Make Out of stock</label>
                                        </p>
                                        {selectedItemid === item.id && <p className="text-center">
                                            <a href="/adminPanel" className="btn btn-primary py-1 px-4">{"Done"}</a>
                                        </p>}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={selectedTab === 1 ? '' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <div className="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}