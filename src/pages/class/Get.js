import React, { setState, Component, } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Get.css";

toast.configure();

class Get extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titre: "",
			description_one: "",
			description_two: "",
			description_three: "",

			data: [],
		};
	}

handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	editData = async (id) => {
		//console.log(this.editData);
		const response = await axios.put(
			`http://localhost:9000/V1/cours/edit/${id}`,
			{
				titre: this.state.titre,
				description_one: this.state.description_one,
				description_two: this.state.description_two,
				description_three: this.state.description_three,
			}
			);
			this.setState({
				data: response.data.cours,
			});
			console.log(response.data);
			toast.success(response.data.message + "Reflech the page", {position: toast.POSITION.TOP_CENTER, autoClose:8000
				
			})
		
				this.getData();
		
			//console.log(cours);
			//console.log(this.data.titre);
			//window.location.reload();
		};
		
		
		
		getData = async () => {
			const response = await axios.get("http://localhost:9000/V1/cours");
			console.log(response);
			this.setState({
				data: response.data.cours,
			});
			console.log(response.data);
			
		};
		
		componentDidMount() {
			this.getData();
		}
		deleteData = async (id) => {
			const response = await axios.delete(
				`http://localhost:9000/V1/cours/delete/${id}`
				);
				
				this.getData();
				console.log(response.data);
				toast.success(response.data.message, {position: toast.POSITION.TOP_CENTER})
			};
			componentDidMount() {
				this.getData();
			}
			
			deleteToken() {
				localStorage.clear();
				console.log("localstorage", this.localstorage);
				
		this.props.history.push("/");
	}

	render() {
		const { titre, description_one, description_two, description_three } =
			this.state;
		return (
			<div className="container_calss">
				<div className="logOutAdmin">
				<a onClick={this.deleteToken} href="/">
					logOutT
				</a>
				</div>
				<div className="class_card">
					<h1>Bienvenu dans le space Admin Class</h1>
				
					{this.state.data && this.state.data.map((cours, index) => {
						//console.log(cours.id);
						//
						// 38 console.log(response);
						return (
							<div className="item" key={index}>
								<h2>this is The ID</h2>

								<li>{cours.id}</li>
								<h2>this is the tiatle</h2>
								<li>{cours.titre}</li>
								<br />
								<h2>this is the description_one</h2>
								<li>{cours.description_one}</li>
								<br />
								<h2>this is the description_two</h2>
								<li>{cours.description_two}</li>
								<br />
								<h2>this is the description_three</h2>

								<li>{cours.description_three}</li>
								<br />
								<form>
									<input
										type="text"
										placeholder="titre"
										name="titre"
										required
										onChange={this.handleChange}
									/>
									<input
										type="text"
										placeholder="description one"
										name="description_one"
										required
										onChange={this.handleChange}
									/>
									<input
										type="text"
										placeholder="description two"
										name="description_two"
										required
										onChange={this.handleChange}
									/>
									<input
										type="text"
										placeholder="description three"
										name="description_three"
										required
										onChange={this.handleChange}
									/>
									<Link  
										onClick={() => this.editData(cours.id)}
										className="edit-link"
									>
										Edit
									</Link>
								</form>
								<button
									onClick={() => this.deleteData(cours.id)}
									className="del_but"
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Get;
