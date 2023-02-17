<template>
  <div class="item">
    <div class="imageItem">
      <img :src="image" alt="photo" />
    </div>
    <div class="InfoItem">
      <!--location-->
      <div class="LoctionIcon">
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        <span>{{ location_item }}</span>
      </div>
      <div class="icon-info-item">
        <div class="icon-pgh">
          <font-awesome-icon icon="fa-solid fa-maximize" />
          <p><span></span>{{ size }}m</p>
        </div>
        <div class="icon-pgh">
          <font-awesome-icon icon="fa-solid fa-bed" />
          <p>{{ rooms }} rooms</p>
        </div>
        <div class="icon-pgh">
          <font-awesome-icon icon="fa-solid fa-tree" />
          <p>{{ green_item }} green areas</p>
        </div>
      </div>
    </div>
    <div class="see-item">
      <button id="btn-see-item">book now</button>
      <span class="price"><span>$</span>{{ price }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemComponent",
  props: ["price", "location_item", "size", "rooms", "green_item", "image"],
};
</script>
<style lang="scss" scoped>
.item {
  width: 450px;
  height: 500px;
  margin: 20px;
  background-color: white;
  /* border: solid 1px #ccc; */
  box-shadow: rgb(0 0 0 / 8%) 0px 2.4rem 4.8rem;
  margin: auto;
}

.item .imageItem {
  width: 100%;
  height: 300px;
  object-fit: cover;
  img {
    background-size: cover;
    width: 100%;
    height: 100%;
  }
}

.InfoItem {
  padding: 10px 20px 0px 20px;
}
.LoctionIcon {
  text-align: left;
}
.LoctionIcon .fa-location-dot {
  font-size: 1.4em;
  color: grey;
}

.LoctionIcon span {
  color: grey;
}

.icon-info-item {
  display: flex;
  margin: auto;
  margin-top: 20px;
  align-items: baseline;
}

.icon-pgh {
  margin: 0 auto 0 0;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  color: #3c4048;
}

svg.svg-inline--fa {
  margin-right: 8px;
  font-size: 1.2em;
  margin: auto 5px;
}

.best-item {
  margin: 100px auto;
  padding: 100px;
}

.see-item {
  height: auto;
  padding: 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.see-item #btn-see-item {
  padding: 15px 40px;
  background: black;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
}

.see-item .price {
  font-size: 1.8em;
  font-weight: 500;
}

.element.style {
  width: 80%;
  margin: 300px auto 0 auto;
}
</style>
