"use client";
import React, { useEffect, useState } from 'react'

interface Influencer {
  id: string;
  name: string;
  email:string,
  blogPost:string,
  postCount: number,
  submissionDate: string,
  Accepted:boolean,
};


const GetInfluencers = () => {
  const [allInfluencers,setAllInfluencers]= useState<Influencer[]>([]);
  
  const handleInfluencers = async()=>{
    try {
      const response = await fetch("https://fullstack-engineer-practical-interview.onrender.com/getAll");
      const data = await response.json();
  
      console.log("Received Data:", data);
  
      if (Array.isArray(data)) {
        setAllInfluencers(data);
      } else {
        console.log("API response is not an array:", data);
      }
    } catch (error) {
      console.log("Error fetching influencers:", error);
    }
  };

  useEffect(()=>{
    handleInfluencers();
  },[]);


  const toggleAccepted = async (influencerId: string) => {
    try {
      const response = await fetch(`https://fullstack-engineer-practical-interview.onrender.com/patchInfluencer/${influencerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setAllInfluencers((prevInfluencers) =>
          prevInfluencers.map((inf) =>
            inf.id === influencerId ? { ...inf, Accepted: !inf.Accepted } : inf
          )
        );
      } else {
        alert("Error updating status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  return (
    <div className='py-24 h-full'>
      <div className='flex flex-col items-center justify-center'>
        <div >
        <h1 
        className="text-2xl text-lime-500 border border-lime-500 rounded-xl p-3 uppercase"> &#10038;All  Applied Influencers</h1>
        </div>

        {allInfluencers.length > 0 ?(allInfluencers.map((influencer,index)=>(
            <div key={index} 
            className="grid grid-cols-allInfluencers items-center gap-4 justify-center border mt-10 border-lime-500 p-4 rounded-xl cursor-pointer">
                <p className="text-xl uppercase mt-4">{influencer.name}</p>
                <p>{influencer.email}</p>
                <p>PostCount: {influencer.postCount}</p>
                <p>{influencer.blogPost}</p>
                <p className="text-sm">SubmissionDate:{influencer.submissionDate}</p>
                <p className=''>Status: {influencer.Accepted ? "Accepted" : "Not Accepted"}</p>
                <button onClick={() => toggleAccepted(influencer.id)} className='bg-green-500 p-2 rounded-xl'>ok</button>
                <button onClick={() => toggleAccepted(influencer.id)} className='bg-red-500 p-2 rounded-xl'>Reject</button>
                
               
            </div>
          ))):(<p>No influencers found.</p>)}

      </div>
    </div>
  )
}

export default GetInfluencers