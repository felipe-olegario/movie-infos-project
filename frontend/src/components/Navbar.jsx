import React, { useState, useEffect } from "react";

const Navbar = ({setSearchTerm, searchTerm}) => {
	const path = window.location.pathname
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			// Aqui você pode adicionar a lógica de busca com o valor de searchTerm
			console.log("Realizando busca com:", searchTerm);
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	return (
		<nav className="bg-gray-900 p-4 flex justify-between items-center shadow-lg shadow-gray-800 mb-5">
			<a href="/">
				<div className="text-white text-4xl text-amber-400">FELAS STREAMING</div>
			</a> 
			<input
				list="browsers"
				value={searchTerm}
				onChange={(e) => {setSearchTerm(e.currentTarget.value)}}
				className="bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-700 rounded-md py-2 px-4 w-80 text-white"
				type="text"
				placeholder="Título da obra"
			/>
		</nav>
	);
};

export default Navbar;
