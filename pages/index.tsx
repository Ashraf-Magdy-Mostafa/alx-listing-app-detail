import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Pill from "@/components/Pill";
import { useState } from "react";


// Hero Section Background (replace with your real image import or URL)
const heroBg = "https://source.unsplash.com/1600x500/?vacation,resort";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Mountain View", "Pet Friendly"];

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter === selectedFilter ? null : filter); // toggle active
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[300px]">
        <div
          className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: `url('${heroBg}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="my-6 px-4 flex flex-wrap gap-4 justify-center">
        {filters.map((filter, idx) => (
          <Pill
            key={filter}
            label={filter}
            selected={selectedFilter === filter}
            onClick={handleFilterClick}
          />
        ))}
      </section>

      {/* Listings */}
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {PROPERTYLISTINGSAMPLE.map((property, i) => (
          <div key={i} className="border rounded overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{property.name}</h3>
                <span className="text-sm bg-yellow-100 px-2 rounded">{property.rating} ★</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                {property.address.city}, {property.address.country}
              </p>
              <p className="font-semibold">${property.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
