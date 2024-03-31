'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/request';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) fetchData();
  }, [id, property]);

  return (
    <div>
      <p>PropertyPage</p>
    </div>
  );
};

export default PropertyPage;
