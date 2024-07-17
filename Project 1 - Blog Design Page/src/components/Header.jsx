const Header = () => {
  return (
    <header>
      <div className="text-white flex justify-between">
        <span className="text-xl font-bold">writings.dev</span>
        <div className="flex space-x-4">
          <a href="#categories" className="hover:text-gray-400">
            categories
          </a>
          <a href="#articles" className="hover:text-gray-400">
            articles
          </a>
          <a href="#about" className="hover:text-gray-400">
            about
          </a>
        </div>
      </div>

      <div className="py-10 text-center">
        <div className="flex justify-center">
          <img src="./src/assets/logo.svg" alt="Logo" className="h-24" />
        </div>
        <div className="mt-4">
          <h1 className="text-red-400 text-4xl italic">
            Writings for Developers
          </h1>
          <p className="text-white text-lg font-semibold">
            Curated collection of articles for busy developers
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
