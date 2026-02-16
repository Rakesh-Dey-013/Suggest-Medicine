import { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import medicinesData from '../data/medicines.json';

const useMedicineSearch = (searchType, query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMedicines = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Try API first (for medicine details search)
        if (searchType === 'medicine') {
          try {
            // This would be the RxNorm API call in a real implementation
            // const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${query}`);
            // For demo purposes, we'll simulate an API failure to use the local JSON
            throw new Error('API not implemented for demo');
          } catch (apiError) {
            // Fallback to local JSON
            const fuse = new Fuse(medicinesData.medicineDetails, {
              keys: ['name'],
              threshold: 0.3,
            });
            
            const searchResults = fuse.search(query);
            setResults(searchResults.map(result => result.item));
          }
        } else if (searchType === 'problem') {
          // Search for problems and their suggested medicines
          const fuse = new Fuse(medicinesData.problems, {
            keys: ['problem'],
            threshold: 0.4,
          });
          
          const problemResults = fuse.search(query);
          
          if (problemResults.length > 0) {
            // Get the medicines for the matched problem
            const problem = problemResults[0].item;
            const medicineNames = problem.medicines;
            
            // Find details for each medicine
            const medicineDetails = medicinesData.medicineDetails.filter(med => 
              medicineNames.includes(med.name)
            );
            
            setResults(medicineDetails);
          } else {
            setResults([]);
          }
        }
      } catch (err) {
        setError('Failed to search. Please try again.');
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      searchMedicines();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query, searchType]);

  return { results, loading, error };
};

export default useMedicineSearch;