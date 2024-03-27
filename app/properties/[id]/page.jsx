'use client';

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation';

const PropertyPage = () => {
  console.log('client');
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pathname = usePathname();

  return (
    <div>
      <p>PropertyPage</p>
      {/* http://localhost:3000/properties/1 */}
      <p>id form useParams: {id}</p>
      {/* http://localhost:3000/properties/1?name=John */}
      <p>
        {!name
          ? 'name from searchParams: (press Test button)'
          : `name from searchParams: ${name}`}
      </p>
      <p>pathname: {pathname}</p>
      <button
        onClick={() => router.push('/properties/1?name=John')}
        type='button'
        className=' ml-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        Test
      </button>
    </div>
  );
};

export default PropertyPage;
