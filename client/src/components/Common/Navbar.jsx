import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-orange-600">
          FlavorFold
        </Link>
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/browse" className="hover:text-orange-600">
            Browse Recipes
          </Link>
          <Link to="/submit" className="hover:text-orange-600">
            Submit Recipe
          </Link>
        </div>
      </div>
      <Link
        to="/profile"
        className="flex items-center gap-2 text-gray-700 border p-2 rounded-full px-4 hover:bg-gray-50"
      >
        <span>User Profile</span>
      </Link>
    </nav>
  );
};

export default Navbar;
