<template>
  <div class="search-box">
    <span class="pgh-search">search the price you looking for</span>
    <div class="search-input-all">
      <form action="" method="post" id="perant-input">
        <div class="inp-icon">
          <input type="text" list="city" name="" placeholder="Location" />
          <datalist id="city">
            <option>nador</option>
            <option>wajda</option>
            <option>rabat</option>
          </datalist>
          <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
        </div>
        <div class="inp-icon">
          <input type="text" name="" list="type" placeholder="Type" /><span
            ><font-awesome-icon icon="fa-solid fa-house"
          /></span>
          <datalist id="type">
            <option>Sale shops</option>
            <option>house</option>
            <option>Land</option>
          </datalist>
        </div>
        <div class="inp-icon">
          <input type="text" name="" placeholder="Budget" /><span
            ><font-awesome-icon icon="fa-solid fa-dollar-sign"
          /></span>
        </div>
        <div class="inp-icon div-btn-submit">
          <button type="submit" id="btn-submit">search now</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxSearch",
};
</script>
<style lang="scss" scoped>
.search-box {
  width: 80%;
  background-color: white;
  margin: 100px auto;
  padding: 30px 20px;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
  .pgh-search {
    font-size: 1.8em;
    width: 100%;
    display: inline-block;
    text-align: left;
  }
}

.inp-icon i {
  font-size: 1.2em;
}

.search-box input {
  width: 90%;
  height: 100%;
  font-size: 1em;
  padding-left: 5px;
  border: none;
  background-color: #fbfbfb;
  outline: none;
  text-transform: none;
}

.inp-icon {
  display: inline-block;
  background-color: #fbfbfb;
  height: 50px;
  width: 350px;
  margin: 10px auto;
  border: #f0f0f0 solid 1px;
}

.search-box input:focus {
  border: none;
}

#btn-submit {
  width: 100%;
  padding: auto;
  border: none;
  background: black;
  color: white;
  height: 100%;
  margin: auto;
  font-size: 1em;
  cursor: pointer;
  text-transform: capitalize;
}

.div-btn-submit {
  width: 350px;
  background-color: black;
  height: 48px;
}

#perant-input {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
