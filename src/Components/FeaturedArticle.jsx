import React from 'react'
import { FiTrendingUp, FiCalendar, FiUser, FiMessageCircle, FiHeart, FiEye, FiBookmark, FiShare2, FiExternalLink } from 'react-icons/fi'

function FeaturedArticle({ article }) {
  return (
    <article className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23475569' width='800' height='400'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EFeatured Article%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-300 transition duration-300">
              {article.title}
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <FiUser className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMessageCircle className="w-5 h-5" />
                <span>{article.comments}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2">
                Read Full Article
                <FiExternalLink className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/30 transition">
                  <FiBookmark className="w-5 h-5" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/30 transition">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Stats */}
          <div className="lg:w-64">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                  <FiEye className="w-6 h-6" />
                  <span className="text-2xl font-bold text-white">{article.views}</span>
                </div>
                <p className="text-gray-300 text-sm">Views</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-pink-400 mb-2">
                  <FiHeart className="w-6 h-6" />
                  <span className="text-2xl font-bold text-white">{article.likes}</span>
                </div>
                <p className="text-gray-300 text-sm">Likes</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                  <FiTrendingUp className="w-6 h-6" />
                  <span className="text-2xl font-bold text-white">{article.trending}</span>
                </div>
                <p className="text-gray-300 text-sm">Trending Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedArticle
