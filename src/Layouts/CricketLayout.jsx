import React from "react";
import Navbar from "../Components/NavBar/Navbar";

function CricketLayout() {
  console.log(import.meta.env.VITE_X_RapidAPI_Key);
  return (
    <>
      <div className="max-w-screen-xl min-h-screen m-auto flex flex-col border-pink-500 border-2">
        <nav className="w-full h-[40px] " ><Navbar/></nav>
        <div className="h-[36px]  ">aaa</div>
        <div className="bg-slate-700">aaas</div>
        <div className=" bg-red-400">Footer</div>
      </div>
    </>
  );
}

export default CricketLayout;
