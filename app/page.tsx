"use client";

import Navbar from "./Components/Navbar/page";
import Dashboard from "./Pages/Dashboard/page";
import GetInfluencers from "./Pages/GetInfluencer/page";
import Login from "./Pages/Login/page";
import Signup from "./Pages/Signup/page";


export default function Home() {
  return (
    <div className="bg-slate-500 p-2 font-default">
      <>
      <Navbar/>
      <Login/>
      <Signup/>
      <Dashboard/>
      <GetInfluencers/>
      </>
    </div>
  );
}
