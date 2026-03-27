import React from 'react'
import { FiFilter, FiSearch, FiGrid, FiList, FiCalendar, FiTag, FiUser, FiChevronDown, FiX } from 'react-icons/fi'

function FilterSidebar({ filters, activeFilters, onFilterChange }) {
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Development', 'Startup', 'Innovation'];
  const authors = ['All Authors', 'Ahmad Hassan', 'Sarah Johnson', 'Michael Chen', 'Emily Davis'];
  const dateRanges = ['All Time', 'Today', 'This Week', 'This Month', 'This Year'];
  const sortOptions = ['Latest', 'Oldest', 'Most Popular', 'Most Commented', 'Most Viewed'];

  return (
    <aside className="lg:w-80 space-y-6">
      {/* Search */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiSearch className="w-5 h-5 text-cyan-500" />
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiTag className="w-5 h-5 text-cyan-500" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
              <input
                type="radio"
                name="category"
                checked={activeFilters.category === category}
                onChange={() => onFilterChange('category', category)}
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-700">{category}</span>
              <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                {Math.floor(Math.random() * 50) + 10}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Authors */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiUser className="w-5 h-5 text-cyan-500" />
          Authors
        </h3>
        <div className="space-y-2">
          {authors.map((author) => (
            <label key={author} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
              <input
                type="radio"
                name="author"
                checked={activeFilters.author === author}
                onChange={() => onFilterChange('author', author)}
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-700">{author}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Range */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiCalendar className="w-5 h-5 text-cyan-500" />
          Date Range
        </h3>
        <select 
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
          value={activeFilters.dateRange}
          onChange={(e) => onFilterChange('dateRange', e.target.value)}
        >
          {dateRanges.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      {/* Sort By */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiFilter className="w-5 h-5 text-cyan-500" />
          Sort By
        </h3>
        <select 
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
          value={activeFilters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Active Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Active Filters</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([key, value]) => (
            value !== 'All' && value !== 'All Time' && value !== 'Latest' && (
              <span key={key} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                {value}
                <button onClick={() => onFilterChange(key, key === 'category' ? 'All' : key === 'author' ? 'All Authors' : key === 'dateRange' ? 'All Time' : 'Latest')}>
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
