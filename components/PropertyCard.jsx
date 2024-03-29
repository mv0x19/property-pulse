import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/month`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/week`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    } else {
      return 'No rates available';
    }
  };

  return (
    <div className='relative rounded-xl shadow-md'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        priority={true}
        className='h-auto w-full rounded-t-xl'
      />
      <div className='p-4'>
        <div className='mb-6 text-left md:text-center lg:text-left'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='min-h-[54px] text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right'>
          ${getRateDisplay()}
        </h3>
        <div className='mb-4 flex justify-center gap-4 text-gray-500'>
          <p>
            <FaBed className='mr-2 inline' />
            {property.beds}
          </p>
          <p>
            <FaBath className='mr-2 inline' />
            {property.baths}
          </p>
          <p>
            <FaRulerCombined className='mr-2 inline' />
            {property.square_feet}
          </p>
        </div>
        <div className='mb-4 flex justify-center gap-4 text-sm text-green-900'>
          {property.rates.nightly && <p>Nightly</p>}
          {property.rates.weekly && <p>Weekly</p>}
          {property.rates.monthly && <p>Monthly</p>}
        </div>
        <div className='mb-5 border border-gray-100'></div>
        <div className='mb-4 flex flex-col justify-between lg:flex-row'>
          <div className='mb-4 flex items-center gap-2 lg:mb-0'>
            <FaMapMarker className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {property.location.city} {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] rounded-lg bg-blue-500 px-4 py-2 text-center text-sm text-white hover:bg-blue-600'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
