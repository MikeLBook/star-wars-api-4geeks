import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(store.swData)
	}, [])

	return (
		<div className="container">
			<h1>{store.swData ? store.swData.result.properties.name : 'No data loaded yet'}</h1>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
