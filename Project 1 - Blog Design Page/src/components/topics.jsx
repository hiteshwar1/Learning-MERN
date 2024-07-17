const Topics = () => {
  return (
    <div className="text-gray-600 flex justify-between italic">
      <div className="flex space-x-2 items-center">
        <img
          src="./src/assets/List Icon.svg"
          alt="list"
          className="h-3.5 fill-current text-gray-600"
        />
        <img
          src="./src/assets/Vector.svg"
          alt="grid"
          className="h-3.5 fill-current text-gray-600"
        />
      </div>
      <a href="#" className="hover:text-gray-200">
        JavaScript
      </a>
      <a href="#" className="hover:text-gray-200">
        DevOps
      </a>
      <a href="#" className="hover:text-gray-200">
        Terraform
      </a>
      <a href="#" className="hover:text-gray-200">
        Architecture
      </a>
      <a href="#" className="hover:text-gray-200">
        Scalability
      </a>
      <a href="#" className="hover:text-gray-200">
        Explainers
      </a>
    </div>
  );
};

export default Topics;
