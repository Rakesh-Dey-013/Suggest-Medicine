import React, { useState } from 'react';
import { Search, Zap, FileText, Users, Shield, Clock, Heart } from 'lucide-react';
import useMedicineSearch from '../hooks/useMedicineSearch';
import MedicineCard from '../components/MedicineCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [problemQuery, setProblemQuery] = useState('');
  const { results, loading, error } = useMedicineSearch('problem', problemQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the useMedicineSearch hook via the problemQuery state
  };

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Fast Search",
      description: "Quickly find medicines for your symptoms with our intuitive search system."
    },
    {
      icon: <FileText className="h-10 w-10 text-green-500" />,
      title: "Medicine Details",
      description: "Get comprehensive information about dosage, side effects, and precautions."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Doctor Recommendation",
      description: "Always consult with healthcare professionals for proper medical advice."
    },
    {
      icon: <Shield className="h-10 w-10 text-yellow-500" />,
      title: "Safety Information",
      description: "Access important safety alerts, contraindications, and drug interaction warnings."
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Dosage Reminders",
      description: "Set personalized medication schedules and receive timely reminders for your doses."
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Health Tracking",
      description: "Monitor your symptoms and treatment progress to share with your healthcare provider."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">
            Find the Right Medicine for Your Symptoms
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Get suggestions for common health problems and detailed information about medications.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={problemQuery}
                onChange={(e) => setProblemQuery(e.target.value)}
                placeholder="Enter your symptom or health problem..."
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
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Suggested Medicines</h2>
              <div className="space-y-6">
                {results.map((medicine, index) => (
                  <MedicineCard key={index} medicine={medicine} />
                ))}
              </div>
            </>
          )}
          
          {!loading && problemQuery && results.length === 0 && (
            <div className="card text-center">
              <p className="text-zinc-400">No medicines found for "{problemQuery}". Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose MediSuggest</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;