import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/pages/Home'
import {
	Skills,
	Experiences,
	Educations,
	Portfolios,
} from "./components/pages/index";

import './App.css';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/experiences" element={<Experiences />} />
				<Route path="/educations" element={<Educations />} />
				<Route path="/portfolios" element={<Portfolios />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
