import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>{store.swData ? store.swData.results[0].name : 'No data loaded yet'}</h1>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

export default Demo
