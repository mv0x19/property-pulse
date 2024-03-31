const domain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
const fetchProperties = async () => {
  try {
    // check if domain isn't available
    if (!domain) return [];
    const response = await fetch(`${domain}/properties`);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch single property
const fetchProperty = async (id) => {
  try {
    // check if domain isn't available
    if (!domain) return null;
    const response = await fetch(`${domain}/properties/${id}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
