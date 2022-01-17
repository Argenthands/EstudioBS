import React from "react";
//import { Route, Switch } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
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
			<Routes>
				<Route path="/" element={
					<>
						<Header />
						<Body />
					</>
				} />
				<Route path="/Profesionales" element={
					<>
						<Header />
						<Profesionales />
					</>
				} />
				<Route path="/Servicios" element={
					<>
						<Header />
						<Servicios />
					</>
				} />
				<Route path="/AboutUs" element={
					<>
						<Header />
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
						<Header />
						<ContactForm />
					</>
				} />
				<Route path="*" element={<NotFound />}/>
			</Routes>
			<Footer />
		</div>
	);
}
