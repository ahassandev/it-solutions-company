import React, { useState } from 'react'
import { FiFileText, FiTrendingUp, FiCalendar, FiUser, FiSearch, FiFilter, FiGrid, FiList, FiRss, FiBell, FiDownload } from 'react-icons/fi'
import BlogCard from './BlogCard'
import FeaturedArticle from './FeaturedArticle'
import FilterSidebar from './FilterSidebar'
import Pagination from './Pagination'

function PagesPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    category: 'All',
    author: 'All Authors',
    dateRange: 'All Time',
    sortBy: 'Latest'
  });

  const featuredArticle = {
    title: "The Future of Web Development: AI-Powered Tools and Technologies",
    excerpt: "Explore how artificial intelligence is revolutionizing the web development landscape. From code generation to automated testing, AI is changing how we build and deploy applications. Discover the latest trends, tools, and best practices that are shaping the future of our industry.",
    image: "/featured-article.jpg",
    category: "Technology",
    author: "Ahmad Hassan",
    date: "March 27, 2026",
    comments: 47,
    views: "12.5K",
    likes: "892",
    trending: 95
  };

  const blogPosts = [
    {
      title: "Building Scalable React Applications in 2026",
      excerpt: "Learn the latest best practices for building scalable React applications with modern tools and techniques. From state management to performance optimization.",
      image: "/react-scalability.jpg",
      category: "Development",
      author: "Sarah Johnson",
      date: "March 26, 2026",
      readTime: "8 min read",
      likes: 234,
      comments: 18,
      views: "3.2K",
      tags: ["react", "javascript", "webdev", "scalability"]
    },
    {
      title: "The Ultimate Guide to Cloud-Native Architecture",
      excerpt: "Discover the principles of cloud-native architecture and how to build applications that leverage the full power of cloud computing platforms.",
      image: "/cloud-native.jpg",
      category: "Technology",
      author: "Michael Chen",
      date: "March 25, 2026",
      readTime: "12 min read",
      likes: 189,
      comments: 23,
      views: "2.8K",
      tags: ["cloud", "architecture", "devops", "aws"]
    },
    {
      title: "UX Design Trends That Will Dominate 2026",
      excerpt: "Explore the latest UX design trends that are shaping user experiences across digital platforms. From AI-driven interfaces to immersive designs.",
      image: "/ux-trends.jpg",
      category: "Design",
      author: "Emily Davis",
      date: "March 24, 2026",
      readTime: "6 min read",
      likes: 312,
      comments: 31,
      views: "4.1K",
      tags: ["design", "ux", "trends", "interface"]
    },
    {
      title: "Startup Success Stories: Lessons from Unicorn Companies",
      excerpt: "Analyze the success factors behind unicorn startups and extract valuable lessons for aspiring entrepreneurs and business leaders.",
      image: "/startup-success.jpg",
      category: "Business",
      author: "Ahmad Hassan",
      date: "March 23, 2026",
      readTime: "10 min read",
      likes: 456,
      comments: 42,
      views: "5.7K",
      tags: ["startup", "business", "success", "entrepreneurship"]
    },
    {
      title: "Machine Learning for Web Developers: A Practical Guide",
      excerpt: "A comprehensive introduction to machine learning concepts and their practical applications in modern web development projects.",
      image: "/ml-webdev.jpg",
      category: "Technology",
      author: "Sarah Johnson",
      date: "March 22, 2026",
      readTime: "15 min read",
      likes: 278,
      comments: 29,
      views: "3.9K",
      tags: ["machinelearning", "ai", "webdev", "python"]
    },
    {
      title: "Digital Marketing Strategies for SaaS Companies",
      excerpt: "Proven digital marketing strategies specifically tailored for SaaS companies looking to accelerate growth and customer acquisition.",
      image: "/saas-marketing.jpg",
      category: "Marketing",
      author: "Emily Davis",
      date: "March 21, 2026",
      readTime: "9 min read",
      likes: 198,
      comments: 15,
      views: "2.4K",
      tags: ["marketing", "saas", "growth", "strategy"]
    },
    {
      title: "The Rise of Low-Code/No-Code Development Platforms",
      excerpt: "How low-code and no-code platforms are democratizing software development and enabling non-technical users to build applications.",
      image: "/lowcode-platforms.jpg",
      category: "Development",
      author: "Michael Chen",
      date: "March 20, 2026",
      readTime: "7 min read",
      likes: 167,
      comments: 12,
      views: "1.8K",
      tags: ["lowcode", "nocode", "development", "platforms"]
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential cybersecurity measures and best practices for organizations with distributed teams and remote work policies.",
      image: "/cybersecurity-remote.jpg",
      category: "Technology",
      author: "Ahmad Hassan",
      date: "March 19, 2026",
      readTime: "11 min read",
      likes: 289,
      comments: 26,
      views: "3.5K",
      tags: ["security", "remote", "work", "cybersecurity"]
    },
    {
      title: "Data Visualization Techniques for Business Intelligence",
      excerpt: "Advanced data visualization techniques that help businesses transform raw data into actionable insights and informed decisions.",
      image: "/data-viz.jpg",
      category: "Business",
      author: "Sarah Johnson",
      date: "March 18, 2026",
      readTime: "8 min read",
      likes: 145,
      comments: 19,
      views: "2.1K",
      tags: ["data", "visualization", "bi", "analytics"]
    }
  ];

  const totalPages = 3;

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FiFileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Articles & Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog & Articles</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover insights, tutorials, and industry trends from our expert team
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-gray-300">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50K+</div>
                <div className="text-gray-300">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-gray-300">Authors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-gray-300">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FeaturedArticle article={featuredArticle} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <FilterSidebar 
              filters={{}}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
            
            {/* Main Content Area */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Latest Articles</h2>
                    <p className="text-gray-600">
                      {activeFilters.category !== 'All' && `${activeFilters.category} • `}
                      {activeFilters.author !== 'All Authors' && `${activeFilters.author} • `}
                      {Object.values(activeFilters).filter(v => v !== 'All' && v !== 'All Authors' && v !== 'All Time' && v !== 'Latest').length > 0 
                        ? 'Filtered results' 
                        : 'All articles'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-100 transition">
                      <FiRss className="w-4 h-4" />
                      RSS Feed
                    </button>
                    <button className="flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-100 transition">
                      <FiBell className="w-4 h-4" />
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              <div className={`grid gap-6 mb-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} post={post} index={index} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Articles</h2>
          <p className="text-xl mb-8 text-cyan-50">
            Get weekly digest of our best content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PagesPage
