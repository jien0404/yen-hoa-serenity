import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const usePOIs = () => {
  const [pois, setPois] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPOIs = async () => {
      try {
        setLoading(true);
        const response = await api.get('/pois');
        setPois(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching POIs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPOIs();
  }, []);

  return { pois, loading, error };
};
