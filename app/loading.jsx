'use client';

import BounceLoader from 'react-spinners/BounceLoader';

const cssOverride = {
  display: 'block',
  margin: '0 auto',
};

const LoadingPage = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
      <BounceLoader color='#2253d5' cssOverride={cssOverride} speedMultiplier='1' size={60} />
    </div>
  );
};

export default LoadingPage;
