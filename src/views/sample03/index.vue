<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>03</h1>
    <button @click="refreshChartHandler()">刷新</button>
    <button @click="showChartHandler()">顯示/關閉</button>
    <button @click="getTestData()">call api</button>
    <button @click="xlableHandler()">更新x軸</button>
    <div class="chart_wrap" v-if="showChart">
      <Chart :apiData="apiData"  :xlabels="xlabels" ref="chart"/>
    </div>
  </div>
</template>

<script>
  import Chart from './chart.vue';
  import axios from 'axios';
  // http://localhost:3000/testData
  export default {
    components: { Chart }, 
    created() {
      this.xlableHandler();
    },
    mounted() {
      this.getTestData();
    },
    data() {
      return {
        showChart: true,
        apiData: [],
        xlabels: [],
      }
    },
    methods:{
      async getTestData() {
        const url = "http://localhost:3000/testData";
        const res = await axios.post(url, {})
        console.log('父層call api=>', res);
        this.apiData = await res.data.dataList;
        
        this.$refs.chart.getFatherData();
        this.showChart = false;
        setTimeout(() => {
          this.showChart = true;
        },10)
      },
      showChartHandler() {
        this.showChart = !this.showChart;
      },
      refreshChartHandler() {
        this.$refs.chart.reRender();
      },

      // xlableHandler() {
      //   this.xlabels = [];
      //   for(let i = 0; i<481; i++) {
      //     this.xlabels.push(i);
      //   }
      // },
      xlableHandler() { // 隨機481個字元(長度2)
        this.xlabels = []; 
        for (let i = 0; i < 481; i++) { 
          const randomString = Math.random().toString(36).substring(2, 4); 
          this.xlabels.push(randomString); 
        } 
      },
    },
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