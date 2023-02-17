<template>
  <div class="header">
    <NavComponent />
    <router-view />
  </div>
</template>
<script>
import NavComponent from "@/components/header/NavComponent";
export default {
  name: "app",
  components: {
    NavComponent,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background: #e9f8f9;
}
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #2c3e50;
  }
}
</style>
