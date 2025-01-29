import React, { useEffect, useState } from 'react'

interface Influencer {
  id: string;
  name: string;
  postCount: number;
  submissionDate: string;
}

const InfluencerList:React.FC= () => {
  const [allInfluencers,setAllInfluencers]= useState<Influencer[]>([]);
  
  const handleInfluencers = async()=>{
    try {
      const response = await fetch("http://localhost:4000/getInfluencers");
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

  return (
    <div className="py-10">
      <div className="flex items-center justify-center flex-col">
        <h1 
        className="text-2xl text-lime-500 border border-lime-500 rounded-xl p-3 uppercase"> &#10038; Accepted Influencers</h1>
       
          {allInfluencers.length > 0 ?(allInfluencers.map((influencer,index)=>(
            <div key={index} 
            className="grid grid-cols-influencer items-center border mt-10 border-lime-500 p-4 rounded-xl cursor-pointer">
                <p className="text-xl uppercase mt-4">{influencer.name}</p>
                <p>PostCount: {influencer.postCount}</p>
                <p className="text-xl">SubmissionDate:{influencer.submissionDate}</p>
               
            </div>
          ))):(<p>No influencers found.</p>)}
      </div>
    </div>
  )
}

export default InfluencerList