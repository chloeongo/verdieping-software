<template>
  <div>
    <h1>{{ quote }}</h1>
    <h2>{{ author }}</h2>

    <button
      @click="fetchQuote"
      class="cursor-pointer transition-all bg-pink-500 text-white px-10 py-4 rounded-lg border-pink-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
    >
      Generate New
    </button>
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
  margin-top: 120px;
  margin-left: 50px;
  margin-right: 50px;
  font-weight: 550;
}

h2 {
  font-family: "Noto Serif Georgian", serif;
  color: #937d64;
}

button {
  font-family: "Noto Serif Georgian", serif;
  background-color: #e76b74;
  margin-bottom: 70vh;
  margin-top: 10vh;
}

button:hover {
  background-color: #ea526f;
  cursor: pointer;
}
</style>
