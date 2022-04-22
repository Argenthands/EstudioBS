import React from "react";
//import { Route, Switch } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ContactForm from "./components/ContactForm/ContactForm";
import Profesionales from "./pages/Profesionales/Profesionales";
import Servicios from "./pages/Servicios/Servicios";
import AboutUs from "./pages/AboutUs/AboutUs";
import Location from "./pages/Location/Location";
import NotFound from "./pages/NotFound/NotFound";
import './App.css';

export default function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />
			<Routes>
				<Route path="/" element={
					<>
						<Home />
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
				<Route path="/AboutUs" element={
					<>
						<AboutUs />
					</>
				} />
				<Route path="Location" element={
					<>
						<Location />
					</>
				} />
				<Route path="Contact" element={
					<>
						<ContactForm />
					</>
				} />
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</div>
	);
}
