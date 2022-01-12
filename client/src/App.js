import React from "react";
//import { Route, Switch } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Profesionales from "./components/Profesionales/Profesionales";
import Servicios from "./components/Servicios/Servicios";
import NotFound from "./components/NotFound/NotFound";
import './App.css';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={
					<>
						<Body />
					</>
				} />
				<Route path="/Profesionales" element={
					<>
						<Profesionales />
					</>
				} />
				<Route path="/Servicios" element={
					<>
						<Servicios />
					</>
				} />
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</div>
	);
}
