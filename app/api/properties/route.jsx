import connectDB from '@/config/database';

export const GET = async () => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: 'Hello, World!' }), { status: 200 });
  } catch (error) {
    console.error(error.message);
    return new Response('Something went wrong...', { status: 500 });
  }
};
