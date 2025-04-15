import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

const CategoryList = ({ onSubcategorySelect }) => {
  const url = 'http://localhost:5000/api'

  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState({})
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/categories`)
        const data = await response.json()
        setCategories(data)

        // Automatically expand the first category
        if (data.length > 0) {
          const firstCategoryId = data[0].id
          setExpandedCategory(firstCategoryId)
          fetchSubcategories(firstCategoryId, true) 
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const fetchSubcategories = async (catId, autoSelectFirst = false) => {
    try {
      const response = await fetch(`${url}/subcategories?categoryId=${catId}`)
      const data = await response.json()
      setSubcategories(prev => ({ ...prev, [catId]: data }))

      if (autoSelectFirst && data.length > 0) {
        handleSubcategoryClick(data[0])
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error)
    }
  }

  const handleSubCategory = async (catId) => {
    const isSame = expandedCategory === catId
    setExpandedCategory(isSame ? null : catId)

    if (!subcategories[catId]) {
      fetchSubcategories(catId)
    }
  }

  const handleSubcategoryClick = (sub) => {
    setSelectedSubcategoryId(sub.id)
    onSubcategorySelect?.(sub) 
  }

  return (
    
    <>
    
    <div className="flex flex-col h-full">
      {/* Categories Header */}
      <div className="bg-green-500 text-white text-sm font-semibold rounded-md px-3 py-2 mb-4 text-center">
        Categories
      </div>

      {/* Search Box */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search by categories..."
          className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
        />
      </div>

      {/* Scrollable Category Area */}
      <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <div className="space-y-2 ">
          {categories.map((cat) => (
            <div key={cat.id} className="text-sm text-gray-700 ">
              <div
                onClick={() => handleSubCategory(cat.id)}
                className="hover:bg-green-100 cursor-pointer px-2 p-6 bg-emerald-100 py-1 rounded"
              >
                {cat.cat_name_en}
              </div>

              {/* Subcategories */}
              {expandedCategory === cat.id && subcategories[cat.id] && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-green-200 pl-2">
                  {subcategories[cat.id].map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => handleSubcategoryClick(sub)}
                      className={`text-xs cursor-pointer px-1 py-0.5 rounded 
                        ${
                          selectedSubcategoryId === sub.id
                            ? 'bg-green-200 text-green-800 font-semibold'
                            : 'text-gray-600 hover:text-green-600'
                        }`}
                    >
                      • {sub.subcat_name_en}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div></>
  )
}

export default CategoryList
