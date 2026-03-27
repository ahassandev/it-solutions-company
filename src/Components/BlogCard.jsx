import React from 'react'
import { FiFileText, FiImage, FiVideo, FiDownload, FiEye, FiCalendar, FiUser, FiTag, FiClock, FiTrendingUp, FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiExternalLink } from 'react-icons/fi'

function BlogCard({ post, index }) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-200">
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => {
            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e2e8f0' width='400' height='300'/%3E%3Ctext fill='%2364748b' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${post.title}%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {post.date}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FiUser className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiHeart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiMessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiEye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:text-cyan-600 transition">
              <FiBookmark className="w-4 h-4" />
            </button>
            <button className="hover:text-cyan-600 transition">
              <FiShare2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs hover:bg-cyan-100 hover:text-cyan-600 transition cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
          Read More
          <FiExternalLink className="w-4 h-4" />
        </button>
      </div>
    </article>
  )
}

export default BlogCard
