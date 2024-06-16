import { NavLink } from "@remix-run/react";
import { NavItemDataType } from "../Header";

interface SideBarProps {
  data: NavItemDataType[];
  onClose: () => void;
}

export default function SideBar({ data, onClose }: SideBarProps) {
  return (
    <div className="fixed h-dvh w-screen bg-primary top-0 left-0 flex flex-col">
      <div onClick={onClose} className="text-white text-2xl self-end pt-4 pr-5">
        X
      </div>
      <div className="text-white flex flex-col w-full h-full items-center text-xl justify-start gap-10 pt-20">
        {data.map((item, index) => (
          <NavLink to={item.link} key={index} onClick={onClose}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
