import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/Contact' element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
