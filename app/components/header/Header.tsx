import { Form, Link, NavLink, useLoaderData } from "@remix-run/react";
import Logo from "../../images/Logo.png";
import MenuIcon from "../../images/menu.svg";
import Button from "../button/Button";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

export interface NavItemDataType {
  name: string;
  link: string;
}

const Mock_Header_Data: NavItemDataType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Analyse",
    link: "/analyse",
  },
  {
    name: "Wallet",
    link: "/wallet",
  },
];

export default function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const userId = useLoaderData();

  return (
    <header className="bg-light-blue font-bold w-full text-primary flex py-5 items-center justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="w-32 lg:w-40 h-auto" />
        </NavLink>
        <div className="lg:flex hidden items-center justify-center text-3xl gap-12">
          {Mock_Header_Data.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          {userId ? (
            <Form method="post" action="/logout" id="logout-form">
              <Button className="min-w-28 lg:min-w-32" type="submit">
                Logout
              </Button>
            </Form>
          ) : (
            <Link to="/auth?mode=login">
              <Button className="min-w-28 lg:min-w-32">Login</Button>
            </Link>
          )}

          <div className="block lg:hidden">
            <img
              src={MenuIcon}
              alt="menu"
              className="w-8 h-8"
              onClick={() => setOpenSideBar(true)}
            />
            {openSideBar && (
              <SideBar
                data={Mock_Header_Data}
                onClose={() => setOpenSideBar(false)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
