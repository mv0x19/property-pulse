import Link from 'next/link';
import { FaExclamationCircle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='min-h-screen flex-grow bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='m-4 mb-4 rounded-md border bg-white px-6 py-24 shadow-md md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationCircle className='text-8xl text-yellow-400' />
          </div>
          <div className='text-center'>
            <h1 className='mb-2 mt-4 text-3xl font-bold'>Page Not Found</h1>
            <p className='mb-10 text-xl text-gray-500'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-gray-700 hover:opacity-80'>
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
};

export default NotFoundPage;
