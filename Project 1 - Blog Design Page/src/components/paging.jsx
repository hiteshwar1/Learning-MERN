import { useState } from "react";

const Paging = () => {
  const [activeNumber, setActiveNumber] = useState(1);

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center w-36 p-1 space-x-3">
        <div className="relative">
          <span
            className={`text-gray-500 italic cursor-pointer ${
              activeNumber === "Previous" ? "text-orange-500" : ""
            }`}
            onClick={() => handleNumberClick("Previous")}
          >
            Previous
          </span>
        </div>
        {[1, 2, 3, 4, 5].map((number) => (
          <div key={number} className="relative">
            <span
              className={`text-gray-500 italic cursor-pointer ${
                activeNumber === number ? "text-orange-500" : ""
              }`}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </span>
            {activeNumber === number && (
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-orange-500" />
            )}
          </div>
        ))}
        <div className="relative">
          <span
            className={`text-gray-500 italic cursor-pointer ${
              activeNumber === "Next" ? "text-orange-500" : ""
            }`}
            onClick={() => handleNumberClick("Next")}
          >
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Paging;
