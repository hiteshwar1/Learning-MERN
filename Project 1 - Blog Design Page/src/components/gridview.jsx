import GridItem from "./griditem";

const GridView = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={true} />
      </div>
      <div className="flex justify-center">
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={true} />
      </div>
      <div className="flex justify-center">
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={false} />
        <GridItem isLastInRow={true} />
      </div>
    </div>
  );
};

export default GridView;
