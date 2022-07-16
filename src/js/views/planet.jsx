import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Planet = () => {
	const [data, setData] = useState(null)
	let { id } = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${id}`, {
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
						<h1>{data.properties.name}</h1>
						<img 
							src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
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
							   	<div><strong>Diameter: </strong>{data.properties.diameter}</div>
								<div><strong>Rotation Period: </strong>{data.properties.rotation_period}</div>
								<div><strong>Orbital Period: </strong>{data.properties.orbital_period}</div>
								<div><strong>Gravity: </strong>{data.properties.gravity}</div>
								<div><strong>Population: </strong>{data.properties.population}</div>
								<div><strong>Climate: </strong>{data.properties.terrain}</div>
								<div><strong>Surface Water: </strong>{data.properties.surface_water}</div>
								<div><strong>Description: </strong>{data.description}</div>
						</fieldset>
					</div>
				</div>
				:<h1>Loading Planet...</h1>
			}
		</div>
	)
};

export default Planet
