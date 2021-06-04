import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { top100data } from "../../topPosts";
import AdminTabs from "./AdminTabs";
import { reduxFirestore, getFirestore } from 'redux-firestore'

const Orders = (props) => {
	const tabs = ["Inventory", "Orders", "Notifications", "Sales"];
	const [selectedItemid, setSelectedItem] = useState(0);
	const [selectedTab, setSelectedTab] = useState(0);
	const tdmOrders = useSelector(state => state?.firestore?.data?.tdmOrders) || []
	const [displayModal, setdisplayModal] = useState(false)
	const [selectedRec, setSelectedRec] = useState('')
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
	const toggleModal = (data) => {
		setdisplayModal(true);
		setSelectedRec(data)

	}

	const orders = []
	Object.keys(tdmOrders).map(i => orders.push({ order: tdmOrders[i], ref: i }));
	console.log("orders", orders);
	result = result.splice(0, 5);
	const updateRecord = (rec) => {

		const updatedOrder = {
			...rec.order.orderDetails,
			orderStatus: rec.order.orderDetails === 'PENDING' ? 'IN_PROGRESS' : 'OUT_FOR_DELIVERY',
			orderTakenAt: new Date().getTime()
		}
		const firestore = getFirestore();
		firestore.collection("tdmOrders").doc(rec.ref).update({
			orderDetails: updatedOrder
		}).then(() => {
			console.log("done")
		})
	}

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
									<th>Details</th>
									<th>Update rec</th>
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
												<p className='color-orange'>{item?.order?.orderDetails?.orderStatus}</p>
											</td>
											<td className="">
												<p className='color-orange'> low</p>
											</td>
											<td className="">
												<button type="button" onClick={() => toggleModal(item)} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">{"details"}</button>
											</td>
											<td className="">
												<button className='btn btn-primary' onClick={() => updateRecord(item)}> Update Record </button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className={displayModal ? "modal fade show" : "modal fade"} style={{ display: displayModal ? 'block' : 'none' }} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>{JSON.stringify(selectedRec)}</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => { setdisplayModal(false) }}>Close</button>
							<button type="button" onClick={() => { setdisplayModal(false) }} class="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Orders;