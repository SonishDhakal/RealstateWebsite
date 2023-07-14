import React, { useEffect, useState } from "react";
import { sideBarLinks } from "../Utils/Constant";
import { RiCloseLine, RiLogoutBoxFill, RiLogoutBoxLine, RiLogoutBoxRLine, RiMenu2Fill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../Utils/Context/UserContext";
import { useAuth } from "../Utils/Context/AuthContext";

const Sidebar = ({open,close,data}) => {
  const [active, setActive] = useState();
  const { pathname } = useLocation();
  const {logout} = useAuth()
  useEffect(() => {
    
    setActive(pathname);
    close()
  }, [pathname]);
  const navigate = useNavigate();
  function handelClick(link) {
    navigate(link);
  }




  return (
    <div className="flex flex-col gap-8 px-8 py-8 justify-between h-full ">
    {!data ?   <RiMenu2Fill onClick={open} className="absolute top-10 right-8 text-xl cursor-pointer"  /> :
     <RiCloseLine onClick={close}  className="absolute top-10 right-8 text-xl cursor-pointer" />
    }
     
      
      <div className="flex flex-col gap-8">
      <h3 className="text-lg font-semibold" >User Profile</h3>
        <ul className="flex flex-col gap-4">
          {sideBarLinks.map((links) => (
            <li
              onClick={() => handelClick(links.link)}
              className={`${active===links.link && '!bg-black/[0.07]'} px-3 py-3 rounded-md hover:bg-black/[0.07] flex gap-2 cursor-pointer items-center`}
              key={links.name}
            >
              {links.icon} <span>{links.name}</span>
            </li>
          ))}
        </ul>
      </div>

     <span onClick={logout} className="flex items-center cursor-pointer gap-2"> <RiLogoutBoxRLine  className="text-xl cursor-pointer"/>Logout</span>
    
    </div>
  );
};

export default Sidebar;
