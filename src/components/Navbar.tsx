import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex space-x-4 justify-center w-full p-4 bg-slate-900 bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
			<Link to='/'>Gone</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
};

export default Navbar;
