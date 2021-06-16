import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { top100data } from "../../topPosts";
import AdminTabs from "./AdminTabs";
import { getFirestore } from 'redux-firestore'

const Inventory = (props) => {
    const tabs = ["Inventory", "Orders", "Notifications", "Sales"];
    const [selectedItemid, setSelectedItem] = useState();
    const [selectedTab, setSelectedTab] = useState(0);
    const firestore = getFirestore();
    const posts = useSelector(state => state?.firestore?.data?.tdmPosts?.A0OPoskeSYMah4lUbdbI?.allPosts) || []
    const [updatedPosts, setupdatedPosts] = useState([...posts]);
    const [message, setmessage] = useState('')


    // let result = [];
    // const map = new Map();
    // for (const item of top100data) {
    // 	if (!map.has(item.id)) {
    // 		map.set(item.id, true);    // set any value to Map
    // 		result.push({
    // 			id: item.id,
    // 			media_url: item.media_url
    // 		});
    // 	}
    // }
    // result = result.splice(0, 5);
    const handleChange = (e) => {
        if (e.target.id === 'storeVisibility' || e.target.id === 'isOutOfStock') {
            let updatedValue = { ...selectedItemid }
            console.log("");
            updatedValue[e.target.id] = e.target.checked
            setSelectedItem(updatedValue)
        } else {
            console.log("e", e);
            let updatedValue = { ...selectedItemid }
            updatedValue[e.target.id] = e.target.value
            setSelectedItem(updatedValue)
        }

    }
    const setItem = (item) => {
        if (!(selectedItemid && selectedItemid.id === item.id)) {
            setSelectedItem(item)
        }
    }
    const pushInFirebase = () => {
        firestore.collection("tdmPosts").doc("A0OPoskeSYMah4lUbdbI").set({
            allPosts: updatedPosts
        })
            .then(() => {
                console.log("Document successfully written!");
                setmessage('Successfully pushed check store')
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }
    const donePressed = () => {
        let temp = updatedPosts.map((item) => {
            if (item.id === selectedItemid.id) {
                return item = selectedItemid
            } else return item
        })
        console.log("selectedItemid=>", selectedItemid);
        console.log("mappedItems=>", temp);
        setupdatedPosts(temp)
    }
    return (
        <div className="container-fluid">
            <AdminTabs />
            <button onClick={pushInFirebase}>Push updated data on cloud</button>
            <p>{message}</p>
            <div className="container-fluid">
                <div className="row">
                    {Array.isArray(updatedPosts) && updatedPosts.map((item, i) => {
                        return <div key={i} className="col-sm-2 col-md-2 col-sm-2 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <div className='product' onClick={() => setItem(item)}>
                                <div className="text py-3 px-3">
                                    <a className='img-prod'>
                                        <div className={false ? 'overlay-edit' : ''}>
                                        </div>
                                        <img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
                                    </a>
                                    {selectedItemid && selectedItemid.id === item.id ? <input type='text' className='w-100 mt-2 mb-2' placeholder={item.caption} id='caption' onChange={handleChange} value={selectedItemid.caption} /> :
                                        <a className="mt-2">
                                            <h3>{item.caption}</h3>
                                        </a>}
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                {selectedItemid && selectedItemid.id === item.id ? <input type="text" className="w-100" placeholder="price" onChange={handleChange} id='price' value={selectedItemid.price} /> : <span>{item.price + '/-'}</span>}
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    {selectedItemid && selectedItemid.id === item.id && <><p className="bottom-area d-flex">
                                        <label>
                                            <input type="checkbox" className="mr-2" onChange={handleChange} id={'storeVisibility'} value={selectedItemid?.storeVisibility} checked={selectedItemid.storeVisibility} /> Make visible on listing</label>
                                    </p>
                                        <p className="bottom-area d-flex">
                                            <label>
                                                <input type="checkbox" className="mr-2" onChange={handleChange} id={'isOutOfStock'} value={selectedItemid?.isOutOfStock} checked={selectedItemid.isOutOfStock} /> Make Out of stock</label>
                                        </p>
                                        <p className="text-center">
                                            <button className="btn btn-primary py-1 px-4" onClick={donePressed}>{"Done"}</button>
                                        </p>
                                    </>}
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
    )
}

export default Inventory;