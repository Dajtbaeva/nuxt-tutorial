<template>
  <div>
    <h2>About page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
      nesciunt in nobis perferendis laborum quasi odit eum molestiae ullam,
      velit placeat sint iste eaque neque? Natus cupiditate vero alias officia
      voluptates sed eum consectetur quam id.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=Mario");
const { data } = await useFetch("/api/ninja?name=Mario", {
  mathod: "post",
  body: { age: 21 },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
