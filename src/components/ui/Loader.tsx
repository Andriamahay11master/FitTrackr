interface LoaderProps {
  size?: "sm" | "md" | "lg";
}

const Loader: React.FC<LoaderProps> = ({ size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizes[size]} border-gray-300 border-t-black rounded-full animate-spin`}
      />
    </div>
  );
};

export default Loader;
