import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { mockDataPosts } from "../../mockDataPosts";
import { compose } from "redux";
import { useHistory } from 'react-router-dom';

const Login = (props) => {
	const isLoggedIn = useSelector(state => state.authReducer.adminLoggedIn)
	const posts = useSelector(state => state.firestoreReducer?.data?.posts?.ljFCVbsegYI1kBYCHDZ5?.mockDataPosts)
	const data = useSelector(state => state.firestoreReducer?.data?.testPosts)
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	// const firestore = getFirestore()
	const history = useHistory();

	const handleSubmitForm = () => {
		dispatch({ type: 'LOGIN', payload: { userName, password } })
	}
	console.log("data",data);
	useEffect(() => {
		// console.log("isLoggedIn--->",isLoggedIn );
		if (isLoggedIn) {
			history.push('/inventory')
		}
	}, [isLoggedIn]);

	return (
		<section className="ftco-section ftco-product">
			<div className="container">
				<div className="row justify-content-center mb-3 pb-3">
					<div className="col-md-12 heading-section text-center">
						<h1 className="big">Login</h1>
						<h2 className="mb-4">login</h2>
					</div>
				</div>
				<div class="col-xl-6 col-sm-12 ftco-animate fadeInUp ftco-animated ">
					<form onSubmit={() => handleSubmitForm()} class="billing-form  p-3 p-md-5">
						<h3 class="mb-4 billing-heading">Admin Login</h3>
						<div class="row align-items-end">
							<div class="col-md-12">
								<div class="form-group">
									<label forhtml="userName">User Name</label>
									<input type="text" id='userName' class="form-control" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<label forhtml="password">Password</label>
									<input type="password" id='password' class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
								</div>
							</div>
							<div class="col-md-12 d-flex justify-content-center" onClick={() => handleSubmitForm()} >
								<p><Link class="btn btn-primary py-3 px-4">Login as admin</Link></p>
							</div>

						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

// const mapStateToprops=state=>{
// 	return {
// 		posts:state
// 	}
// }
// export default compose(
// 	connect(mapStateToprops),
// 	firestoreConnect([{
// 		collection:'posts'
// 	}])
// )(Login)
export default Login
// export const mapDispatchToProps = dispatch => {
// 	return {
// 		doLogin: () => {
// 			dispatch(doLogin());
// 	  },
// 	};
//   };
// const withConnect = connect(
// 	null,
// 	mapDispatchToProps
//   );

// export default compose(withConnect)(Login);