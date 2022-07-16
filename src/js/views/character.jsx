import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Character = () => {
	const [data, setData] = useState(null)
	let { id } = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${id}`, {
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
							src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
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
								<div><strong>Height: </strong>{data.properties.height}</div>	
								<div><strong>Mass: </strong>{data.properties.mass}</div>	 
								<div><strong>Hair Color: </strong>{data.properties.hair_color}</div>	 
								<div><strong>Skin Color: </strong>{data.properties.skin_color}</div>	 
								<div><strong>Eye Color: </strong>{data.properties.eye_color}</div>	 
								<div><strong>Birth Year: </strong>{data.properties.birth_year}</div>	 
								<div><strong>Gender: </strong>{data.properties.gender}</div>
								<div><strong>Description: </strong>{data.description}</div>
						</fieldset>
					</div>
				</div>
				:<h1>Loading Character...</h1>
			}
		</div>
	)
};

export default Character
