import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const path = window.location.pathname
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			// Aqui você pode adicionar a lógica de busca com o valor de searchTerm
			console.log("Realizando busca com:", searchTerm);
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	return (
		<nav className="bg-gray-900 p-4 flex justify-between items-center border-b-2 border-sky-500">
			<a href="/">
				<div className="text-white text-2xl">Felas Streaming</div>
			</a> 
			<input
				list="browsers"
				value={searchTerm}
				onChange={handleChange}
				className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-80"
				type="text"
				placeholder="Título da obra"
			/>
			{path !== '/' ? (
				<datalist id="browsers">
					<option value="Chrome" />
					<option value="Firefox" />
					<option value="Safari" />
					<option value="Opera" />
					<option value="Edge" />
				</datalist>
			): null}
		</nav>
	);
};

export default Navbar;
