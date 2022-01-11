import React from "react";
//import { Route, Switch } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Profesionales from "./components/Profesionales/Profesionales";
import './App.css';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={
					<>
						<Header />
						<Body />
						<Footer />
					</>
				} />
				<Route path="Profesionales" element={
					<>
						<Header />
						<Profesionales />
						<Footer />
					</>
				} />
			</Routes>
		</div>
	);
}
