import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="flex gap-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          About
        </Link>
        <Link to="/portfolio" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Portfolio
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Contact
        </Link>
        <Link to="/resume" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Header;

