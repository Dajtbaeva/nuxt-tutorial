export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=ILTuaKHruvEShBwCRURRV4Iqxt2qwKvT3ouFKRHg"
  );

  //   return {
  //     message: `Hello, ${name}! You are ${age} age old`,
  //   };
  return data;
});
