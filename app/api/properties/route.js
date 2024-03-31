import db from '@/config/db';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async () => {
  try {
    await db();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong...', { status: 500 });
  }
};
