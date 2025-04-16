import React, { useState } from 'react'
import CategoryList from '../components/CategoryList'
import DuaCard from '../components/DuaCard'
import { Search } from 'lucide-react'
import LeftSidebar from '../components/LeftSidebar'
import SettingSidebar from '../components/SettingSidebar'

const DuaPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-[100px] flex-shrink-0">
        <LeftSidebar />
      </div>

      {/* Category List */}
      <div className="w-[25%] p-4">
        <h2 className="mb-4 font-bold text-lg">Dua Page</h2>
        <div className="border-r border-green-300 rounded-[15px] border-[0.5px] bg-white p-4 h-full overflow-y-auto">
          <CategoryList onSubcategorySelect={setSelectedSubcategory} />
        </div>
      </div>

      {/* Dua Cards Section */}
      <div className="flex flex-col flex-1 p-4">
        
        {/* Search bar */}
        <div className="relative w-[50%] mb-4 ml-auto">
          <input
            type="text"
            placeholder="Search by dua name..."
            className="w-full border border-gray-300 rounded-md px-4 pr-10 py-2 bg-white text-sm placeholder-gray-500 shadow-sm"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Dua Cards */}
        <div className="bg-white rounded-md shadow p-4 flex-1 overflow-y-auto">
          <DuaCard selectedSubcategory={selectedSubcategory} />
        </div>
      </div>

      {/* Settings Sidebar */}
     <div className=" w-[15%]flex-shrink-0">
        <SettingSidebar />
     </div>

    </div>
  )
}

export default DuaPage
