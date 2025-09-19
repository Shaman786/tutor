"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/navbar";
import ServiceListingCards from "@/components/service-listing-cards";

// Types matching navbar component
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

type AllFilters = NavbarFilters & AdvancedFilters;

export default function Home() {
  const [filters, setFilters] = useState<Partial<AllFilters>>({});

  const handleFiltersChange = (newFilters: AllFilters) => {
    // Remove empty values to avoid unnecessary filtering
    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([_, value]) => {
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "boolean") return value;
        if (typeof value === "number") return value > 0;
        return value !== "" && value !== null && value !== undefined;
      }),
    ) as Partial<AllFilters>;
    setFilters(cleanFilters);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Dark mode toggle - fixed in top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Navigation bar */}
      <Navbar onFiltersChange={handleFiltersChange} />

      {/* Main content */}
      <ServiceListingCards filters={filters} />
    </div>
  );
}
