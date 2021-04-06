import React from "react";

//includes images into your bundle
import { NavBar } from "./navbar.js";
import { Cards } from "./cards.js";

//creates your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="row">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
}
