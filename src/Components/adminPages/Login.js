import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { mockDataPosts } from "../../mockDataPosts";
import { compose } from "redux";
import { useHistory } from 'react-router-dom';
import firebase from "firebase/app";

const Login = (props) => {
	const posts = useSelector(state => state.firestore)
	const isLoggedIn =  useSelector(state => state.authReducer.adminLoggedIn)
	const data = []
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmitForm = () => {
		// const firestore = getFirestore();
		// console.log("firestore", firestore);
		// firestore.collection('notifications').add({
		// 	authorFirstName: 'Net',
		// 	authorLastName: 'Ninja',
		// 	authorId: 12345,
		// }).then(() => {
		// 	console.log("done");
		// })
		dispatch({ type: 'LOGIN', payload: { userName, password } })
	}


	useEffect(() => {
		console.log("isLoggedIn",isLoggedIn);
		if (isLoggedIn) {
			history.push('/inventory')
		}
	}, [isLoggedIn]);
	console.log("posts=====", posts);
	return (
		<section className="ftco-section ftco-product">
			<div className="container">
				<div className="row justify-content-center mb-3 pb-3">
					<div className="col-md-12 heading-section text-center">
						<h1 className="big">Login</h1>
						<h2 className="mb-4">login</h2>
					</div>
				</div>
				<div className="col-xl-6 col-sm-12 ftco-animate fadeInUp ftco-animated ">
					<form onSubmit={() => handleSubmitForm()} className="billing-form  p-3 p-md-5">
						<h3 className="mb-4 billing-heading">Admin Login</h3>
						<div className="row align-items-end">
							<div className="col-md-12">
								<div className="form-group">
									<label forhtml="userName">User Name</label>
									<input type="text" id='userName' className="form-control" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label forhtml="password">Password</label>
									<input type="password" id='password' className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
								</div>
							</div>
							<div className="col-md-12 d-flex justify-content-center" onClick={() => handleSubmitForm()} >
								<p><Link className="btn btn-primary py-3 px-4">Login as admin</Link></p>
							</div>

						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Login
