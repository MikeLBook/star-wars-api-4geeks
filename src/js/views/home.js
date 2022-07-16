import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5 container">
			<h1>Characters</h1>
			{store.characterData ?
				<div className="d-flex flex-shrink-0 overflow-x-scroll">
					{store.characterData.map(character => <Card category={"characters"} uid={character.uid} name={character.name} fetchURL={character.url} />)}
				</div> :
				<h3>Loading Character Data...</h3>			
			}

			<h1>Planets</h1>
			{store.planetData ?
				<div className="d-flex flex-shrink-0 overflow-x-scroll">
					{store.planetData.map(planet => <Card category={"planets"} uid={planet.uid} name={planet.name} fetchURL={planet.url} />)}
				</div> :
				<h3>Loading Planet Data...</h3>			
			}

			<h1>Vehicles</h1>
			{store.vehicleData ?
				<div className="d-flex flex-shrink-0 overflow-x-scroll">
					{store.vehicleData.map(vehicle => <Card category={"vehicles"} uid={vehicle.uid} name={vehicle.name} fetchURL={vehicle.url} />)}
				</div> :
				<h3>Loading Vehicle Data...</h3>			
			}
		</div>
	)
};

export default Home
