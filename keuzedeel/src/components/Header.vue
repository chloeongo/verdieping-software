<template>
  <header>
    <img
      @click="rotateImage"
      :style="{ transform: `rotate(${rotationAngle}deg)` }"
      src="/src/assests/header.png"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      rotationAngle: 0,
    };
  },
  methods: {
    rotateImage() {
      this.rotationAngle += 160;
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 65px;
}
img {
  height: 70px;
  margin-left: 10px;
  margin-top: 10px;
  transition: transform 1s ease-in-out;
}
img:hover {
  cursor: pointer;
}
</style>
