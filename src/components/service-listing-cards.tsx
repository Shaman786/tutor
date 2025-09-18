"use client"
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Phone, Clock, Users, ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';

// Mock database - In real app, this would be API calls
const generateMockServices = () => {
  const categories = ['Spa & Wellness', 'Beauty & Salon', 'Fitness & Training', 'Healthcare', 'Massage Therapy', 'Physiotherapy'];
  const locations = ['Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Secunderabad', 'Begumpet', 'Ameerpet', 'Kukatpally'];
  const serviceTypes = {
    'Spa & Wellness': ['Full Body Massage', 'Aromatherapy', 'Hot Stone', 'Deep Tissue', 'Swedish Massage'],
    'Beauty & Salon': ['Hair Styling', 'Facial Treatment', 'Manicure', 'Pedicure', 'Bridal Makeup'],
    'Fitness & Training': ['Personal Training', 'Group Classes', 'Yoga', 'Pilates', 'Cardio Training'],
    'Healthcare': ['Consultation', 'Health Checkup', 'Diagnostic Tests', 'Treatment', 'Follow-up'],
    'Massage Therapy': ['Therapeutic Massage', 'Sports Massage', 'Relaxation Massage', 'Couples Massage'],
    'Physiotherapy': ['Injury Recovery', 'Pain Management', 'Sports Rehab', 'Post-Surgery Care']
  };
  const genders = ['male', 'female'];
  const currencies = [{ code: 'INR', symbol: '₹' }, { code: 'USD', symbol: '$' }, { code: 'EUR', symbol: '€' }];
  const languages = ['English', 'Hindi', 'Telugu', 'Tamil', 'Bengali', 'Marathi'];
  const specializations = ['Stress Relief', 'Sports Therapy', 'Beauty Treatment', 'Weight Management', 'Pain Management', 'Rehabilitation'];

  const services = [];
  
  for (let i = 1; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const availableServices = serviceTypes[category];
    const selectedServices = availableServices
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 4) + 2);
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const currency = currencies[Math.floor(Math.random() * currencies.length)];
    const serviceLangs = languages.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
    const serviceSpecs = specializations.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 1);
    const basePrice = Math.floor(Math.random() * 5000) + 1000;
    const maxPrice = basePrice + Math.floor(Math.random() * 3000) + 1000;

    services.push({
      id: i,
      name: `${category.split(' ')[0]} Center ${i}`,
      category: category,
      image: `https://images.unsplash.com/photo-${1540555700478 + i}?w=400&h=250&fit=crop&auto=format`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 10,
      price: `${currency.symbol}${basePrice} - ${currency.symbol}${maxPrice}`,
      priceRange: [basePrice, maxPrice],
      currency: currency.code,
      location: `${location}, Hyderabad`,
      locationKey: location.toLowerCase().replace(/\s+/g, '-'),
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      hours: Math.random() > 0.5 ? "9:00 AM - 9:00 PM" : "24/7 Available",
      services: selectedServices,
      badge: Math.random() > 0.7 ? ['Premium', 'Popular', 'Top Rated'][Math.floor(Math.random() * 3)] : null,
      description: `Professional ${category.toLowerCase()} services with experienced staff and modern facilities. Committed to providing excellent customer service.`,
      verified: Math.random() > 0.3,
      experience: `${Math.floor(Math.random() * 15) + 1}+ years`,
      experienceYears: Math.floor(Math.random() * 15) + 1,
      gender: gender,
      ageRange: ['18-25', '26-35', '36-45', '46-55', '55+'][Math.floor(Math.random() * 5)],
      languages: serviceLangs,
      specializations: serviceSpecs,
      availability: ['immediate', 'today', 'this-week', 'flexible'][Math.floor(Math.random() * 4)],
      certification: ['certified', 'licensed', 'degree', 'diploma'][Math.floor(Math.random() * 4)],
      responseTime: ['immediate', 'fast', 'same-day', 'next-day'][Math.floor(Math.random() * 4)],
      workingHours: ['24-7', 'business', 'evening', 'weekend', 'flexible'][Math.floor(Math.random() * 5)],
      featured: Math.random() > 0.8,
      serviceType: category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')
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
    <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border overflow-hidden">
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
              <h3 className="font-bold text-lg text-card-foreground mb-1">{service.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{service.category}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">{service.price}</div>
              <div className="text-xs text-gray-500">{service.experience}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {service.description}
          </p>

          {/* Services Tags */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {service.services.slice(0, 4).map((srv, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-100 dark:border-blue-800"
                >
                  {srv}
                </span>
              ))}
              {service.services.length > 4 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">
                  +{service.services.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Info Row */}
          <div className="grid grid-cols-2 gap-3 mb-3 text-sm text-muted-foreground">
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
                    className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({service.reviews})</span>
            </div>
            
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <button className="p-1.5 border border-border rounded-lg hover:bg-muted transition-colors">
                <Phone className="w-4 h-4 text-muted-foreground" />
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
        className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
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
                ? 'cursor-default text-muted-foreground' 
                : 'border border-border hover:bg-muted'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

interface ServiceListingProps {
  filters?: any;
}

const ServiceListingWithPagination: React.FC<ServiceListingProps> = ({ filters = {} }) => {
  const [allServices] = useState(() => generateMockServices()); // Mock database
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const servicesPerPage = 20;
  const categories = ['All', 'Spa & Wellness', 'Beauty & Salon', 'Fitness & Training', 'Healthcare', 'Massage Therapy', 'Physiotherapy'];

  // Enhanced filtering function
  const applyFilters = (services: any[], filters: any) => {
    return services.filter(service => {
      // Basic filters
      if (filters.gender && service.gender !== filters.gender) return false;
      if (filters.location && service.locationKey !== filters.location) return false;
      if (filters.currency && service.currency !== filters.currency) return false;
      if (filters.serviceType && service.serviceType !== filters.serviceType) return false;

      // Advanced filters
      if (filters.ageRange && service.ageRange !== filters.ageRange) return false;
      if (filters.experience) {
        const [min, max] = filters.experience.split('-').map((n: string) => n === '+' ? 100 : parseInt(n));
        if (service.experienceYears < min || (max !== 100 && service.experienceYears > max)) return false;
      }
      if (filters.priceRange && filters.priceRange.length === 2) {
        const [minPrice, maxPrice] = filters.priceRange;
        if (service.priceRange[0] > maxPrice || service.priceRange[1] < minPrice) return false;
      }
      if (filters.availability && service.availability !== filters.availability) return false;
      if (filters.rating && parseFloat(service.rating) < filters.rating) return false;
      if (filters.languages && filters.languages.length > 0) {
        const hasLanguage = filters.languages.some((lang: string) => service.languages.includes(lang));
        if (!hasLanguage) return false;
      }
      if (filters.certification && service.certification !== filters.certification) return false;
      if (filters.responseTime && service.responseTime !== filters.responseTime) return false;
      if (filters.specializations && filters.specializations.length > 0) {
        const hasSpecialization = filters.specializations.some((spec: string) => service.specializations.includes(spec));
        if (!hasSpecialization) return false;
      }
      if (filters.workingHours && service.workingHours !== filters.workingHours) return false;
      if (filters.verified && !service.verified) return false;
      if (filters.featured && !service.featured) return false;

      return true;
    });
  };

  // Simulate API call with loading
  const fetchServices = async (page: number, search = '', category = '', appliedFilters = {}) => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredServices = allServices;
    
    // Apply advanced filters first
    filteredServices = applyFilters(filteredServices, appliedFilters);
    
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
    fetchServices(currentPage, searchTerm, selectedCategory, filters).then(result => {
      setTotalPages(result.totalPages);
      setTotal(result.total);
    });
  }, [currentPage, searchTerm, selectedCategory, filters]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

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
    <div className="min-h-screen bg-background overflow-auto">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-6 pr-20">
          <h1 className="text-3xl font-bold text-card-foreground mb-4">Service Directory</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services, locations..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
            >
              {categories.map(category => (
                <option key={category} value={category === 'All' ? '' : category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-muted-foreground">
            Showing {services.length} of {total} services • Page {currentPage} of {totalPages}
            {Object.keys(filters).length > 0 && (
              <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                Filters Applied
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl p-4 animate-pulse">
                <div className="flex">
                  <div className="w-48 h-40 bg-muted rounded"></div>
                  <div className="flex-1 ml-4 space-y-3">
                    <div className="h-6 bg-muted rounded w-1/3"></div>
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
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
                <p className="text-muted-foreground">No services found matching your criteria.</p>
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