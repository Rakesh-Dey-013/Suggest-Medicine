import React, { useState } from 'react';
import { Search } from 'lucide-react';
import useMedicineSearch from '../hooks/useMedicineSearch';
import MedicineCard from '../components/MedicineCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Explore = () => {
  const [medicineQuery, setMedicineQuery] = useState('');
  const { results, loading, error } = useMedicineSearch('medicine', medicineQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the useMedicineSearch hook via the medicineQuery state
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Medicine Details
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Search for any medicine to get detailed information about usage, dosage, side effects, and more.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={medicineQuery}
                onChange={(e) => setMedicineQuery(e.target.value)}
                placeholder="Enter medicine name..."
                className="input-field flex-grow"
              />
              <button type="submit" className="btn-primary flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="card text-center text-red-400">
              {error}
            </div>
          )}
          
          {results.length > 0 && (
            <div className="space-y-6">
              {results.map((medicine, index) => (
                <MedicineCard key={index} medicine={medicine} />
              ))}
            </div>
          )}
          
          {!loading && medicineQuery && results.length === 0 && (
            <div className="card text-center">
              <p className="text-zinc-400">No medicines found for "{medicineQuery}". Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Explore;