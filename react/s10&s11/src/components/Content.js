import React from "react";
import "../App.css";
import List from "./Todo/List";

function Content() {
	return (
		<div className="content">
			<p>Masukkan nama :</p>
			<List />
		</div>
	);
}

export default Content;
