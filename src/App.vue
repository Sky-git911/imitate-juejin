<script setup></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/style/reset.css";
html,
body {
  height: 100%;
  // width: 100%;
  font-size: 12px;
  color: #333;
  background-color: #f4f5f5;
}
// html {
//   overflow: auto;
// }
// ::-webkit-scrollbar {
//   display: none;
// }
a {
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style: none;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
