import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* left */}
        <div className="">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-4xl font-semibold dark:text-black"
          >
            <span className="px-2 py-1  dark:bg-black dark:text-white rounded-lg ">
              Roec
            </span>
            Blog
          </Link>
        </div>
        {/* right */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Signup;
