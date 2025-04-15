import React from "react";
import {
  Languages,
  Shield,
  LayoutGrid,
} from "lucide-react";

const SettingSidebar = () => {
    
  return (
    <div className="w-[15%] h-[70%] mt-10 bg-white rounded-md p-4 shadow">
      <h2 className="font-semibold text-center mb-4">Settings</h2>

      <div className="flex flex-col gap-2">
        <SettingItem icon={<Languages size={18} className="text-gray-400" />} label="Language Settings" />
        <SettingItem icon={<Shield size={18} className="text-gray-400" />} label="General Settings" />
        <SettingItem icon={<LayoutGrid size={18} className="text-gray-400" />} label="Font Settings" />
        
        {/* Active Setting */}
        <div className="flex items-center bg-green-50 border-l-4 border-green-500 rounded-md p-2">
          <LayoutGrid size={18} className="text-green-500 mr-2" />
          <span className="text-green-500 text-sm font-medium">Appearance Settings</span>
        </div>
      </div>

      {/* Toggle at Bottom */}
      <div className="mt-6 flex items-center justify-between px-2">
        <span className="text-sm">Night Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
        </label>
      </div>
    </div>
  );
};

const SettingItem = ({ icon, label }) => (
  <div className="flex items-center bg-gray-100 rounded-md p-2">
    <div className="mr-2">{icon}</div>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

export default SettingSidebar;
