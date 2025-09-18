import React, { useState, useEffect } from 'react';
import { Star, MapPin, Phone, Clock, Users, ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';

// Mock database - In real app, this would be API calls
const generateMockServices = () => {
  const categories = ['Spa & Wellness', 'Beauty & Salon', 'Fitness & Training', 'Healthcare', 'Massage Therapy', 'Physiotherapy'];
  const locations = ['Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Secunderabad', 'Begumpet'];
  const serviceTypes = {
    'Spa & Wellness': ['Full Body Massage', 'Aromatherapy', 'Hot Stone', 'Deep Tissue', 'Swedish Massage'],
    'Beauty & Salon': ['Hair Styling', 'Facial Treatment', 'Manicure', 'Pedicure', 'Bridal Makeup'],
    'Fitness & Training': ['Personal Training', 'Group Classes', 'Yoga', 'Pilates', 'Cardio Training'],
    'Healthcare': ['Consultation', 'Health Checkup', 'Diagnostic Tests', 'Treatment', 'Follow-up'],
    'Massage Therapy': ['Therapeutic Massage', 'Sports Massage', 'Relaxation Massage', 'Couples Massage'],
    'Physiotherapy': ['Injury Recovery', 'Pain Management', 'Sports Rehab', 'Post-Surgery Care']
  };

  const services = [];
  
  for (let i = 1; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const availableServices = serviceTypes[category];
    const selectedServices = availableServices
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 4) + 2);

    services.push({
      id: i,
      name: `${category.split(' ')[0]} Center ${i}`,
      category: category,
      image: `https://images.unsplash.com/photo-${1540555700478 + i}?w=400&h=250&fit=crop&auto=format`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 10,
      price: `₹${Math.floor(Math.random() * 5000) + 1000} - ₹${Math.floor(Math.random() * 8000) + 3000}`,
      location: `${location}, Hyderabad`,
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      hours: Math.random() > 0.5 ? "9:00 AM - 9:00 PM" : "24/7 Available",
      services: selectedServices,
      badge: Math.random() > 0.7 ? ['Premium', 'Popular', 'Top Rated'][Math.floor(Math.random() * 3)] : null,
      description: `Professional ${category.toLowerCase()} services with experienced staff and modern facilities. Committed to providing excellent customer service.`,
      verified: Math.random() > 0.3,
      experience: `${Math.floor(Math.random() * 15) + 1}+ years`
    });
  }
  
  return services;
};

const ServiceCard = ({ service }) => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Popular': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Top Rated': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Image Section */}
        <div className="w-48 h-40 relative flex-shrink-0">
          <img 
            src={`https://images.unsplash.com/photo-${1540555700478 + (service.id % 20)}?w=400&h=250&fit=crop&auto=format`}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          {service.badge && (
            <div className="absolute top-2 left-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getBadgeColor(service.badge)}`}>
                {service.badge}
              </span>
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs font-medium">{service.rating}</span>
          </div>
          {service.verified && (
            <div className="absolute bottom-2 left-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Verified ✓
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{service.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{service.category}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">{service.price}</div>
              <div className="text-xs text-gray-500">{service.experience}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {service.description}
          </p>

          {/* Services Tags */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {service.services.slice(0, 4).map((srv, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100"
                >
                  {srv}
                </span>
              ))}
              {service.services.length > 4 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                  +{service.services.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Info Row */}
          <div className="grid grid-cols-2 gap-3 mb-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{service.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{service.hours}</span>
            </div>
          </div>

          {/* Rating and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">({service.reviews})</span>
            </div>
            
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <button className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          disabled={page === '...'}
          className={`px-3 py-2 rounded-lg ${
            page === currentPage 
              ? 'bg-blue-600 text-white' 
              : page === '...' 
                ? 'cursor-default' 
                : 'border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const ServiceListingWithPagination = () => {
  const [allServices] = useState(() => generateMockServices()); // Mock database
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const servicesPerPage = 20;
  const categories = ['All', 'Spa & Wellness', 'Beauty & Salon', 'Fitness & Training', 'Healthcare', 'Massage Therapy', 'Physiotherapy'];

  // Simulate API call with loading
  const fetchServices = async (page, search = '', category = '') => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredServices = allServices;
    
    // Filter by search term
    if (search) {
      filteredServices = filteredServices.filter(service =>
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase()) ||
        service.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by category
    if (category && category !== 'All') {
      filteredServices = filteredServices.filter(service => service.category === category);
    }
    
    const startIndex = (page - 1) * servicesPerPage;
    const endIndex = startIndex + servicesPerPage;
    const paginatedServices = filteredServices.slice(startIndex, endIndex);
    
    setServices(paginatedServices);
    setLoading(false);
    
    return {
      services: paginatedServices,
      total: filteredServices.length,
      totalPages: Math.ceil(filteredServices.length / servicesPerPage)
    };
  };

  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchServices(currentPage, searchTerm, selectedCategory).then(result => {
      setTotalPages(result.totalPages);
      setTotal(result.total);
    });
  }, [currentPage, searchTerm, selectedCategory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Directory</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, locations..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category === 'All' ? '' : category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-gray-600">
            Showing {services.length} of {total} services • Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
                <div className="flex">
                  <div className="w-48 h-40 bg-gray-200 rounded"></div>
                  <div className="flex-1 ml-4 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {services.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            {services.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No services found matching your criteria.</p>
              </div>
            )}
            
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceListingWithPagination;