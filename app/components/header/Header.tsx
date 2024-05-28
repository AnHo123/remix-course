import { NavLink } from "@remix-run/react";
import Logo from "../../images/Logo.png";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className="bg-light-blue font-bold w-full text-primary flex py-5 items-center justify-evenly">
      <NavLink to="/">
        <img src={Logo} alt="logo" className="w-40 h-auto" />
      </NavLink>
      <div className="flex items-center justify-center text-3xl gap-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="analyse">Analyse</NavLink>
        <NavLink to="wallet">Wallet</NavLink>
      </div>
      <Button className="min-w-32">Login</Button>
    </header>
  );
}
