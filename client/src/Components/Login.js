import React, { useState } from "react";
import axios from "axios";
// import './Loginstyle.css';
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Regstyle.css";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import PropTypes from "prop-types";
function Login({ login, isAuthenticated }) {
	const [email, setemail] = useState("");
	const [password, setpass] = useState("");
	const [msg, setmsg] = useState("");
	const history = useHistory();

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};
	// function Loginfun (e)
	// {
	//     e.preventDefault();
	//     // login(email,password);
	//     // let data={
	//     //     email:email,
	//     //     password:password,
	//     // }
	//     // axios
	// 	// 		.post("http://localhost:5001/login", data)
	// 	// 		.then((resp) => {
	// 	// 		// 	if (resp.data == "1")
	//     //         //       {  console.log("one");
	//     //         //         // setmsg("Successful logined")
	//     //         //         history.push('/posts')}
	// 	// 		// 	else if (resp.data == "0")
	//     //         //   {  console.log("Zero");
	//     //         //     setmsg("Invalid Credentials")}

	//     //         //     else
	//     //         //    { console.log("Elsee");
	//     //         //     setmsg("No user Found, plz register♥")}
	//     //                 if(resp.data) {
	//     //                 history.push('/dashboard')
	//     //                 // history.push('/posts')
	//     //             }

	// 	// 		})
	// 	// 		.catch((err) => setmsg("Invalid Credentials"));
	// }
	// Redirect if logged in
	if (isAuthenticated) {
		// return <Redirect to="/posts" />;
         history.push('/dashboard')
	}
	return (
		<div className="container">
			<section className="contact-from pt-4">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-7 mx-auto">
							<div className="form-wrapper">
								<div className="row">
									<div className="col-md-12 text-center">
										<h4>Login </h4>
									</div>
								</div>
								{/* <form _lpchecked="1" onSubmit={(e)=>Loginfun(e)}> */}
								<form _lpchecked="1" onSubmit={(e) => onSubmit(e)}>
									{/* <form _lpchecked="1" onSubmit={ login(email,password)}> */}
									<h2 className="p-x text-center">{msg}</h2>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													placeholder="Email"
													value={email}
													onChange={(e) => {
														setemail(e.target.value);
													}}
												/>
											</div>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col mt-4">
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													vlaue={password}
													onChange={(e) => {
														setpass(e.target.value);
													}}
												/>
											</div>
										</div>
									</div>
									<div className="mt-3 text-center">
										<button className="btn btn-primary">Login</button>
									</div>
								</form>
								<hr></hr>
								<p className="text-center">
									Not a member? <Link to="/Register">sign up.</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProp = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProp, { login })(Login);
