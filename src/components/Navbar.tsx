import { Link } from "react-router-dom";
import { AcademicCapIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "usehooks-ts";

const Navbar = () => {
  const { isDarkMode, toggle } = useDarkMode();

  //console.log(import.meta.env.REACT_APP_SUPABASE_URL)
  console.log(import.meta.env.VITE_REACT_APP_SUPABASE_URL)
  return (
    <div>
      <nav className="flex w-full justify-between items-center p-4 dark:bg-slate-800 font-bold shadow-sm">
        <div className="items-center space-x-6 hidden sm:flex">
          <Link to="/" className="flex space-x-2 font-bold items-center">
            <span>awesomehikes.com</span>{" "}
            <AcademicCapIcon className="h-6 w-6 text-blue-500" />
          </Link>
          <Link to="/booking">Booking</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="flex sm:hidden">
          <AcademicCapIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <button onClick={toggle} className="text-blue-500">
            {isDarkMode ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      <div className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500" />
    </div>
  );
};

export default Navbar;
