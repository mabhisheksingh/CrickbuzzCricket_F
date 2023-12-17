import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import SecondNavBar from "../Components/NavBar/SecondNavBar";

function CricketLayout() {
  console.log(import.meta.env.VITE_X_RapidAPI_Key);
  return (
    <>
      <div className="max-w-screen-xl min-h-screen m-auto flex flex-col border-pink-500 border-2">
        <nav className="w-full h-[40px] ">
          <Navbar />
        </nav>
        {/* Nav bar first  */}
        <nav className="h-[36px] w-full">
          <SecondNavBar />
        </nav>
        {/*Nav bar first */}
        <div className="bg-slate-700">aaas</div>
        <div className=" bg-red-400">Footer</div>
      </div>
    </>
  );
}

export default CricketLayout;
