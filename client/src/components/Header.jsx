import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 dark:bg-white dark:text-black rounded-lg ">
          Roec
        </span>
        Blog
      </Link>
      <form action="">
        <TextInput
          type="text"
          placeholder="Procurar..."
          className="hidden lg:inline"
        />
      </form>
      <Button className="border-none lg:hidden" color="gray">
        <CiSearch size={16} />
      </Button>
      <div className="flex items-center gap-10 md:order-2">
        <Button className=" border-none sm:inline" color="gray">
          <FaMoon size={16} />
        </Button>
        <Link to="/signin">
          <Button className=" px-4 border-none dark:bg-white dark:text-black rounded-lg sm:inline">
            Entrar
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>{" "}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
