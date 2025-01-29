"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/page";
import Dashboard from "./Pages/Dashboard";
import GetInfluencers from "./Pages/GetInfluencers";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


export default function Home() {
  return (
    <div className="bg-slate-500 p-2 font-default">
      <>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/getAll" element={<GetInfluencers/>}/>
    </Routes>
    </BrowserRouter>
      </>
    </div>
  );
}
