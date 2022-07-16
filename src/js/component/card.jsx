import React from 'react';
import { Link } from "react-router-dom";

const Card = ({category, uid, name, fetchURL}) => {
    return(
        <div className="card m-2" style={{minWidth: "14rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/${category}/${uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between align-items-center">
                <div><h5>{name}</h5></div>
                <Link to={`/${category}/${uid}?fetchURL=${fetchURL}`}>
                    <button type="button" className="btn btn-secondary">View</button>
                </Link>
            </div>
        </div>
    )
}

export default Card