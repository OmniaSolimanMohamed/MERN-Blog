import axios from "axios";
import React, { useState, FC, ReactElement, useEffect } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import { getCurrentUserProfile } from "../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const AddPost = ({
	getCurrentUserProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentUserProfile();
	}, [getCurrentUserProfile]);
	const [title, settitle] = useState("");
	const [auth, setauth] = useState("");
	const [desc, setdesc] = useState("");
	const history = useHistory();

	function addpostfun(e) {
		e.preventDefault();

		const blog = {
			title: title,
			text: desc,
			auth: auth,
		};
		axios
			.post("http://localhost:5001/add-post", blog)
			// axios.post('http://localhost:5001/api/posts',blog)
			.then((res) => history.push("/posts"))
			.catch((err) => console.log("error from add post", err));
	}
	return (
		<div>
			{/* <Navbar/> */}
			<div className="container">
				<section className="contact-from pt-4">
					<div className="container">
						<div className="row mt-5">
							<div className="col-md-7 mx-auto">
								<div className="form-wrapper">
									<div className="row">
										<div className="col-md-12 text-center">
											<h4>Add Post </h4>
										</div>
									</div>
									<form _lpchecked="1" onSubmit={addpostfun}>
										{/* <h2 className='p-x text-center'>{msg}</h2> */}
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													<input
														type="text"
														className="form-control"
														placeholder="title"
														value={title}
														onChange={(e) => {
															settitle(e.target.value);
														}}
													/>
												</div>
											</div>
										
										</div>
                                        <div className="row align-items-center">
												<div className="col mt-4">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="name"
															value={user.name}
															name="name"
                                                            disabled
                                                            
														/>
													</div>
												</div>
											</div>
										<div className="row align-items-center">
											<div className="col mt-4">
												<div className="form-group">
													{/* <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="description"
                                                    vlaue={desc}
                                                    onChange={(e)=>{setdesc(e.target.value)}}
                                                /> */}
													<textarea
														className="form-control rounded-0"
														id="exampleFormControlTextarea2"
														rows="3"
														placeholder="description"
														vlaue={desc}
														onChange={(e) => {
															setdesc(e.target.value);
														}}
													></textarea>
												</div>
											</div>
										</div>
										<div className="mt-3 text-center">
											<button className="btn btn-primary">POST</button>
										</div>
									</form>
									<hr></hr>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
AddPost.propTypes = {
	getCurrentUserProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(AddPost);

// export default AddPost;
