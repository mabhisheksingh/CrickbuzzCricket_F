import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSortDown, FaSortUp } from "react-icons/fa";

function SecondNavBar() {
  const [scheduled, setScheduled] = useState([]);
  const [todayMatch, setTodayMatch] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  async function getSchedule() {
    let key = import.meta.env.VITE_X_RapidAPI_Key;
    console.log("import.meta.env.VITE_X_RapidAPI_Key " + key);

    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international",
      headers: {
        "X-RapidAPI-Key": "488a1af9edmsh4edb03197cbf363p16bfd8jsna6633427e868",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    return await axios.request(options);
  }
  useEffect(() => {
    getSchedule().then((res) => {
      setScheduled([...res.data["matchScheduleMap"]]);
      setTodayMatch([
        ...res.data["matchScheduleMap"][0]["scheduleAdWrapper"][
          "matchScheduleList"
        ],
      ]);
    });
  }, []);
  return (
    <>
      <nav className="flex flex-row justify-between h-full">
        <div className="p-1 bg-slate-900 text-white hover:cursor-pointer">
          MATCHES
        </div>
        <div className="flex flex-row w-full bg-slate-800 justify-around">
          {todayMatch &&
            todayMatch.map((val, index) => {
              return (
                <div
                  className="p-1  text-white hover:cursor-pointer "
                  key={index}
                >
                  {val?.seriesName}{" "}
                </div>
              );
            })}
        </div>
        {isExpanded ? (
          <div
            onClick={() => setIsExpanded(false)}
            className="p-1 flex flex-row bg-black
               text-white items-center hover:cursor-pointer"
          >
            CLOSE
            <FaSortUp className="text-white" />
          </div>
        ) : (
          <div
            onClick={() => setIsExpanded(true)}
            className="p-1 flex flex-row bg-slate-800 text-white justify-center hover:cursor-pointer"
          >
            ALL
            <FaSortDown className=" text-white" />
          </div>
        )}
      </nav>
    </>
  );
}

export default SecondNavBar;
