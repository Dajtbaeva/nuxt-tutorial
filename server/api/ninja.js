export default defineEventHandler((event) => {
  const { name } = useQuery(event);
  return {
    message: `Helloooo, ${name}`,
  };
});
// 12 - 5
// Error: useQuery is not defined
