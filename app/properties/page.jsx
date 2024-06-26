import { fetchProperties } from '@/utils/request';
import PropertyCard from '@/components/PropertyCard';

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // from the most recent to the oldest one
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <section className='px-4 py-6'>
        <div className='container-xl m-auto px-4 py-6 lg:container'>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
