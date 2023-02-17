<template>
  <div class="nav nav-desktop">
    <nav>
      <router-link to="/" class="link-page">
        <img class="logo-img" src="@/img/logo/logo.png" alt="logo" />
      </router-link>
      <router-link class="link-page" to="/">Home</router-link>
      <router-link class="link-page" to="/about">About</router-link>
      <router-link class="link-page" to="/features">Features</router-link>

      <router-link class="link-page" to="/new"> New </router-link>
      <div class="link-page contact-page-hero">
        <router-link class="contact-page" to="/cantact">Cantact</router-link>
      </div>
      <div class="icon-bar">
        <input type="checkbox" id="check" />
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavComponent",
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}

.nav-desktop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  width: 100%;
  position: relative;
  align-items: center;
  transition: 1s;
  z-index: 999;
  align-items: center;
  nav {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 6fr;
    align-items: center;
  }

  .link-page {
    text-decoration: none;
    font-size: 1.1em;
    transition: 1s;
    color: black;
    text-transform: capitalize;
    font-weight: 400;
  }
  .contact-page-hero {
    display: grid;
    grid-template-columns: 3fr;
    justify-items: right;
    .contact-page {
      color: white;
      padding: 10px 30px;
      text-decoration: none;
      /*box-shadow: rgb(0 0 0 / 8%) 0px 2.4rem 4.8rem; */
      font-weight: 500;
      background-color: #181823;
    }
  }
}
//icon bar
#check {
  display: none;
}
@media (max-width: 1050px) {
  @mixin icon-bar-style {
    width: 40px;
    background: white;
    height: 5px;
    cursor: pointer;
  }
  .icon-bar {
    @include icon-bar-style();
    position: absolute;
    right: 50px;
    top: 35px;
  }
  .icon-bar::before {
    content: "";
    @include icon-bar-style();
    display: inline-block;
  }
  .icon-bar::after {
    content: "";
    @include icon-bar-style();
    display: inline-block;
    position: relative;
    top: -10px;
  }
  .link-page {
    display: none;
  }
  #check {
    position: absolute;
    left: 0px;
    height: 35px;
    width: 40px;
    cursor: pointer;
    display: inline-block;
  }
  .nav-desktop:checked > * {
    display: block;
  }
}
</style>
