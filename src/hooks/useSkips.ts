import { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios'; // Import axios
import type { RawSkip, Skip } from '../types';

export const useSkips = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      const apiUrl =
        'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';
      try {
        const response = await axios.get<RawSkip[]>(apiUrl);
        const data = response.data;

        const processedData = data.map((skip) => {
          const priceWithVat = skip.price_before_vat * (1 + skip.vat / 100);
          return {
            id: skip.id,
            name: `${skip.size} Yard Skip`,
            price: Math.round(priceWithVat),
            days_included: skip.hire_period_days,
            short_description:
              skip?.short_description ||
              `No description available for ${skip.size} yard skip.`,
            size: skip.size,
            price_before_vat: skip.price_before_vat,
            vat: skip.vat
          };
        });

        setSkips(processedData);
      } catch (e: AxiosError | unknown) {
        if (axios.isAxiosError(e)) {
          console.error('Axios error fetching skips:', e.message);
          setError(`Failed to load data: ${e.message}`);
        } else {
          console.error('An unexpected error occurred:', e);
          setError("Sorry, we couldn't load skip options at this time.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, isLoading, error };
};
