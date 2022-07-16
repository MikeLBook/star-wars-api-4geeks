import React from 'react';
import { Link } from "react-router-dom";

const Card = ({category, uid, name}) => {
    return(
        <div className="card m-2" style={{minWidth: "14rem", minHeight: "20rem"}}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`} 
                className="card-img-top" alt="..." 
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://www.starwars.com/wp-content/uploads/2018/02/star-wars-logo-new-tall.jpg";
                }}
            />
            <div className="card-body d-flex justify-content-between align-items-end">
                <div><h5>{name}</h5></div>
                <Link to={`/${category}/${uid}`}>
                    <button type="button" className="btn btn-secondary">View</button>
                </Link>
            </div>
        </div>
    )
}

export default Card