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
import AdminTabs from "./AdminTabs";
import Orders from "./Orders";
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
const tabs = ["Inventory", "Orders", "Notifications", "Sales"];

export const AdminPanel = (props) => {
    const [selectedItemid, setSelectedItem] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div>
            <AdminTabs />
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