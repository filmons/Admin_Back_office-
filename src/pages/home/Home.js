import React, { Component } from "react";
import "./homes.css";

class Home extends React.Component {
	render() {
		return (
			<div className="continer_home">
				<div className="item_home">
					<h1 className="Admin_home_header">Adimin</h1>
					
					<h2 className="Admin_home_header_two">Bienvenu dans le space Back-office Paroisse Emmanuel</h2>
					<br />
					<br />
					<h3>
						ici vous trouvez tous les partie CRUD de site suivez les
						Explication  avant de commencer  quoi qu'il soit
					</h3>
					<br />
					<br />

					<ul>
						<li>
							1. pour voir tout les cours qui sont dans la base de donnée
							cliquer sur Le nav "CRUD"et choisiesz le Get
						</li>
						<br />
						<li>
							2. Pour effacer ou editer un cours qui est dans la base de donnée
							cliquer sur Le Nav ou il y a marquer (CRUD) et choisissez le (Get)
							vous trouverez tout les cour et choisissez un et cliquez sur le
							button Delete
						</li>
						<br />
						<li>
							3. pour voir tout les Calander qui sont dans la base de donnée
							cliquer sur Le nav "CRUD"et choisiesz Calander
						</li>
						<br />
						<li>
							4. pour effacer ou editer tout les Calander qui sont dans la base
							de donnée cliquer sur Le nav "CRUD"et choisiesz{" "}
						</li>
					</ul>
					<br />
				</div>
			</div>
		);
	}
}

export default Home;
