"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  DollarSign,
  Users,
  Settings,
  Plus,
  X,
  Star,
  Calendar,
  Clock,
  Shield,
  Award,
  Filter,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

// Types for our filter states
interface NavbarFilters {
  gender: string;
  location: string;
  currency: string;
  serviceType: string;
}

interface AdvancedFilters {
  ageRange: string;
  experience: string;
  priceRange: [number, number];
  availability: string;
  rating: number;
  languages: string[];
  certification: string;
  responseTime: string;
  specializations: string[];
  workingHours: string;
  verified: boolean;
  featured: boolean;
}

interface NavbarProps {
  onFiltersChange: (filters: NavbarFilters & AdvancedFilters) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onFiltersChange }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState<NavbarFilters>({
    gender: "",
    location: "",
    currency: "INR",
    serviceType: "",
  });

  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    ageRange: "",
    experience: "",
    priceRange: [1000, 10000],
    availability: "",
    rating: 0,
    languages: [],
    certification: "",
    responseTime: "",
    specializations: [],
    workingHours: "",
    verified: false,
    featured: false,
  });

  // Data for dropdowns
  const genderOptions = [
    { value: "", label: "All Tutors" },
    { value: "male", label: "Male Tutors" },
    { value: "female", label: "Female Tutors" },
  ];

  const locationOptions = [
    { value: "", label: "All Locations" },
    { value: "banjara-hills", label: "Banjara Hills" },
    { value: "jubilee-hills", label: "Jubilee Hills" },
    { value: "hitec-city", label: "HITEC City" },
    { value: "gachibowli", label: "Gachibowli" },
    { value: "kondapur", label: "Kondapur" },
    { value: "madhapur", label: "Madhapur" },
    { value: "secunderabad", label: "Secunderabad" },
    { value: "begumpet", label: "Begumpet" },
    { value: "ameerpet", label: "Ameerpet" },
    { value: "kukatpally", label: "Kukatpally" },
  ];

  const currencyOptions = [
    { value: "INR", label: "₹ INR", symbol: "₹" },
    { value: "USD", label: "$ USD", symbol: "$" },
    { value: "EUR", label: "€ EUR", symbol: "€" },
    { value: "GBP", label: "£ GBP", symbol: "£" },
  ];

  const serviceTypeOptions = [
    { value: "", label: "All Services" },
    { value: "spa-wellness", label: "Spa & Wellness" },
    { value: "beauty-salon", label: "Beauty & Salon" },
    { value: "fitness-training", label: "Fitness & Training" },
    { value: "healthcare", label: "Healthcare" },
    { value: "massage-therapy", label: "Massage Therapy" },
    { value: "physiotherapy", label: "Physiotherapy" },
    { value: "nutrition", label: "Nutrition & Diet" },
    { value: "mental-health", label: "Mental Health" },
  ];

  // Advanced search options
  const ageRangeOptions = [
    { value: "", label: "Any Age" },
    { value: "18-25", label: "18-25 years" },
    { value: "26-35", label: "26-35 years" },
    { value: "36-45", label: "36-45 years" },
    { value: "46-55", label: "46-55 years" },
    { value: "55+", label: "55+ years" },
  ];

  const experienceOptions = [
    { value: "", label: "Any Experience" },
    { value: "0-1", label: "0-1 years" },
    { value: "1-3", label: "1-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5-10", label: "5-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const availabilityOptions = [
    { value: "", label: "Any Time" },
    { value: "immediate", label: "Available Now" },
    { value: "today", label: "Available Today" },
    { value: "this-week", label: "This Week" },
    { value: "flexible", label: "Flexible Schedule" },
  ];

  const languageOptions = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Bengali",
    "Marathi",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Urdu",
  ];

  const certificationOptions = [
    { value: "", label: "Any Certification" },
    { value: "certified", label: "Certified Professional" },
    { value: "licensed", label: "Licensed Practitioner" },
    { value: "degree", label: "Degree Holder" },
    { value: "diploma", label: "Diploma Certified" },
  ];

  const specializationOptions = [
    "Stress Relief",
    "Sports Therapy",
    "Beauty Treatment",
    "Weight Management",
    "Pain Management",
    "Rehabilitation",
    "Wellness Coaching",
    "Skin Care",
    "Hair Treatment",
    "Meditation",
    "Yoga Therapy",
    "Nutrition Planning",
  ];

  const handleFilterChange = (key: keyof NavbarFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange({ ...newFilters, ...advancedFilters });
  };

  const handleAdvancedFilterChange = (
    key: keyof AdvancedFilters,
    value: any,
  ) => {
    const newAdvancedFilters = { ...advancedFilters, [key]: value };
    setAdvancedFilters(newAdvancedFilters);
    onFiltersChange({ ...filters, ...newAdvancedFilters });
  };

  const handleLanguageToggle = (language: string) => {
    const newLanguages = advancedFilters.languages.includes(language)
      ? advancedFilters.languages.filter((l) => l !== language)
      : [...advancedFilters.languages, language];
    handleAdvancedFilterChange("languages", newLanguages);
  };

  const handleSpecializationToggle = (specialization: string) => {
    const newSpecializations = advancedFilters.specializations.includes(
      specialization,
    )
      ? advancedFilters.specializations.filter((s) => s !== specialization)
      : [...advancedFilters.specializations, specialization];
    handleAdvancedFilterChange("specializations", newSpecializations);
  };

  const resetFilters = () => {
    const resetBasicFilters = {
      gender: "",
      location: "",
      currency: "INR",
      serviceType: "",
    };
    const resetAdvancedFilters = {
      ageRange: "",
      experience: "",
      priceRange: [1000, 10000] as [number, number],
      availability: "",
      rating: 0,
      languages: [],
      certification: "",
      responseTime: "",
      specializations: [],
      workingHours: "",
      verified: false,
      featured: false,
    };

    setFilters(resetBasicFilters);
    setAdvancedFilters(resetAdvancedFilters);
    onFiltersChange({ ...resetBasicFilters, ...resetAdvancedFilters });
  };

  const DropdownSelect = ({
    options,
    value,
    onChange,
    placeholder,
    icon: Icon,
  }: any) => (
    <div className="relative">
      <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-card text-foreground cursor-pointer outline-none appearance-none pr-6 flex-1 border-none focus:ring-0"
          style={{
            colorScheme: "dark light",
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          {options.map((option: any) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-card text-foreground"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Gender Dropdown */}
            <DropdownSelect
              options={genderOptions}
              value={filters.gender}
              onChange={(value: string) => handleFilterChange("gender", value)}
              placeholder="Select Gender"
              icon={Users}
            />

            {/* Location Dropdown */}
            <DropdownSelect
              options={locationOptions}
              value={filters.location}
              onChange={(value: string) =>
                handleFilterChange("location", value)
              }
              placeholder="Select Location"
              icon={MapPin}
            />

            {/* Currency Dropdown */}
            <DropdownSelect
              options={currencyOptions}
              value={filters.currency}
              onChange={(value: string) =>
                handleFilterChange("currency", value)
              }
              placeholder="Currency"
              icon={DollarSign}
            />

            {/* Service Type Dropdown */}
            <DropdownSelect
              options={serviceTypeOptions}
              value={filters.serviceType}
              onChange={(value: string) =>
                handleFilterChange("serviceType", value)
              }
              placeholder="Service Type"
              icon={Settings}
            />

            {/* Advanced Search Toggle */}
            <button
              onClick={() => setIsAdvancedOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Advanced Search</span>
            </button>

            {/* Clear Filters */}
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Search Modal */}
      {isAdvancedOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-card rounded-xl shadow-2xl border border-border w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">
                Advanced Search
              </h2>
              <button
                onClick={() => setIsAdvancedOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Row 1: Age Range, Experience, Rating */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Age Range
                  </label>
                  <select
                    value={advancedFilters.ageRange}
                    onChange={(e) =>
                      handleAdvancedFilterChange("ageRange", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    {ageRangeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--foreground)",
                        }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Experience
                  </label>
                  <select
                    value={advancedFilters.experience}
                    onChange={(e) =>
                      handleAdvancedFilterChange("experience", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    {experienceOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--foreground)",
                        }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Minimum Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() =>
                          handleAdvancedFilterChange("rating", star)
                        }
                        className={`p-1 ${advancedFilters.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Price Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Price Range:{" "}
                  {
                    currencyOptions.find((c) => c.value === filters.currency)
                      ?.symbol
                  }
                  {advancedFilters.priceRange[0]} -{" "}
                  {
                    currencyOptions.find((c) => c.value === filters.currency)
                      ?.symbol
                  }
                  {advancedFilters.priceRange[1]}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={advancedFilters.priceRange[0]}
                    onChange={(e) =>
                      handleAdvancedFilterChange("priceRange", [
                        parseInt(e.target.value),
                        advancedFilters.priceRange[1],
                      ])
                    }
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={advancedFilters.priceRange[1]}
                    onChange={(e) =>
                      handleAdvancedFilterChange("priceRange", [
                        advancedFilters.priceRange[0],
                        parseInt(e.target.value),
                      ])
                    }
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Row 3: Availability, Certification */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Availability
                  </label>
                  <select
                    value={advancedFilters.availability}
                    onChange={(e) =>
                      handleAdvancedFilterChange("availability", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    {availabilityOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--foreground)",
                        }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Certification
                  </label>
                  <select
                    value={advancedFilters.certification}
                    onChange={(e) =>
                      handleAdvancedFilterChange(
                        "certification",
                        e.target.value,
                      )
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    {certificationOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--foreground)",
                        }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Languages */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Languages
                </label>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageToggle(language)}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        advancedFilters.languages.includes(language)
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-background border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Specializations */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Specializations
                </label>
                <div className="flex flex-wrap gap-2">
                  {specializationOptions.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => handleSpecializationToggle(spec)}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        advancedFilters.specializations.includes(spec)
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-background border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Response Time, Working Hours */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Response Time
                  </label>
                  <select
                    value={advancedFilters.responseTime}
                    onChange={(e) =>
                      handleAdvancedFilterChange("responseTime", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option
                      value=""
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Any Response Time
                    </option>
                    <option
                      value="immediate"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Within 1 hour
                    </option>
                    <option
                      value="fast"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Within 3 hours
                    </option>
                    <option
                      value="same-day"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Same day
                    </option>
                    <option
                      value="next-day"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Next day
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Working Hours
                  </label>
                  <select
                    value={advancedFilters.workingHours}
                    onChange={(e) =>
                      handleAdvancedFilterChange("workingHours", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      colorScheme: "dark light",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option
                      value=""
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Any Hours
                    </option>
                    <option
                      value="24-7"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      24/7 Available
                    </option>
                    <option
                      value="business"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Business Hours
                    </option>
                    <option
                      value="evening"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Evening Hours
                    </option>
                    <option
                      value="weekend"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Weekend Available
                    </option>
                    <option
                      value="flexible"
                      style={{
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                      }}
                    >
                      Flexible Hours
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 7: Checkboxes */}
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={advancedFilters.verified}
                    onChange={(e) =>
                      handleAdvancedFilterChange("verified", e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-300"
                  />
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-foreground">Verified Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={advancedFilters.featured}
                    onChange={(e) =>
                      handleAdvancedFilterChange("featured", e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 rounded border-gray-300"
                  />
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-foreground">Featured Providers</span>
                </label>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-border">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear All Filters
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsAdvancedOpen(false)}
                  className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsAdvancedOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Apply Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
