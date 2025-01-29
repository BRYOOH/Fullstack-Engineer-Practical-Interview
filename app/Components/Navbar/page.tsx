import Image from "next/image"
import tracker from '@/app/Assets/tracker.jpeg'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const Links =[
  {
    name:"dashboard",
    path:"/"
  },
  {
    name:"Influencers",
    path:"/getAll"
  },
  
]

const Navbar = () => {
  const navigate= useNavigate();
  return (
    <div className="py-10   flex items-center justify-center">
      <div className="flex z-50 fixed backdrop-blur items-center justify-center gap-6 text-lg border border-lime-500 rounded-full p-2">
        <div className="flex items-center gap-2">
          <Image src={tracker} alt=""
          className="size-14 rounded-full"/>
          <span className="uppercase text-lime-500">Campaign Tracker</span>
        </div>
        <div className="flex gap-4 uppercase">
          {Links.map((link,index)=>(
            <Link key={index} to={link.path}>{link.name}</Link>
          ))}
        </div>
        <div className=" flex gap-2 items-center">
          <button className="bg-purple-500 p-2 rounded-3xl" onClick={()=>navigate('/login')}>Login</button>
          <button className="bg-purple-500 p-2 rounded-3xl" onClick={()=>navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar