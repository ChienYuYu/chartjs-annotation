<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>01</h1>
    <div class="chart_wrap">
      <Chart />
    </div>
  </div>
</template>

<script>
  import Chart from './chart.vue'
  export default {
    components: { Chart }, 
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .chart_wrap{
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    // border: 1px solid #333;
  }
</style>