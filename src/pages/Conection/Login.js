import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
toast.configure();
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errorEmail: "",
			errorPassword: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleClick = () => {
		const options = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post("http://localhost:9000/V1/sigin", options, {
				headers: { "content-type": "application/json" },
			})
			.then((data) => {
				console.log(data);
				if (data.status === 200) {
					localStorage.setItem("token", data.data.token);
					localStorage.setItem("userId" ,data.data.user.id)
				} else {
					this.setState({
						errorLogin: true,
					});
				}
				toast.success("welcome to Admin page", {position: toast.POSITION.TOP_CENTER})
				this.props.history.push("/Get");
			})
			.catch((error) => toast.error(error.response.data.message,{position: toast.POSITION.TOP_CENTER}));
	};

	render() {
		return (
			<section>
				<div className="container">
					<div className="form_log">
						<h1 className>Login</h1>
					</div>
					<div className="lebls">
						<label htmlFor="email">
							<b>Email</b>
						</label>
						<input
							className="prenom"
							type="text"
							placeholder="Enter Email"
							name="email"
							required
							onChange={this.handleChange}
						/>
						<span></span>
						{this.state.errorEmail}
						{this.state.errorEmail ? (
							<span
								style={{
									color: "red",
									backgroundColor: "#f005",
									padding: "5px",
									border: "1px solid red",
								}}
							>
								Error
							</span>
						) : (
							""
						)}

						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							required
							onChange={this.handleChange}
						/>

						<button
							onClick={this.handleClick}
							type="submit"
							className="Loginbtn"
						>
							Login
						</button>
					</div>
				</div>
			</section>
		);
	}
}
export default Login;
