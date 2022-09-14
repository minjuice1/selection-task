import { React } from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
	return (
		<section>
			<h1>Links</h1>
			<br />
			<h2>Public</h2>
			<p>
				<Link to='/login'>Login</Link>
			</p>
			<p>
				<Link to='/register'>Register</Link>
			</p>
			<h2>Private</h2>
			<p>
				<Link to='/'>Home</Link>
			</p>
			<p>
				<Link to='/manager'>Managers Page</Link>
			</p>
			<Link to='/admin'>Admin Page</Link>
		</section>
	);
};

export default LinkPage;
