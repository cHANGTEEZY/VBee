import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex justify-center items-center gap-2 mb-3.5 text-white">
        <h1 className="md:text-5xl sm:text-1xl">404</h1>
        <div className="h-16 border-l-1 border-[#b3b2b2]"></div>
        <p>This page could not be found</p>
      </div>
      <Button
        type="button"
        className="mt-4 cursor-pointer bg-white text-black hover:bg-white"
      >
        <Link to={"/"}>Go back home</Link>
      </Button>
    </section>
  );
};

export default Error;
