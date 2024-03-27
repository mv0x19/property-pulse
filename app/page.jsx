import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link href='/properties'>Show Properties &gt;</Link>
    </div>
  );
};

export default HomePage;
