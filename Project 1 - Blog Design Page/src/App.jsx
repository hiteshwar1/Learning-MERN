import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import "./index.css";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="bg-customColor px-16 pt-10">
      <Header />
      <div className="w-full bg-gray-400 h-0.5"></div>
      <Body />
      <div className="w-full bg-gray-400 h-0.5"></div>
      <Footer />
    </div>
  );
}

export default App;
