export default defineEventHandler((event) => {
  const { name } = useQuery(event);

  const {age} = await useBody();

  return {
    message: `Helloooo, ${name}! You are ${age} age old `,
  };
});

// Error: useQuery, useBody and defineEventHandler are not defined
