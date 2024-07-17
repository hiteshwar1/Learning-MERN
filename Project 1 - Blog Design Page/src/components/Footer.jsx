const Footer = () => {
  return (
    <div className="mt-5 flex justify-between pb-40">
      <div className="flex space-x-1 items-center">
        <span className="text-xl font-semibold text-white leading-9">
          writings.dev
        </span>
        <button className="bg-blue-400 text-white rounded-md px-3 py-2 h-9 flex items-center">
          by @kamranahmedse
        </button>
      </div>

      <div>
        <button className="bg-blue-400 text-white rounded-md px-3 py-2 h-9 flex items-center">
          <img
            src="./src/assets/Vector-2.svg"
            alt="icon"
            className="w-6 h-6 mr-2"
          />
          Follow @writingsdev
        </button>
      </div>
    </div>
  );
};

export default Footer;
