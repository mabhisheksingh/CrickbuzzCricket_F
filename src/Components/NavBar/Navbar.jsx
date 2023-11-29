import React, { useState } from "react";
import crickBuzzICON from "../../assets/crickBuzzImage.png";
import "./Navbar.css";
import { NavBarData } from "../../utils/NavBar.data";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function NavbarOptions() {
  const [idDropDownOpen, setIsDropDown] = useState({
    id: "id",
    isOpen: false,
  });

  function openDropDown(id) {
    console.log("open id" + id);
    setIsDropDown({
      id: id,
      isOpen: true,
    });
  }
  function closeDropDown(id) {
    console.log("close id" + id);
    setIsDropDown({
      id: id,
      isOpen: false,
    });
  }

  return (
    <>
      <div className="flex justify-around items-center w-full  list-none ">
        {NavBarData &&
          NavBarData.map((items, index) => {
            if (items.hasSubOptions) {
              return (
                <li
                  className="relative  h-full text-white p-1 hover:bg-green-950 cursor-pointer"
                  key={items.id}
                  hidden={items.hidden}
                  onMouseEnter={() => openDropDown(items.id)}
                  onMouseLeave={() => closeDropDown(items.id)}
                >
                  <div className="flex items-center h-full">
                    <span title={items.Description}>{items.Name} </span>
                    <div>{<SlArrowDown />}</div>
                  </div>

                  <ul className="absolute top-full bg-white">
                    {idDropDownOpen.isOpen &&
                      idDropDownOpen.id == items.id &&
                      items.subOptions.map((item, subIndex) => {
                        return (
                          <li
                            className="p-2 text-black hover:bg-slate-300 cursor-pointer min-w-max"
                            key={item.id}
                            hidden={item.hidden}
                          >
                            <span title={item.Description}> {item.Name}</span>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li
                  key={items.id}
                  hidden={items.hidden}
                  className="text-white h-full hover:bg-green-950 p-1 cursor-pointer"
                >
                  <span
                    className="flex items-center h-full"
                    title={items.Description}
                  >
                    {items.Name}
                  </span>
                </li>
              );
            }
          })}
      </div>
      {/* <div className="flex justify-around items-center w-full border-2 border-cyan-400 min-h-full">
      <div className="border-2  border-red-800 ">AA</div>
      <div className="border-2  border-red-800 ">sd</div>
      <div className="border-2  border-red-800 ">ds</div>
      <div className="border-2  border-red-800 ">ds</div>
      <div className="border-2  border-red-800 ">ds</div>
      <div className="border-2  border-red-800 ">ds</div>
    </div> */}
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="max-h-full min-h-full flex bg-green-700">
        <img className=" h-10" src={crickBuzzICON} alt="Failed" />
        <NavbarOptions />
      </div>

      {/* <div className="custom">
        <div className="option">Abhishek DIngh</div>
        <div className="option">Abhishek DIngh</div>
        <div className="option">Abhishek DIngh</div>
        <div className="option">Abhishek DIngh</div>
        <div className="option">Abhishek DIngh</div>
      </div> */}
    </>
  );
}

export default Navbar;
