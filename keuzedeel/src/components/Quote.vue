<template>
  <div>
    <h1>{{ quote }}</h1>
    <h2>{{ author }}</h2>

    <button @onclick="fetchQuote">Generate New</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "Loading...",
      author: "Unknown",
    };
  },
  methods: {
    async fetchQuote() {
      try {
        const response = await window.axios.get(
          "https://api.api-ninjas.com/v1/quotes",
          {
            headers: {
              "X-Api-Key": "N40yGAndJ5fkxs9uNIyz2A==Vyq3rDB9kSsyx2oj",
            },
          }
        );

        if (response.data.length > 0) {
          this.quote = response.data[0].quote;
          this.author = response.data[0].author;
        }
      } catch (error) {
        console.error("API Error: ", error);
      }
    },
  },
  mounted() {
    this.fetchQuote();
  },
};
</script>

<style scoped>
div {
  text-align: center;
}

h1 {
  font-size: 55px;
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
