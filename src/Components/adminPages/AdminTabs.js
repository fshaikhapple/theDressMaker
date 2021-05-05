




import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";

const AdminTabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = [
        { tabName: "Inventory", tabRoute: 'inventory' },
        { tabName: "Orders", tabRoute: 'orders' },
        { tabName: "Notifications", tabRoute: 'notifications' },
        { tabName: "Sales", tabRoute: 'sales' }
    ];
    return (
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
                                            <Link to={item.tabRoute} className="text-center">
                                                <p className='nav-item nav-link h5'>{item.tabName}</p>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTabs;