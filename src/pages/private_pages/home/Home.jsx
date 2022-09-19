import React from "react";
import { Link } from "react-router-dom";

const home = () => {
	return (
		<section>
			<h1>Home</h1>
			<br />
			<p>You are logged in!</p>
			<br />
			<Link to='/manager'>Go to the Manager page</Link>
			<br />
			<Link to='/admin'>Go to the Admin page</Link>
			<br />
			<Link to='/linkpage'>Go to the link page</Link>
		</section>
	);
};

export default home;
