<template>
  <div>
    <h1>{{ quote }}</h1>
    <h2>{{ author }}</h2>
  </div>

  <div>
    <button>Generate New</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "Hello World",
      author: "by author",
    };
  },
};
</script>

<style>
h1 {
  font-size: 60px;
}

button {
  font-family: "Noto Serif Georgian", serif;
  font-size: larger;
  font-weight: 600;
  border-radius: 12px;
  padding: 10px;
  background-color: #e76b74;
  border: none;
  color: #1a1423;
}

button:hover {
  background-color: #ea526f;
}
</style>
