import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { top100data } from "../topPosts";

const Cart = (props) => {
	const cartProducts = useSelector(state => state?.cartReducer?.products) || []
	const dispatch = useDispatch();
	// const productsIdArray = cartProducts.map(i=>i.)//! todo real time prices of procuct 
	let totalCartPrice = 0;
	const temp  = useSelector(state => state.cartReducer)
	cartProducts.map(i => {
		totalCartPrice += i.price;
	})
	const addTotalToCart = (item) => {
		dispatch({ type: 'CART_ADD_ITEM', item })
	}

	console.log("cartProducts",temp);
	return (
		<div>
			<div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url("./images/bg_6.jpeg")` }}>
				<div className="container p-4">
					<div className="row no-gutters slider-text align-items-center justify-content-center">
						<div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
							<h1 className="mb-0 bread">Shopping Bag</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-9 pt-4 mt-5 ftco-animate fadeInUp ftco-animated">
						<div className="cart-list">
							<table className="table">
								<thead className="thead-primary">
									<tr className="text-align-left">
										<th className='pl-4'> Shopping Bag (Items {cartProducts.length})<span className='float-right pr-5 bold font-bold'> $ {totalCartPrice}</span></th>
									</tr>
								</thead>
								<tbody className=''>
									{cartProducts.map((item, i) => {
										return (
											<tr className="cart-total mb-4 p-2">
												<td className="image-prod">
													<div className="img">
														<img className="img-fluid" src={item.media_url} alt="Colorlib Template" />
													</div>
												</td>
												<td className="w-75">
													<div className=' m-0 p-0'>
														<h5 className='strong p-0 m-0'>Young Woman Wearing Dress</h5>
														<p>Far far away, behind the word mountains, far from the countries</p>
														<div className='d-flex m-0 p-0'>
															<div className="select-wrap w-25">
																<div className="form-group d-flex">
																	<div className="select-wrap">
																		<div className="icon">
																			{/* <span className="ion-ios-arrow-down"></span> */}
																		</div>
																		<select name="" id="" className="p1" value={item.selectedSize} onChange={e => console.log(e.target.value)}>
																			<option value="Small">Small</option>
																			<option value="Medium">Medium</option>
																			<option value="Large">Large</option>
																			<option value="Extra Large">Extra Large</option>
																		</select>
																	</div>
																</div>
															</div>
															<div className="select-wrap w-25 ml-5">
																<div className="form-group d-flex">
																	<div className="select-wrap">
																		<div className="icon">
																			{/* <span className="ion-ios-arrow-down"></span> */}
																		</div>
																		<select name="" value={item.updateQuantity} id="" className="p-1 large">
																			<option value={'1'}>Quantity : 1</option>
																			<option value={'2'}>Quantity : 2 </option>
																			<option value={'3'}>Quantity : 3</option>
																			<option value={'4'}>Quantity : 4</option>
																			<option value={'5'}>Quantity : 5</option>
																		</select>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</td>
												<td className="w-25">
													<div className=' m-0 p-0'>
														<div className='d-flex flex-column'>
															<div className='strong color-black '>
																<span className='float-right pr-5'>$ {item.price}</span>
															</div>
															<div>
																<span className='price-dc'>{"1000/-"}</span>
																<span className='color-pink pl-2'> {" 60% off"}</span>
															</div>
														</div>
													</div>
												</td>
												<hr />
												<div className='d-flex text-bottom '>
													<p onClick={() => dispatch({ type: 'CART_REMOVE_PRODUCT', item })} className='cursor-pointer w-25 color-red text-center'>Remove</p>
													<p className='border-left text-center'>Add to wishlist</p>
												</div>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="col col-lg-3 w-100 pt-4 mt-5 ct-5 cart-wrap ftco-animate fadeInUp ftco-animated">
						<div className="cart-total mb-3">
							<h3>Bag Totals</h3>
							<p className="d-flex">
								<span>Subtotal</span>
								<span>$ {totalCartPrice}</span>
							</p>
							<p className="d-flex">
								<span>Delivery</span>
								<span>$0.00</span>
							</p>
							<p className="d-flex">
								<span>Discount</span>
								<span>$0.00</span>
							</p>
							<hr />
							<p className="d-flex total-price">
								<span>Total</span>
								<span>$ {totalCartPrice}</span>
							</p>
						</div>
						<p className="text-center" onClick={addTotalToCart}>
							<Link 
							to="/verifyPhoneNumber" 
							className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
					</div>
				</div>
				<p>	<div onClick={() => dispatch({ type: 'CART_EMPTY_PRODUCT' })} to="/verifyPhoneNumber" className="btn btn-primary py-3 px-4">Empty Cart</div></p>
				<div className="row justify-content-end">
				</div>
			</div>
		</div>
	)
}

export default Cart;