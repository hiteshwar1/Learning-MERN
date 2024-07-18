import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center space-x-2">
        <img src="./src/assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl text-white text-xs px-2.5 py-1.5">
          Hoster is hiring
        </button>
      </div>

      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li>
          <a href="">Plans</a>
        </li>
        <li>
          <a href="">Find Domain</a>
        </li>
        <li>
          <a href="">Why Hoster</a>
        </li>
      </ul>

      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a href="">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 hover:text-white">
          Join Waitlist
        </button>
      </div>

      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
