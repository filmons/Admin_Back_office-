import React, { setState, Component } from "react";
import axios from "axios";
import "./Get.css";
class Get extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titre: "azerty",
			description_one: "",
			description_two: "",
			description_three: "",

			data: [],
		};
	}
	//  handleClick = () => {
	//       const options = {
	//         titre: this.state.titre,
	//         description_one: this.state.description_one,
	//         description_two: this.state.description_two,
	//         description_three: this.state.description_three,
	//       };
	//      // console.log(options);
	//     }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	editData = async (id) => {
		const response = await axios.put(
			`http://localhost:8000/V1/cours/edit/${id}`,
			{
				titre: this.state.titre,
				description_one: this.state.description_one,
				description_two: this.state.description_two,
				description_three: this.state.description_three,
			}
		);
		console.log(this.titre);
		this.setState({
			data: response.data.cours,
		});
		console.log(this.state.data);
		console.log(response);
	};

	getData = async () => {
		const response = await axios.get("http://localhost:8000/V1/cours");
		this.setState({
			data: response.data.cours,
		});
		console.log(this.state.data);
	};
	componentDidMount() {
		this.getData();

	}
  deleteData = async (id) => {
    const response = await axios.delete(
      `http://localhost:8000/V1/cours/delete/${id}`
    );
    console.log(response);
    this.getData();
  };
  componentDidMount() {
		this.getData();
	}
	render() {
		const { titre, description_one, description_two, description_three } =
			this.state;
		return (
			<div className="container_calss">
				<div className="class_card">
					<h1>Bienvenu dans le space Admin Class</h1>
					{this.state.data.map((cours, index) => {
						console.log(cours.id);
						return (
							<div className="item" key={index}>
								<li>{cours.id}</li>
								<li>{cours.titre}</li>
								<br />
								<li>{cours.description_one}</li>
								<br />

								<li>{cours.description_two}</li>
								<br />

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
									<button
										onClick={() => this.editData(cours.id)}
										className="del_but"
									>
										{" "}
										Edit
									</button>
								</form>
								<button
									onClick={() => this.deleteData(cours.id)}
									className="del_but"
								>
									{" "}
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
