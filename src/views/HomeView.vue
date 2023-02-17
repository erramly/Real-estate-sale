<template>
  <div class="home">
    <div class="cantante">
      <div class="hero-section">
        <!--=============/////////////======================================================-->
        <div>
          <h1 class="h1-main">
            find real estate
            <br />
            that suits you
          </h1>
          <p class="pgh-main">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Quas natus, error dolo.
          </p>
          <a href="#" class="login">Git Starded</a>
        </div>
        <!--=============/////////////======================================================-->

        <!--=============///////////======================================================-->

        <div class="hero-img">
          <!--=============experience======================================================-->
          <div class="card-img-bg">
            <img src="../img/img-bg/bghome.png" alt="" />
          </div>
          <div class="experience-all">
            <div class="experience">
              <span class="num-exp" data-goel="250">190</span
              ><span><font-awesome-icon icon="fa-solid fa-plus" /></span>
              <p>Happy Customer</p>
            </div>
            <div class="experience">
              <span class="num-exp" data-goel="120">140</span
              ><span><font-awesome-icon icon="fa-solid fa-plus" /></span>
              <p>project sell</p>
            </div>
            <div class="experience">
              <span class="num-exp" data-goel="160">170</span
              ><span><font-awesome-icon icon="fa-solid fa-plus" /></span>
              <p>Property For Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BoxSearch />
    <div class="hero-main-text">
      <div class="popular-div">
        <p class="popular-text">popular</p>
      </div>
      <div class="hero-two-text">
        <div class="main-text">our popular residence</div>
        <div class="small-text">
          explore all<font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </div>
      </div>
    </div>
    <div class="items">
      <itemComponent
        v-for="post in posts"
        :key="post.id"
        :price="post.item_price"
        :location_item="post.item_location"
        :size="post.item_size"
        :rooms="post.item_rooms"
        :green_item="post.item_green_areas"
        :image="post.item_image"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BoxSearch from "@/components/box_search/BoxSearch.vue";
import itemComponent from "@/components/item/itemComponent.vue";
import jsonData from "../json/data.json";

export default {
  data: function () {
    return {
      posts: jsonData,
    };
  },
  name: "HomeView",
  components: {
    BoxSearch,
    itemComponent,
  },
};
</script>
<style scoped lang="scss">
* {
  z-index: 3;
}
.home {
  height: 4000px;
}
:root {
  --bg-color-bc: white;
  --bg-color-wt: white;
  --font-color-wt: white;
}
.hero-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}
.hero-img {
  display: grid;
}
.cantante {
  text-align: left;
  padding: 0px 15%;
}
.h1-main {
  font-size: 4.4rem;
  font-weight: 500;
  text-transform: capitalize;
}
.pgh-main {
  margin-top: 20px;
  margin-left: 5px;
}

.login {
  background-color: #181823;
  color: white;
  padding: 10px 30px;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  font-weight: 500;
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin-inline: auto;
  gap: 15px;
}
/*style experience*/
.experience-all {
  display: flex;
  justify-content: center;
  .experience {
    margin-top: 4em;
    margin-right: 4em;
    color: #333;
    text-align: center;
  }

  .num-exp {
    font-size: 2em;
    font-weight: 500;
  }

  .fa-plus {
    color: #333;
    font-size: 1.5em;
  }
}

.card-img-bg {
  width: 80%;
  img {
    width: 100%;
  }
}
.hero-main-text {
  padding: 0 10%;
  margin-bottom: 100px;
  .popular-div {
    text-align: left;
    font-size: 1.4rem;
    text-transform: uppercase;
    .popular-text {
      position: relative;
      margin-left: 60px;
      &::after {
        content: "";
        width: 50px;
        height: 2px;
        background: black;
        position: absolute;
        left: -60px;
        top: 50%;
      }
    }
  }
  .hero-two-text {
    display: flex;
    justify-content: space-between;
  }
  .hero-two-text[data-v-9ea40744] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main-text {
      font-size: 3rem;
    }
    .small-text {
      font-size: 1.5rem;
    }
  }
}
</style>
