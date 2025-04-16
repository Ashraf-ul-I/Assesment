import React from "react";
import logo from '../assets/dua_logo.png'
import {
  Home,
  LayoutGrid,
  Lightbulb,
  Bookmark,
  BadgeDollarSign,
  Search,
  BookOpen,
  User
} from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="w-[100px] h-[75%] flex flex-col items-center py-4 rounded-xl">
      
      {/* Top Icon */}
      <button className=" p-2 ">
        <img src={logo} alt="Logo" className="w-15 h-15 object-contain" />
      </button>


      {/* Spacer and Center Icons */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-15 mb-12">
        <IconButton icon={<Home size={16} />} />
        <IconButton icon={<LayoutGrid size={16} />} />
        <IconButton icon={<Lightbulb size={16} />} />
        <IconButton icon={<Bookmark size={16} />} />
        <IconButton icon={<BadgeDollarSign size={16} />} />
        <IconButton icon={<Search size={16} />} />
        <IconButton icon={<BookOpen size={16} />} />
      </div>

      {/* Bottom Icon */}
      <button className="bg-green-500 p-3 rounded-xl shadow-md">
        <User color="white" size={16} />
      </button>
    </div>
  );
};

const IconButton = ({ icon }) => (
  <button className="bg-white p-2 rounded-full shadow-sm">
    {icon}
  </button>
);

export default LeftSidebar;
