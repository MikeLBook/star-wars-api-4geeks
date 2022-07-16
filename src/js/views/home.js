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
					{store.characterData.map(character => <Card category={"characters"} uid={character.uid} name={character.name} />)}
				</div> :
				<h3>Loading Character Data...</h3>			
			}

			<h1>Planets</h1>
			{store.planetData ?
				<div className="d-flex flex-shrink-0 overflow-x-scroll">
					{store.planetData.map(planet => <Card category={"planets"} uid={planet.uid} name={planet.name} />)}
				</div> :
				<h3>Loading Planet Data...</h3>			
			}

			<h1>Starships</h1>
			{store.starshipData ? 
				<div className="d-flex flex-shrink-0 overflow-x-scroll">
					{store.starshipData.map(starship => <Card category={"starships"} uid={starship.uid} name={starship.name} />)}
				</div> :
				<h3>Loading Starship Data...</h3>			
			}
		</div>
	)
};

export default Home
