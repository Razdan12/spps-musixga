import React, { FC } from "react";
import { BsFillHouseFill, BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";

interface Props {
  children?: React.ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="lg:hidden bg-gradient-to-b from-primary to-secondary absolute w-12 h-12 flex justify-center items-center text-white text-2xl rounded-md m-3 cursor-pointer">
          
        </div>
        <div className="drawer-content overflow-y-auto">
          <div className="w-full bg-gray-800 h-screen">
            <div className="w-full h-full bg-gray-200 ">
              {children}
              </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-black bg-gradient-to-b from-primary to-secondary">
            <div className="font-bold text-white mb-5">
              <p className="text-2xl">SPPS | Musixga</p>
              <p className="text-xl">Welcome, Admin</p>
            </div>
            <li>
              <div className="flex gap-4 text-md font-semibold text-white">
                <p className="text-xl">
                  <BsFillHouseFill />
                </p>
                Dashboard
              </div>
            </li>
            <li>
              <div className="flex gap-4 text-md font-semibold text-white">
                <p className="text-xl">
                  <BsFillPeopleFill />
                </p>
                Profil Sekolah
              </div>
            </li>
              
            <div
              tabIndex={0}
              className="collapse collapse-arrow focus:bg-secondary focus:text-secondary-content"
            >
              <div className="collapse-title text-white flex font-bold text-md gap-4">
                <p className="text-xl">
                  <BsFillPersonFill />
                </p>
                Siswa
              </div>
              <div className="collapse-content">
                <li>
                  <div className="flex gap-4 text-md font-semibold text-white">
                    Data Siswa
                  </div>
                </li>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow m-0 focus:bg-secondary focus:text-secondary-content"
            >
              <div className="collapse-title text-white flex font-bold text-md gap-4">
                <p className="text-xl">
                  <BsFillPersonFill />
                </p>
                Sekolah
              </div>
              <div className="collapse-content">
                <li>
                  <div className="flex gap-4 text-md font-semibold text-white">
                    Tahun Pelajaran
                  </div>
                  <div className="flex gap-4 text-md font-semibold text-white">
                    Kelas
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
