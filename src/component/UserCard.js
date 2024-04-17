import React, { useEffect, useState } from "react";

function UserCard() {
  const apiUrl = `https://randomuser.me/api/`;
  const [userData, setuserData] = useState({});
  const [loading, setloading] = useState(true);
  async function apiCall() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data.results[0]);
    setuserData(data.results[0]);
    setloading(false);
  }
  useEffect(() => {
    apiCall();
  }, []);
  if (loading) {
    return "Loading...";
  }
  return (
    <div className="grid grid-cols-2 max-w-[90%] mx-auto mt-8 gap-5">
      <div className="col-span-1 rounded-lg- flex">
        {" "}
        <img
          src={userData.picture.large}
          alt=""
          className=" self-center object-fill w-[60%] mx-auto rounded-full"
        />
      </div>
      <div className="col-span-1 flex flex-col py-10 px-10 gap-5 rounded-3xl overflow-hidden- bg-gradient-to-r from-teal-600 to-teal-500 text-white ">
        <h2 className="text-3xl font-medium">User details</h2>
        <hr />

        <div className="grid grid-cols-7 grid-rows-3 gap-5 mt-5 text-white">
          <div className="col-span-2 font-bold">First name</div>
          <div className="col-span-5 bg-white rounded-lg px-2 py-2 text-md font-medium text-gray-700">
            {userData.name.first}
          </div>
          <div className="col-span-2 font-bold">Last name</div>
          <div className="col-span-5 bg-white rounded-lg px-2 py-2 text-md font-medium text-gray-700">
            {userData.name.last}
          </div>
          <div className="col-span-2 font-bold">Email ID</div>
          <div className="col-span-5 bg-white rounded-lg px-2 py-2 text-md font-medium text-gray-700 ">
            {userData.email}
          </div>
        </div>
        <button
          className="rounded-lg  bg-orange-600 border-0 outline-none p-4 align-bottom mt-8 font-bold text-lg text-white"
          onClick={apiCall}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default UserCard;
