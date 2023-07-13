import React, { FC } from "react";
import Sidebar from "./Sidebar";
import { BsJustify } from "react-icons/bs";

interface props{
  title?: string;
  children?: React.ReactNode;
}
const Layout: FC<props> = ({title, children}) => {
  return (
    <Sidebar>
      <div className="p-2 w-full h-16 bg-gradient-to-r from-primary to-secondary sticky top-0 flex justify-between items-center">
        <div className="text-2xl text-white font-bold ml-4 flex items-center gap-2">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <BsJustify />
          </label>
          {title}
        </div>
        <div className="avatar mr-3">
          <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
          </div>
        </div>
      </div>
      <div className="min-h-full max-w-full">
        {children}
      </div>
    </Sidebar>
  );
};

export default Layout;
