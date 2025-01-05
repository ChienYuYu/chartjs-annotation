<template>
  <div class="home">
    <div class="item_wrap">
      <router-link to="/s01">01</router-link>
      <router-link to="/s02">02</router-link>
      <router-link to="/s03">03</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style lang="scss">
  .item_wrap{
    // border: 1px solid #333;
    width: 60%;
    height: 30vh;
    margin: 1rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 3rem;

    a{
      display: block;
      color: #fff;
      font-size: 40px;
      text-decoration: none;
      border-radius: 20px;
      width: 30%;
      height: 200px;
      background: rgb(0, 219, 131);
      box-shadow: 0 0 10px rgb(0, 219, 131);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background: rgb(2, 238, 144);
      }
    }
      
  }
</style>
