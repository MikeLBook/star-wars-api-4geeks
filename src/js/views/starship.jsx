import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Starship = () => {
	const [data, setData] = useState(null)
	let { id } = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/starships/${id}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(data => setData(data.result))
		.catch(err => console.log(err))
	}, [])

	return (
		<div className="mt-5 container">
			{data ?
				<div className='row'>
					<div className="col-md d-center">
						<h1>{data.properties.model}</h1>
						<img 
							src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
							className="card-img-top" alt="..." 
							style={{maxWidth: '300px'}}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src="https://www.starwars.com/wp-content/uploads/2018/02/star-wars-logo-new-tall.jpg";
							}}
            			/>
					</div>
					<div className="col-md">
						<fieldset>
   							<legend className="float-none w-auto"><span>Details</span></legend>
								<div><strong>Starship Class: </strong>{data.properties.starship_class}</div>
								<div><strong>Manufacturer: </strong>{data.properties.manufacturer}</div>
								<div><strong>Cost In Credits: </strong>{data.properties.cost_in_credits}</div>
								<div><strong>Length: </strong>{data.properties.length}</div>
								<div><strong>Crew: </strong>{data.properties.crew}</div>
								<div><strong>Passengers: </strong>{data.properties.passengers}</div>
								<div><strong>Max Atmosphering Speed: </strong>{data.properties.max_atmosphering_speed}</div>
								<div><strong>Hyperdrive Rating: </strong>{data.properties.hyperdrive_rating}</div>
								<div><strong>MGLT: </strong>{data.properties.MGLT}</div>
								<div><strong>Cargo Capacity: </strong>{data.properties.cargo_capacity}</div>
								<div><strong>Consumables: </strong>{data.properties.consumables}</div>
								<div><strong>Pilots: </strong>{data.properties.pilots.join(', ')}</div>	
								<div><strong>Description: </strong>{data.description}</div>
						</fieldset>
					</div>
				</div>
				:<h1>Loading Starship...</h1>
			}
		</div>
	)
};

export default Starship
