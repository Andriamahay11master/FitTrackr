import Loader from "./Loader";

const FullPageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-loader">
      <Loader size="lg" />
    </div>
  );
};

export default FullPageLoader;
