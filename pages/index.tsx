// pages/index.tsx
import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_IMAGE } from "@/constants";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PropertyProps } from "@/interfaces";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Pool",
  "Pet Friendly",
  "Beachfront",
  "Mountain View",
  "Free WiFi",
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) =>
        p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()))
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* HERO */}
      <section className="relative h-64 md:h-96 flex items-center overflow-hidden">
        {/* Background image as an absolutely-positioned <img> (no inline styles) */}
        <div className="absolute inset-0 -z-10">
          <img src={HERO_IMAGE} alt="Hero background" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 -z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-sm md:text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Pill
                key={f}
                label={f}
                active={activeFilter === f}
                onClick={(label) => setActiveFilter((prev) => (prev === label ? null : label))}
              />
            ))}
          </div>

          <div className="text-sm text-gray-600">
            Showing <strong>{filtered.length}</strong> properties
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <PropertyCard key={`${p.name}-${idx}`} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;